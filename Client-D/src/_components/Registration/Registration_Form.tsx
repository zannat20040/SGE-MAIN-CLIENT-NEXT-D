import Image from "next/image";
import { FaAngleDown } from "react-icons/fa6";
const Registration_Form = () => {
  const Label = ({ text }:{text:string}) => {
    return (
      <p className=" font-semibold mb-2">
        {text}
        <span className="text-red-500">*</span>
      </p>
    );
  };
  const Input = ({ text, type, padding }:{text:string, type:string, padding:boolean}) => {
    return (
      <input
        className={`overscroll-none border-[1px] hover:border-[#3b82f6] cursor-pointer w-full p-1 placeholder:text-xs placeholder:text-gray-300 focus:outline-[#3b82f6] rounded-md ${
          padding && "py-2"
        }`}
        placeholder={text}
        type={type}
      />
    );
  };
  return (
    <div>
      <div className="lg:w-[450px] md:w-[450px] w-full mt-10">
        <div className="">
          <form className="lg:mr-20 md:mr-20 mr-0 space-y-5">
            <div>
              <Label text="Name" />
              <Input text="Your Name" type="text" padding={false} />
            </div>
            <div>
              <Label text="Email" />
              <div className=" flex items-center justify-between border-[1px] hover:border-[#3b82f6] cursor-pointer w-full p-1 rounded-md">
                <input
                  className="focus:outline-none placeholder:text-xs placeholder:text-gray-300 "
                  placeholder="Your Email"
                  type="text"
                />
                <span className="text-gray-400 bg-[#fafafa] text-xs">.com</span>
              </div>
            </div>
            <div>
              <Label text="Phone Number" />
              <div className="flex items-center gap-5 text-gray-300 text-xs">
                <span className="flex p-2 border-[1px]">
                  <Image width={100} height={100} className='  w-auto h-auto' src='https://i.ibb.co.com/QjQfzT1/contents.png' alt="contents" />
                  <p className="pr-2">+880</p>
                </span>
                <Input text="1891123654" type="text" padding={true} />
              </div>
            </div>
            <div>
              <Label text="Country of Residence" />
              <div className=" flex items-center justify-between border-[1px] hover:border-[#3b82f6] cursor-pointer w-full p-1  ">
                <input
                  className="focus:outline-none placeholder:text-xs placeholder:text-gray-300  "
                  readOnly
                  placeholder="Select your current country"
                  type="text"
                />
                <span className="text-gray-400 bg-[#fafafa] text-xs">
                  <FaAngleDown />
                </span>
              </div>
            </div>
            <div>
              <Label text="Desired Country" />
              <div className=" flex items-center justify-between border-[1px] hover:border-[#3b82f6] cursor-pointer w-full p-1  ">
                <input
                  className="focus:outline-none placeholder:text-xs placeholder:text-gray-300  "
                  readOnly
                  placeholder="Select your desired country"
                  type="text"
                />
                <span className="text-gray-400 bg-[#fafafa] text-xs">
                  <FaAngleDown />
                </span>
              </div>
            </div>

            <div>
              <Label text="Desired Course" />
              <Input text="Write your desired course name" type="text" padding={false} />
            </div>
            <div>
              <Label text="Desired University" />
              <Input text="Write your desired university name" type="text" padding={false}/>
            </div>
            <div>
              <Label text="Last Academic Qualification" />
              <Input text="Bachelor" type="text" padding={false}/>
            </div>
            <div>
              <Label text="English Test Status" />
              <Input text="IELTS" type="text" padding={false}/>
            </div>

            <div>
              <Label text="Which SGE Office is Nearest to You?" />
              <div className=" flex items-center justify-between border-[1px] hover:border-[#3b82f6] cursor-pointer w-full p-1  ">
                <input
                  className="focus:outline-none placeholder:text-xs placeholder:text-gray-300 rounded-md"
                  readOnly
                  placeholder="Dhanmondi, Dhaka"
                  type="text"
                />
                <span className="text-gray-400 bg-[#fafafa] text-xs">
                  <FaAngleDown />
                </span>
              </div>
            </div>
            <div>
              <button className="font-inter bg-[#2563EB] hover:bg-[#3b82f6] text-white px-5 py-4 text-xs w-full  rounded-full">
                Schedule Meeting
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registration_Form;
