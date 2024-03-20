import React from "react";
import RestuarantCard from "./RestaurantCard";
import { resObj } from "../utils/data";

const Body = () => {
    return (
        <>
            <div className='body'>
                <div className='search'>Search</div>
                <div className='res-container'>
                    {
                        resObj.map((val, i) => {
                            return <RestuarantCard resdata={val} key={val.info.id} />
                        })
                    }

                </div>
            </div>
        </>
    )
}
export default Body;