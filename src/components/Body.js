import { resList } from "../../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import {useState,useEffect} from "react";
import Shimmer from "./Shimmer"
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";

const Body = ()=>{
const [listOfRestaurants,setListOfRestaurants] = useState([]);
const [filteredRestaurants,setFilteredResaurants] = useState([]);

const [searchText,setSearchText]  = useState("");

useEffect(()=>{
    fetchData();
},[]);

const fetchData = async ()=>{
    const data = await fetch("https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.454467&lng=78.4034188&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json =  await data.json();
    console.log(json)
    console.log(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    setFilteredResaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    console.log(listOfRestaurants);
}   
    const onlineStatus = useOnlineStatus();

    console.log(onlineStatus);
    if(onlineStatus === false)  
       return (
        <h1> Looks like You're offline!! Please chck your internet connection.</h1>
    )
    return listOfRestaurants?.length ===0 ? <Shimmer />:(
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" className="search-box" value={searchText} onChange={(e)=>{
                        setSearchText(e.target.value)
                    }}/>
                    <button type="button" onClick={()=>{
                        const filteredRestaurants = listOfRestaurants.filter((data)=>
                             data?.info?.name.toLowerCase().includes(searchText.toLowerCase())
                        )
                        console.log(filteredRestaurants)
                        setFilteredResaurants(filteredRestaurants)
                    }}>Search</button>
                </div>
                <button className="filter-btn" type="button" onClick={()=>{
                    filterdList =   listOfRestaurants.filter(
                        (res)=>res.avgRating > 4
                    );
                    setListOfRestaurants(filterdList)
                    console.log(listOfRestaurants);
                }}>Top Rated Restaurants</button>
            </div>
            <div className="res-container">
            {
                filteredRestaurants.map((restaurant)=>(
                    <Link to={"/restaurant/"+ restaurant.info.id } key={restaurant.info.id}><RestaurantCard   resData={restaurant} /></Link>
                ))
            }
            </div>
        </div>
    )
}

export default Body;