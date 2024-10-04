import React from "react";
import ReactDOM from "react-dom";

const InfoModal = ({ onClose, data }) => {
    return ReactDOM.createPortal(
        <div className="fixed inset-0 flex items-center justify-center bg-black/70 z-50">
            <div className="bg-white p-6 w-96">
                <table className="text-center w-full">
                    <thead>
                        <tr>
                            <th>اسم</th>
                            <th>قیمت</th>
                            <th>محبوبیت</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{data.title}</td>
                            <td>{data.price} تومان</td>
                            <td>{data.count}</td>
                        </tr>
                    </tbody>
                </table>
                <button
                    className="mt-5 ms-32 bg-blue-800 text-white px-5 py-2"
                    onClick={onClose}
                >
                    بستن
                </button>
            </div>
        </div>,
        document.getElementById("modals")
    );
};

export default InfoModal;
