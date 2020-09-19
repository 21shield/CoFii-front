import React from 'react';

export default function CoffeeShopCard() {

    return(
        <div className="csCard">
            <div className="cardHeader">
                c.name
            </div>
            <div className="content">
                <img src="" alt="" />
            </div>
            <div className="csMediaBar">
                like/review/
            </div>
            <div>
                <form>
                    <input 
                    type="text"
                    name="review"
                    placeholder="New Review"
                     />
                     <button type="submit">leave Review</button>
                </form>
            </div>
        </div>
    )
}