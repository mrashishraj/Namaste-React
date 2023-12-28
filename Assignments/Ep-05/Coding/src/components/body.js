import ResCard,{PromotedRestaurantCard} from "./RestCard"
import {useState,useEffect} from "react"
import Shimmer from "./Shimmer"
import { Link } from "react-router-dom"
import { RES_LIST } from "../utils/constants"

const Body = () =>{
const [restroData, setRestroData] = useState()
const [searchValue,setSearchValue] = useState("")
const [filteredRestroData, setFilteredRestroData] = useState()
const PromotedRestCard = PromotedRestaurantCard(ResCard)


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
        const json = await data?.json()
        setRestroData(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilteredRestroData(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }

    return !filteredRestroData ? (<Shimmer/>) :(
        <div className="">
            <div className="flex m-4">
                <input type="search" className="p-1 border-solid border-2 border-black-500" onChange={(e)=>setSearchValue(e.target.value.toLowerCase())} placeholder="Restro Name"/>
                <button className="px-4 py-2 mx-4 shadow-md rounded-md bg-blue-100" onClick={()=>handleSearch()}>Search</button>
                <button className="px-4 py-2 mx-4 shadow-md rounded-md bg-blue-100" onClick={()=>{const filteredRes = restroData.filter(item=>item?.info?.avgRating>4); setRestroData(filteredRes) }}>Top Rated Restro</button>
            </div>
            
            <div className="flex flex-wrap">
                {filteredRestroData?.map(restro=>(
                <Link to={"/restaurent/"+restro?.info?.id}>{restro?.info?.promoted?<PromotedRestCard key={restro.info.id} restroData={restro.info}/>:<ResCard key={restro?.info?.id} restroData={restro?.info} />}</Link> ))}                
            </div>
        </div>
    )
}

export default Body