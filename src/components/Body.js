import { useState, useEffect } from "react"
import RestaurantCard, { RestaurantCardVeg } from "./RestaurantCard"
import resList from "../utils/mockResData"
import Shimmer from "./Shimmer"
import { Link } from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus"
import { useContext } from "react"
import UserContext from "../utils/UserContext"

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([])

  const [filteredRestaurant, setFilteredRestaurant] = useState([])

  const [errorMessage, setErrorMessage] = useState("")

  const [searchText, setSearchText] = useState("")

  const onlineStatus = useOnlineStatus()

  const VegRestaurant = RestaurantCardVeg(RestaurantCard)

  const { loggedInUser, setUserName } = useContext(UserContext)

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    setTimeout(() => {
      setListOfRestaurants(resList)
      setFilteredRestaurant(resList)
    }, 1000)
  }

  if (onlineStatus === false)
    return (
      <h1>
        Oops !! It seem's you are Offline . Check your Internet Connection.
      </h1>
    )

  return filteredRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body w-full ">
      <div className="search flex gap-4 m-6 ">
        <input
          type="text"
          className="search-bar border border-[#3b3535] border-solid p-0"
          placeholder="Search Restaurant"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value)
          }}
        />
        <button
          className="p-2 m-2 bg-green-200 rounded-md"
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
          className="search-btn ml-32 p-2 m-2 bg-pink-200 rounded-md"
          onClick={() => {
            const filteredRestaurants = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4
            )
            setFilteredRestaurant(filteredRestaurants)
          }}
        >
          Top Rated Restaurants
        </button>
        <div>
          <label>userName : </label>
          <input
            type="text"
            className="search-bar border border-[#3b3535] border-solid p-0"
            value={loggedInUser}
            onChange={(e) => {
              setUserName(e.target.value)
            }}
          />
        </div>
      </div>
      <div>
        <p className="error-message">{errorMessage}</p>
      </div>
      <div className="res-container flex flex-wrap">
        {filteredRestaurant.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurant/" + restaurant.info.id}
          >
            {restaurant.info.veg ? (
              <egRestaurant resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Body
