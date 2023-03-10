export const getEmailMessage = ({
  from,
  subject,
  date,
  textBody,
  attachments,
}) =>
  `š¤ From: *${from}*\nšŖ§ Subject: *${subject}*\nš Date: *${date}*\n\nš Attachments: ${
    !attachments.length
      ? "*no attachments*"
      : attachments
          .map((attachment) => `\n\t\t*${attachment.filename}*`)
          .join("")
  }\n\n*${textBody}*`;
