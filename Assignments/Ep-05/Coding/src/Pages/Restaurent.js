import { useEffect, useState } from "react"
import { json, useParams } from "react-router-dom"
import Shimmer from "../components/Shimmer"
import { RES_DATA } from "../utils/constants"
import RestaurantCategory  from "../components/RestaurantCategory"



const Restaurant = ()=>{
    const [restData, setResData] = useState(null)   
    const [resInfo, setResInfo] = useState()
    const params = useParams()
    const {resId} = params
    useEffect(()=>{
        fetchData()
    },[])

    const fetchData = async ()=>{
        const fetchData = await fetch(RES_DATA+resId)
        const jsonData = await fetchData?.json()
        setResData(jsonData?.data?.cards[0]?.card?.card?.info)
        setResInfo(jsonData?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR)
    }

    if(restData===null){
    return <Shimmer/>
    }

    const ResCategory = resInfo.cards.filter(res=>res.card.card["@type"]=="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")

    const {name,avgRating,areaName,cuisines,costForTwoMessage} = restData
// console.log(ResCategory);
    return(
        <>
            <div className="text-center">
                <div cla>
                    <h1 className="font-bold mt-6 text-2xl">{name}</h1>
                    <h2 className="mb-2">{areaName}</h2>
                </div>
                {/* <h2>{avgRating}</h2>
                <h3>{costForTwoMessage}</h3>
                <h3>{cuisines.map(data=><li>{data}</li>)}</h3> */}
                {ResCategory.map(data=>(<RestaurantCategory data={data}/>))}
            </div>
        </>
    )

}

export default Restaurant