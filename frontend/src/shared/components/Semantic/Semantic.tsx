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
            <nav>
                <ul>
                    <li>
                        <NavItem
                            to='/'
                        >
                            MathTrack
                        </NavItem>

                        <NavItem
                            to='/404'
                        >
                            404 page (temporal)
                        </NavItem>
                    </li>
                </ul>
            </nav>
        </header>
    );
};