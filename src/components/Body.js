import { resList } from "../../utils/mockData";
import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer"
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";
import UserContext from "../../utils/UserContext";

const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredResaurants] = useState([]);
    const [searchText, setSearchText] = useState("");
    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);
    
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch("https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.454467&lng=78.4034188&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        console.log(json)
        console.log(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilteredResaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        console.log(listOfRestaurants);
        console.log(filteredRestaurants);
    }
    const onlineStatus = useOnlineStatus();
    const {loggedInUser,setUserName} = useContext(UserContext)
    console.log(onlineStatus);
    if (onlineStatus === false)
        return (
            <h1> Looks like You're offline!! Please chck your internet connection.</h1>
        )
    return listOfRestaurants?.length === 0 ? <Shimmer /> : (
        <div className="body">
            <div className="flex">
                <div className="m-4 p-4">
                    <input type="text" className="border border-solid border-black" value={searchText} onChange={(e) => {
                        setSearchText(e.target.value)
                    }} />
                    <button className="bg-green-100 px-4 py-2 m-4 rounded-lg" type="button" onClick={() => {
                        const filteredRestaurants = listOfRestaurants.filter((data) =>
                            data?.info?.name.toLowerCase().includes(searchText.toLowerCase())
                        )
                        console.log(filteredRestaurants)
                        setFilteredResaurants(filteredRestaurants)
                    }}>Search</button>
                </div>
                <div className="m-4 p-4 items-center">
                    <button className="bg-gray-100 px-4 py-2 m-4 rounded-lg" type="button" onClick={() => {
                        filterdList = listOfRestaurants.filter(
                            (res) => res.avgRating > 4
                        );
                        setListOfRestaurants(filterdList)
                        console.log(listOfRestaurants);
                    }}>Top Rated Restaurants</button>
                </div>
                <div className="m-4 p-4 items-center">
                    <label >User Name:</label>
                    <input className="border border-black m-2 p-2" value={loggedInUser} onChange={(e)=> setUserName(e.target.value)}/>
                </div>
            </div>
            <div className="flex flex-wrap">
                {
                    filteredRestaurants.map((restaurant) => (
                        <Link to={"/restaurant/" + restaurant.info.id} key={restaurant.info.id}>
                            {
                                restaurant?.info?.isOpen ? (<RestaurantCardPromoted resData={restaurant} />) : (<RestaurantCard resData={restaurant} />)
                            }
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}

export default Body;