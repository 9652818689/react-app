import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useRestaureantMenu from "../../utils/useRestaurantMenu";
import Shimmer from "./Shimmer";

const RestaurantMenu = ()=>{
    const {resId} = useParams();
    console.log(resId);
    const resInfo = useRestaureantMenu(resId);
    console.log(resInfo);
    useEffect(()=>{

    },[])   

    if(resInfo == null) return <Shimmer />;

    const {avgRating,costForTwoMessage,name,cuisines} = resInfo?.data?.cards[2]?.card?.card?.info
    console.log(resInfo);
    const itemCards =  resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards;

    console.log(itemCards);
    return (
        <div className="menu">
            <h1>{name}</h1>
            <h2>{cuisines.join(', ')}</h2>
            <h3>{costForTwoMessage}</h3>
            <h4>{avgRating}</h4>
            
            <ul>
                {
                   itemCards && itemCards.map(item=> <li key={item.card.info.id}>{item.card.info.name} - {"Rs"} {item.card.info.defaultPrice/100 || item.card.info.price/100   }</li>)
                }
            </ul>
        </div>
    )
}

export default RestaurantMenu;