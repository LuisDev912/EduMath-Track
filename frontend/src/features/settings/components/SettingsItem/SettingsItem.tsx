import type { SettingItemProps } from './SettingsItem.types';
import { Button } from '@components/ui/Button/Button.tsx';
import { Select } from '@components/ui/select/Select.tsx';
import Styles from '../Settings.module.css';

function SettingsItem({
    title,
    description,
    actionType,
    options,
    value,
    action
}: SettingItemProps) {
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
                        {title}
                    </Button>
                )}
                {actionType === 'link' && (
                    <a href={value}>
                        {title}
                    </a>
                )}

                {actionType === 'select' && options && (
                    <Select
                        id="settings-select"
                        label={title}
                        value={value?? options[0].value}
                        action={(val: string) => action?.(val)}
                        options={options.map(opt => ({
                            optionLabel: opt.label,
                            optionValue: opt.value
                        }))}
                    />
                )}
            </div>
        </article>
    );
};

export default SettingsItem;