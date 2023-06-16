import React from "react";


import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Tailwind,
  Text,
} from "@react-email/components";

interface WaitlistEmailProps {
  email: string;
  incentives: string[];
}

export const WaitlistEmail: React.FC<Readonly<WaitlistEmailProps>> = ({
  email,
  incentives,
}) => {
 
  return (
    <Html>
      <Head />
      <Tailwind>
        <Body className="mx-auto my-auto bg-white font-sans">
          <Container className="mx-auto my-[40px] w-[465px] rounded border border-solid border-[#eaeaea] p-[20px]">
            <Heading className="mx-0 my-[30px] p-0 text-center text-[24px] font-normal text-black">
              Congratulations, you are on the waitlist!
            </Heading>
            <Text className="text-[14px] leading-[24px] text-black">
              Hello {email},
            </Text>
            <Text className="text-[14px] leading-[24px] text-black">
              Thank you for joining the waitlist for ReadMy.AI. You are one step closer to experiencing a whole new way of learning.
            </Text>
            <Text className="text-[14px] leading-[24px] text-black">
              As a valued member of our community, we want to reward you for spreading the word about ReadMy.AI. By referring your friends and successfully sharing the app on your social media platforms, you can earn exciting benefits:
            </Text>
            <ul className="list-disc ml-8 text-[14px] leading-[24px] text-black">
              {incentives.map((incentive, index) => (
                <li key={index}>{incentive}</li>
              ))}
            </ul>
            <Text className="text-[14px] leading-[24px] text-black">
              The more referrals you make, the higher you move up the waitlist. You will have the opportunity to gain early access to the app and enjoy discounts on premium features or future subscriptions.
            </Text>
            <Text className="text-[14px] leading-[24px] text-black">
              Stay tuned for updates and exciting news from our team. We cannot wait to have you on board!
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default WaitlistEmail;
