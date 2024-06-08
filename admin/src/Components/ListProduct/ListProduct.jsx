import React, { useEffect, useState } from 'react';
import './ListProduct.css';

const ListProduct = () => {
    const [allProducts, setAllProducts] = useState([]);

    const fetchInfo = async () => {
        try {
            const response = await fetch('http://localhost:4000/allproducts');
            if (!response.ok) {
                throw new Error('Failed to fetch products');
            }
            const data = await response.json();
            setAllProducts(data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchInfo();
    }, []);

    const removeProduct = async (id) => {
        try {
            const response = await fetch("http://localhost:4000/removeproduct", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ id: id })
            });

            if (!response.ok) {
                throw new Error('Failed to remove product');
            }

            await fetchInfo();
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className='list-product'>
            <h1>All Products List</h1>
            <div className="listproduct-format-main">
                <p>Products</p>
                <p>Title</p>
                <p>OldPrice</p>
                <p>NewPrice</p>
                <p>Category</p>
                <p>Remove</p>
            </div>
            <div className="listproduct-allproducts">
                {allProducts.map((product, index) => (
                    <div key={index} className='listproduct-format-main listproduct-format'>
                        <img src="product.image_url" alt="" className='listproduct-product-icon'/>
                        <p>{product.name}</p>
                        <p>${product.old_price}</p>
                        <p>${product.new_price}</p>
                        <p>{product.category}</p>
                        <p onClick={() => removeProduct(product.id)} className='listproduct-remove-icon'>X</p>
                        
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ListProduct;
