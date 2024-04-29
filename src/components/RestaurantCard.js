import { IMAGE_ADDRESS } from "../utils/constants"

const RestaurantCard = ({ resData }) => {
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } =
    resData?.info
  return (
    <div className="res-card w-48 p-2 m-4 bg-[#f0f0f0] rounded-md">
      <div className="res-image ">
        <img
          className="w-44 h-32 rounded-lg"
          src={IMAGE_ADDRESS + cloudinaryImageId}
        />
      </div>
      <div className="res-details flex flex-col">
        <h3 className="font-bold text-md mb-4">{name}</h3>
        <h4 className="">{cuisines.join(", ")}</h4>
        <h4>Rating - {avgRating} stars</h4>
        <h5>Price - {costForTwo}</h5>
        <h5>Delivery Time - {resData.info.sla.deliveryTime} mins</h5>
      </div>
    </div>
  )
}

export const RestaurantCardVeg = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white p-2 m-2 rounded-lg ">
          Veg
        </label>
        <RestaurantCard {...props} />
      </div>
    )
  }
}
export default RestaurantCard
