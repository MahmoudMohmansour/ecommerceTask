import React from 'react'
import { Container, Row } from 'react-bootstrap';
import SubTiltle from '../Utility/SubTitle'
import CategoryCard from './../Category/CategoryCard';
import clothe from "../../images/clothe.png";
import cat2 from "../../images/cat2.png";
import labtop from "../../images/labtop.png";
import sale from "../../images/sale.png";
import pic from "../../images/pic.png";

const HomeCategory = () => {
    return (
        <Container>
            <SubTiltle title="التصنيفات" btntitle="المزيد" pathText="/allcategory" />
            <Row className='my-2 d-flex justify-content-between'>
                <CategoryCard title="اجهزة منزلية" img={clothe} background="#53828b" />
                <CategoryCard title=" كهربية" img={cat2} background="#53828b" />
                <CategoryCard title=" مستحضرات تجميل" img={labtop} background="#53828b" />
                <CategoryCard title=" أطفال" img={sale} background="#53828b" />
                <CategoryCard title=" موبايلات" img={clothe} background="#53828b" />
                <CategoryCard title=" سيارات" img={pic} background="#53828b" />
            </Row>
        </Container>
    )
}

export default HomeCategory