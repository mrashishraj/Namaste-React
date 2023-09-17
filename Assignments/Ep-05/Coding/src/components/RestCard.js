import { RES_IMG_URL } from "../utils/constants";


const ResCard = (props) =>{
    const {name,avgRating,cloudinaryImageId,areaName,costForTwo,sla} = props?.restroData
    // console.log(props);
    console.log(props.restroData);

    return(
        <div className="resCardContainer">
            <div>
                <img className="resImg" src={RES_IMG_URL+cloudinaryImageId} alt="" />
            </div>
            <div className="resName">
               <h3>{name}</h3> 
            </div>
            <div className="areaName">
                <h4>{areaName}</h4>
            </div>
            <div className="costForTwo">
                <h4>{costForTwo}</h4>
            </div>
            <div className="rating">
            <h3>{avgRating}</h3>
            </div>
            <div className="eta">
                <h4>
                    {sla.slaString}
                </h4>
            </div>
        </div>
    )
}

export default ResCard