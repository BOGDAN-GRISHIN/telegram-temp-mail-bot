export const getEmailStatus = (email, time) =>
  `π« Your temp-mail is: *${email}*\n\nTemp-mail will expire in *${time}* minute(s). π\n\nNew messages will appear below. π½`;

export const getExpiredEmailStatus = (email) =>
  `π« Temp-mail *${email}* is expired. βοΈ\n\nπTo generate new temp-mail press button below.`;

export const tempMailDenied = `β You can't generate temp-mail because you already have one`;
