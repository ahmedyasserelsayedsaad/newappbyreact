import React from 'react'
import feat1 from "../img/features/f1.png";
import feat2 from "../img/features/f2.png";
import feat3 from "../img/features/f3.png";
import feat4 from "../img/features/f4.png";
import feat5 from "../img/features/f5.png";
import feat6 from "../img/features/f6.png";
import '../css/home.css';
const features = [
    {
        id: 1,
        src: feat1,
        text: 'free shopping',
    },
    {
        id: 2,
        src: feat2,
        text: 'online order',
    },
    {
        id: 3,
        src: feat3,
        text: 'save money',
    },
    {
        id: 4,
        src: feat4,
        text: 'promotions',
    },
    {
        id: 5,
        src: feat5,
        text: 'happy sell',
    },
    {
        id: 6,
        src: feat6,
        text: 'f24/11 support',
    },
]
function FeaturedPro() {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-2 col-md-4 col-sm-6">
                         <div className="card">
                         {
                            features.map((x) => {
                                return (
                                    <div className="feat-box" key={x.id}>
                                        <img src={x.src} alt='feat' />
                                        <h5>{x.text}</h5>
                                    </div>
                                )
                            })
                        }
                         </div>
                    </div>
                </div>

            </div>

        </div>

    )
}

export default FeaturedPro;