import { NavLink } from 'react-router-dom';
import NavItem from '../NavItem/NavItem';
import SemanticStyles from './Semantic.module.css';

export function Footer() {
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
                    v0.0.0
                </small>
            </div>
        </footer>
    );
}

export function Header() {
    return (
        <header>
            <nav className={SemanticStyles.nav} aria-label='Main navigation'>
                <ul>
                    <li className={SemanticStyles.homeLi}>
                        <NavLink to='/' className='heading-primary'>
                            MathTrack
                        </NavLink>
                    </li>

                    <li className={SemanticStyles.mainNavigation}>
                        <ul aria-label='Primary'>
                            <li>
                                <NavItem
                                    to='/404'
                                >
                                    Dashboard
                                </NavItem>
                            </li>

                            <li>
                                <NavItem
                                    to='/404'
                                >
                                    Practice
                                </NavItem>
                            </li>

                            <li>
                                <NavItem
                                    to='/404'
                                >
                                    Stats
                                </NavItem>
                            </li>
                        </ul>
                    </li>

                    <li className={SemanticStyles.profile}>
                        <span role='img' aria-label='User profile'>
                            &#x1F464;
                        </span>
                        {/* this list item will become a component */}
                    </li>
                </ul>
            </nav>
        </header>
    );
};