import AuthLayout from "../components/AutLayout"

export default function Login() {
    return (
        <AuthLayout id="login">
            <h1 className="heading-primary">LOGIN</h1>

            <form id="login-form" method="POST">

                <label htmlFor="user-name" className="sr-only">Enter your username here</label>
                <input
                    id="user-name"
                    type="text"
                    placeholder="Username"
                    required
                    aria-required
                />

                <label htmlFor="user-password" className="sr-only">Enter your password here</label>
                <input
                    id="user-password"
                    type="password"
                    placeholder="Password"
                    required
                    aria-required
                />

                <input
                    type="submit"
                    value="Login"
                    id="login-submit"
                />
            </form>
        </AuthLayout>
    )
};