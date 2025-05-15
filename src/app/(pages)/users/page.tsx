'use client';

import { Edit } from 'lucide-react';
import React, { useState } from 'react';
import AddUsers from './form/AddUsers';

interface User {
  name: string;
  email: string;
  phone: string;
}
const users: User[] = [
  { name: 'أحمد محمد', email: 'ahmed@example.com', phone: '07701234567' },
  { name: 'سارة علي', email: 'sara@example.com', phone: '07802345678' },
  { name: 'خالد حسن', email: 'khaled@example.com', phone: '07503456789' },
  { name: 'ليلى حسين', email: 'layla@example.com', phone: '07704567890' },
  { name: 'ياسر فهد', email: 'yasser@example.com', phone: '07805678901' },
];


const Page: React.FC = () => {
  const [showModal, setShowModal] = useState<boolean>(false);

  const handleShow = (): void => {
    setShowModal((prev) => !prev);
  };

  return (
    <div className="container w-full mx-auto px-4 py-8">
      <div className="flex flex-wrap justify-between items-center mb-6 gap-4">
        <button
          onClick={handleShow}
          className="bg-[#925FE2] z-20 text-white hover:text-white/80 h-10 px-6 rounded-2xl"
        >
          اضف مستخدمين
        </button>
        <div>{/* Placeholder for additional content */}</div>
      </div>

      <div className="overflow-auto z-10 rounded-lg shadow-md">
        <table className="w-full text-sm text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th className="px-6 py-3">اسم العميل</th>
              <th className="px-6 py-3">الرقم</th>
              <th className="px-6 py-3">الايميل</th>
              <th className="px-6 py-3">الاجراءات</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user:User) => (
              <tr
                key={user.name}
                className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 text-gray-900 dark:text-white border-b dark:border-gray-700"
              >
              
                <td className="px-6 py-4">{user.name}</td>
                <td className="px-6 py-4">{user.email}</td>
                <td className="px-6 py-4">{user.phone}</td>
                <td className="px-6 py-4">
                  <Edit className="cursor-pointer hover:text-blue-500" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showModal && <AddUsers closebtn={handleShow} />}
    </div>
  );
};

export default Page;
