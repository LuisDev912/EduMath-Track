function SettingsItem() {
    return (
        <article className="settings-item">
            <div className="item-information">
                <p className="title"></p>
                <p className="description"></p>
            </div>

            <div className="item-action">
                {/* action element (e.g. button, toggle) goes here */}
            </div>
        </article>
    )
};

export default SettingsItem;