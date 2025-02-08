import Link from "next/link"

const AdminHeader = () => {
  return (
    <div>
         <div className="bg-[#1d4ed8] w-60 h-lvh p-4 text-white " >
            <h1 className="text-xl font-serif font-semibold  " >Avion </h1>
             <div className="w-full h-[1px] bg-blue-500 shadow-sm my-3" ></div>
            <div>
                <ul className="flex flex-col gap-4 p-2 cursor-pointer font-sans  " >
                <Link href="./dashboard" >    <li className="hover:bg-indigo-700 p-2 rounded transition-all duration-75 " >Dashboard </li> </Link>
                <Link href="./adminProducts" >    <li className="hover:bg-indigo-700 p-2 rounded transition-all duration-75 ">Products </li> </Link>
                <Link href="./adminCustomers">  <li className="hover:bg-indigo-700 p-2 rounded transition-all duration-75 ">Customer </li></Link>  
                <Link href="./adminOrders">   <li className="hover:bg-indigo-700 p-2 rounded transition-all duration-75" >Orders</li></Link> 
                </ul>
                <Link href="/">
                <button className="w-full mx-2 text-start text-red-400 font-sans font-semibold my-2 hover:bg-red-700 hover:text-white p-2 rounded transition-all duration-75 ">
                    Logout
                </button>
                </Link>
            </div>
         </div>
    </div>
  )
}

export default AdminHeader
