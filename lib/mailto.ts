// Email utility for caregiver applications.
// Opens the applicant's email client pre-addressed to the Moshi Home Care inbox
// so they can review the application and attach their CV before sending.

export const OFFICE_EMAIL = 'info@moshihomecare.org';

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
