import { motion } from "framer-motion";
import logo from "../../../../assets/images/Group.svg";
import Image from "next/image";
import Link from "next/link";

const ErrorResponse = () => {
  return (
    <motion.div
      initial={{ scale: 0, x: -300, y: 100 }}
      animate={{ scale: 1, x: 0, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="max-w-xs ml-2 flex  items-start"
    >
      <Image
        width={100}
        height={100}
        className="w-[35px] mr-1 h-auto rounded-full p-[2px]"
        src={logo}
        alt=""
      />

      <div className=" bg-white text-black rounded-lg p-2">
        <p className="pb-2">Sorry I am still training.</p>
        <p className="pb-2">
          If you want more information then please contact our counsellor via
          <Link
            rel="nofollow noopener noreferrer"
            target="blank"
            className="p-2  font-medium text-blue-900 underline "
            href="https://www.facebook.com/ShabujGlobaleducationuk/"
          >
            Facebook
          </Link>
        </p>
      </div>
    </motion.div>
  );
};

export default ErrorResponse;
