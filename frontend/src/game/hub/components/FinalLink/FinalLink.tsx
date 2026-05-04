import type { FinalLinkProps } from "./FinalLink.types.ts";
import NavItem from "@components/NavItem/NavItem.tsx";

function FinalLink({
    mode,
    difficulty
}: FinalLinkProps) {
    // if the mode or difficulty is not provided, we will use the default values
    const finalMode = mode || "addition";
    const finalDifficulty = difficulty || "easy";

    return <NavItem to={`/game/${finalMode}/${finalDifficulty}`}>Test</NavItem>;
};

export default FinalLink;