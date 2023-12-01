import Header from "./Header";
import Main from "./Main";
import {useEffect} from "react";

export default function App() {
    useEffect(() => {
        fetch('http://localhost:8001/questions').then(res=>res.json())
            .then(data=>console.log(data));
    }, []);
    return <div>
        <Header/>
        <Main></Main>
    </div>
}