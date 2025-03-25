import { Typewriter } from "react-simple-typewriter"
import Button from "../../atoms/button/Button"

const HomeInfo = () => {
    return (
        <div className="home-data">
            <h1 className="home-title">
                Rafael Oliveira.
            </h1>

            <h3 className="home-subtitle">
            <Typewriter
                    words={['Backend Software Engineer', 'Fullstack Developer', 'Problem Solver']}
                    loop={true}
                    cursor
                    cursorStyle='|'
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                />
            </h3>

            <p className="home-description">
                I'm a Software Engineer based in Brazil with a passion for software engineering. I'm always seeking new challenges.
            </p>

            <Button to="#contact" text="Say hello" />
        </div>
    )
}

export default HomeInfo