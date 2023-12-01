import React, {useState} from 'react';
import './style.css';
import {useGeolocation} from "./useGeolocation";

export default function App() {
    const [count,setCount] = useState(0);
    const[position,setPosition,isLoading,error] = useGeolocation();
    const {lat,lng} = position;
    const handlePositionChange = () => {
        setCount(count=> count+1);
    }
  return (
      <div>
        <button onClick={handlePositionChange}>Get my position</button>
        <DisplayText> {error ? <p>error</p> :
            isLoading ? 'Loading position...' : Object.keys(position).length > 0 && `Your GPS position ${lat} ${lng}`}</DisplayText>
        <DisplayText>You requested position {count || false} times</DisplayText>
      </div>

)

}


const DisplayText = ({children}) => {
    return <p> {children}</p>
}