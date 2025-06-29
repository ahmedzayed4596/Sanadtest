import React, { useState } from "react";

export default function Profile() {
  const [tab, setTab] = useState("profile");

  const [user, setUser] = useState({
    name: "أحمد محمد",
    email: "ahmed@example.com",
    phone: "0555555555",
    image: null,
    password: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [orders] = useState([
    { id: "1234", service: "فتح سجل", date: "2025-06-15" },
    { id: "5678", service: "تصفية شركة", date: "2025-05-20" },
  ]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      setUser({ ...user, image: URL.createObjectURL(files[0]) });
    } else {
      setUser({ ...user, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!user.name || !user.email || !user.phone) {
      alert("الرجاء تعبئة جميع الحقول.");
      return;
    }
    alert("✅ تم حفظ التعديلات بنجاح");
  };

  const handlePasswordChange = (e) => {
    e.preventDefault();
    if (user.newPassword.length < 6) {
      alert("كلمة المرور الجديدة يجب أن تكون 6 أحرف على الأقل.");
      return;
    }
    if (user.newPassword !== user.confirmPassword) {
      alert("كلمة المرور غير متطابقة.");
      return;
    }
    alert("🔒 تم تغيير كلمة المرور بنجاح");
  };

  return (
    <div className="min-h-screen bg-gray-100 py-40 px-4 md:px-20" dir="rtl">
      <h1 className="text-3xl font-bold mb-6 text-[#fac337] text-right">
        الملف الشخصي
      </h1>

      {/* التبويبات */}
      <div className="flex gap-4 mb-6">
        <button
          className={`px-4 py-2 rounded ${
            tab === "profile"
              ? "bg-green-600 hover:bg-green-500 hover:cursor-pointer text-white"
              : "bg-white text-gray-800"
          }`}
          onClick={() => setTab("profile")}
        >
          البيانات الشخصية
        </button>
        <button
          className={`px-4 py-2 rounded ${
            tab === "password"
              ? "bg-green-600 hover:bg-green-500 hover:cursor-pointer text-white"
              : "bg-white text-gray-800"
          }`}
          onClick={() => setTab("password")}
        >
          تغيير كلمة المرور
        </button>
        <button
          className={`px-4 py-2 rounded ${
            tab === "orders"
              ? "bg-green-600 hover:bg-green-500 hover:cursor-pointer text-white"
              : "bg-white text-gray-800"
          }`}
          onClick={() => setTab("orders")}
        >
          طلباتي
        </button>
      </div>

      {/* المحتوى حسب التبويب */}
      <div className="bg-white rounded-lg shadow p-6">
        {tab === "profile" && (
          <form onSubmit={handleSubmit} className="grid gap-4">
            {/* صورة المستخدم */}
            <div className="flex items-center gap-4">
              <img
                src={user.image || "/default-avatar.png"}
                alt="الصورة"
                className="w-24 h-24 rounded-full object-cover border"
              />
              <input
                type="file"
                name="image"
                accept="image/*"
                onChange={handleChange}
                className="text-sm"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">الاسم الكامل</label>
              <input
                type="text"
                name="name"
                value={user.name}
                onChange={handleChange}
                className="w-full p-2 border rounded focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">
                البريد الإلكتروني
              </label>
              <input
                type="email"
                name="email"
                value={user.email}
                onChange={handleChange}
                className="w-full p-2 border rounded focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">رقم الجوال</label>
              <input
                type="text"
                name="phone"
                value={user.phone}
                onChange={handleChange}
                className="w-full p-2 border rounded focus:outline-none focus:ring"
              />
            </div>

            <button
              type="submit"
              className="w-full mt-4 bg-green-500 text-white py-2 rounded hover:bg-green-600"
            >
              حفظ التعديلات
            </button>
          </form>
        )}

        {tab === "password" && (
          <form onSubmit={handlePasswordChange} className="grid gap-4">
            <div>
              <label className="block mb-1 font-medium">
                كلمة المرور الجديدة
              </label>
              <input
                type="password"
                name="newPassword"
                value={user.newPassword}
                onChange={handleChange}
                className="w-full p-2 border rounded focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">
                تأكيد كلمة المرور
              </label>
              <input
                type="password"
                name="confirmPassword"
                value={user.confirmPassword}
                onChange={handleChange}
                className="w-full p-2 border rounded focus:outline-none focus:ring"
              />
            </div>
            <button
              type="submit"
              className="w-fit p-5 mt-4 bg-green-600 hover:bg-green-500 hover:cursor-pointer text-white py-2 rounded-lg "
            >
              تغيير كلمة المرور
            </button>
          </form>
        )}

        {tab === "orders" && (
          <div className="space-y-4">
            {orders.map((order) => (
              <div
                key={order.id}
                className="border p-4 rounded flex justify-between items-center"
              >
                <div>
                  <p className="font-semibold">رقم الطلب: {order.id}</p>
                  <p className="text-gray-600">الخدمة: {order.service}</p>
                </div>
                <p className="text-gray-500">{order.date}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
