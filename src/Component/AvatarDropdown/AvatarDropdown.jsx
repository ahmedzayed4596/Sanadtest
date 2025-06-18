import { useState, useRef, useEffect } from "react";
import avatar from "../../assets/avatar.png";
export default function AvatarDropdown() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef();

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block text-left" ref={menuRef}>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center space-x-2 focus:outline-none"
      >
        <img
          src={avatar} // replace with your avatar image path
          alt="avatar"
          className="w-10 h-10 rounded-full border border-gray-300"
        />
      </button>

      {open && (
        <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg z-50">
          <ul className="py-2 text-sm text-gray-700">
            <li>
              <a href="/profile" className="block px-4 py-2 hover:bg-gray-100">
                الملف الشخصي
              </a>
            </li>
            <li>
              <a href="/settings" className="block px-4 py-2 hover:bg-gray-100">
                الإعدادات
              </a>
            </li>
            <li>
              <button
                onClick={() => alert("تم تسجيل الخروج")}
                className="w-full text-left px-4 py-2 hover:bg-gray-100"
              >
                تسجيل الخروج
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
