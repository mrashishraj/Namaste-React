import ResCard from "./RestCard"
import { resData } from "../utils/mockData"
import {useState} from "react"

const Body = () =>{
const [restroData, setRestroData] = useState(resData)
const [searchValue,setSearchValue] = useState("")

    const handleSearch =(e) =>{
        if(!searchValue){setRestroData(resData); return}
        const searchedRestro = restroData.filter(item=>{
            if(item.info.name.toLocaleLowerCase().includes(searchValue)){
                return item
            }
        })
        setRestroData(searchedRestro);
        console.log(searchedRestro)
    }

    return(
        <div className="bodyContainer">
            <div className="searchBtn">
                <input type="search" onChange={(e)=>setSearchValue(e.target.value.toLowerCase())} placeholder="Restro Name"/>
                <button onClick={()=>handleSearch()}>Search</button>
            </div>
            <div className="filterBtn">
                <button onClick={()=>{const filteredRes = restroData.filter(item=>item.info.avgRating>4); setRestroData(filteredRes) }}>Top Rated Restro</button>
            </div>
            <div className="resCard">
                {restroData.map(restro=>(<ResCard key={restro.info.id} restroData={restro.info}/>))}                
            </div>
        </div>
    )
}

export default Body