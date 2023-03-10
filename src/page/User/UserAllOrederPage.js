import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import UserSideBar from '../../components/User/UserSideBar'
import UserAllOrder from '../../components/User/UserAllOrder'
const UserAllOrdersPage = () => {
    return (
        <Container >
            <Row className='py-3'>
                <Col sm="4" xs="4" md="3" className='margin-sidebar'>
                    <UserSideBar />
                </Col>

                <Col sm="8" xs="8" md="9">
                  <UserAllOrder />
                </Col>
            </Row>
        </Container>
    )
}


export default UserAllOrdersPage