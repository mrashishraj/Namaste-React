import ResCard from "./RestCard"
import { resData } from "../utils/mockData"
import {useState,useEffect} from "react"
import Shimmer from "./shimmer"

const Body = () =>{
const [restroData, setRestroData] = useState()
const [searchValue,setSearchValue] = useState("")
const [filteredRestroData, setFilteredRestroData] = useState()

const handleSearch =(e) =>{
        if(!searchValue){
            setFilteredRestroData(restroData); 
            return}

        const searchedRestro = restroData.filter(item=>{
            if(item.info.name.toLocaleLowerCase().includes(searchValue)){
                return item
            }
        })
        setFilteredRestroData(searchedRestro);
    } 

    useEffect(()=>{
        fetchData()
        console.log("useEffect Called");
    },[])

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.4039214&lng=77.037736&page_type=DESKTOP_WEB_LISTING")
        const json = await data.json()
        setRestroData(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilteredRestroData(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }
    

    return !filteredRestroData ? (<Shimmer/>) :(
        <div className="bodyContainer">
            <div className="searchBtn">
                <input type="search" onChange={(e)=>setSearchValue(e.target.value.toLowerCase())} placeholder="Restro Name"/>
                <button onClick={()=>handleSearch()}>Search</button>
            </div>
            <div className="filterBtn">
                <button onClick={()=>{const filteredRes = restroData.filter(item=>item.info.avgRating>4); setRestroData(filteredRes) }}>Top Rated Restro</button>
            </div>
            <div className="resCard">
                {filteredRestroData?.map(restro=>(<ResCard key={restro.info.id} restroData={restro.info}/>))}                
            </div>
        </div>
    )
}

export default Body