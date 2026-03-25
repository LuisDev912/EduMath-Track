import type { SettingItemProps } from './SettingsItem.types';
import Styles from '../Settings.module.css';

function SettingsItem({ title, description, actionType, action }: SettingItemProps) {
    return (
        <article className={Styles.settingsItem}>
            <div className={Styles.itemInformation}>
                <p className={Styles.title}>{title}</p>
                <p className={Styles.description}>{description}</p>
            </div>

            <div className={Styles.itemAction}>
                {actionType === 'button' && (
                    <button onClick={action}>Action</button>
                )}
                {actionType === 'link' && (
                    <a href="#" onClick={action}>Go to settings</a>
                )}
            </div>
        </article>
    )
};

export default SettingsItem;