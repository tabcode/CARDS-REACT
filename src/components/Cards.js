import React from 'react';
import Card from './Card';
import image1 from '../assets/image1.jpg';
import image2 from '../assets/image2.jpg';
import image3 from '../assets/image3.jpg';

const cards = [
    {
        id: 1,
        title: 'Tabcode Web',
        image: image1,
        url: 'https://daniel-zambrano.herokuapp.com',
        text: 'This is my website'
    },
    {
        id: 2,
        title: 'Tabcode Blog',
        image: image2,
        url: 'https://daniel-zambrano.herokuapp.com'
    },
    {
        id: 3,
        title: 'Tabcode Linkedin',
        image: image3,
        url: 'https://daniel-zambrano.herokuapp.com'
    }
];

function Cards() {
    return (
        <div className="container d-flex justify-content-center h-100 align-items-center">
            <div className="row">
                {
                    cards.map(card => (
                        <div key={card.id} className="col-md-4">
                            <Card title={card.title} imageSource={card.image} url={card.url} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Cards
