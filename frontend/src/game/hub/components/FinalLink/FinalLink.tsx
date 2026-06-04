import type { FinalLinkProps } from "./FinalLink.types.ts";
import { useTranslation } from "react-i18next";

import NavItem from "@components/NavItem/NavItem.tsx";

function FinalLink({
    mode,
    difficulty
}: FinalLinkProps) {
    // if the mode or difficulty is not provided, we will use the default values
    const finalMode = mode || "addition";
    const finalDifficulty = difficulty || "easy";

    const { t } = useTranslation();

    return <NavItem to={`/game/${finalMode}/${finalDifficulty}`}>{t("game.hub.startButton")}</NavItem>;
};

export default FinalLink;