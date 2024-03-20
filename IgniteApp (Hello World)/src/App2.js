import React from 'react';
import ReactDOM from "react-dom/client";

const jsxHeading = <h1>Hello from jsx </h1>

//creating functional component in react

const Title = ()=>{
    return(
        <>
            functional component in react...
        </>
    )
}
//Component compoition is combining 2 components in single like heading has title component inside it
const Heading = ()=>{
    return(
        <div className='parent'>
            <h1>This is  <Title/> </h1>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Heading/>); 