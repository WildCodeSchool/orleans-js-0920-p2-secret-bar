import PropTypes from 'prop-types';
import './Service.css';

function Service({ image, service, description }) {
  return (
    <figure class="ServiceCard">
      <img src={image} alt={service} />
      <figcaption>
        <blockquote className="ServiceName">{service}</blockquote>
        <p className="Desc">{description}</p>
      </figcaption>
    </figure>
  );
}

Service.propTypes = {
  image: PropTypes.string.isRequired,
  service: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Service;
