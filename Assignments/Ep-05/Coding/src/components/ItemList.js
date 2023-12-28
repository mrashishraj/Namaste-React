


const ItemList =({data})=>{


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
                    </div>
                </div>
                )}
        </>
    )
}

export default ItemList