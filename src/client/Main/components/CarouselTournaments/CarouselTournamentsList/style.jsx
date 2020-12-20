import "../../../../../shared/styles/scss/variables.scss"

export const carouselStyle = bgImageUrl => {
  return {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'start',
    width: '1350px',
    height: '450px',
    backgroundImage: `url(${bgImageUrl})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    padding: '50px',
    boxShadow: 'inset 0 3px 35px 33px #26254F',
  };
};

export const styleCarouselHeader = {
  color: '#fff',
  fontWeight: 'bolt',
  fontSize: '50px',
  textTransform: 'uppercase',
  margin: 0,
};

export const styleCarouselDescription = {
  color: '#fff',
  fontWeight: 'bolt',
  fontSize: '32px',
};
