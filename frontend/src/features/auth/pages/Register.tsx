import { useState } from "react";
import AuthLayout from "../components/AuthLayout.tsx";

export default function Register() {
    const [form, setForm] = useState({
        userName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        setForm(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleRegister = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (form.password !== form.confirmPassword) {
            alert("Passwords do not match");
            return;
        };
    };

    return (
        <AuthLayout id="register">
            <h1 className="heading-primary text-center">REGISTER</h1>

            <form id="register-form" method="POST" onSubmit={handleRegister}>

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
                    htmlFor="user-email"
                    className="sr-only"
                >
                    Enter your email here:
                </label>
                <input
                    id="user-email"
                    type="email"
                    placeholder="E-mail"
                    name="email"
                    value={form.email}
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

                <label
                    htmlFor="confirm-password"
                    className="sr-only"
                >
                    Confirm your password here:
                </label>
                <input
                    id="confirm-password"
                    type="password"
                    placeholder="Confirm password"
                    name="confirmPassword"
                    value={form.confirmPassword}
                    onChange={handleChange}
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