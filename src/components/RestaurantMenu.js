import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useRestaureantMenu from "../../utils/useRestaurantMenu";
import Shimmer from "./Shimmer";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
    const { resId } = useParams();
    const [showIndex,setShowIndex] = useState(0);
    console.log(resId);
    const resInfo = useRestaureantMenu(resId);
    // console.log(resInfo);
    useEffect(() => {

    }, [])

    if (resInfo == null) return <Shimmer />;

    const { avgRating, costForTwoMessage, name, cuisines } = resInfo?.data?.cards[2]?.card?.card?.info
    // console.log(resInfo);
    const itemCards = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards;

    // console.log(resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
    const categories = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) => c.card?.card?.['@type'] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
    // console.log(categories);
    return (
        <div className="text-center">
            <h1 className="font-bold my-6 text-2xl">{name}</h1>
            <p className="font-bold text-lg">{cuisines.join(', ')}</p>
            {categories.map((catetory,index)=> <RestaurantCategory key={catetory?.card?.card?.title} data={catetory?.card?.card}
            showItems={index === showIndex ? true :false}
            onShow={()=>setShowIndex(index)}
            />)}
        </div>
    )
}

export default RestaurantMenu;