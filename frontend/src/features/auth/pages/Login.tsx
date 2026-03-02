import { useState } from "react";
import AuthLayout from "../components/AuthLayout.tsx";

export default function Login() {
    const [form, setForm] = useState({
        userName: '',
        password: ''
    });

    const isFormValid =
        form.userName.trim() !== '' &&
        form.password.length >= 6;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        setForm(prev => ({
            ...prev,
            [name]: value
        }));
    }

    const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    };

    return (
        <AuthLayout id="login">
            <h1 className="heading-primary text-center">LOGIN</h1>

            <form id="login-form" method="POST" onSubmit={handleLogin}>

                <label
                    htmlFor="user-name"
                    className="sr-only"
                >
                    Enter your username here:
                </label>
                <input
                    id="user-name"
                    type="text"
                    placeholder="Username"
                    name="userName"
                    value={form.userName}
                    onChange={handleChange}
                    required
                    aria-required
                />

                <label
                    htmlFor="user-password"
                    className="sr-only"
                >
                    Enter your password here:
                </label>
                <input
                    id="user-password"
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={form.password}
                    onChange={handleChange}
                    required
                    aria-required
                />

                <input
                    type="submit"
                    value="Login"
                    id="login-submit"
                    disabled={!isFormValid}
                    aria-disabled={!isFormValid}
                />
            </form>
        </AuthLayout>
    )
};