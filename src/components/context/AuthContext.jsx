import React, { useState, useEffect, useContext } from "react";
import { json } from "react-router-dom";

// import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

const AuthContext = React.createContext();

const AuthProvider = ({ children }) => {
    const [tokenAccess, setToken] = useState('');
    const [currentUser, setCurrentUser] = useState();
    const [drinks, setDrinks] = useState([]);
    const [dishes, setDishes] = useState([]);

    const url = 'http://localhost:8088';

    const loginUser = async (username, password) => {
        console.log(username);
        console.log(password);
        return fetch(url + '/users/login', {
            method: 'POST',
            body: JSON.stringify({
                username,
                password
            }),
            headers: {
                "Content-Type": "application/json",
            }
        });
    }

    const registerUser = (username, password, admin, name) => {
        fetch(url + '/users/create', {
            method: 'POST',
            body: JSON.stringify({
                username,
                password,
                admin,
                name
            }),
            headers: {
                "Content-Type": "application/json",
            }
        }).then((response) => response.json())
            .then((data) => {
                console.log(data);
            }).catch((err) => console.log(err.message))
    }

    const signOut = () => {
        setCurrentUser()
        setToken('')
    }

    const getAllDishes = () => {
        fetch(url + '/crud/dish/read/all', {
            method: 'GET'
        }).then((response) => response.json())
            .then((data) => {
                setDishes(data.result)
            })
    }

    const getAllDrinks = () => {
        fetch(url + '/crud/drink/read/all', {
            method: 'GET'
        }).then((response) => response.json())
            .then((data) => {
                setDrinks(data.result)
            })
    }


    return (
        <AuthContext.Provider
            value={{
                currentUser,
                tokenAccess,
                drinks,
                dishes,
                setCurrentUser,
                setToken,
                loginUser,
                registerUser,
                signOut,
                getAllDishes,
                getAllDrinks,

            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

const UserAuth = () => {
    return useContext(AuthContext);
};

export { AuthProvider, UserAuth };
