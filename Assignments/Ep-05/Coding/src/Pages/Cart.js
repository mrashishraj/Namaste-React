import ItemList from "../components/ItemList"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { clearItem } from "../utils/slice"


const Cart = () =>{

const dispatch = useDispatch()
const cart = useSelector(store => store.cart.items)

const handleClearCart = () =>{
    dispatch(clearItem())
}


    return(
        <>
        <div className="flex justify-center">
            <p className="p-4 font-bold ">Your Cart items</p>    
            <button onClick={handleClearCart} className="bg-slate-300 px-2 py-0 m-2 rounded-lg">Clear Cart</button>
        </div>
            <ItemList data={cart} remove={true}/>
        </>
    )
}


export default Cart