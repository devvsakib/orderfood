import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const menu = [{ name: "Home", link: "/" }, { name: "About", link: "/about" }]
  const [logged, setLogged] = useState(true);
  return (
    <header className='py-5 flex items-center px-5 justify-between'>
      <div className='logo'>
        <h2 className='text-2xl font-bold select-none'>
          <Link to={'/'}>OrderRecipe</Link>
        </h2>
      </div>
      <nav className="flex gap-5 font-semibold">
        {
          menu.map((menu, idx) => (
            <Link key={idx} to={menu.link}>{menu.name}</Link>
          ))
        }
        {
          logged ?
            <Link to={"/login"}>Login</Link>
            :
            <Link to={"/register"}>Register</Link>
        }
      </nav>
    </header>
  )
}

export default Header