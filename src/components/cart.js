import { useDispatch, useSelector } from "react-redux"
import { clearCart } from "../utils/cartSlice"
import ItemList from "../components/ItemList"
const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items)
  const dispatch = useDispatch()
  const handleClearCart = () => {
    dispatch(clearCart())
  }
  return (
    <div className="text-center m-4 p-4">
      <h1 className="text-2xl font-bold ">Cart</h1>
      <div className="w-6/12 m-auto">
        <button
          className="m-2 p-2 rounded text-white bg-black"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
        <ItemList items={cartItems} />
        {cartItems.length === 0 && (
          <div>Cart is Empty ! go and shop somethings....</div>
        )}
      </div>
    </div>
  )
}

export default Cart
