import React from 'react';
import propTypes from 'prop-types';
import './cards.css';

function Card({ title, imageSource, text, url }) {
    return (
        <div className="card text-center bg-dark animate__animated animate__fadeInUp">
            <div className="overflow">
                <img src={imageSource} alt="" className="card-img-top" />
            </div>
            <div className="card-body text-light">
                <h4 className="card-title">{title}</h4>
                <p className="card-text text-secondary">
                    {
                        text ? text : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias vitae deserunt aliquam accusantium consequuntur ratione, dolores eaque minima vero, architecto tempore laborum illum quis sequi dolore fuga, voluptatibus soluta beatae?'
                    }
                </p>
                <a href={url} target="_blank" className="btn btn-outline-secondary rounded-0">Go to this web site</a>
            </div>
        </div>
    )
};

Card.propTypes = {
    title: propTypes.string.isRequired,
    url: propTypes.string,
    imageSource: propTypes.string,
    text: propTypes.string
};

export default Card
