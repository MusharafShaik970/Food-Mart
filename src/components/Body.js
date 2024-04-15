import { useState, useEffect } from "react"
import RestaurantCard from "./RestaurantCard"
import resList from "../utils/mockResData"
import Shimmer from "./Shimmer"

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([])

  const [filteredRestaurant, setFilteredRestaurant] = useState([])

  const [errorMessage, setErrorMessage] = useState("")

  const [searchText, setSearchText] = useState("")

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    // try {
    //   const data = await fetch(
    //     "https://www.swiggy.com/mapi/homepage/getCards?lat=17.37240&lng=78.43780"
    //   )
    //   const response = await data.json()
    //   console.log(response)
    //   console.log(
    //     response?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle?.restaurants
    //   )
    //   setListOfRestaurants(
    //     response.data.success.cards[1].gridWidget.gridElements.infoWithStyle
    //       .restaurants
    //   )
    // } catch {
    setTimeout(() => {
      setListOfRestaurants(resList)
      setFilteredRestaurant(resList)
    }, 1000)
    console.log("swiggy api is down")
  }
  // }

  return filteredRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="search">
        <input
          type="text"
          className="search-bar"
          placeholder="Search Restaurant"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value)
          }}
        />
        <button
          onClick={() => {
            const filteredRestaurants = listOfRestaurants.filter((res) =>
              res?.info?.name.toLowerCase().includes(searchText.toLowerCase())
            )

            if (filteredRestaurants.length === 0) {
              setErrorMessage(
                "The Restaurant you are trying to find does not exist"
              )
              setFilteredRestaurant(listOfRestaurants)
            } else {
              setFilteredRestaurant(filteredRestaurants)
              setErrorMessage("")
            }
          }}
        >
          search
        </button>
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
      <div>
        <p className="error-message">{errorMessage}</p>
      </div>
      <div className="res-container">
        {filteredRestaurant.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  )
}

export default Body
