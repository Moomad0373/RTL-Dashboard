import React, { useState, useEffect } from "react";
import NotFound from "../Home/Components/NotFound";
import DeleteModal from "../../Modals/DeleteModal";
import EditModal from "../../Modals/EditModal";
import InfoModal from "../../Modals/InfoModal";

const Products = () => {
    const [modalType, setModalType] = useState(null);
    const [allProducts, setAllProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);

    useEffect(() => {
        fetch("http://localhost:8000/api/products/", {
            method: "GET",
            headers: {
                "content-type": "application/json",
            },
        })
            .then((response) => response.json())
            .then((products) => setAllProducts(products.reverse()));
    }, []);

    const openModal = (type, product) => {
        setModalType(type);
        setSelectedProduct(product);
    };

    const closeModal = () => {
        setModalType(null);
        setSelectedProduct(null);
    };

    return (
        <>
            <section className="space-y-10">
                <h1 className="text-2xl font-bold py-5">افزودن محصول جدید</h1>
                <div className="bg-gray-100 rounded-md">
                    <form className="flex flex-wrap px-3 py-6 justify-between gap-y-4 except-last:w-[49%] except-last:py-3 except-last:px-2 except-last:bg-gray-500 except-last:rounded-md except-last:outline-none">
                        <input type="text" placeholder="اسم محصول" />
                        <input type="text" placeholder="قیمت محصول" />
                        <input type="text" placeholder="موجودی محصول" />
                        <input type="text" placeholder="آدرس تصویر محصول" />
                        <input type="text" placeholder="میزان محبوبیت محصول" />
                        <input type="text" placeholder="میزان فروش محصول" />
                        <input type="text" placeholder="تعداد رنگ بندی محصول" />
                        <button
                            type="submit"
                            className="bg-blue-800 px-5 py-2 rounded-md text-white"
                        >
                            ثبت محصول
                        </button>
                    </form>
                </div>

                {allProducts.length ? (
                    <div className="bg-gray-100 px-2 py-3">
                        <table className="w-full">
                            <thead>
                                <tr className="text-center">
                                    <th>عکس</th>
                                    <th>اسم</th>
                                    <th>قیمت</th>
                                    <th>موجودی</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {allProducts.map((product) => (
                                    <tr
                                        className="except-last:w-1/6 text-center"
                                        key={product.id}
                                    >
                                        <td>
                                            <img
                                                src={product.img}
                                                alt="product image"
                                                className="w-16 h-16 mt-5 mx-auto"
                                            />
                                        </td>
                                        <td>{product.title}</td>
                                        <td>{product.price} تومان</td>
                                        <td>{product.count}</td>
                                        <td className="child:mx-2 text-center w-2/6">
                                            <button
                                                onClick={() =>
                                                    openModal("info", product)
                                                }
                                                className="bg-blue-800 px-5 py-2 text-white rounded-md"
                                            >
                                                جزئیات
                                            </button>
                                            <button
                                                onClick={() =>
                                                    openModal("delete", product)
                                                }
                                                className="bg-blue-800 px-5 py-2 text-white rounded-md"
                                            >
                                                حذف
                                            </button>
                                            <button
                                                onClick={() =>
                                                    openModal("edit", product)
                                                }
                                                className="bg-blue-800 px-5 py-2 text-white rounded-md"
                                            >
                                                ویرایش
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                ) : (
                    <NotFound />
                )}
            </section>

            {modalType === "info" && (
                <InfoModal data={selectedProduct} onClose={closeModal} />
            )}
            {modalType === "delete" && (
                <DeleteModal data={selectedProduct} onClose={closeModal} />
            )}
            {modalType === "edit" && (
                <EditModal data={selectedProduct} onClose={closeModal} />
            )}
        </>
    );
};

export default Products;
