import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

function ImageCarousel() {
  return (
    <>
    <Carousel className='container'>
      <Carousel.Item interval={1500}>
        <img style={{width:'100%',height:'500px',borderRadius:'20px'}} src="https://images.pexels.com/photos/2294342/pexels-photo-2294342.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
      </Carousel.Item>
      <Carousel.Item interval={1500}>
        <img style={{width:'100%',height:'500px',borderRadius:'20px'}} src="https://img.freepik.com/free-photo/shirt-mockup-concept-with-plain-clothing_23-2149448751.jpg?w=1060&t=st=1701546357~exp=1701546957~hmac=064b4d68fd41bdb5f61564f54567d8603063a02d63b7644008e1e8934d0d9469" alt="" />
      </Carousel.Item>
      <Carousel.Item interval={1500}>
      <img style={{width:'100%',height:'500px',borderRadius:'20px'}} src="https://images.pexels.com/photos/581087/pexels-photo-581087.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
      </Carousel.Item>
    </Carousel>
    </>
  )
}

export default ImageCarousel