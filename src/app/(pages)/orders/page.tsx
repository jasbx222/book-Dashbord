'use client';

import { Edit } from 'lucide-react';
import React, { useState } from 'react';
import AddProduct from './form/AddProduct';

interface Product {
  name: string;
  color: string;
  category: string;
  price: string;
}

const products: Product[] = [
  { name: 'سماعات بلوتوث', color: 'أسود', category: 'إلكترونيات', price: '$120' },
  { name: 'تيشيرت رجالي', color: 'أبيض', category: 'ملابس', price: '$25' },
  { name: 'كرسي مكتبي', color: 'رمادي', category: 'أثاث', price: '$180' },
  { name: 'هاتف ذكي', color: 'أزرق', category: 'إلكترونيات', price: '$999' },
  { name: 'زجاجة ماء', color: 'شفاف', category: 'مستلزمات', price: '$10' },
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
          اضف منتجات
        </button>
        <div>{/* Placeholder for additional content */}</div>
      </div>

      <div className="overflow-auto z-10 rounded-lg shadow-md">
        <table className="w-full text-sm text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th className="px-6 py-3">اسم المنتج</th>
              <th className="px-6 py-3">اللون</th>
              <th className="px-6 py-3">التصنيف</th>
              <th className="px-6 py-3">السعر</th>
              <th className="px-6 py-3">الاجراءات</th>
            </tr>
          </thead>
          <tbody>
            {products.map((pro: Product) => (
              <tr
                key={pro.name}
                className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 text-gray-900 dark:text-white border-b dark:border-gray-700"
              >
                <td className="px-6 py-4 whitespace-nowrap">{pro.name}</td>
                <td className="px-6 py-4">{pro.color}</td>
                <td className="px-6 py-4">{pro.category}</td>
                <td className="px-6 py-4">{pro.price}</td>
                <td className="px-6 py-4">
                  <Edit className="cursor-pointer hover:text-blue-500" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showModal && <AddProduct closebtn={handleShow} />}
    </div>
  );
};

export default Page;
