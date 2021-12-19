import Item from "./Item"
import MenuNav from "./MenuNav"
import '../index.css';
import { useState } from "react"

function Navbar(){
    const [condition, setCondition] = useState(false)

    const setClicking = () =>{
        setCondition(prev => !prev)
    }

    return (
        <div>
        <nav>
            <ul className="flex flex-row justify-around">
            <li className="transition-all duration-100 cursor-pointer rounded-xl hover:bg-green-300"><a href = "/">Ana səhifə</a></li>
            <li className="transition-all duration-100 cursor-pointer rounded-xl hover:bg-green-300"><a href = "/posts">Proyektlər</a></li>
            <li onClick = {setClicking} className="transition-all duration-100 cursor-pointer rounded-xl hover:bg-green-300 text-black text-2xl">Daha çox ▼</li>
            {condition ? (<ul className="menu absolute w-40 h-40 flex-col items-center rounded-xl bg-green-300">
                <li className="text-white text-2xl duration-100 m-0 p-3 hover:bg-white rounded-xl"><a href = "/register">Əlaqə</a></li>
                <li className="text-white text-2xl ease-in duration-100 m-0 p-3 hover:bg-white rounded-xl"><a href = "/register">Kitablar</a></li>
            </ul>) : ""}
            <li className="transition-all duration-100 cursor-pointer rounded-xl bg-green-200 hover:bg-green-300"><a href = "/register">Hesab yarat</a></li>
            </ul>
        </nav>
        </div>
    )
}

export default Navbar;