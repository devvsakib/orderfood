import { useEffect, useState } from "react"
import HeroSection from "../components/Header/HeroSection"
import Cart from "../components/Main/Cart"
import { menu } from "./data.json"

const getPrice = () => {
  if (localStorage.getItem("cartItem")) {
    const items = JSON.parse(localStorage.getItem("cartItem"))
    return items
  }
}

const Home = () => {
  const [open, setOpen] = useState(false)
  const [foodType, setFoodType] = useState("Ben & Jerry's")
  const [data, setData] = useState(menu)
  const [isloading, setLoading] = useState(false)
  const [cartItem, setCartItem] = useState(getPrice() || [])
  const [totalPrice, setTotalPrice] = useState(0)
  const [addedItem, setAddedItem] = useState(false)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setData(menu)
      setLoading(false)
    }, 0);
  }, [])

  const addItem = (item) => {
    const newCartItem = [...cartItem]
    // if (newCartItem.find((i) => i.id === item.id)) {
    //   return alert("Item already added")
    // }
    newCartItem.push(item)
    setTotalPrice(total().toFixed(2))
    setCartItem(newCartItem)
    localStorage.setItem("cartItem", JSON.stringify(newCartItem))
  }
  const isItemSaved = (id) => {
    const savedItem = cartItem.find((item) => item.id === id)
    if (savedItem) {
      return true
    }
    return false
  }

  console.log(isItemSaved);
  useEffect(() => {
    const cartItm = localStorage.getItem("cartItem")
    if (cartItm) {
      setCartItem(JSON.parse(cartItm))
    }
    const t = total().toFixed(2)
    setTotalPrice(t)
  }, [cartItem])

  const total = () => {
    const t = cartItem.reduce((acc, item) => acc + item.price, 0)
    return t
  }

  const sortByHighPrice = () => {
    const sortedMenu = { ...menu };
    sortedMenu.categories = sortedMenu.categories.map((category) => {
      const sortedProducts = category.products.sort((a, b) => b.price - a.price);
      return { ...category, products: sortedProducts };
    });
    setData(sortedMenu);
  }

  const sortByLowPrice = () => {
    const sortedMenu = { ...menu };
    sortedMenu.categories = sortedMenu.categories.map((category) => {
      const sortedProducts = category.products.sort((a, b) => a.price - b.price);
      return { ...category, products: sortedProducts };
    });
    setData(sortedMenu);
  }


  return (
    <>
      {
        open && <Cart />
      }
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
        <p><small className="of-btn -mr-5">Total Price</small>: <b>${totalPrice}</b></p>
        <p><small className="of-btn -mr-5" onClick={() => setOpen(!open)}>Cart</small>: <b>{cartItem.length}</b></p>
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
                    <div>
                      {cartItem && isItemSaved(item.id) ? <button className="of-btn -ml-5 -mb-10" disabled="true">Added</button>
                        :
                        <button className="of-btn -ml-5 -mb-10" onClick={() => addItem(item)} >Add to cart</button>
                      }
                    </div>
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