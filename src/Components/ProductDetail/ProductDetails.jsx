import React from 'react'
import './ProductDetails.css'

function ProductDetails() {
    return (

        <div className="prod-wrapper">
            <div className="prod-ImgContainer">
                <img src="https://cdn.shopify.com/s/files/1/0550/1471/9545/products/9-3-21-PartII177236_360x.jpg?v=1634455955" alt="" />
            </div>
            <div className="prod-InfoContainer">
                <h1>Denim Jumpsuit</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

                </p>
                <span>$ 20.0</span>
                <div className="filter-container">
                    <div className="prod-filter">
                        <span>Color</span>
                        <div className="filter-color" id='black'>
                        </div>
                        <div className="filter-color" id='blue'>
                        </div>
                        <div className="filter-color" id='grey'>
                        </div>
                    </div>
                    <div className="prod-filter">
                        <span>Size</span>
                        <select name="" id="">
                             <option value="">XS</option>
                             <option value="">S</option>
                             <option value="">M</option>
                             <option value="">L</option>
                             <option value="">XL</option>
                        </select>
                    </div>
                </div>
                <div className="add-container">
                    <div className="amount-container">
                        <i className='fa fa-plus'></i>
                        <span>1</span>
                        <i className='fa fa-minus'></i>
                    </div>
                    <button className=''>ADD TO CART</button>
                </div>
            </div>
        </div>

    )
}

export default ProductDetails