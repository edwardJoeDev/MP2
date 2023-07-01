import Welcome from "../Components/Welcome"
import WhyChooseUs from "../Components/Whychooseus"
import Hero from "../Components/Hero"
import About from "../Components/About";

const Home = () => {
    return (
        <div>
        <Hero />
        <Welcome />
        <About />
        <WhyChooseUs />
        </div>
        )
}

export default Home;