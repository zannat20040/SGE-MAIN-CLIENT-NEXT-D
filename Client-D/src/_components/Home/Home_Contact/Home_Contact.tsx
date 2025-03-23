"use client";

import Link from "next/link";
import axios from "axios";
import { useEffect, useState } from "react";
import "./Home_Contact.css";
import Swal from "sweetalert2";
import destinationData from "../../../../public/json/destination_data.json";
import PhoneValidation from "@/_components/PhoneValidation/PhoneValidation";
import 'react-phone-input-2/lib/style.css'
// import { title } from "process";
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from "react-simple-captcha";

const Home_Contact = () => {
  const text = "DREAM BIG STUDY ABROAD.";
  const Letter = text.split("");
  // const [formSubmitted, setFormSubmitted] = useState(false);

  // const countries = [
  //   { name: "Afghanistan", code: "+93" },
  //   { name: "Albania", code: "+355" },
  //   { name: "Algeria", code: "+213" },
  //   { name: "American Samoa", code: "+1-684" },
  //   { name: "Andorra", code: "+376" },
  //   { name: "Angola", code: "+244" },
  //   { name: "Anguilla", code: "+1-264" },
  //   { name: "Antarctica", code: "+672" },
  //   { name: "Antigua and Barbuda", code: "+1-268" },
  //   { name: "Argentina", code: "+54" },
  //   { name: "Armenia", code: "+374" },
  //   { name: "Aruba", code: "+297" },
  //   { name: "Australia", code: "+61" },
  //   { name: "Austria", code: "+43" },
  //   { name: "Azerbaijan", code: "+994" },
  //   { name: "Bahamas", code: "+1-242" },
  //   { name: "Bahrain", code: "+973" },
  //   { name: "Bangladesh", code: "+880" },
  //   { name: "Barbados", code: "+1-246" },
  //   { name: "Belarus", code: "+375" },
  //   { name: "Belgium", code: "+32" },
  //   { name: "Belize", code: "+501" },
  //   { name: "Benin", code: "+229" },
  //   { name: "Bermuda", code: "+1-441" },
  //   { name: "Bhutan", code: "+975" },
  //   { name: "Bolivia", code: "+591" },
  //   { name: "Bosnia and Herzegovina", code: "+387" },
  //   { name: "Botswana", code: "+267" },
  //   { name: "Brazil", code: "+55" },
  //   { name: "British Virgin Islands", code: "+1-284" },
  //   { name: "Brunei", code: "+673" },
  //   { name: "Bulgaria", code: "+359" },
  //   { name: "Burkina Faso", code: "+226" },
  //   { name: "Burundi", code: "+257" },
  //   { name: "Cambodia", code: "+855" },
  //   { name: "Cameroon", code: "+237" },
  //   { name: "Canada", code: "+1" },
  //   { name: "Cape Verde", code: "+238" },
  //   { name: "Cayman Islands", code: "+1-345" },
  //   { name: "Central African Republic", code: "+236" },
  //   { name: "Chad", code: "+235" },
  //   { name: "Chile", code: "+56" },
  //   { name: "China", code: "+86" },
  //   { name: "Colombia", code: "+57" },
  //   { name: "Comoros", code: "+269" },
  //   { name: "Congo", code: "+242" },
  //   { name: "Cook Islands", code: "+682" },
  //   { name: "Costa Rica", code: "+506" },
  //   { name: "Croatia", code: "+385" },
  //   { name: "Cuba", code: "+53" },
  //   { name: "Curaçao", code: "+599" },
  //   { name: "Cyprus", code: "+357" },
  //   { name: "Czech Republic", code: "+420" },
  //   { name: "Democratic Republic of the Congo", code: "+243" },
  //   { name: "Denmark", code: "+45" },
  //   { name: "Djibouti", code: "+253" },
  //   { name: "Dominica", code: "+1-767" },
  //   { name: "Dominican Republic", code: "+1-809" },
  //   { name: "East Timor", code: "+670" },
  //   { name: "Ecuador", code: "+593" },
  //   { name: "Egypt", code: "+20" },
  //   { name: "El Salvador", code: "+503" },
  //   { name: "Equatorial Guinea", code: "+240" },
  //   { name: "Eritrea", code: "+291" },
  //   { name: "Estonia", code: "+372" },
  //   { name: "Ethiopia", code: "+251" },
  //   { name: "Falkland Islands", code: "+500" },
  //   { name: "Faroe Islands", code: "+298" },
  //   { name: "Fiji", code: "+679" },
  //   { name: "Finland", code: "+358" },
  //   { name: "France", code: "+33" },
  //   { name: "French Polynesia", code: "+689" },
  //   { name: "Gabon", code: "+241" },
  //   { name: "Gambia", code: "+220" },
  //   { name: "Georgia", code: "+995" },
  //   { name: "Germany", code: "+49" },
  //   { name: "Ghana", code: "+233" },
  //   { name: "Gibraltar", code: "+350" },
  //   { name: "Greece", code: "+30" },
  //   { name: "Greenland", code: "+299" },
  //   { name: "Grenada", code: "+1-473" },
  //   { name: "Guam", code: "+1-671" },
  //   { name: "Guatemala", code: "+502" },
  //   { name: "Guinea", code: "+224" },
  //   { name: "Guinea-Bissau", code: "+245" },
  //   { name: "Guyana", code: "+592" },
  //   { name: "Haiti", code: "+509" },
  //   { name: "Honduras", code: "+504" },
  //   { name: "Hong Kong", code: "+852" },
  //   { name: "Hungary", code: "+36" },
  //   { name: "Iceland", code: "+354" },
  //   { name: "India", code: "+91" },
  //   { name: "Indonesia", code: "+62" },
  //   { name: "Iran", code: "+98" },
  //   { name: "Iraq", code: "+964" },
  //   { name: "Ireland", code: "+353" },
  //   { name: "Israel", code: "+972" },
  //   { name: "Italy", code: "+39" },
  //   { name: "Jamaica", code: "+1-876" },
  //   { name: "Japan", code: "+81" },
  //   { name: "Jordan", code: "+962" },
  //   { name: "Kazakhstan", code: "+7" },
  //   { name: "Kenya", code: "+254" },
  //   { name: "Kuwait", code: "+965" },
  //   { name: "Malaysia", code: "+60" },
  //   { name: "Mexico", code: "+52" },
  //   { name: "Netherlands", code: "+31" },
  //   { name: "New Zealand", code: "+64" },
  //   { name: "Nigeria", code: "+234" },
  //   { name: "Norway", code: "+47" },
  //   { name: "Philippines", code: "+63" },
  //   { name: "Pakistan", code: "+92" },
  //   { name: "Poland", code: "+48" },
  //   { name: "Portugal", code: "+351" },
  //   { name: "Romania", code: "+40" },
  //   { name: "Russia", code: "+7" },
  //   { name: "Saudi Arabia", code: "+966" },
  //   { name: "South Africa", code: "+27" },
  //   { name: "South Korea", code: "+82" },
  //   { name: "Spain", code: "+34" },
  //   { name: "Sweden", code: "+46" },
  //   { name: "Switzerland", code: "+41" },
  //   { name: "Thailand", code: "+66" },
  //   { name: "Turkey", code: "+90" },
  //   { name: "United Kingdom", code: "+44" },
  //   { name: "United States", code: "+1" },
  //   { name: "Vietnam", code: "+84" },
  // ];

  // const [selectedDestination, setSelectedDestination] = useState("");
  const [validateInput, setvalidateInput] = useState("")

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [selectedDestination, setSelectedDestination] = useState("");

  const getIntakeOptions = (destinationName: string): string[] => {
    const destination = destinationData?.find(
      (data) => data.destinationName === destinationName
    );

    return destination?.academicIntake
      ? destination.academicIntake.map(
          (intake: { qualification: string }) => intake.qualification
        )
      : [];
  };

  const [phone, setPhone]= useState<string>("")

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    phoneCode: "",
    studyDestination: "",
    studyYear: "",
    studyIntake: "",
    agreeToTerms: false,
  });

  useEffect(()=>{
    setFormData((prevData)=>({
      ...prevData,
      phoneNumber: phone
    }))
  },[phone])
  
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      // Use checked property if input is a checkbox; otherwise, use value
      [name]:
        e.target instanceof HTMLInputElement && e.target.type === "checkbox"
          ? e.target.checked
          : value,
    });

    // Update selectedDestination when changing studyDestination
    if (name === "studyDestination") {
      // setSelectedDestination(value);
      setFormData((prev) => ({
        ...prev,
        studyIntake: "", // Reset study intake when destination changes
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const apiUrl = process.env.NEXT_PUBLIC_API_FORM_URL;

    // Combine the phone code and phone number

    const fullPhoneNumber = `${formData.phoneCode}${formData.phoneNumber}`;

      try {
        if (validateCaptcha(validateInput)) {
      const response = await axios.post(`${apiUrl}/apply`, {
        ...formData,
        phoneNumber: fullPhoneNumber, // Send the full phone number
      });
      if (response.data) {
          Swal.fire({
            icon: "success",
            title: "Thank You",
            text: "Our counsellor will contact you soon",
          });
          // Clear form fields after successful submission
          setFormData({
            name: "",
            email: "",
            phoneNumber: "",
            phoneCode: "",
            studyDestination: "",
            studyYear: "",
            studyIntake: "",
            agreeToTerms: false,
          });
        }
      }
      else{
        Swal.fire({
          icon:"error",
          title:"Retry the captcha"
        })
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `Something went wrong! ${error}`,
      });
    }

  };

  return (
    <div className="bg-[#E7E7E7] pt-[98px] pb-[250px] overflow-hidden px-4 ">
      <div className="text-center">
        <h2 className="poppins-bold lg:text-[38px] text-[28px] text-[#081831] leading-[130%] -tracking-[0.02em] lg:pb-[39px] pb-5">
          It’s Time to Start Your Journey With Us
        </h2>
        <p className="mulish-regular text-[16px] text-[#1F1F1F] leading-[150%] pb-[18px]">
          Book Your{" "}
          <span className="bg-[#88F3D0] rounded-sm px-1 font-medium py-1">
            FREE
          </span>{" "}
          Consultation with Certified Counsellors
        </p>
      </div>
      <div className="flex justify-center text-center">
        <div className="max-w-[565px] lg:mx-auto md:mx-auto mx-5">
          <form onSubmit={handleSubmit}>
            <input
              required
              type="text"
              placeholder="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="bg-white rounded w-full lg:h-[40px] h-[45px] pl-[12px] inter-regular text-[12px] leading-[12px] outline-none block mx-auto mb-[10px]"
            />
            <div className="relative text-center mb-[10px]">
              <input
                required
                type="email"
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className=" bg-white rounded w-full lg:h-[40px] h-[45px] pl-[12px] inter-regular text-[12px] leading-[12px] outline-none pr-10"
              />
              <span className="absolute flex items-center right-[10px] top-3 inter-regular text-[12px] text-[#8E8E8E]">
                .com
              </span>
            </div>
            <div className="flex gap-2">
              
              <PhoneValidation phone = {phone} setPhone={setPhone}/>
            </div>

            <select
              name="studyDestination"
              value={formData.studyDestination}
              onChange={handleChange}
              className="bg-white px-3 py-2 w-full outline-none inter-regular text-[12px] text-[#4B4B4B] appearance-none cursor-pointer rounded mb-[10px]"
            >
              <option value="" disabled>
                Preferred Study Destination
              </option>
              {destinationData?.map((destination) => (
                <option
                  key={destination?.destinationName}
                  value={destination?.destinationName}
                >
                  {destination?.destinationName}
                </option>
              ))}
              <option value="Others">Others</option>
            </select>

            <select
              name="studyYear"
              value={formData.studyYear}
              onChange={handleChange}
              className="bg-white px-3 py-2 w-full outline-none inter-regular text-[12px] text-[#4B4B4B] appearance-none cursor-pointer rounded mb-[10px]"
            >
              <option value="">Preferred Study Year</option>
              <option value="2025">2025</option>
              <option value="2026">2026</option>
              <option value="2027">2027</option>
            </select>

            <select
              name="studyIntake"
              value={formData.studyIntake}
              onChange={handleChange}
              className="bg-white px-3 py-2 w-full outline-none inter-regular text-[12px] text-[#4B4B4B] appearance-none cursor-pointer rounded mb-[10px]"
            >
              <option value="">Preferred Study Intake</option>
              {getIntakeOptions(formData.studyDestination)?.map(
                (intake, index) => (
                  <option key={index} value={intake}>
                    {intake}
                  </option>
                )
              )}
              <option value="Others">Others</option>
            </select>

            <div className="flex items-start lg:items-center space-x-2 lg:max-w-[565px] max-w-[290px] lg:mx-auto mb-[10px]">
              <input
                type="checkbox"
                name="agreeToTerms"
                checked={formData.agreeToTerms}
                onChange={handleChange}
                className="mt-1"
              />
              <p className="poppins-regular text-[12px] leading-[22px]">
                By clicking you agree to our{" "}
                <Link href="/privacy" className="text-[#008AFF] cursor-pointer">
                  Privacy Policy
                </Link>{" "}
                and{" "}
                <span className="text-[#008AFF] cursor-pointer">
                  Terms & Conditions
                </span>{" "}
                *
              </p>
            </div>

            <div className="flex gap-2 w-full rounded-md flex-col md:flex-row items-center">
                    <div>
                    <LoadCanvasTemplate />
                    </div>
                    <input 
                    type="text" 
                    className="bg-white rounded w-full lg:h-[40px] h-[30px] pl-[12px] inter-regular text-[12px] leading-[12px] outline-none block mx-auto mb-[10px]"
                    value={validateInput}
                    onChange={(e)=>setvalidateInput(e.target.value)}
                     />
                </div>

            <button
              type="submit"
              className="lg:poppins-bold mulish-regular lg:text-[18px] text-[14px] lg:px-[81px] lg:py-[10px] px-[17px] py-2 bg-[#2563EB] hover:bg-[#3D7DED] text-white rounded-[32px]"
              // disabled={!formData.agreeToTerms} // Disable button if terms are not agreed
            >
              Book Free Counselling
            </button>
          </form>
        </div>
      </div>

      <div className="lg:block hidden">
        <div className="App">
          <section>
            {Letter.map((item, index) => (
              <span
                key={index}
                className="letters"
                style={{ transform: `rotate(${index * 15.5}deg)` }}
              >
                {item}
              </span>
            ))}
          </section>
        </div>
      </div>
    </div>
  );
};

export default Home_Contact;
