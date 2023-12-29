import PropTypes from 'prop-types'

function Hero({ name, details, backgroundImage }) {
  const sectionStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };

  return (
    <section className="text-white bg-opacity-100" backgroundImage="src/assets/coding-background.jpg" style={sectionStyle}>
      <div className="container flex flex-col justify-center items-center text-center h-screen gap-0 bg-opacity-50">
        <h1 className="font-bold font-robotoCondensed text-[6rem] p-0 m-0 leading-[80%] uppercase">{name}</h1>
        <h3 className="font-style: italic font-robotoCondensed text-[2.5rem] p-0 m-0 uppercase">{details}</h3>
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
