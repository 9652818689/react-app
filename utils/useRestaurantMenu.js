import { useEffect,useState } from "react"
import {RESTAURANTMENU_URL} from "../utils/constants";

const useRestaureantMenu = (resId)=>{
    const [resInfo,setResInfo] = useState(null);

    useEffect(()=>{
        fetchData();
    },[])
    const fetchData = async ()=>{
        const data = await fetch(RESTAURANTMENU_URL + resId)
        const json = await data.json();
        setResInfo(json)
    }
    return resInfo
}

export default useRestaureantMenu