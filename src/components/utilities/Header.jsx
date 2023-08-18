import React from 'react';

const Header = ({ username, name, onSignOut }) => {
  return (
    <header className="bg-gray-300 text-white py-4 px-6 flex justify-between items-center">
      <button className="text-sm hover:text-secondary focus:outline-none bg-primary rounded font:bold py-2 px-4" onClick={onSignOut}>Sign Out</button>
      <div className="text-right">
        <p className="text-m text-white-500 bg-green-500 font:extrabold rounded block text-center">{username}</p>
        <p className="text-sm bg-white block rounded text-center text-black mt-1 p-1">{name}</p>
      </div>
    </header>
  );
};

export default Header;