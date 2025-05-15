interface Close{
  closebtn:()=>boolean
}
const AddProduct = ({closebtn}:Close) => {

  return (

        <div className="fixed inset-0 z-50 flex bg-opacity-50 items-center justify-center  bg-[#0000008D] bg-opacity-50">
          <div className="bg-white rounded-xl w-full max-w-md p-6 space-y-4 text-right">
            <h2 className="text-xl font-bold text-gray-800 mb-4">إضافة منتج جديد</h2>

            <input
              name="name"
              type="text"
              placeholder="اسم المنتج"
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
         
            />
            <input
              name="color"
              type="text"
              placeholder="اللون"
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
         
            />
            <input
              name="category"
              type="text"
              placeholder="التصنيف"
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
           
            />
            <input
              name="price"
              type="text"
              placeholder="السعر"
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
       
            />

            <div className="flex justify-between mt-6">
              <button
             
                className="bg-[#925FE2] text-white px-4 py-2 rounded-lg hover:bg-green-600"
              >
                حفظ
              </button>
              <button
                onClick={closebtn}
                className="bg-gray-300 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-400"
              >
                إغلاق
              </button>
            </div>
          </div>
          </div>
 
  );
};

export default AddProduct;
