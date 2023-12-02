import React from 'react'
import { Link } from 'react-router-dom'


function Shop() {
  return (
    <div className='d-flex justify-content-center flex-column align-items-center' style={{height:"90vh"}}>
        <img src="https://i.pinimg.com/originals/b9/88/b7/b988b7c3e84e1f83ef9447157831b460.gif" alt="" />
        <h1 className='mb-5'>Order Placed!!</h1>
        <Link className='' style={{textDecoration:'none',color:'black',fontWeight:'bold',fontSize:'25px'}} to={'/'}> <i class="fa-solid fa-shirt"></i>{" "}TeeRex </Link>
        <p className='text-center'> click to exit</p>
    </div>
  )
}

export default Shop