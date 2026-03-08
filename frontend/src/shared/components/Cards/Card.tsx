import type { cardProps } from "../../types/CardProps";
import Style from './Card.module.css';

function Card({ title, subtitle }: cardProps) {
    return (
        <article className={Style.card}>
            <h3 className={`heading-tertiary ${Style.cardTitle}`}>{title}</h3>

            <p className={Style.cardSubtitle}>{subtitle}</p>
        </article>
    )
};

export default Card;