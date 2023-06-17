import nodemailer from "nodemailer";
import SMTPTransport from "nodemailer-smtp-transport";

// export const smtpEmail = process.env.GOOGLE_EMAIL;
// export const smtpPassword = process.env.GOOGLE_PASSWORD;

// export const transporter = nodemailer.createTransport(
//     SMTPTransport({
//         service: "gmail",
//         auth: {
//             user:smtpEmail,
//             pass: smtpPassword,
//         },
//     })
// );

export const smtpEmail = process.env.MICROSOFT_EMAIL;
export const smtpPassword = process.env.MICROSOFT_PASSWORD;

export const transporter = nodemailer.createTransport(
    SMTPTransport({
        service: "Outlook365",
        host: 'smtp.office365.com',
        port: 587,
        tls: {
            ciphers:'SSLv3'
        },
        auth: {
            user:smtpEmail,
            pass: smtpPassword,
        }
    })
);