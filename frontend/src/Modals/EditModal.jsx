import React from "react";
import ReactDOM from "react-dom";

const EditModal = ({ onClose }) => {
    return ReactDOM.createPortal(
        <div className="fixed inset-0 flex items-center justify-center bg-black/70 z-50">
            <div className="bg-white w-96 p-6">
                <p className="text-xl">اطلاعات جدید را وارد کنید</p>
                <form className="except-last:bg-gray-200 except-last:w-full except-last:py-2 except-last:ps-4 space-y-3">
                    <input
                        type="text"
                        placeholder="نام جدید"
                    />
                    <input
                        type="text"
                        placeholder="قیمت جدید"
                    />
                    <input
                        type="text"
                        placeholder="موجودی جدید"
                    />
                    <input
                        type="text"
                        placeholder="محبوبیت جدید"
                    />
                    <button
                        className="bg-blue-800 px-4 py-2 text-white"
                        onClick={onClose}
                    >
                        ثبت اطلاعات جدید
                    </button>
                </form>
            </div>
        </div>,
        document.getElementById("modals")
    );
};

export default EditModal;
