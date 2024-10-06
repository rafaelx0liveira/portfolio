import Social from '../../molecules/social_media/Social'
import Data from '../../molecules/data/Data'
import ScrollDown from '../../molecules/scroll_down/ScrollDown'

const Home = () => {
    return (
        <section className="home section" id="home">
            <div className="home-container container grid">
                <div className="home-content grid">
                    <Social />

                    <div className="home-img">

                    </div>

                    <Data />
                </div>

                <ScrollDown />
            </div>
        </section>
    )
}

export default Home