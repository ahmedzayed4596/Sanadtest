import React, { useState } from "react";
import sanad from "../../assets/sanad.png";
export default function Orders() {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const ordersPerPage = 5;

  const orders = [
    {
      id: "1234",
      service: "تصفية شركه",
      date: "2025-06-15",
      status: "قيد المعالجة",
    },
    {
      id: "5678",
      service: "فتح سجل",
      date: "2025-06-14",
      status: "تم التنفيذ",
    },
    {
      id: "9012",
      service: "تعديل بيانات",
      date: "2025-06-13",
      status: "قيد المعالجة",
    },
    {
      id: "3456",
      service: "إغلاق سجل",
      date: "2025-06-12",
      status: "تم التنفيذ",
    },
    {
      id: "7890",
      service: "فتح فرع",
      date: "2025-06-11",
      status: "قيد المعالجة",
    },
    {
      id: "1111",
      service: "خدمة سريعة",
      date: "2025-06-10",
      status: "تم التنفيذ",
    },
    {
      id: "2222",
      service: "استعلام",
      date: "2025-06-09",
      status: "قيد المعالجة",
    },
  ];

  // فلترة حسب البحث
  const filteredOrders = orders.filter((order) => order.id.includes(search));

  // حساب عدد الصفحات
  const totalPages = Math.ceil(filteredOrders.length / ordersPerPage);

  // تحديد الطلبات في الصفحة الحالية
  const startIndex = (currentPage - 1) * ordersPerPage;
  const endIndex = startIndex + ordersPerPage;
  const currentOrders = filteredOrders.slice(startIndex, endIndex);

  // ✅ دالة تحديد لون الحالة
  const getStatusColor = (status) => {
    switch (status) {
      case "تم التنفيذ":
        return "text-green-600 bg-green-100 rounded-lg";
      case "قيد المعالجة":
        return "text-orange-600 bg-orange-100 rounded-lg";
      default:
        return "text-gray-600 bg-gray-100 rounded-lg";
    }
  };

  return (
    <div
      className=" p-10 mx-auto px-4 py-6 text-right pt-52 bg-[#07543a]"
      dir="rtl"
    >
      <div className="flex justify-center mx-auto mb-10 bg-white rounded-lg w-fit">
        <img
          src={sanad}
          alt="Logo"
          className="inline-block mb-2 max-w-56 mx-auto"
        />
      </div>
      {/* العنوان وعدد الطلبات */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold text-[#fac337]">طلباتي</h1>
        <span className="text-white">عدد الطلبات: {filteredOrders.length}</span>
      </div>

      {/* البحث */}
      <div className="mb-6 w-[25%]">
        <input
          type="text"
          placeholder="ابحث برقم الطلب"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setCurrentPage(1); // إعادة تعيين الصفحة عند البحث
          }}
          className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
        />
      </div>

      {/* قائمة الطلبات */}
      <div className="space-y-4 mb-6">
        {currentOrders.map((order) => (
          <div
            key={order.id + order.date}
            className="flex flex-col md:flex-row justify-between items-center border gap-3 p-4 rounded-lg shadow-sm bg-white"
          >
            <div className="mb-2 md:mb-0">
              <span className="font-semibold">رقم الطلب:</span> {order.id}
            </div>
            <div className="mb-2 md:mb-0">
              <span className="font-semibold">نوع الخدمة:</span> {order.service}
            </div>
            <div className="mb-2 md:mb-0">
              <span className="font-semibold">تاريخ الطلب:</span> {order.date}
            </div>
            <div className="mb-2 md:mb-0">
              <span className="font-semibold">حالة الطلب:</span>{" "}
              <span
                className={`px-2 py-1 rounded ${getStatusColor(order.status)}`}
              >
                {order.status}
              </span>
            </div>
            <div className="flex gap-2">
              <button className="px-4 py-1 bg-green-500 text-white rounded hover:bg-green-600">
                تعديل
              </button>
              <button className="px-4 py-1 bg-gray-500 text-white rounded hover:bg-gray-600">
                إدارة
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* أزرار التنقل بين الصفحات */}
      {totalPages > 1 && (
        <div className="flex justify-center gap-2">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-3 py-1 rounded ${
                currentPage === i + 1
                  ? "bg-green-500 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
