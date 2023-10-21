import React from 'react'
import  './Home.css'

function Home(){
    return(
        <div>
            <h2>This is Home</h2>

            <div className='cart-wrapper'>
                <div className='img-wrapper'>
                    <img src='https://clipart.info/images/ccovers/1503496384iphone-png-mobile-clipart.png'/>
                </div>
                <div className='text-wrapper'>
                    <span>I-phone</span>
                    <br></br>
                    <span>Price- $1000</span>

                </div>
                <div className='btn-wrapper'>
                    <button>Add to cart</button>
                </div>

            </div>
        </div>
    )
}
export default Home;