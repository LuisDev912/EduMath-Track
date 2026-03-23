import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Input } from "../../../shared/components/ui/Input/Input.tsx";
import AuthLayout from "../components/AuthLayout.tsx";

export default function Register() {
    const { t } = useTranslation();
    const [form, setForm] = useState({
        userName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const isFormValid =
        form.userName.trim() !== '' &&
        form.email.includes('@') &&
        form.password.length >= 6 &&
        form.password === form.confirmPassword;

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
            alert(t("auth.register.passwordMismatch"));
            return;
        };
    };

    return (
        <AuthLayout id="register">
            <h1 className="heading-primary text-center">{t("auth.register.title")}</h1>

            <form id="register-form" method="POST" onSubmit={handleRegister}>

                <Input
                    label={t("auth.register.userLabel")}
                    id="user-name"
                    type="text"
                    placeholder={t("auth.register.userPlaceholder")}
                    name="userName"
                    value={form.userName}
                    onChange={handleChange}
                    autoComplete="username"
                    required
                />

                <Input
                    label={t("auth.register.emailLabel")}
                    id="user-email"
                    type="email"
                    placeholder={t("auth.register.emailPlaceholder")}
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    autoComplete="email"
                    required
                />

                <Input
                    label={t("auth.register.passwordLabel")}
                    id="user-password"
                    type="password"
                    placeholder={t("auth.register.passwordPlaceholder")}
                    name="password"
                    value={form.password}
                    onChange={handleChange}
                    autoComplete="new-password"
                    required
                />

                <Input
                    label={t("auth.register.confirmPasswordLabel")}
                    id="confirm-password"
                    type="password"
                    placeholder={t("auth.register.confirmPasswordPlaceholder")}
                    name="confirmPassword"
                    value={form.confirmPassword}
                    onChange={handleChange}
                    autoComplete="new-password"
                    required
                />

                <Input
                    type="submit"
                    value={t("auth.register.submit")}
                    id="register-submit"
                    disabled={!isFormValid}
                />
            </form>
        </AuthLayout>
    )
};
