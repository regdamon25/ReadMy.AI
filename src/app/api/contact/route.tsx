import { NextRequest, NextResponse } from "next/server";
import { render } from "@react-email/components"
import { transporter, smtpEmail } from "../../../utils/nodemailer";
import { Email } from "../../components/email";

export async function POST(req: NextRequest, res: NextResponse) {
    const body = await req.json();
    const { email, message } = body;

    const emailHtml = render(
        <Email email={email} message={message} />
    )

    const options = {
        from: smtpEmail,
        to: smtpEmail,
        subject: "New Form Submission",
        html: emailHtml,
    };

    try {
        //Send Email using transporter
        transporter.sendMail(options);
    } catch (error){
        console.error("Failed to send email:", error);
    }
    return new Response("OK");
}