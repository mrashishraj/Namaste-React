import ResCard from "./RestCard"
import { resData } from "../utils/mockData"


const Body = () =>{
    return(
        <div className="bodyContainer">
            <div className="searchBtn">Search</div>
            <div className="resCard">
                {resData.map(restro=>(<ResCard key={restro.info.id} restroData={restro.info}/>))}                
            </div>
        </div>
    )
}

export default Body