import React, {useState} from 'react';
import './style.css';
import {useGeolocation} from "./useGeolocation";

export default function App() {
    const [count,setCount] = useState(0);
    const[position,isLoading,error,getPosition] = useGeolocation();
    const {lat,lng} = position;
    const handlePositionChange = () => {
        setCount(count=> count+1);
       getPosition();
    }
  return (
      <div>
        <button onClick={handlePositionChange} disabled={isLoading}>Get my position</button>
        <DisplayText> {error ? <p>error</p> :
            isLoading ? 'Loading position...' : Object.keys(position).length > 0 && `Your GPS position ${lat} ${lng}`}</DisplayText>
        <DisplayText>You requested position {count} times</DisplayText>
      </div>

)

}


const DisplayText = ({children}) => {
    return <p> {children}</p>
}