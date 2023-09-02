import { useState } from "react";

function Contador() {

    const [contador,setContador] = useState(1);

    function ClickContador(){
        setContador(contador + 1)
    }

    return(
        <div>
            <div>{contador}</div>
            <button onClick={ClickContador}>Clique</button>
        </div>
    )
}

function Home() {
    return (
    <div>
        <h1>HOME</h1>
        <Contador/>
    </div>
    )
}

export default Home;