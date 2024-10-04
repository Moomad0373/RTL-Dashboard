import React from "react";
import ReactDOM from "react-dom";

const DeleteModal = ({ onClose, data }) => {
    const deleteProduct = () => {
        const productID = data.id
        fetch(`http://localhost:8000/api/products/${productID}`, {
            method: "DELETE",
            headers: {
               "content-Type": "application/json"
            }
        }).then(res => res.json()).then(result => {

            console.log(data.id)
            onClose()
        })
    }
    return ReactDOM.createPortal(
        <div className="fixed inset-0 flex items-center justify-center bg-black/70 z-50">
            <div className="bg-white p-6 rounded-md shadow-md">
                <div className="border-b-2">
                    <p className="text-2xl mb-4">آیا از حذف مطمئن هستید؟</p>
                </div>
                <div className="flex gap-x-4 mt-8">
                    <button onClick={deleteProduct} className="bg-red-800 text-white px-4 py-2">حذف</button>
                    <button
                        onClick={onClose}
                        className="bg-gray-800 text-white px-4 py-2"
                    >
                        لغو
                    </button>
                </div>
            </div>
        </div>,
        document.getElementById("modals")
    );
};

export default DeleteModal;
