import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

function Product(props) {

    let [data, setData] = useState([]);

    useEffect(() => {
        let url = `http://127.0.0.1:5000/companies/${props.company}/categories/${props.category}/products`;

        const formdata = new FormData();
        formdata.append("minPrice", "10");
        formdata.append("maxPrice", "10000");
        formdata.append("top", "10");
        formdata.append("page", "1");

        fetch(url, {
            method: 'POST',
            body: formdata
        })
            .then(response => response.json())
            .then(data => {
                setData(data);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }, [props.company, props.category])

    return (
        <>
            <span style={{
                fontSize: '30px',
                fontWeight: 'bold',
                color: '#333'
            }}>{props.company} &gt; {props.category}</span>
            <div className="ProductContainer">
                {data.map((product, index) => {
                    return <ProductCard key={index} product={product} />
                })}
            </div>
        </>
    );
}

export default Product;