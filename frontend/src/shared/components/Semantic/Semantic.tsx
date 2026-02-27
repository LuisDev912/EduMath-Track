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
                        <NavItem
                            to='/'
                        >
                            MathTrack
                        </NavItem>
                    </li>

                    <div className={SemanticStyles.mainNavigation}>
                        <li>
                            <NavItem
                                to='/404'
                            >
                                Dashboard
                            </NavItem>
                        </li>
                    </div>

                    <li className={SemanticStyles.profile}>
                        &#x1F464;
                        {/* this list item will become a component */}
                    </li>
                </ul>
            </nav>
        </header>
    );
};