import React from 'react'

const Cart = () => {
    const cart = JSON.parse(localStorage.getItem('cartItem'))

    const deleteItem = (id) => {
        const newCart = cart.filter((item) => item.id !== id)
        localStorage.setItem('cartItem', JSON.stringify(newCart))
    }
    
    return (
        <div className='backdrop-blur-[2px] absolute right-0 px-5 flex flex-col  gap-5 bg-black/20'>
            {
                cart ? cart?.map((item, idx) => (
                    <div key={idx} className=''>
                        <h2>{item.name_json.english}</h2>
                        <h2>{item.price}</h2>
                        <div>
                            <button>+</button>
                            <span>1</span>
                            <button>-</button>
                        </div>
                        <div>
                            <button className='of-btn -ml-5' onClick={()=> deleteItem(item.id)}>Delete</button>
                        </div>
                    </div>
                ))
                    : <h1>Cart is empty</h1>
            }
        </div>
    )
}

export default Cart