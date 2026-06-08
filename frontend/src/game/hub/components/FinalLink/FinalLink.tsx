import type { FinalLinkProps } from "./FinalLink.types.ts";
import { useTranslation } from "react-i18next";
import Styles from "../HubComponents.module.css";

import NavItem from "@components/NavItem/NavItem.tsx";

function FinalLink({
    mode,
    difficulty
}: FinalLinkProps) {
    const finalMode = mode || "addition";
    const finalDifficulty = difficulty || "easy";

    const { t } = useTranslation();

    return (
        <div className={Styles.gameLink}>
            <NavItem
                to={`/game/${finalMode}/${finalDifficulty}`}
            >
                {t("game.hub.startButton")}
            </NavItem>
        </div>
    );
};

export default FinalLink;