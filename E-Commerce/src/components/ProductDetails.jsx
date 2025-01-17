import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";

import { setSelectedProduct } from '../redux/slices/productSlices';
import style from "../css/product-detail.module.css"
function ProductDetails() {
    const { id } = useParams();
    const { products, selectedProduct } = useSelector((store) => store.product);
    const { title, image, price, description } = selectedProduct
    const dispatch = useDispatch();
    const [count, setCount] = useState(0);
    useEffect(() => {
        getProductById();
    }, [id, products]);

    const getProductById = () => {
        products && products.map((product) => {
            if (product.id === parseInt(id)) {
                dispatch(setSelectedProduct(product));
            }
        })
    };

    return (
        <div className={style.prodcutDetailContainer}>
            <div>
                <img src={image} className={style.productDetailImageContainer} alt="image" />
            </div>
            <div className={style.productDetailTextContainer}>
                <h2>{title}</h2>
                <p>{description}</p>
                <span className={style.productDetailPrice}>{price} $</span>
                <div className={style.productDetailIcons}>
                    <CiCirclePlus onClick={() => setCount(count + 1)} />
                    <span>{count}</span>
                    <CiCircleMinus onClick={() => setCount(count - 1)} />
                </div>
                <button className={style.productDetailBasketBtn}>Add to Basket</button>
            </div>


        </div>
    );
}

export default ProductDetails;
