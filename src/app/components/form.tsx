"use client";
import React, { useState } from "react";
import { validationWithMessageSchema } from "../../utils/validations";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { toFormikValidationSchema } from "zod-formik-adapter";

import { ToastContainer, toast } from "react-toastify";
import Confetti from "react-confetti";

type FormValues = {
  name?: string;
  email: string;
  message: string;
};

const ContactForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  const handleSubmit = async (
    values: FormValues,
    {
      setSubmitting,
      resetForm,
    }: {
      setSubmitting: (isSubmitting: boolean) => void;
      resetForm: () => void;
    }
  ) => {
    try {
      setIsLoading(true);
      // Send email using Nodemailer
      await fetch("https://readmyai.azurewebsites.net/api/SignupEmailNotification", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      // Reset the form
      resetForm();

      // Show success message or redirect to a thank you page
      console.log("Email sent successfully!");
    } catch (error) {
      // Handle error
      console.error("Failed to send email:", error);
    } finally {
      setSubmitting(false);
      toast.success("Form submitted successfully!");
      setShowConfetti(true);
      setIsLoading(false);
    }
  };
  return (
    <>
      <Formik
        initialValues={{ email: "", message: "" }}
        validationSchema={toFormikValidationSchema(validationWithMessageSchema)}
        onSubmit={handleSubmit}
      >
        <Form data-netlify="true">
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-full ">
                <div className="relative">
                  <Field
                    type="email"
                    placeholder="Email address"
                    id="email"
                    name="email"
                    className="w-full shadow-sm bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-700 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label className="leading-7 text-sm text-gray-600">
                    What book/s you would like to see added?
                  </label>
                  <Field
                    id="message"
                    name="message"
                    placeholder="Title or ISBN #"
                    as="textarea"
                    className="w-full shadow-sm bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></Field>
                  <ErrorMessage
                    name="message"
                    component="div"
                    className="text-red-500"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <button
                  disabled={isLoading}
                  className="flex mx-auto text-white bg-indigo-900 border-0 py-2 px-8 focus:outline-none hover:bg-violet-700 rounded text-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-violet-700 duration-300">
                  Send our way!
                </button>
              </div>
            </div>
          </div>
        </Form>
      </Formik>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      {showConfetti && (
        <Confetti
          width={window.innerWidth}
          height={window.innerHeight}
          recycle={false}
        />
      )}
    </>
  );
};

export default ContactForm;
