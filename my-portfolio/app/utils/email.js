import nodemailer from 'nodemailer';

export async function createTransporter() {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASSWORD,
        }
    })

    return transporter;
}

export async function sendMail({to, subject, html, text}) {
    const transporter = await createTransporter();

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to,
        subject,
        text,
        html,
    };

    return transporter.sendMail(mailOptions);
}