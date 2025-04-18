import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

const WhatsappChat = ({ chatHover }: { chatHover: boolean }) => {
  return (
    <div>
      <div
        className={`transition-all duration-300 ${
          chatHover ? "right-28 bottom-14" : "right-10 bottom-10"
        } fixed right-10 bottom-10   z-30`}
      >
        <Link
          rel="nofollow noopener noreferrer"
          target="_blank"
          href="https://wa.me/+447903108549"
          className="flex text-2xl p-3 w-12 h-12 text-white bg-green-400 rounded-full border-white border-2 gap-2 items-center"
        >
          <FaWhatsapp />
        </Link>
      </div>
    </div>
  );
};

export default WhatsappChat;
