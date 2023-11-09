import { useEffect, useState } from 'react';

type CardProps = {
  title: string;
  image: string;
  description: string;
  odd: boolean;
  exercises?: { title: string }[];
};

export function Card({ title, image, description, odd = false, exercises = undefined }: CardProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 992);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const imageEl = (
    <div className="col-lg-6 col-12">
      <div className="info-image wow fadeInLeft" data-wow-delay=".3s" style={ { visibility: 'visible', animationDelay: '0.3s', animationName: 'fadeInLeft' } }>
        <img className="ss1" alt="#" data-pagespeed-url-hash="2622135838" src={ image } />
      </div>
    </div>
  );

  const renderImageTop = () => {
    if (isMobile) {
      return null;
    }

    if (odd) {
      return null;
    }

    return imageEl;
  };

  const renderImageBottom = () => {
    if (isMobile) {
      return imageEl;
    }

    if (odd) {
      return imageEl;
    }

    return null;
  };

  const exercisesSection = (
    <div className="info-exercises mb-4 mt-4">
      <h5 className="mb-2">Exercícios Complementares</h5>
      <ul className="list-group">
        {exercises?.map((exercise: any, index) => (
          <li
            key={ exercise.title }
            className="bg-trybe text-white list-group-item list-group-item-accent d-flex align-items-center justify-content-between "
          >
            <p className="mb-0">{exercise.title}</p>
            <span>{exercise.points}</span>
          </li>
        ))}
      </ul>

    </div>
  );

  return (
    <div className="info-one style2">
      <div className="row align-items-center">
        {renderImageTop()}
        <div className="col-lg-6 col-md-12 col-12">
          <div className="info-text wow fadeInRight" data-wow-delay=".5s">
            <h2>{title}</h2>
            <p>{description}</p>
            {exercises && exercisesSection}
          </div>
        </div>
        {renderImageBottom()}
      </div>
    </div>
  );
}
