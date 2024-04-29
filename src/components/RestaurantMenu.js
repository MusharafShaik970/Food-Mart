import Shimmer from "./Shimmer"
import useRestaurantMenu from "../utils/useRestaurantMenu"
import { useParams } from "react-router-dom"
import RestaurantCategory from "./RestaurantCategory"
import { useState } from "react"
const RestaurantMenu = () => {
  const { resId } = useParams()

  const [showItem, setShowItem] = useState(0)

  const resInfo = useRestaurantMenu(resId)

  if (resInfo === null) return <Shimmer />
  const { name, cuisines, avgRating } =
    resInfo?.data?.cards[2]?.card?.card?.info

  const { itemCards } =
    resInfo?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card

  const categories =
    resInfo?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    )

  return (
    <div className="text-center">
      <h1 className="font-bold text-2xl">{name}</h1>
      <h2 className="font-semibold text-lg">{cuisines.join(", ")}</h2>
      <h3 className="font-bold">Rating - {avgRating} stars</h3>
      <div className="w-[50%] mx-auto ">
        {categories.map((category, index) => (
          <div className="bg-gray-50 rounded-lg my-2 py-2 px-6 shadow-sm">
            <RestaurantCategory
              key={category?.card?.card?.title}
              data={category?.card?.card}
              showItems={index === showItem ? true : false}
              setShowItem={() => setShowItem(index)}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default RestaurantMenu
