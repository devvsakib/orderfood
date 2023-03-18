import React from 'react'

const About = () => {
    return (
        <div>
            <h2 className='text-6xl text-right opacity-40'>About</h2>
            <div className='flex flex-col gap-5 text-xl px-10'>
                <p>Welcome to <b className='of-btn -mx-5'>OrderFood</b>, <br /> The premier online destination for ordering the best food in town! Our restaurant has been serving up delicious meals for over 20 years, and we're excited to now offer our menu online for your convenience.
                </p>
                <p>
                    Our menu features a wide variety of dishes, including classic favorites like burgers, pizza, and pasta, as well as some unique and creative dishes you won't find anywhere else. We use only the freshest ingredients and prepare every dish to order, ensuring that you get a delicious and satisfying meal every time.
                </p>

                <p>
                    At <b className='of-btn -mx-5'>OrderFood</b>, we're proud of our commitment to quality and customer service. Our team of experienced chefs and friendly staff are dedicated to making sure that every customer has a great experience, whether they're dining in our restaurant or ordering online.
                </p>
                <p>
                    Thank you for choosing <b className='of-btn -mx-5'>OrderFood</b> for your next meal. We look forward to serving you!</p>
            </div>
        </div>
    )
}

export default About