import React, { useState } from "react";
import { MessageCircle } from "lucide-react";

const ChatIcon = () => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");

  const yourNumber = "+201155843665"; // رقمك على واتساب

  const openWhatsApp = () => {
    const encodedMessage = encodeURIComponent(
      message || "مرحبًا! أود التحدث معك."
    );
    window.open(`https://wa.me/${yourNumber}?text=${encodedMessage}`, "_blank");
    setOpen(false);
    setMessage("");
  };

  return (
    <>
      {/* أيقونة الشات */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-5 right-5 bg-green-500 hover:bg-green-600 text-[#f0bb35] w-14 h-14 rounded-full flex items-center justify-center shadow-lg z-50"
      >
        <MessageCircle size={26} />
      </button>

      {/* نافذة الدردشة */}
      {open && (
        <div className="fixed bottom-24 right-5 w-80 bg-white border border-gray-300 rounded-xl shadow-xl z-40 p-4">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-lg font-semibold text-gray-700">تواصل معنا</h2>
            <button
              onClick={() => setOpen(false)}
              className="text-gray-500 hover:text-red-500 text-xl font-bold"
            >
              ×
            </button>
          </div>

          <textarea
            className="w-full border border-gray-300 rounded p-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-400 resize-none"
            rows="3"
            placeholder="اكتب رسالتك هنا..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />

          <button
            onClick={openWhatsApp}
            className="mt-3 w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded text-sm font-medium"
          >
            إرسال عبر واتساب
          </button>
        </div>
      )}
    </>
  );
};

export default ChatIcon;
