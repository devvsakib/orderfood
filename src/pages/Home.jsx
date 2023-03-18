import { useEffect, useState } from "react"
import HeroSection from "../components/Header/HeroSection"
import { menu } from "./data.json"

const Home = () => {
  const [foodType, setFoodType] = useState("Ben & Jerry's")
  const [data, setData] = useState({})
  const [isloading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setData(menu)
      setLoading(false)
    }, 2000);
  }, [])


  const sortByHighPrice = () => {
    const sortedMenu = { ...menu }; // create a copy of the menu object
    sortedMenu.categories = sortedMenu.categories.map((category) => {
      const sortedProducts = category.products.sort((a, b) => b.price - a.price);
      return { ...category, products: sortedProducts }; // create a copy of the category object with sorted products
    });
    setData(sortedMenu);
  }

  const sortByLowPrice = () => {
    const sortedMenu = { ...menu }; // create a copy of the menu object
    sortedMenu.categories = sortedMenu.categories.map((category) => {
      const sortedProducts = category.products.sort((a, b) => a.price - b.price);
      return { ...category, products: sortedProducts }; // create a copy of the category object with sorted products
    });
    setData(sortedMenu);
  }


  return (
    <>
      <HeroSection />
      <div className="flex items-center mt-10 ml-5 md:ml-0">
        <select name="Test" className="bg-white/30 px-3 md:px-10 py-3 rounded-md selection:bg-slate-700 outline-none" id="">
          {
            isloading ? <option>Loading...</option> :
              data.categories?.map((cate, idx) => (
                <option className="backdrop-blur-sm bg-black block" value={cate.name_json.english} key={idx}
                  onClick={() => setFoodType(cate.name_json.english)}
                >{cate.name_json.english}</option>
              ))
          }
        </select>
        <div className="flex items-center">
          <button className="of-btn m-0" onClick={() => sortByHighPrice()}>$High</button>
          <button className="of-btn" onClick={() => sortByLowPrice()}>$Low</button>
        </div>
      </div>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-10 px-5 md:px-0">
        {
          isloading ? "Loading..." :
            data.categories?.map(e => (
              e.name_json.english === foodType ?
                e.products.map((item, idx) => (
                  <div className="bg-white/10 rounded-md p-5" key={idx}>
                    <h2 className="font-semibold  text-xl">{item.name_json.english}</h2>
                    <p className="my-3">{item.description_json.english ? item.description_json.english : "No description Found"}</p>
                    <p><b>${item.price}</b></p>
                    {
                      item.choice.length > 0 ? <button className="of-cardbtn" onClick={() => getvariant(item.choice)}>See Variant</button> : null
                    }
                  </div>
                ))
                : null
            ))
        }
      </div>
    </>
  )
}

export default Home