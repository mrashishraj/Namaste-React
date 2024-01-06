import { useState } from "react";
import ItemList from "./ItemList";



const RestaurantCategory = ({data,showItems,setShowIndex}) => {

    const {title,itemCards} = data.card.card

    const handleToggle = () => {
        setShowIndex()
    }
    return(
        <div className="w-6/12 bg-gray-100 p-4 my-4 mx-auto shadow-lg cursor-pointer" onClick={handleToggle}>
           <div className="flex font-bold justify-between">
                <span>{title} ({itemCards.length})</span>
                <span>{showItems?"▶":"▼"}</span> 
           </div>
           <div>
               {showItems?<ItemList data={itemCards}/>:null}
           </div>
        </div>
    )
}

export default RestaurantCategory


