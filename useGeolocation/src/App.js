import React from 'react';
import './style.css';

export default function App() {
  return (
      <div>
        <button>Get my position</button>
        <DisplayText> Loading position</DisplayText>
        <DisplayText>You requested position count times</DisplayText>
      </div>

)

}


const DisplayText = ({children}) => {
    return <p> {children}</p>
}