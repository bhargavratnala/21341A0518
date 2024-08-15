function ProductCard(props){

    console.log(props.product);

    return (
        <div className="productCard">
            <h2>{props.product.productName}</h2>
            <div className="productDetails">
                <p>price : {props.product.price}</p>
                <p>Discount : {props.product.discount}</p>
            </div>
            <div className="productDetails">
                <p>Rating : <br/>{ props.product.rating }</p>
                <p>Availabe : <br/> { props.product.availability }</p>
            </div>
        </div>
    )
}

export default ProductCard;