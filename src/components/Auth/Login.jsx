import { Link } from 'react-router-dom'

const Login = () => {
    const submitLoginHandle = (e) => {
        e.preventDefault();
        console.log(e);
    }
    return (
        <div className='w-4/12 mt-20 mx-auto text-center h-[100%]'>
            <h2 className='mb-5 font-semibold text-xl'>Login</h2>
            <form onSubmit={submitLoginHandle}
                className="flex flex-col gap-5">
                <input className='of-input' type="text" placeholder='Username' />
                <input className='of-input' type="password" placeholder='Password' />
                <div className="backdrop-blur-[2px] mt-5 border rounded-md bg-black/10">
                    <button className="of-btn" type='submit'>Login</button>
                </div>
            </form>
            <div className='mt-5'>
                <p>Don't Have an Account? <Link to={'/register'} className="font-semibold">Register</Link></p>
            </div>
        </div>
    )
}

export default Login