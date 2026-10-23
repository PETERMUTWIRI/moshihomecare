/**
 * Resend Email Integration
 *
 * Sends transactional emails for Moshi Home Care via Resend (https://resend.com).
 *
 * SETUP:
 * 1. Sign up at https://resend.com and create an API key
 * 2. Add `RESEND_API_KEY=re_xxxxxxxx` to .env.local (and to Vercel's
 *    environment variables for production)
 * 3. Verify the moshihomecare.com domain in the Resend dashboard so emails
 *    can be sent from info@moshihomecare.com. Until then, set
 *    RESEND_FROM_EMAIL to a Resend test address (e.g. 'onboarding@resend.dev').
 */

import { Resend } from 'resend';

// Lazy singleton — constructing Resend without an API key throws, so we only
// instantiate it when an email is actually being sent (key checked there too).
let resendClient: Resend | null = null;

function getResend(): Resend {
  if (!resendClient) {
    resendClient = new Resend(process.env.RESEND_API_KEY);
  }
  return resendClient;
}

const OFFICE_EMAIL = 'info@moshihomecare.com';
const OFFICE_PHONE = '+1 (910) 476-6003';
const FROM_EMAIL =
  process.env.RESEND_FROM_EMAIL || 'Moshi Home Care <info@moshihomecare.com>';

// Brand palette (matches globals.css)
const NAVY = '#0F2B32';
const RED = '#F07B1D';
const BLUE = '#14525C';
const GRAY = '#64748B';
const LIGHT = '#F8FAFC';
const BORDER = '#E2E8F0';

export interface CareRequestData {
  name: string;
  email: string;
  phone: string;
  location: string;
  serviceType: string;
  duration: string;
  notes?: string;
}

/**
 * Shared branded email shell — single-column, inline styles for email-client compatibility.
 */
function emailLayout(content: string): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Moshi Home Care</title>
</head>
<body style="margin:0; padding:0; background-color:${LIGHT};">
  <div style="display:none; max-height:0; overflow:hidden;">Moshi Home Care</div>
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:${LIGHT};">
    <tr>
      <td align="center" style="padding:32px 16px;">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px; width:100%; background-color:#ffffff; border:1px solid ${BORDER}; border-radius:12px; overflow:hidden;">
          <!-- Header -->
          <tr>
            <td style="background-color:${NAVY}; padding:28px 32px;">
              <span style="font-family:Arial, Helvetica, sans-serif; font-size:22px; font-weight:bold; color:#ffffff; letter-spacing:0.5px;">Moshi <span style="color:${RED};">Home Care</span></span>
            </td>
          </tr>
          <!-- Body -->
          <tr>
            <td style="padding:32px; font-family:Arial, Helvetica, sans-serif; font-size:15px; line-height:1.6; color:#334155;">
              ${content}
            </td>
          </tr>
          <!-- Footer -->
          <tr>
            <td style="background-color:${LIGHT}; border-top:1px solid ${BORDER}; padding:20px 32px; font-family:Arial, Helvetica, sans-serif; font-size:12px; line-height:1.6; color:${GRAY};">
              <strong style="color:${NAVY};">Moshi Home Care</strong><br>
              145 Brisk Drive, Zebulon, NC 27597<br>
              Phone: <a href="tel:+19104766003" style="color:${BLUE}; text-decoration:none;">${OFFICE_PHONE}</a> &nbsp;|&nbsp;
              Email: <a href="mailto:${OFFICE_EMAIL}" style="color:${BLUE}; text-decoration:none;">${OFFICE_EMAIL}</a><br>
              Serving Nash, Franklin, Johnson, Wake, Durham, Cary and Granville Counties
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

