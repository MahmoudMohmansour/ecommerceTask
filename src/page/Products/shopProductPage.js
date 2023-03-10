import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import CategoryHeader from '../../components/Category/CategoryHeader'
import CardProductsContainer from '../../components/Products/CardProuductContainer'
import SearchCountResult from '../../components/Utility/searchCountResult'
import SideFilter from '../../components/Utility/sideFilter'

const ShopProductsPage = () => {
    return (
        <div style={{ minHeight: '670px' }}>
            <CategoryHeader />
            <Container>
                <SearchCountResult title="400 نتجية بحث" />
                <Row className='d-flex flex-row'>
                    <Col sm="2" xs="2" md="1" className='d-flex'>
                        <SideFilter />
                    </Col>
                    <Col sm="10" xs="10" md="11">
                         <CardProductsContainer title="" btntitle=""/>
                    </Col>
                </Row>
            </Container>
          
        </div>
    )
}

export default ShopProductsPage