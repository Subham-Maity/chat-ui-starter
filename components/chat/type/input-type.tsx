import Image from "next/image";

export default function ChatInput() {
  return (
    <div className="flex gap-4 items-center w-full">
      <Image
        src="/input-msz/Attach.svg"
        alt="attach"
        height={300}
        width={300}
        className="w-[32px] h-[32px]"
      />
      <Image
        src="/input-msz/Voice.svg"
        alt="attach"
        height={300}
        width={300}
        className="w-[32px] h-[32px]"
      />

      <div className="flex items-center bg-white border rounded-full shadow-sm w-full ">
        <input
          type="text"
          placeholder="Message Josh California"
          className="flex-1 px-4 ml-4 text-gray-700 placeholder-gray-400 bg-transparent border-none focus:outline-none block w-full h-[48px]"
        />
        <Image
          src="/input-msz/Send.svg"
          alt="attach"
          height={300}
          width={300}
          className="w-[32px] h-[32px]"
        />
      </div>
    </div>
  );
}
