import { useDispatch } from "react-redux"
import { addItem } from "../utils/slice";


const ItemList =({data,remove})=>{
const dispatch = useDispatch()

const handleAdd = (e,item)=>{
    console.log();
    dispatch(addItem(item))
}
    return(
        <>
            {data.map(item=>
                <div key={item.card.info.id} className="shadow flex p-4 my-4 justify-between border-black">
                    <div className="text-left">
                        <div>{item.card.info.name}</div> 
                        {item.card.info.price?<div>₹{item.card.info.price/100}</div>:null}
                    </div>
                    <div>
                        <img className="w-2/6 h-auto p-2 float-right" src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/${item.card.info.imageId}`} alt="" />
                    <div name="add" onClick={(e)=>handleAdd(e,item)} className="relative float-right bg-black text-white p-1 rounded-lg">{remove?"remove":"Add+"}</div>
                    </div>
                </div>
                )}
        </>
    )
}

export default ItemList