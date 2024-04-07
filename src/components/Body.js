import { useState, useEffect } from "react"
import RestaurantCard from "./RestaurantCard"
import resList from "../utils/mockResData"

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([])

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/mapi/homepage/getCards?lat=17.37240&lng=78.43780"
      )
      const response = await data.json()
      console.log(response)
      console.log(
        response?.data?.success?.cards[1]?.gridWidget?.gridElements
          ?.infoWithStyle?.restaurants
      )
      setListOfRestaurants(
        response.data.success.cards[1].gridWidget.gridElements.infoWithStyle
          .restaurants
      )
    } catch {
      setTimeout(() => {
        setListOfRestaurants(resList)
      }, 100)
      console.log("swiggy api is down")
    }
  }

  if (listOfRestaurants.length === 0) {
    return <h1>Loading .......</h1>
  }

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
