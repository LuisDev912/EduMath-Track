import { Select } from '@components/ui/Select/Select.tsx';
import { useTranslation } from 'react-i18next';

import type { GameSelectProps } from './GameSelect.types.ts';

function GameSelect({ 
    mode,
    difficulty,
    setMode,
    setDifficulty
}: GameSelectProps) { 
    const { t } = useTranslation();

    return (
        <form>
            <Select
                id="game-mode-select"
                label={t("game.hub.modes.select")}
                value={mode}
                options={[
                    { optionLabel: t("game.hub.modes.addition"), optionValue: "addition" },
                    { optionLabel: t("game.hub.modes.subtraction"), optionValue: "subtraction" },
                    { optionLabel: t("game.hub.modes.multiplication"), optionValue: "multiplication" },
                    { optionLabel: t("game.hub.modes.division"), optionValue: "division" }
                ]}
                action={setMode}
            />

            <Select
                id="difficulty-select"
                label={t("game.hub.difficulty.select")}
                value={difficulty}
                options={[
                    { optionLabel: t("game.hub.difficulty.easy"), optionValue: "easy" },
                    { optionLabel: t("game.hub.difficulty.medium"), optionValue: "medium" },
                    { optionLabel: t("game.hub.difficulty.hard"), optionValue: "hard" }
                ]}
                action={setDifficulty}
            />
        </form>
    );
};

export default GameSelect;