import React from 'react'
import './Description.css'
const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews (200)</div>
        </div>
        <div className="descriptionbox-description">
            <p>
An e-commerce platform is a digital marketplace where businesses and consumers engage in buying and selling goods and services over the internet. Here's a detailed description of an e-commerce platform:
Online Storefront: An e-commerce platform provides a virtual storefront where businesses can showcase their products or services to potential customers. This storefront typically includes product listings, images, descriptions, prices, and other relevant information to help shoppers make informed purchasing decisions.</p>
       <p>Product Catalog Management: E-commerce platforms offer tools for businesses to manage their product catalogs efficiently. This includes adding new products, updating existing ones, categorizing products into different sections or categories, setting prices, managing inventory levels, and more.

Online Transactions: One of the key features of e-commerce platforms is the ability to facilitate online transactions securely. These platforms integrate payment gateways that allow customers to make purchases using various payment methods such as credit/debit cards, digital wallets, bank transfers, or other online payment systems.</p>
        </div>
    </div>
  )
}

export default DescriptionBox