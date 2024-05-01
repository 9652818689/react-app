import { BRAND_LOGO } from "../../utils/constants"
import { Cloud_LOGO } from "../../utils/constants";

const RestaurantCard = (props) =>{
    const {resData } = props
    const {
        id,
        name,
        cuisines,
        avgRating,
        costForTwo,
        sla,
        cloudinaryImageId
    } = resData?.info
    return (
        <div className="res-card">
            <img className="res-logo" src={Cloud_LOGO+cloudinaryImageId} alt="res-logo"/>
            <h3>{name}</h3>
            <h4>{cuisines.join(' , ')}</h4>
            <h4>{avgRating}</h4>
            <h4>{costForTwo}</h4>
            <h4>{sla.delieveryTime}</h4>
        </div>
    )
}

export default RestaurantCard;