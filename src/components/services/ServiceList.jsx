import SectionTitle from '../section-title/SectionTitle';
import Service from './Service';
import './ServiceList.css';

const services = [
  {
    image: 'https://zupimages.net/up/20/45/4d4j.jpeg',
    service: 'Lounge Bar',
    description:
      "Découvrez notre nouveau lounge créé exclusivement par le meilleur designer au monde. Détendez-vous sur nos canapés Rochebobois et profitez d'une ambiance feutrée et de sa musique d'ambiance, idéal pour déguster nos alcools d'exception.",
  },
  {
    image: 'https://zupimages.net/up/20/45/iav7.jpeg',
    service: 'Conciergerie',
    description:
      "Nos employés d'exceptions sont impatients de vous rencontrer et de répondre à vos attentes et vos besoins. Leur disponibilité sans égale vous attend à l'accueil du Wild Code Bar.",
  },
  {
    image: 'https://zupimages.net/up/20/44/3n9i.jpg',
    service: 'Voiturier',
    description:
      "Nos chauffeurs, triés sur le volet, vous garantissent une conduite douce et agréable afin de vous ramener chez vous dans les meilleures conditions. L'expérience Wild Code Bar à vivre jusqu'à votre domicile...",
  },
];


function ServiceList() {
  return (
    <div className="ServicesSection">
      <SectionTitle title="Nos Services" color="black" />

      <div className="Services" data-aos="fade-up">
        {services.map((service) => (
          <Service
            className="ServiceCard"
            key={service.service}
            image={service.image}
            service={service.service}
            description={service.description}
          />
        ))}
      </div>
    </div>
  );
}

export default ServiceList;
