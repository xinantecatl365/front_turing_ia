import React, { useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { UserAuth } from "../context/AuthContext";

const initialForm = {
    username: "",
    password: "",
};

const LoginScreen = () => {
    const [form, setForm] = useState(initialForm);
    const { loginUser, setToken, setCurrentUser, tokenAccess, currentUser } = UserAuth();
    const [flag, setFlag] = useState(false);

    const navigate = useNavigate();

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!form.username || !form.password) {
            alert("Verify you introduced an username and password");
            return;
        }
        try {
            await loginUser(form.username, form.password).then((response) => response.json())
                .then((data) => {
                    setCurrentUser(data.result);
                    setToken(data.token);
                    setFlag(true);
                }).catch((err) => {
                    console.log(err);
                });
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        if (flag) {
            // return <Navigate to={'/'} />
            console.log(tokenAccess);
            return navigate('/');
        }
    }, [flag]);

    return (
        <div className="flex h-screen justify-center items-center">
            <div className="w-full max-w-md p-6 bg-primary rounded shadow-md text-center">
                <h2 className="text-3xl font-semibold text-secondary mb-4">Login</h2>
                <form onSubmit={handleSubmit} >
                    <div className="mb-4">
                        <label htmlFor="username" className="block text-sm font-medium text-secondary">Username</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            className="mt-1 p-2 w-full border-primary rounded-md focus:ring-primary focus:border-primary text-primary"
                            placeholder='example_123'
                            onChange={handleChange}
                            value={form.username} />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block text-sm font-medium text-secondary">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            className="mt-1 p-2 w-full border-primary rounded-md focus:ring-primary focus:border-primary text-primary"
                            placeholder='******'
                            onChange={handleChange}
                            value={form.password} />
                    </div>
                    <div className="btn-animation">
                        <button
                            type="submit"
                            className="bg-green-500 text-white px-4 py-2 rounded-md w-full hover:bg-secondary hover:text-primary hover:animate-bounce focus:ring focus:ring-primary focus:ring-offset-2 focus:outline-none">
                            Login
                        </button>
                    </div>
                </form>
                <p className="text-sm mt-4 text-secondary">Don't have an account? <a href="http://localhost:3000/signup" className="text-green-200 hover:text-green-600">Sign up</a></p>
            </div>
        </div>
    );
};

export default LoginScreen;
