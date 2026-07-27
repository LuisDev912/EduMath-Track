import type { FinalLinkProps } from "./FinalLink.types.ts";
import { useTranslation } from "react-i18next";

import { Button } from '@components/ui/Button/Button.tsx';
import { ArrowIcon } from '@shared/icons/ArrowIcon.tsx';

function FinalLink({
    mode,
    difficulty
}: FinalLinkProps) {
    const finalMode = mode || "addition";
    const finalDifficulty = difficulty || "easy";

    const { t } = useTranslation();

    return (
        <Button
            variant="primary"
            size="lg"
            textDirection="center"
            onClick={() => {
                window.location.href = `/game/${finalMode}/${finalDifficulty}`;
            }}
        >
            {t("game.hub.startButton")}
            <ArrowIcon />
        </Button>
    );
};

export default FinalLink;