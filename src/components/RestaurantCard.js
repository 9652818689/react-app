import { BRAND_LOGO } from "../../utils/constants"
import { Cloud_LOGO } from "../../utils/constants";

const RestaurantCard = (props) =>{
    console.log(props);
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
        <div className="p-4 m-4 h-[350px] rounded-lg w-[250px] bg-gray-100 hover:bg-gray-200">
            <img className="rounded-lg h-40 w-60" src={Cloud_LOGO+cloudinaryImageId} alt="res-logo"/>
            <h3 className="font-bold py-4 tex-lg">{name}</h3>
            <h4>{cuisines.join(' , ')}</h4>
            <h4>{avgRating}</h4>
            <h4>{costForTwo}</h4>
            <h4>{sla.delieveryTime}</h4>
        </div>
    )
}

export const withPromotedLabel = (RestaurantCard)=>{
    return (props) =>{
        return(
           <div>
             <label className="absolute bg-black text-white m-2 p-2 rounded-lg">Promoted</label>
             <RestaurantCard {...props}/>
           </div>
        )
    }
}

export default RestaurantCard;