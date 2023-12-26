import ResCard from "./RestCard"
import {useState,useEffect} from "react"
import Shimmer from "./shimmer"
import { Link } from "react-router-dom"
import { RES_LIST } from "../utils/constants"

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
        const data = await fetch(RES_LIST)
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
                {filteredRestroData?.map(restro=>(<Link to={"/restaurent/"+restro.info.id}><ResCard key={restro.info.id} restroData={restro.info}/></Link> ))}                
            </div>
        </div>
    )
}

export default Body