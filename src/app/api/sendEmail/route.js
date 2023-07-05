import { NextResponse } from 'next/server';

const nodemailer = require('nodemailer');

export async function POST(req) {
    const body = await req.json();
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
            user: 'netflixwala77@gmail.com',
            pass: 'gbafelwcjdnrfupm',
        },
    });
    const sendEmail = (mailOptions) => {
        return new Promise((resolve, reject) => {
            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    console.error('Error sending email:', error);
                    reject({ message: "Email not sent", error });
                } else {
                    console.log('Email sent:', info.response);
                    resolve({ message: 'Email sent successfully', info: info.response });
                }
            });
        });
    };
    const mailOptions = {
        from: 'netflixwala77@gmail.com',
        to: body.email,
        subject: 'Thank You for Your Request',
        text: `Dear ${body.name},\n\nThank you for your callback request. We will get back to you soon.\n\nRegards,\nA G Organics`,
    };
    const yourMailOptions = {
        from: 'netflixwala77@gmail.com',
        to: 'netflixwala77@gmail.com', // Replace with your Gmail account email
        subject: `New Callback Request from ${body.name} `,
        text: `Hii Sahana You got new Call Back request from ${body.name}\nContact Number: ${body.phoneNumber}\nEmail: ${body.email}`,
    };


    try {
        const response = await sendEmail(mailOptions);
        const sendrequest = await sendEmail(yourMailOptions)
        return NextResponse.json({ response, sendrequest }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error }, { status: 500 });
    }
}