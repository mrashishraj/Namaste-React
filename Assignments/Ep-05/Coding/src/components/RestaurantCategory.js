import { useState } from "react";
import ItemList from "./ItemList";



const RestaurantCategory = (data) => {
    const [show,setShow] = useState(false)

    const {title,itemCards} = data.data.card.card

    const handleToggle = () => {
        setShow(!show)
        console.log(true);
    }


    return(
        <div className="w-6/12 bg-gray-100 p-4 my-4 mx-auto shadow-lg cursor-pointer" onClick={handleToggle}>
           <div className="flex font-bold justify-between">
                <span>{title} ({itemCards.length})</span>
                <span>▼</span> 
           </div>
           <div>
               {show?<ItemList data={itemCards}/>:null}
           </div>
        </div>
    )
}

export default RestaurantCategory


