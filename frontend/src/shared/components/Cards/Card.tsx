import type { cardProps } from "@shared/types/Card.types";
import Style from './Card.module.css';

function Card({ title, subtitle }: cardProps) {
    return (
        <article className={Style.card}>
            <p className={`heading-tertiary ${Style.cardTitle}`}>{title}</p>

            <p className={Style.cardSubtitle}>{subtitle}</p>
        </article>
    )
};

export default Card;