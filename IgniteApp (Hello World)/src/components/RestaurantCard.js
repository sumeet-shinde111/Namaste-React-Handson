import React from "react";
import { CDN_URL } from "../utils/constants";

const RestuarantCard = (props) => {
    const { resdata } = props;
    const { name, cuisines, avgRatingString, cloudinaryImageId } = resdata?.info;
    const { deliveryTime } = resdata?.info.sla;


    return (
        <>
            <div className='res-card'>
                <img
                    className='dishImage'
                    src={CDN_URL + cloudinaryImageId}
                    alt='dish logo' />
                <h3 className='name'>{name}</h3>
                <h4 className='cuisines heading'>{cuisines.join(", ")}</h4>
                <div className='rating-delivery_wrapper'>
                    <h4 className='rating heading'>{avgRatingString} stars</h4>
                    <h4 className='time heading'>{deliveryTime} minutes</h4>
                </div>

            </div>
        </>
    )
}

export default RestuarantCard;