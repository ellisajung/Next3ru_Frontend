import Image from "next/image";
import { IoIosArrowBack } from "react-icons/io";

const ChatHeaderFlex = () => {
  return (
    <div
      className="
        flex
        flex-col
        flex-start
    "
    >
      <IoIosArrowBack />
      <Image src="/wizbot.png" alt="Wizbot" width={38} height={36} />
      <h2>Wizbot</h2>
    </div>
  );
};

export default ChatHeaderFlex;
