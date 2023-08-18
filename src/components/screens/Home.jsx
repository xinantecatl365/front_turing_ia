import React, { useEffect, useState } from "react";
import { UserAuth } from "../context/AuthContext";
import Header from "../utilities/Header";


const Home = () => {
    const { getAllDrinks, getAllDishes, currentUser, signOut } = UserAuth();

    useEffect(() => {
        getAllDrinks();
        getAllDishes();
    }, []);

    return (
        <>
            <Header username={currentUser.username} name={currentUser.name} onSignOut={signOut} />
        </>
    );
};

export default Home;
