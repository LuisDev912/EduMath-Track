import type { FinalLinkProps } from "./FinalLink.types.ts";

function FinalLink({
    mode,
    difficulty
}: FinalLinkProps) {
    // if the mode or difficulty is not provided, we will use the default values
    const finalMode = mode || "addition";
    const finalDifficulty = difficulty || "easy";

    return <a href="#">test</a>
};

export default FinalLink;