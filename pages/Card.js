export default function Card (){
    return(
        <>
         <div className=" w-72 ml-6 p-2 h-[100%] bg-white my-16 shadow-inner rounded-xl text-black text-center">
            <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" className="w-[50%] mx-auto"></img>
            <p className=" font-bold">Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</p>
            <p className=" font-bold text-xl text-green-500">Price : $ 109.95 </p>
            <button className="w-[90%] bg-red-500 text-white p-2 rounded-md border-2 hover:border-black hover:bg-white hover:text-black m-3">ADD To CART</button>
        </div>
        <div className=" w-72 ml-6 p-2 h-[445px] min-h-fit bg-white my-16 shadow-inner rounded-xl text-black text-center">
            <img src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg" className="w-[55%] mx-auto"></img>
            <p className=" font-bold">Mens Casual Premium Slim Fit T-Shirts </p>
            <p className=" font-bold text-xl text-green-500">Price : $ 22.3 </p>
            <button className="w-[90%] bg-red-500 text-white p-2 rounded-md border-2 hover:border-black hover:bg-white hover:text-black m-3">ADD To CART</button>
        </div>
        <div className=" w-72 ml-6 p-2  h-[445px] min-h-fit bg-white my-16 shadow-inner rounded-xl text-black text-center">
            <img src="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg" className="w-[73%] mx-auto"></img>
            <p className=" font-bold">Mens Cotton Jacket</p>
            <p className=" font-bold text-xl text-green-500">Price : $ 55.99 </p>
            <button className="w-[90%] bg-red-500 text-white p-2 rounded-md border-2 hover:border-black hover:bg-white hover:text-black m-3">ADD To CART</button>
        </div>
        
        </>
    )
}