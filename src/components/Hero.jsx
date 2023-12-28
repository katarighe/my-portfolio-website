import PropTypes from 'prop-types'

function Hero({ name, details, backgroundImage }) {
  const sectionStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };

  return (
    <section className="bg-green-500 text-orange-400 bg-opacity-100" style={sectionStyle}>
      <div className="container flex flex-col justify-center items-center text-center h-screen gap-0 bg-opacity-50">
        <h1 className="font-robotoCondensed text-[6rem] p-0 m-0 leading-[80%] uppercase">{name}</h1>
        <h3 className="font-robotoOriginal text-[2rem] p-0 m-0 uppercase">{details}</h3>
      </div>
    </section>
  );
}

Hero.defaultProps = {
  name: 'Your Name',
  details: 'WEB-DESIGNER',
};

Hero.propTypes = {
  name: PropTypes.string,
  details: PropTypes.string,
};

export default Hero;
