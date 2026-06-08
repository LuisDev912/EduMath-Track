import { Outlet } from "react-router";
import SettingsHeader from "../components/SettingsHeader/SettingsHeader.tsx";
import Styles from '../components/Settings.module.css';

export default function SettingsLayout() {
    return (
        <>
            <SettingsHeader />

            <section className={Styles.settingsContent}>
                <Outlet />
            </section>
        </>
    );
};