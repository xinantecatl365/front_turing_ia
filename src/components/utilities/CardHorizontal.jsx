import React from 'react';

const Card = ({ imageUrl, title, content, button1Text, button2Text }) => {
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden flex md:flex">
            <div className="w-1/3">
                <img src={imageUrl} alt="Card" className="w-full h-full object-cover" />
            </div>
            <div className="p-4 w-2/3">
                <h3 className="text-3x1 font-extrabold text-primary mb-2 ">{title}</h3>
                <p className="text-gray-600 lg:text-xl">{content}</p>
                <div className="mt-4 flex">
                    <button className="bg-primary text-white px-4 py-2 mr-2 rounded-md hover:bg-secondary hover:text-primary"
                        style={{ backgroundColor: '#1FBF91' }}>{button1Text}</button>
                    <button className="bg-primary text-white px-4 py-2 rounded-md hover:bg-secondary hover:text-primary"
                        style={{ backgroundColor: '#1FBF91' }}>{button2Text}</button>
                </div>
            </div>
        </div>
    );
};

export default Card;
