import { NextRequest, NextResponse } from "next/server";
import { render } from "@react-email/components"
import { transporter, smtpEmail } from "../../../utils/nodemailer";
import { Email } from "../../components/email";
import { WaitlistEmail } from "@/app/components/waitlistEmail"
import { incentives } from "@/app/models/incentives";

export async function POST(req: NextRequest, res: NextResponse) {
    const body = await req.json();
    const { email, message } = body;

    const emailHtml = render(
        <Email email={email} message={message} />
    )

    const waitlistEmailHtml = render(
        <WaitlistEmail email={email} incentives={incentives} />
    )

    const options = {
        from: smtpEmail,
        to: smtpEmail,
        subject: "New Form Submission",
        html: emailHtml,
    };

    const sendWaitListEmail = {
        from: smtpEmail,
        to:email,
        subject: "Thank You for Joining the ReadMy.AI Waitlist! Discover Your Exclusive Benefits!",
        html: waitlistEmailHtml,
    };

    try {
        //Send Email using transporter
        transporter.sendMail(options);
        transporter.sendMail(sendWaitListEmail);
    } catch (error){
        console.error("Failed to send email:", error);
    }
    return new Response("OK");
}