// Email utility for client care requests and caregiver applications.
// Opens the visitor's email client pre-addressed to the Moshi Home Care inbox.

export const OFFICE_EMAIL = 'info@moshihomecare.com';

interface ClientRequestData {
  name: string;
  phone: string;
  location: string;
  serviceType: string;
  duration: string;
  notes?: string;
}

/**
 * Generate a mailto link that sends a client care request to the office inbox.
 * The visitor's email client opens as the sender with the request pre-filled.
 */
export function generateCareRequestMailto(data: ClientRequestData, recipientEmail: string = OFFICE_EMAIL): string {
  const subject = encodeURIComponent(`New Care Request - ${data.name}`);
  let body = `New Care Request - Moshi Home Care\n\n` +
    `Name: ${data.name}\n` +
    `Phone: ${data.phone}\n` +
    `Location: ${data.location}\n` +
    `Service Needed: ${data.serviceType}\n` +
    `Duration: ${data.duration}\n`;

  if (data.notes) {
    body += `Additional Notes: ${data.notes}\n`;
  }

  return `mailto:${recipientEmail}?subject=${subject}&body=${encodeURIComponent(body)}`;
}

/**
 * Generate a mailto link that sends the full caregiver application to the office inbox.
 * The applicant's email client opens as the sender, so they can attach their CV before sending.
 */
export function generateApplicationMailto(data: {
  name: string;
  email: string;
  phone: string;
  experience: string;
  services: string;
  cvFileName?: string | null;
  recipientEmail: string;
}): string {
  const subject = encodeURIComponent(`New Caregiver Application - ${data.name}`);
  const cvNote = data.cvFileName
    ? `CV/Resume: Please attach "${data.cvFileName}" to this email before sending.`
    : `CV/Resume: Please attach your CV to this email before sending.`;
  const body = encodeURIComponent(
    `New Caregiver Application - Moshi Home Care\n\n` +
    `Name: ${data.name}\n` +
    `Phone: ${data.phone}\n` +
    `Email: ${data.email}\n` +
    `Experience: ${data.experience} years\n` +
    `Services: ${data.services}\n\n` +
    cvNote
  );

  return `mailto:${data.recipientEmail}?subject=${subject}&body=${body}`;
}
