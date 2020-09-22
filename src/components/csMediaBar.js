import React from 'react';

export default function CsMediaBar(props) {
    // console.log("from mediaBar", props)
    // this needs on click events
    return(
        <div className="mediaBar">
            <button>
                <i className="fas fa-heart"></i>

                <i className="far fa-heart"></i>
            </button>

            <button>
                <span>
                 <i className="far fa-comment"></i>
                </span>
            </button>

            <button>
                <i className="fas fa-share-alt"></i>
            </button>
        </div>
    )
}