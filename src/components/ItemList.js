import { useDispatch } from "react-redux"
import { IMAGE_ADDRESS } from "../utils/constants"
import { addItems, removeItems } from "../utils/cartSlice"
const ItemList = ({ items }) => {
  const dispatch = useDispatch()
  const handleAddItem = (items) => {
    dispatch(addItems(items))
  }
  const handleRemoveItems = () => {
    dispatch(removeItems(items))
  }
  return (
    <div>
      <div>
        {items.map((items) => (
          <div
            key={items.card.info.id}
            className="p-2 m-2  border-gray-200 border-b-2 text-left flex justify-between"
          >
            <div className="w-9/12">
              <div className="py-2">
                <span>{items.card.info.name}</span>
                <span> - Rs {items.card.info.price / 100}</span>
              </div>
              <p className="text-xs ">{items.card.info.description}</p>
            </div>
            <div className="3/12">
              {items.card.info.imageId ? (
                <div className="relative">
                  <img
                    className="w-20 "
                    src={IMAGE_ADDRESS + items.card.info.imageId}
                  />

                  <button
                    className="rounded bg-black text-xs p-[0.4rem] text-white absolute top-[70%] right-[20%] "
                    onClick={() => handleAddItem(items)}
                  >
                    Add +
                  </button>
                </div>
              ) : (
                <div></div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ItemList
