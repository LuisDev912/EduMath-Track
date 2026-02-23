import { useNavigate } from "react-router";

export default function NotFoundPage() {
    const navigate = useNavigate();

    const handleNavigate = (): void => {
        navigate('/');
    }

    return (
        <section>
            <h1>Oops!</h1>
            <p>It seems like the page you were searching for does not exist</p>

            <button onClick={handleNavigate}>
                Go to the home page
            </button>
        </section>
    )
};