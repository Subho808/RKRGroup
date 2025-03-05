import { useRef, useState } from "react";
import "../index.css";
import emailjs from "@emailjs/browser";

export default function MessageUs() {
  const form = useRef();
  const [Loading, setLoading] = useState(false);
  const [Submitted, setSubmitted] = useState(false);

  const sendEmail = (e) => {
    setLoading(true);
    e.preventDefault();

    emailjs
      .sendForm("service_1p07vce", "template_8ve9e0k", form.current, {
        publicKey: "6LhUCRzyU9w07n9Ir",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setLoading(false);
          setSubmitted(true);

          // Wait for 10 seconds before resetting the form and states
          setTimeout(() => {
            form.current.reset(); // Reset form fields
            setSubmitted(false);
            setLoading(false);
          }, 3000);
        },
        (error) => {
          console.log("FAILED...", error.text);
          setLoading(false);
        }
      );
  };

  return (
    <div className="flex flex-col justify-center items-center w-screen bg-gradient-to-b from-white via-[#d5e4ea] to-zinc-100 py-10">
      <div className="flex flex-col gap-4 mt-28 items-center">
        <h1 className="tracking-tighter font-bold text-xs lg:text-sm text-zinc-800">
          CONTACT US
        </h1>

        <div className="text-center py-8 text-[#86aebf] tracking-tighter">
          <h1 className="text-[30px] lg:text-8xl font-black">Get in Touch</h1>
          <h2 className="font-bold text-zinc-600 pt-4">
            We'd love to hear from you! Fill out the form below.
          </h2>
        </div>

        <div className="flex flex-col items-center w-full max-w-lg bg-white p-8 rounded-3xl shadow-lg">
          <form
            className="w-full flex flex-col gap-4"
            method="post"
            ref={form}
            onSubmit={sendEmail}
          >
            <input
              type="text"
              name="from_name"
              placeholder="Your Name"
              className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#86aebf]"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              name="from_email"
              className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#86aebf]"
              required
            />
            <textarea
              placeholder="Your Message"
              name="message"
              rows="4"
              className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#86aebf]"
              required
            ></textarea>

            <button
              type="submit"
              disabled={Loading || Submitted}
              className={`mt-4 bg-[#86aebf] text-white py-3 px-6 rounded-md flex items-center justify-center gap-2 transition-all duration-300 ${
                Loading || Submitted
                  ? "opacity-50 cursor-not-allowed text-black"
                  : "hover:bg-[#6d97a8]"
              }`}
            >
              {Loading ? (
                <>
                  <svg
                    aria-hidden="true"
                    className={`w-6 h-6 animate-spin font-semibold ${
                      Loading ? "fill-black" : "fill-white"
                    }`}
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="currentColor"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentFill"
                    />
                  </svg>
                  <span className="font-semibold">Loading...</span>
                </>
              ) : Submitted ? (
                <>
                  <svg
                    className="h-8 w-8 text-white font-semibold"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <path d="M7 12l5 5l10 -10" />
                    <path d="M2 12l5 5m5 -5l5 -5" />
                  </svg>
                  <span className="font-semibold">Submitted</span>
                </>
              ) : (
    <>
      <svg
        className={`h-6 w-6 font-semibold ${
          Loading || Submitted ? "text-black" : "text-white"
        }`}
        width="24"
        height="24"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" />
        <path d="M21 3L14.5 21a.55 .55 0 0 1 -1 0L10 14L3 10.5a.55 .55 0 0 1 0 -1L21 3" />
      </svg>
      <span className="font-semibold">Send Message</span>
    </>
  )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
