import { Outlet } from "react-router";
import { Footer } from "@components/Semantic/Semantic";

// This is the public wrapper. This layout will be used to wrap the landing page. Its purpose is to avoid non registered users go to pages they cannot use such as the dashboard.

function PublicLayout() {
    return (
        <>
            <main
                id="private-content"
                tabIndex={-1}
            >
                <Outlet />
            </main>
            <Footer />
        </>
    )
};

export default PublicLayout;