import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

function Product(props) {

    let [data, setData] = useState([]);
    let [minPrice, setMinPrice] = useState(10);
    let [maxPrice, setMaxPrice] = useState(10000);
    let [top, setTop] = useState(10);
    let [sort, setSort] = useState('price');
    let [page, setPage] = useState(1);
    let [loading, setLoading] = useState(false);

    useEffect(() => {
        let url = `http://127.0.0.1:5000/companies/${props.company}/categories/${props.category}/products`;

        const formdata = new FormData();
        formdata.append("minPrice", minPrice);
        formdata.append("maxPrice", maxPrice);
        formdata.append("top", top);
        formdata.append("page", page);
        formdata.append("sort", sort);

        setLoading(true);

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
        
        setLoading(false);
    }, [props.company, props.category, minPrice, maxPrice, top, sort, page]);

    return (
        <>
            <div className="settings">
                <span style={{
                    fontSize: '30px',
                    fontWeight: 'bold',
                    color: '#333'
                }}>{props.company} &gt; {props.category}</span>
                <div className="options">
                    <label>Min Price :</label>
                    <input type="number" value={minPrice} onChange={(e) => setMinPrice(Math.max(1, Math.min(maxPrice-1, e.target.value)))} />

                    <label>Max Price :</label>
                    <input type="number" value={maxPrice} onChange={(e) => setMaxPrice(Math.max(minPrice+1, e.target.value))} />

                    <label>Top :</label>
                    <input type="number" value={top} onChange={(e) => setTop(e.target.value)} />

                    <label>Sort :</label>
                    <select value={sort} onChange={(e) => setSort(e.target.value)}>
                        <option value="price">Price</option>
                        <option value="rating">Rating</option>
                        <option value="discount">Discount</option>
                    </select>
                </div>
            </div>
            <div className="ProductContainer">
                {loading && <span>Loading...</span> || data.map((product, index) => {
                    return <ProductCard key={index} product={product} />
                })}
            </div>
        </>
    );
}

export default Product;