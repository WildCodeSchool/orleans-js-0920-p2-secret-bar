import PropTypes from 'prop-types';
import './SectionTitle.css';

function SectionTitle({ title, color }) {
  return (
    <div className="HeadTitle" data-aos="fade-up">
      <h2
        className={
          color === 'black' ? 'ServicesTitle black' : 'ServicesTitle white'
        }
      >
        {title}
      </h2>
      <img
        className="Goldline"
        src="https://zupimages.net/up/20/44/hrq1.png"
        alt="line"
      />
    </div>
  );
}

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default SectionTitle;
