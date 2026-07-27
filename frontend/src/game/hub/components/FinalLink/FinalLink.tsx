import type { FinalLinkProps } from "./FinalLink.types.ts";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import { Button } from '@components/ui/Button/Button.tsx';
import { ArrowIcon } from '@shared/icons/ArrowIcon.tsx';

function FinalLink({
    mode,
    difficulty
}: FinalLinkProps) {
    const finalMode = mode || "addition";
    const finalDifficulty = difficulty || "easy";

    const navigate = useNavigate();
    const { t } = useTranslation();

    return (
            <Button
                variant="primary"
                size="sm"
                onClick={() => navigate(`/game/${finalMode}/${finalDifficulty}`)}
        >
            <p className="m-sm text-sm">
                {t("game.hub.startButton")}
            </p>

            <ArrowIcon />
        </Button>
    );
};

export default FinalLink;