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

interface EmailProps {
  email: string;
  message?: string;
}

export const Email: React.FC<Readonly<EmailProps>> = ({
  email,
  message,
}) => {
  const defaultMessage = "They would like to join the waitlist!";
  return (
    <Html>
      <Head />
      <Tailwind>
        <Body className="mx-auto my-auto bg-white font-sans">
          <Container className="mx-auto my-[40px] w-[465px] rounded border border-solid border-[#eaeaea] p-[20px]">
            <Heading className="mx-0 my-[30px] p-0 text-center text-[24px] font-normal text-black">
              You got a message!
            </Heading>
            <Text className="text-[14px] leading-[24px] text-black">
              Hello Reggie,
            </Text>
            <Text className="text-[14px] leading-[24px] text-black">
              You got an email from <strong>{email}</strong>. {message ? (
                <>
                  {" "}
                  Here are their book/s that they are wanting to see added:
                  <br />
                  {message}
                </>
              ) : (
                ` ${defaultMessage}`
              )} </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default Email;
