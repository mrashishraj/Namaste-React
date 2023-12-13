import { useEffect, useState } from "react"
import { json, useParams } from "react-router-dom"
import Shimmer from "../components/shimmer"
import { RES_DATA } from "../utils/constants"

const Restaurant = ()=>{
const [restData, setResData] = useState(null)    
const params = useParams()
const {resId} = params
useEffect(()=>{
    fetchData()
},[])

const fetchData = async ()=>{
    const fetchData = await fetch(RES_DATA+resId)
    const jsonData = await fetchData?.json()
    setResData(jsonData?.data?.cards[0]?.card?.card?.info)
}

if(restData===null){
return <Shimmer/>
}

const {name,avgRating,areaName,cuisines,costForTwoMessage} = restData

return(
    <>
        <div>
            <h1>{name}</h1>
            <h2>{areaName}</h2>
            <h2>{avgRating}</h2>
            <h3>{costForTwoMessage}</h3>
            <h3>{cuisines.map(data=><li>{data}</li>)}</h3>
        </div>
    </>
)

}

export default Restaurant