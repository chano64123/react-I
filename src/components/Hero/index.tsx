import './styles.css'

const Hero = ({first, second}) => {

    return (
        <section id="hero">
            <div className="container">
                <div className="title-container">
                    <span>{first}</span>
                    <span>{second}</span>
                </div>
            </div>
        </section>
    );
}

export default Hero