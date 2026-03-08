import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
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
        <header>
            <nav className={SemanticStyles.nav} aria-label={t('nav.mainAriaLabel')}>
                <ul>
                    <li className={SemanticStyles.homeLi}>
                        <NavLink to='/' className='heading-primary'>
                            {t('nav.brand')}
                        </NavLink>
                    </li>

                    <li className={SemanticStyles.mainNavigation}>
                        <ul aria-label={t('nav.primaryAriaLabel')}>
                            <li>
                                <NavItem
                                    to='/404'
                                >
                                    {t('nav.dashboard')}
                                </NavItem>
                            </li>

                            <li>
                                <NavItem
                                    to='/404'
                                >
                                    {t('nav.practice')}
                                </NavItem>
                            </li>

                            <li>
                                <NavItem
                                    to='/404'
                                >
                                    {t('nav.stats')}
                                </NavItem>
                            </li>
                        </ul>
                    </li>

                    <li className={SemanticStyles.profile}>
                        <UserMenu />
                    </li>
                </ul>
            </nav>
        </header>
    );
};
