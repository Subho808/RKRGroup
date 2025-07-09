import { useRef, useState } from "react";
import "../index.css";
import emailjs from "@emailjs/browser";

export default function Career() {
  const form = useRef();
  const [Loading, setLoading] = useState(false);
  const [Submitted, setSubmitted] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const result = await emailjs.sendForm(
        "service_1p07vce", // ✅ Replace with your actual EmailJS service ID
        "template_b4fo7ya", // ✅ Replace with your actual template ID
        form.current,
        {
          publicKey: "6LhUCRzyU9w07n9Ir", // ✅ Replace with your actual public key
        }
      );

      console.log("✅ Email sent:", result.text);
      setSubmitted(true);
      setLoading(false);

      setTimeout(() => {
        if (form.current) form.current.reset();
        setSubmitted(false);
      }, 3000);
    } catch (error) {
      console.error("❌ Email send failed:", error.text || error.message);
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center w-screen bg-gradient-to-b from-white via-[#d5e4ea] to-zinc-100 py-10 px-4">
      <div className="flex flex-col gap-4 mt-28 items-center w-full max-w-3xl">
        <h1 className="tracking-tighter font-bold text-xs lg:text-sm text-zinc-800">
          Career
        </h1>

        <div className="text-center py-8 text-[#86aebf] tracking-tighter">
          <h1 className="text-[20px] lg:text-4xl font-black">
            Career Application Form
          </h1>
          <h2 className="font-bold text-zinc-600 pt-4">
            We’re thrilled you're considering joining us! Please provide your details below.
          </h2>
        </div>

        <div className="flex flex-col items-center bg-white p-6 sm:p-8 rounded-3xl shadow-lg w-full max-w-3xl mx-auto">
          <form
            className="w-full flex flex-col gap-4"
            method="post"
            ref={form}
            onSubmit={sendEmail}
          >
            <input type="hidden" name="form_type" value="Career" />
            <input type="hidden" name="career_form" value="true" />

            {/* Name Fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name"
                name="first_name"
                required
                className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#86aebf]"
              />
              <input
                type="text"
                placeholder="Last Name"
                name="last_name"
                required
                className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#86aebf]"
              />
            </div>

            <input
              type="text"
              name="designation_applied"
              required
              placeholder="Designation Applied For"
              className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#86aebf]"
            />

            <input
              type="text"
              placeholder="Your Current Designation"
              name="current_designation"
              required
              className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#86aebf]"
            />

            <input
              type="number"
              placeholder="Current CTC (e.g. 600000)"
              name="current_ctc"
              required
              className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#86aebf]"
            />

            <input
              type="number"
              placeholder="Expected CTC (e.g. 700000)"
              name="expected_ctc"
              required
              className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#86aebf]"
            />

            <select
              name="notice_period"
              required
              className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#86aebf]"
            >
              <option value="">Notice Period</option>
              <option value="Immediate">Immediate</option>
              <option value="15 Days">15 Days</option>
              <option value="1 Month">1 Month</option>
              <option value="2 Months">2 Months</option>
            </select>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Street Address"
                name="street_address"
                required
                className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#86aebf]"
              />
              <input
                type="text"
                placeholder="Postal / Zip Code"
                name="zip_code"
                required
                className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#86aebf]"
              />
            </div>

            <select
              name="state"
              required
              className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#86aebf]"
            >
              <option value="">Select Your State</option>
              <option value="Andhra Pradesh">Andhra Pradesh</option>
              <option value="Arunachal Pradesh">Arunachal Pradesh</option>
              <option value="Assam">Assam</option>
              <option value="Bihar">Bihar</option>
              <option value="Chhattisgarh">Chhattisgarh</option>
              <option value="Goa">Goa</option>
              <option value="Gujarat">Gujarat</option>
              <option value="Haryana">Haryana</option>
              <option value="Himachal Pradesh">Himachal Pradesh</option>
              <option value="Jharkhand">Jharkhand</option>
              <option value="Karnataka">Karnataka</option>
              <option value="Kerala">Kerala</option>
              <option value="Madhya Pradesh">Madhya Pradesh</option>
              <option value="Maharashtra">Maharashtra</option>
              <option value="Manipur">Manipur</option>
              <option value="Meghalaya">Meghalaya</option>
              <option value="Mizoram">Mizoram</option>
              <option value="Nagaland">Nagaland</option>
              <option value="Odisha">Odisha</option>
              <option value="Punjab">Punjab</option>
              <option value="Rajasthan">Rajasthan</option>
              <option value="Sikkim">Sikkim</option>
              <option value="Tamil Nadu">Tamil Nadu</option>
              <option value="Telangana">Telangana</option>
              <option value="Tripura">Tripura</option>
              <option value="Uttar Pradesh">Uttar Pradesh</option>
              <option value="Uttarakhand">Uttarakhand</option>
              <option value="West Bengal">West Bengal</option>
              <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
              <option value="Chandigarh">Chandigarh</option>
              <option value="Dadra and Nagar Haveli and Daman and Diu">Dadra and Nagar Haveli and Daman and Diu</option>
              <option value="Delhi">Delhi</option>
              <option value="Jammu and Kashmir">Jammu and Kashmir</option>
              <option value="Ladakh">Ladakh</option>
              <option value="Lakshadweep">Lakshadweep</option>
              <option value="Puducherry">Puducherry</option>
            </select>

            <input
              type="text"
              name="city"
              required
              placeholder="Enter Your City"
              className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#86aebf]"
            />

            {/* Resume Note */}
            <p className="text-sm text-gray-600">
              <span className="font-semibold">Note:</span> If you want to send your resume, please email it to{" "}
              <a
                href="mailto:visiongreenrkr@gmail.com"
                className="text-blue-600 underline hover:text-blue-800"
              >
                visiongreenrkr@gmail.com
              </a>
            </p>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={Loading || Submitted}
              className={`mt-4 bg-[#86aebf] text-white py-3 px-6 rounded-md flex items-center justify-center gap-2 transition-all duration-300 ${
                Loading || Submitted ? "opacity-50 cursor-not-allowed text-black" : "hover:bg-[#6d97a8]"
              }`}
            >
              {Loading ? (
                <>
                  <svg className="w-6 h-6 animate-spin fill-black" viewBox="0 0 100 101" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.6C100 78.2 77.6 100.6 50 100.6C22.4 100.6 0 78.2 0 50.6C0 23 22.4 0.6 50 0.6C77.6 0.6 100 23 100 50.6Z" fill="currentColor"/>
                    <path d="M93.9686 39.0409C96.393 38.4038..." fill="currentFill"/>
                  </svg>
                  <span className="font-semibold">Loading...</span>
                </>
              ) : Submitted ? (
                <>
                  <svg className="h-8 w-8 text-white font-semibold" viewBox="0 0 24 24" fill="none">
                    <path d="M7 12l5 5l10 -10" />
                    <path d="M2 12l5 5m5 -5l5 -5" />
                  </svg>
                  <span className="font-semibold">Submitted</span>
                </>
              ) : (
                <>
                  <svg className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none">
                    <path d="M21 3L14.5 21a.55 .55 0 0 1 -1 0L10 14L3 10.5a.55 .55 0 0 1 0 -1L21 3" />
                  </svg>
                  <span className="font-semibold">Submit</span>
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
