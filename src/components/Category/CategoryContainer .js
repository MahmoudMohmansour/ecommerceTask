import React from 'react'
import { Container, Row } from 'react-bootstrap'
import CategoryCard from './../Category/CategoryCard';
import clothe from "../../images/clothe.png";
import cat2 from "../../images/cat2.png";
import labtop from "../../images/labtop.png";
import sale from "../../images/sale.png";
import pic from "../../images/pic.png";
const CategoryContainer = () => {
    return (
        <Container >
        <div className="admin-content-text mt-2 ">كل التصنيفات</div>
            <Row className='my-2 d-flex justify-content-between'>
                <CategoryCard title="اجهزة منزلية" img={clothe} background="#53828b" />
                <CategoryCard title=" أزياء" img={cat2} background="#53828b" />
                <CategoryCard title=" الصحة والجمال" img={labtop} background="#53828b" />
                <CategoryCard title=" منتجات  الاطفال" img={sale} background="#53828b" />
                <CategoryCard title=" موبايلات" img={clothe} background="#53828b" />
                <CategoryCard title=" المنزل والمكتب" img={pic} background="#53828b" />
                <CategoryCard title=" الكترونيات" img={clothe} background="#53828b" />
                <CategoryCard title=" الكمبيوتر" img={cat2} background="#53828b" />
                <CategoryCard title=" مستلزمات رياضية" img={labtop} background="#53828b" />
                <CategoryCard title=" العاب" img={sale} background="#53828b" />
                <CategoryCard title=" مستلزمات السيارات" img={clothe} background="#53828b" />
                <CategoryCard title=" مستحضرات تجميل" img={pic} background="#53828b" />
                <CategoryCard title="اجهزة منزلية" img={clothe} background="#53828b" />
                <CategoryCard title="اجهزة منزلية" img={cat2} background="#53828b" />
                <CategoryCard title="اجهزة منزلية" img={labtop} background="#53828b" />
                <CategoryCard title="اجهزة منزلية" img={sale} background="#53828b" />
                <CategoryCard title="اجهزة منزلية" img={clothe} background="#53828b" />
                <CategoryCard title="اجهزة منزلية" img={pic} background="#53828b" />
            </Row>
        </Container>
    )
}

export default CategoryContainer