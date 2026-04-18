import type { SettingItemProps } from './SettingsItem.types';
import { Button } from '@components/ui/Button/Button.tsx';
import Styles from '../Settings.module.css';

function SettingsItem({
    title,
    description,
    actionType,
    options,
    value,
    action
}: SettingItemProps) {

    const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        action?.(e.target.value);
    };

    return (
        <article className={Styles.settingsItem}>
            <div className={Styles.itemInformation}>
                <p className="heading-tertiary">{title}</p>
                {description && (
                    <p className={Styles.description}>{description}</p>
                )}
            </div>

            <div className={Styles.itemAction}>
                {actionType === 'button' && (
                    <Button onClick={() => action?.()}>
                        Go to settings
                    </Button>
                )}
                {actionType === 'link' && (
                    <a href={value}>
                        Go to settings
                    </a>
                )}

                {actionType === 'select' && options && (
                    <select
                        className={Styles.select}
                        value={value}
                        onChange={handleSelectChange}
                        id="settings-select"
                    >
                        {options.map((opt) => (
                            <option key={opt.value} value={opt.value}>
                                {opt.label}
                            </option>
                        ))}
                    </select>
                )}
            </div>
        </article>
    );
};

export default SettingsItem;