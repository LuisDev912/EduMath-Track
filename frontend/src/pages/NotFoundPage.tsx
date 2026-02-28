import { useNavigate } from "react-router";

export default function NotFoundPage() {
    const navigate = useNavigate();

    const handleNavigate = (): void => {
        navigate('/');
    }

    return (
        <section>
            <h1 className="heading-primary text-center">Oops!</h1>
            <p className="text-center">It seems like the page you were searching for does not exist</p>

            <div className="buttons">
                <button onClick={handleNavigate}>
                    Go to the home page
                </button>
            </div>
        </section>
    )
};