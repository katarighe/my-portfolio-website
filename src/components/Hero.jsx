import PropTypes from 'prop-types'
import '../assets/styles/Home.css';
import "animate.css/animate.min.css";

function Hero({ name, details, backgroundImage }) {
  const sectionStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };

  return (
    <section className="bg-green-500 text-white bg-opacity-100" style={sectionStyle}>
      <div className="container flex flex-col justify-center items-center text-center h-screen gap-0 bg-opacity-50">
        <h1 className="font-bold font-robotoCondensed text-[5rem] p-0 m-0 leading-[80%] uppercase animate__animated animate__fadeIn">{name}</h1>
        <h3 className="font-style: italic font-robotoCondensed text-[2rem] p-0 m-0 uppercase tracking-[0.8rem] animate__animated animate__fadeIn">{details}</h3>
      </div>
    </section>
  );
}

Hero.defaultProps = {
  name: 'Your Name',
  details: 'WEB-DESIGNER',
  backgroundImage: '../assets/coding-background.jpg',
};

Hero.propTypes = {
  name: PropTypes.string,
  details: PropTypes.string,
  backgroundImage: PropTypes.string.isRequired,
};

export default Hero;
