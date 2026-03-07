import { useState } from "react";
import { useTranslation } from "react-i18next";
import AuthLayout from "../components/AuthLayout.tsx";

export default function Login() {
    const { t } = useTranslation();
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
            <h1 className="heading-primary text-center">{t("auth.login.title")}</h1>

            <form id="login-form" method="POST" onSubmit={handleLogin}>

                <label
                    htmlFor="user-name"
                    className="sr-only"
                >
                    {t("auth.login.userLabel")}
                </label>
                <input
                    id="user-name"
                    type="text"
                    placeholder={t("auth.login.userPlaceholder")}
                    name="userName"
                    value={form.userName}
                    onChange={handleChange}
                    autoComplete="username"
                    required
                />

                <label
                    htmlFor="user-password"
                    className="sr-only"
                >
                    {t("auth.login.passwordLabel")}
                </label>
                <input
                    id="user-password"
                    type="password"
                    placeholder={t("auth.login.passwordPlaceholder")}
                    name="password"
                    value={form.password}
                    onChange={handleChange}
                    autoComplete="current-password"
                    required
                />

                <input
                    type="submit"
                    value={t("auth.login.submit")}
                    id="login-submit"
                    disabled={!isFormValid}
                />
            </form>
        </AuthLayout>
    )
};
