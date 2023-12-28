import { RES_IMG_URL } from "../utils/constants";


const ResCard = (props) =>{
    const {name,avgRating,cloudinaryImageId,areaName,costForTwo,sla} = props?.restroData
    // console.log(props);
    // console.log(props.restroData);

    return(
        <div className="p-4 w-52 h-auto m-4 bg-gray-200 shadow-md rounded-md ">
            <div>
                <img className="w-40 h-32 ml-2 shadow-md rounded-md" src={RES_IMG_URL+cloudinaryImageId} alt="" />
            </div>
            <div className="h-5 w-4/8 m-2  font-medium">
               <h3>{name}</h3> 
            </div>
            <div className="h-5 w-4/8 m-2 font-medium ">
                <h4>{areaName}</h4>
            </div>
            <div className="h-5 w-4/8 m-2 font-medium ">
                <h4>{costForTwo}</h4>
            </div>
            <div className="h-5 w-4/8 m-2 font-medium ">
            <h3>{avgRating}</h3>
            </div>
            <div className="h-5 w-4/8 m-2 font-medium ">
                <h4>
                    {sla.slaString}
                </h4>
            </div>
        </div>
    )
}


export const PromotedRestaurantCard = (ResCard) => {
    return(props)=>{
        return(
            <>
                <label htmlFor="#">Promoted</label>
                <ResCard {...props}/>
            </>
        )
    }
}

export default ResCard