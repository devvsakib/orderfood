import { Link } from 'react-router-dom'

const Register = () => {
    const submitRegisterHandle = (e) => {
        e.preventDefault();
        console.log(e);
    }
    return (
        <div className='w-4/12 mt-20 mx-auto text-center h-[100%]'>
            <h2 className='mb-5 font-semibold text-xl'>Register</h2>
            <form onSubmit={submitRegisterHandle}
                className="flex flex-col gap-5">
                <input className='of-input' type="email" placeholder='Enter Email' />
                <input className='of-input' type="text" placeholder='Enter Username' />
                <input className='of-input' type="password" placeholder='Enter Password' />
                <div className="backdrop-blur-[2px] mt-5 border rounded-md bg-black/10">
                    <button className="of-btn" type='submit'>Register</button>
                </div>
            </form>
            <div className='mt-5'>
                <p>Already Have an Account? <Link to={'/login'} className="font-semibold">Login</Link></p>
            </div>
        </div>
    )
}

export default Register