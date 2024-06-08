import React, { useState } from 'react';
import './AddProduct.css';

const AddProduct = () => {
    const [image, setImage] = useState(false);
    const [productDetails, setProductDetail] = useState({
        name: "",
        image: "",
        category: "",
        new_price: "",
        old_price: ""
    });

    const imageHandler = (e) => {
        setImage(e.target.files[0]);
    };

    const changeHandler = (e) => {
        setProductDetail({ ...productDetails, [e.target.name]: e.target.value });
    };

    const Add_Product = async () => {
        console.log(productDetails);
        let responseData;
        let product = productDetails;
        let form = new FormData(); // Corrected syntax
        form.append('product', image);
        await fetch('http://localhost:4000/upload', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
            },
            body: form,
        })
            .then((res) => res.json())
            .then((data) => {
                responseData = data;
            });

        if (responseData.success) {
            product.image = responseData.image_url;
            console.log(product);
            await fetch('http://localhost:4000/addproduct', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(product),
            })
                .then((resp) => resp.json())
                .then((data) => {
                    data.success ? alert('Product added') : alert('Failed');
                });
        }
    };

    return (
        <div className="addproduct">
            <div className="addproduct-itemfield">
                <p>Product title</p>
                <input value={productDetails.name} onChange={changeHandler} type="text" name="name" placeholder="Type here" />
            </div>
            <div className="addproduct-price">
                <div className="addproduct-itemfield">
                    <p>Price</p>
                    <input value={productDetails.old_price} onChange={changeHandler} type="text" name="old_price" placeholder="Type here" />
                </div>
                <div className="addproduct-itemfield">
                    <p>Offer Price</p>
                    <input value={productDetails.new_price} onChange={changeHandler} type="text" name="new_price" placeholder="Type here" />
                </div>
            </div>
            <div className="addproduct-itemfield">
                <p>Product Category</p>
                <select value={productDetails.category} onChange={changeHandler} name="category" className="add-product-selector">
                    <option value="women">Women</option>
                    <option value="men">Men</option>
                    <option value="kid">Kidn</option>
                </select>
            </div>

            <div className="addproduct-itemfield">
                <label htmlFor="file-input">
                    {image ? (
                        <img src={URL.createObjectURL(image)} alt="product" style={{ width: '100px', height: '100px' }} />
                    ) : (
                        <h1 className="upload">Upload Image</h1>
                    )}
                    <input type="file" name="image" id="file-input" hidden onChange={imageHandler} />
                </label>
                <button onClick={Add_Product} className="addproduct-btn">
                    ADD
                </button>
            </div>
        </div>
    );
};

export default AddProduct;
