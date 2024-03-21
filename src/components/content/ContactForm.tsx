"use client";
import { FaTelegramPlane } from "react-icons/fa";
import Label_Input from "./Label_Input";

export default function ContactForm({
  children,
}: {
  children: Readonly<React.ReactNode>;
}) {
  return (
    <form className="flex flex-col items-center justify-center gap-3 sm:gap-5 lg:mt-12">
      <div className="flex items-center justify-center gap-3 sm:gap-10">
        <Label_Input name="name" />
        <Label_Input name="email" />
      </div>
      <Label_Input name="message" />
      <button className="self-start bg-gray-500 px-5 py-1.5 rounded-full font-semibold flex items-center justify-center gap-3 sm:gap-5 sm:text-lg">
        Send <FaTelegramPlane />
      </button>
      {children}
    </form>
  );
}