function detailRow(label: string, value: string): string {
  return `<tr>
    <td style="padding:8px 12px; font-family:Arial, Helvetica, sans-serif; font-size:13px; color:${GRAY}; border-bottom:1px solid ${BORDER}; width:160px; vertical-align:top;">${label}</td>
    <td style="padding:8px 12px; font-family:Arial, Helvetica, sans-serif; font-size:13px; color:${NAVY}; border-bottom:1px solid ${BORDER}; font-weight:bold;">${value}</td>
  </tr>`;
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/**
 * Notifies the office inbox about a new care request.
 * Reply-To is set to the requester so coordinators can respond directly.
 */
async function sendOfficeNotification(data: CareRequestData) {
  const detailsTable = `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border:1px solid ${BORDER}; border-radius:8px; border-collapse:collapse; margin:16px 0;">
    ${detailRow('Name', escapeHtml(data.name))}
    ${detailRow('Email', escapeHtml(data.email))}
    ${detailRow('Phone', escapeHtml(data.phone))}
    ${detailRow('Location', escapeHtml(data.location))}
    ${detailRow('Care Needed', escapeHtml(data.serviceType))}
    ${detailRow('Duration', escapeHtml(data.duration))}
    ${data.notes ? detailRow('Notes', escapeHtml(data.notes)) : ''}
  </table>`;

  const { error } = await getResend().emails.send({
    from: FROM_EMAIL,
    to: [OFFICE_EMAIL],
    replyTo: data.email,
    subject: `New Care Request - ${data.name}`,
    html: emailLayout(`
      <h1 style="margin:0 0 16px; font-size:20px; color:${NAVY};">New care request</h1>
      <p style="margin:0 0 8px;">A new care request was submitted on the website:</p>
      ${detailsTable}
      <p style="margin:16px 0 0; color:${GRAY}; font-size:13px;">Reply directly to this email to respond to ${escapeHtml(data.name)} — replies go to their email address.</p>
    `),
  });

  if (error) {
    console.error('Resend error (office notification):', error);
    throw new Error(`Failed to send office notification: ${error.message}`);
  }
}

/**
 * Sends a branded confirmation email to the person who submitted the request.
 */
async function sendRequesterConfirmation(data: CareRequestData) {
  const firstName = escapeHtml(data.name.trim().split(/\s+/)[0]);

  const { error } = await getResend().emails.send({
    from: FROM_EMAIL,
    to: [data.email],
    subject: 'We received your care request - Moshi Home Care',
    html: emailLayout(`
      <h1 style="margin:0 0 16px; font-size:20px; color:${NAVY};">Thank you, ${firstName}!</h1>
      <p style="margin:0 0 16px;">We have received your care request and a member of our care team will contact you <strong>shortly</strong> to discuss your needs. Most requests receive a response within 30 minutes during business hours.</p>
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:${LIGHT}; border:1px solid ${BORDER}; border-radius:8px;">
        <tr>
          <td style="padding:16px 20px;">
            <p style="margin:0 0 8px; font-size:13px; color:${GRAY};">Here is a summary of what you submitted:</p>
            <p style="margin:0; font-size:14px; color:${NAVY};">
              <strong>${escapeHtml(data.serviceType)}</strong> in ${escapeHtml(data.location)}<br>
              Duration: ${escapeHtml(data.duration)}
            </p>
          </td>
        </tr>
      </table>
      <p style="margin:16px 0 0;">If you have any questions in the meantime, call us at <a href="tel:+19104766003" style="color:${BLUE};">${OFFICE_PHONE}</a> or reply to this email.</p>
      <p style="margin:16px 0 0;">With care,<br><strong>The Moshi Home Care Team</strong></p>
    `),
  });

  if (error) {
    console.error('Resend error (requester confirmation):', error);
    throw new Error(`Failed to send confirmation email: ${error.message}`);
  }
}

/**
 * Handles a full care-request submission: notifies the office and confirms to the requester.
 * Throws if either email fails.
 */
export async function sendCareRequestEmails(data: CareRequestData): Promise<void> {
  if (!process.env.RESEND_API_KEY) {
    console.error('RESEND_API_KEY is not configured. Add it to .env.local (and Vercel env vars).');
    throw new Error('Email service is not configured');
  }

  await sendOfficeNotification(data);
  await sendRequesterConfirmation(data);
}
