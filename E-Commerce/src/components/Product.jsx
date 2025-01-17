
import { useNavigate } from "react-router-dom"
import style from "../css/product.module.css"
function Product({ product }) {
    const { id, title, image, price } = product
    const navigate = useNavigate();
    return (
        <div className={style.productContainer}>
            <div>
                <div className={style.imageContainer}>
                    <img src={image} alt="image" className={style.productImage} />
                </div>
                <p className={style.productText}>{title}</p>
            </div>
            <div>
                <h3 className={style.productText}>{price} $</h3>
                <button className={style.detailBtn} onClick={() => navigate(`/product-details/${id}`)}>Detail</button>
            </div>
        </div>
    )
}

export default Product