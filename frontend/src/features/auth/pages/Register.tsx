import { useState } from "react";
import AuthLayout from "../components/AuthLayout.tsx";

export default function Register() {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setUserName('');
        setPassword('');
    };

    return (
        <AuthLayout id="register">
            <h1 className="heading-primary text-center">REGISTER</h1>

            <form id="register-form" method="POST" onSubmit={handleRegister}>

                <label htmlFor="user-name" className="sr-only">Enter your username here:</label>
                <input
                    id="user-name"
                    type="text"
                    placeholder="Username"
                    required
                    aria-required
                />

                <label htmlFor="user-email" className="sr-only">Enter your email here:</label>
                <input
                    id="user-email"
                    type="email"
                    placeholder="E-mail"
                    required
                    aria-required
                />

                <label htmlFor="user-password" className="sr-only">Enter your password here:</label>
                <input
                    id="user-password"
                    type="password"
                    placeholder="Password"
                    required
                    aria-required
                />

                <label htmlFor="confirm-password" className="sr-only">Confirm your password here:</label>
                <input
                    id="confirm-password"
                    type="password"
                    placeholder="Confirm password"
                    required
                    aria-required
                />

                <input
                    type="submit"
                    value="Create Account"
                    id="register-submit"
                />
            </form>
        </AuthLayout>
    )
};