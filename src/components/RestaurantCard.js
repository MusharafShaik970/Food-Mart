import { IMAGE_ADDRESS } from "../utils/constants"

const RestaurantCard = ({ resData }) => {
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } =
    resData?.info
  return (
    <div className="res-card">
      <div className="res-image">
        <img src={IMAGE_ADDRESS + cloudinaryImageId} />
      </div>
      <div className="res-details">
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating} stars</h4>
        <h5> {costForTwo}</h5>
        <h5>{resData.info.sla.deliveryTime}</h5>
      </div>
    </div>
  )
}

export default RestaurantCard
