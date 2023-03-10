import React from 'react'
import { Container,Row ,Col} from 'react-bootstrap'

const CategoryHeader = () => {
    return (
        <div className="cat-header">
      <Container>
        <Row>
          <Col className="d-flex justify-content-start py-2 flex-wrap">
            <div className="cat-text-header ">الكل</div>
            <div className="cat-text-header">الكترونيات</div>
            <div className="cat-text-header">ملابس</div>
            <div className="cat-text-header"> كهربيه</div>
            <div className="cat-text-header">العاب اطفال</div>
            <div className="cat-text-header">ساعات</div>
            <div className="cat-text-header">أجهزة منزلية</div>
            <div className="cat-text-header">بقالة</div>
            <div className="cat-text-header">مستلزمات رياضية</div>
            <div className="cat-text-header">مستلزمات السيارات</div>
            <div className="cat-text-header">أقسام أخرى</div>
          </Col>
        </Row>
      </Container>
    </div>
    )
}

export default CategoryHeader