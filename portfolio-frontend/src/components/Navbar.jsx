import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleHomeClick = (e) => {
    e.preventDefault();

    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Navigate to Home
      navigate('/');
    }
  };

  const handleProjectClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleExperienceClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleAboutClick = () => {
    if (location.pathname === '/') {
      const section = document.getElementById('about');
      section?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/', { state: { scrollTo: 'about' } });
    }
  };

  return (
    <header>
      <nav>
        <ul>
          <li><a href="/" onClick={handleHomeClick}>Home</a></li>
          <li><a onClick={handleAboutClick}>About</a></li>
          <li><Link to="/projects" onClick={handleProjectClick}>Projects</Link></li>
          <li><Link to="/experience" onClick={handleExperienceClick}>Experience</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
