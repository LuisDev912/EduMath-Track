import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { NavBar } from '@components/ui/NavBar/NavBar';
import UserMenu from '../UserMenu/UserMenu';
import NavItem from '../NavItem/NavItem';
import SemanticStyles from './Semantic.module.css';

export function Footer() {
    const { t } = useTranslation();

    return (
        <footer>
            <p className='italic'></p>

            <div className={SemanticStyles.footerInfo}>
                © {new Date().getFullYear()}

                <br />

                <small
                    className='small-text'
                    style={{ opacity: '0.7' }}
                >
                    {t('footer.version', { version: '0.0.0' })}
                </small>
            </div>
        </footer>
    );
}

export function Header() {
    const { t } = useTranslation();

    return (
        <header className={SemanticStyles.header}>
            <NavBar
                className={SemanticStyles.nav}
                aria-label={t('nav.mainAriaLabel')}
            >
                <li className={SemanticStyles.home}>
                    <NavLink to='/' className='heading-primary home-link'>
                        {t('nav.brand')}
                    </NavLink>
                </li>

                <li className={SemanticStyles.navItem}>
                    <NavItem to='/404'>
                        {t('nav.dashboard')}
                    </NavItem>
                </li>

                <li className={SemanticStyles.navItem}>
                    <NavItem to='/game/hub'>
                        {t('nav.practice')}
                    </NavItem>
                </li>

                <li className={SemanticStyles.navItem}>
                    <NavItem to='/404'>
                        {t('nav.stats')}
                    </NavItem>
                </li>

                <li className={SemanticStyles.profile}>
                    {/* temporary hardcoded username */}
                    <UserMenu userName="Mikaela" />
                </li>
            </NavBar>
        </header>
    );
};
