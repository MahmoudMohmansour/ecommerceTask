import React from 'react'
import { Container } from 'react-bootstrap'
import CategoryHeader from '../../components/Category/CategoryHeader'
import CardProductsContainer from '../../components/Products/CardProuductContainer'
import ProductDetalis from '../../components/Products/productDetails'


const ProductDetalisPage = () => {
    return (
        <div style={{ minHeight: '670px' }}>
            <CategoryHeader />
            <Container>
                <ProductDetalis />
                
                <CardProductsContainer title="منتجات قد تعجبك" />
            </Container>
        </div>
    )
}

export default ProductDetalisPage;