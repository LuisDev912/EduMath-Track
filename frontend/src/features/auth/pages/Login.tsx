import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Input } from "@components/ui/Input/Input.tsx";
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

            <form id="login-form" method="POST" onSubmit={handleLogin} className="form" aria-label={t("auth.login.ariaLabel")}>

                <Input
                    label={t("auth.login.userLabel")}
                    id="user-name"
                    type="text"
                    placeholder={t("auth.login.userPlaceholder")}
                    name="userName"
                    value={form.userName}
                    onChange={handleChange}
                    autoComplete="username"
                    required
                />

                <Input
                    label={t("auth.login.passwordLabel")}
                    id="user-password"
                    type="password"
                    placeholder={t("auth.login.passwordPlaceholder")}
                    name="password"
                    value={form.password}
                    onChange={handleChange}
                    autoComplete="current-password"
                    required
                />

                <Input
                    type="submit"
                    value={t("auth.login.submit")}
                    id="login-submit"
                    disabled={!isFormValid}
                />
            </form>
        </AuthLayout>
    )
};
