import React from 'react'
import Slider from '../../components/Home/Slider';
import HomeCategory from '../../components/Home/HomeCategory';
import CardProuductContainer from '../../components/Products/CardProuductContainer';
import DiscountSection from '../../components/Home/DiscountSection';

 const HomePage = () => {
  return (
    <div className='font'>
        
        <Slider/>
        <HomeCategory/>
        <CardProuductContainer title="الأكثر مبيعا" btntitle="المزيد" pathText="/products"/>
        <DiscountSection/>
        <CardProuductContainer title=" أحدث الأزياء" btntitle="المزيد" pathText="/products"/>
        


    </div>
  )
}
export default HomePage;
