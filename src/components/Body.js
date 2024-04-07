import { useState } from "react"
import RestaurantCard from "./RestaurantCard"
import resList from "../utils/mockResData"

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(resList)
  return (
    <div className="body">
      <div className="search">
        <button
          className="search-btn"
          onClick={() => {
            const filteredRestaurants = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4
            )
            setListOfRestaurants(filteredRestaurants)
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  )
}

export default Body
