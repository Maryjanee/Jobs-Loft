import snergy from '../assets/synergy.webp';

const Card = () => (
  <div className="container">
    <div className="card-container d-grid">

      <div className="job-details d-grid">

        <div className="company-logo">
          <img src={snergy} alt="logo" />
        </div>
        <div className="company-info">
          <p className="job-title">Backend Engineer C# .net</p>
          <p className="company-name">Synergy Sports</p>
          <p className="location capsule">Europe</p>

        </div>

      </div>

      <div className="tags d-flex">
        <p className="capsule">Javascript</p>
        <p className="capsule">React</p>
        <p className="capsule">C#</p>
        <p className="capsule">Rails</p>
        <p className="capsule">SQL</p>
      </div>

      <div className="d-flex lasy">
        <p className="job-tag capsule">Software Development</p>
        <p className="created-at">11d</p>
      </div>

    </div>
  </div>
);

export default Card;
