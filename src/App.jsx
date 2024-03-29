import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css';

function Introduction() {
  //links
  const links = [
    { icon: <i className="bi-file-code"></i>, web: "https://portfolio.juspna.com/", data: "My personal portfolio"},
    { icon: <i className="bi-linkedin"></i>, web: "www.linkedin.com/in/giuseppina-sayan-1a32056b", data: "LinkedIn"},
    { icon: <i className="bi-github"></i>, web: "https://github.com/gusche85", data: "Github"}
  ];

  const educationData = [
    { institution: 'Universiti Tun Hussein Onn', year: '2004 - 2007', degree: 'Bachelor of Information Technology (Hons)' },
    { institution: 'Sigma School', year: '2023', degree: 'Software Development Program' },
  ];

  //experiences
  const experiences = [
    { position: "Document Controller",
      company: "Sumatec Engineering & Construction Sdn. Bhd.",
      year: "2010",
      description: ["Managed the ABF Plant Rejuvenation Project Main Construction Package, ensuring smooth communication and coordination among stakeholders.", "Ensured compliance with project requirements through systematic file management practices for efficient document retrieval."]
    },
    { 
      position: "Document Control Coordinator",
      company: "Air Energy Consulting (M) Sdn. Bhd.",
      year: "2009",
      description: ["Overseeing the organization and management of documents and drawings for the Construction of Murphy Gas Plant Phase 1 Bintulu Onshore Receiving Facility project."]
    },
    { position: "General Clerk",
      company: "K-Frontiers Sdn. Bhd.",
      year: "2008-2009",
      description: ["Assisting the Technical Assistant with general administrative duties, while performing document control tasks to facilitate project progression."]
    }];

  //resuma layout
  return (
    <div className="d-flex m-5 justify-content-center align-items-center">
    <main className='border border-black rounded'>
      <div className='container-fluid m-7 p-3'>
      <h1 className='fw-bold text-center'>Giuseppina Sherry Sayan</h1>
        <Picture />
        <BioLinkDisplay link={links} />
        <hr />
        <Summary />
        <Skills />
        <Education educationData={educationData} />
        <nav className="navbar bg-success-subtle rounded mb-3 mt-3"> 
          <div className="container-fluid"> 
            <span className="navbar-brand mb-0 h1">Experience</span>
          </div>
        </nav>
        {experiences.map((experience, index) => (
          <Experience 
            key={index}
            position={experience.position}
            company={experience.company}
            year={experience.year}
            description={experience.description}
          />
        ))}
    </div>
    </main>
    </div>
  )
}

function BioLinkDisplay({link}) {
  return (
    <p className="text-center">
    {link.map((img, index) => (
      <div key={index} className='list-inline-item align-items-center'>
        {img.icon}<a href={img.web} className="link-primary p-2">{img.data} </a>
      </div>
    ))}
    </p>
  )
}

function Skills() {
  return (
    <>
        <nav className="navbar bg-success-subtle rounded mb-3 mt-3"> 
          <div className="container-fluid"> 
            <span className="navbar-brand mb-0 h1">Skills</span>
          </div>
        </nav>
      <p className='mb-4'>
       JavaScript, HTML, CSS, React.js, Firebase, Express.js, Wordpress, JSON, Application Programming Interfaces (API), Information Technology
      </p>
   </>
  )
}

function Education({ educationData }) {
  return (
    <>
      <nav className="navbar bg-success-subtle mb-3 mt-3">
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1">Education</span>
        </div>
      </nav>
      <ol className='mb-4'>
        {educationData.map((eduItem, index) => (
          <EducationItem key={index} {...eduItem} />
        ))}
      </ol>
    </>
  );
}

function EducationItem({ institution, year, degree}) {
  return (
    <li>
      {institution} ({year})
      <ul>
        <li>{degree}</li>
      </ul>
    </li>
  );
}

function Summary() {
  return (
    <>
      <p className='mt-4 fw-bold'>Summary:</p>
    <p className='mb-4'>I am a tech enthusiast fueled by a passion for problem-solving. My coding journey is a testament to my self-learning prowess, showcasing my commitment to continuous improvement. Drawing from a background as a document controller in the oil and gas industry, I bring a unique blend of organizational skills and attention to detail. Leveraging this experience, I've successfully translated my expertise into programming, contributing to the development of impactful applications. Explore with me as I merge industry insights with cutting-edge technology in my online portfolio. I am ready to bring a dynamic blend of tech prowess and industry experience to your team</p>
    </>
   )
}

 function Picture() {
  return (
    <div className='text-center m-3'>
    <img className='border-black rounded-circle' height={130} src='/profile.png'/>
    </div>
  );
}

//experience
function Experience({position, company, year, description}) {
  return (
    <>
      <ul>
      <Position position = {position} />
      <Company company = {company} year={year} />
        {description.map((description, index) => (
          <Description key={index} description={description} />
        ))}
      </ul>
    </>
  )
}

function Position ({position}) {
  return (
    <li className='fw-bold'>{position} </li>
  )
}

function Company({company, year}) {
  return (
    <li className='list-group-item text-success fst-italic'>Company: {company} ({year})</li>
  )
}

function Description({description}) {
  return (
    <ul>
      <li> {description}</li>
    </ul>
  )
}
export default Introduction;