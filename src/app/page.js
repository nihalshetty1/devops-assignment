"use client";

import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import { useState } from "react";
import "react-phone-number-input/style.css"; // Import the CSS for PhoneInput
import {
  BsWhatsapp,
  BsTelegram,
} from "react-icons/bs";
import { FaSun, FaMoon } from "react-icons/fa";

export default function Home() {
  const [value, setValue] = useState("");
  const [messenger, setMessenger] = useState("whatsapp");
  const [darkMode, setDarkMode] = useState(false);
  const API_URL = messenger === "whatsapp" ? "https://wa.me" : "https://t.me";

  const handleMessengerChange = (newMessenger) => {
    setMessenger(newMessenger);
  };

  const handleSendClick = () => {
    if (isValidPhoneNumber(value)) {
      window.open(`${API_URL}/${value}`, "_blank");
    }
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <main
      className={`${
        darkMode
          ? "bg-gray-900 text-white"
          : "bg-gradient-to-b from-indigo-900 to-gray-800 text-white"
      } min-h-screen flex flex-col items-center justify-center`}
    >
      <div className="dark-mode-toggle absolute top-4 right-4">
        <button onClick={toggleDarkMode} className="dark-mode-button">
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>
      </div>
      <h1 className="text-4xl font-extrabold mb-8">QuickSend</h1>
      <div className="mb-8">
        <button
          className={`${
            messenger === "whatsapp"
              ? "bg-green-500"
              : "bg-gray-600 hover:bg-green-500"
          } text-white px-4 py-2 rounded-lg`}
          onClick={() => handleMessengerChange("whatsapp")}
        >
          <BsWhatsapp className="inline-block mr-2" />
          WhatsApp
        </button>
        <button
          className={`${
            messenger === "telegram"
              ? "bg-blue-500"
              : "bg-gray-600 hover:bg-blue-500"
          } text-white px-4 py-2 rounded-lg ml-4`}
          onClick={() => handleMessengerChange("telegram")}
        >
          <BsTelegram className="inline-block mr-2" />
          Telegram
        </button>
      </div>
      <div className="w-80">
        <PhoneInput
          className="text-md mb-4 text-black"
          placeholder="Enter phone number"
          countrySelectProps={{ unicodeFlags: true }}
          value={value}
          international
          error={
            value
              ? isValidPhoneNumber(value)
                ? undefined
                : "Invalid phone number"
              : "Phone number required"
          }
          onChange={setValue}
          defaultCountry="IN"
        />
        <button
          className={`${
            isValidPhoneNumber(value || "")
              ? "bg-blue-500 hover:bg-blue-600"
              : "bg-gray-600"
          } text-white px-4 py-2 rounded-lg mt-4 w-full`}
          onClick={handleSendClick}
          disabled={!isValidPhoneNumber(value || "")}
        >
          Send
        </button>
      </div>
    </main>
  );
}

