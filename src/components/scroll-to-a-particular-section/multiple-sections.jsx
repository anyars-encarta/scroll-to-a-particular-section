import { useRef } from 'react';
import './styles.css';

const ScrollToAParticularSectionMultiple = () => {
  const section1 = useRef(null);
  const section2 = useRef(null);
  const section3 = useRef(null);
  const section4 = useRef(null);
  const section5 = useRef(null);

  const handleGoToSection1 = () => {
    section1.current.scrollIntoView({ behavior: 'smooth' });
  };

  const handleGoToSection2 = () => {
    section2.current.scrollIntoView({ behavior: 'smooth' });
  };

  const handleGoToSection3 = () => {
    section3.current.scrollIntoView({ behavior: 'smooth' });
  };

  const handleGoToSection4 = () => {
    section4.current.scrollIntoView({ behavior: 'smooth' });
  };

  const handleGoToSection5 = () => {
    section5.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="content">
      <div className="nav">
        <h1>Scroll to a particular section</h1>

        <div className="scroll-buttons">
          <button onClick={handleGoToSection1} type="button">Go To First Card</button>
          <button onClick={handleGoToSection2} type="button">Go To Second Card</button>
          <button onClick={handleGoToSection3} type="button">Go To Third Card</button>
          <button onClick={handleGoToSection4} type="button">Go To Fourth Card</button>
          <button onClick={handleGoToSection5} type="button">Go To Fifth Card</button>
        </div>
      </div>

      <div className="cards">
        <section ref={section1} className="section-1">
          <h3>First Card</h3>
        </section>

        <section ref={section2} className="section-2">
          <h3>Second Card</h3>
        </section>

        <section ref={section3} className="section-3">
          <h3>Third Card</h3>
        </section>

        <section ref={section4} className="section-4">
          <h3>Fourth Card</h3>
        </section>

        <section ref={section5} className="section-5">
          <h3>Fifth Card</h3>
        </section>
      </div>
    </div>
  );
};

export default ScrollToAParticularSectionMultiple;
