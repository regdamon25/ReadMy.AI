"use client";
import React, { useState } from "react";
import { validationSchema } from "../../../utils/validations"
import { Formik, Form, Field} from "formik";
// import { toFormikValidationSchema } from "zod-formik-adapter";


import { ToastContainer, toast } from "react-toastify";
import Confetti from "react-confetti";

type FormValues = {
  email: string;
  message?: string;
};

const HeroForm = () => {
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
      // Log the submitted values
    console.log(`Form submitted with values: ${JSON.stringify(values)}`);

      // Send email using Nodemailer
      await fetch("https://readmyaiemailsender.azurewebsites.net", {
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
        initialValues={{ email: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
        <Form data-netlify="true" className="flex w-full md:justify-start justify-center items-end">
          <div className="relative mr-4 md:w-full lg:w-full xl:w-1/2 w-2/4">
            <Field
              type="email"
              placeholder="Email address"
              id="email"
              name="email"
              
              className="w-full bg-white-100 rounded border bg-opacity-50 border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:bg-transparent focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          {errors.email && touched.email ? <div className="text-red-500">{errors.email}</div> : null}
          </div>
         
          <button
            disabled={isLoading}
            className={`inline-flex text-white bg-indigo-900 border-0 py-2 px-6 focus:outline-none hover:bg-violet-700 rounded text-lg ${
                errors.email && touched.email ? "mb-6" : ""}`}
          >
            Join Waitlist
          </button>
          
        </Form>
        )}
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

export default HeroForm;
