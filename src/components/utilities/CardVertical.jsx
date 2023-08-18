import React from 'react';

const Card = ({ imageUrl, title, content, footer }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={imageUrl} alt="Card" className="w-full h-32 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-primary mb-2">{title}</h3>
        <p className="text-gray-600">{content}</p>
      </div>
      <div className="bg-primary text-white p-2">
        <p className="text-xs">{footer}</p>
      </div>
    </div>
  );
};

export default Card;
