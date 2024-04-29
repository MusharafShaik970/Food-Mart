import { useState } from "react"
import ItemList from "./ItemList"

const RestaurantCategory = ({ data, showItems, setShowItem }) => {
  const handleClick = () => {
    setShowItem()
  }
  return (
    <div className="">
      <div
        className="flex justify-between mb-4 cursor-pointer"
        onClick={() => {
          handleClick()
        }}
      >
        <span className="font-semibold text-lg">
          {data.title} ({data?.itemCards.length})
        </span>
        <span>🔽</span>
      </div>
      {showItems && <ItemList items={data.itemCards} />}
    </div>
  )
}

export default RestaurantCategory
