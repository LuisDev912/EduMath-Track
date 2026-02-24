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
            <h2 className={SemanticStyles.text}>MathTrack</h2>
        </header>
    );
};