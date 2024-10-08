import Social from '../../molecules/social_media/Social'
import HomeInfo from '../../molecules/home_info/HomeInfo'
import ScrollDown from '../../molecules/scroll_down/ScrollDown'

const Home = () => {
    return (
        <section className="home section" id="home">
            <div className="home-container container grid">
                <div className="home-content grid">
                    <Social />

                    <div className="home-img">

                    </div>

                    <HomeInfo />
                </div>

                <ScrollDown />
            </div>
        </section>
    )
}

export default Home