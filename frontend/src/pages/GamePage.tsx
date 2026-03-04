import Game from "../game/components/Game"
export default function GamePage() {
    return (
        <section className="flex flex-column align-center">
            <h1 className="heading-primary">Game</h1>

            <Game />
        </section>
    )
};