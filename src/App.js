import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className='baseDiv'>
    
    <img src='logo.png' className='logo'/>     
    <h1 className='Heading body'><b>SITE UNDER CONSTRUCTION</b></h1>

    <div className='LogoDiv'>
    <a href='https://www.instagram.com/sponxer_official/'>
    <span><img src='instagram.svg' className='icon'></img> </span>
    <h3 className='text'>@Sponxer_official</h3>
    </a>
    </div>

    <div className='LogoDiv'>
    <a href='https://www.linkedin.com/company/sponxer/'>
    <span><img src='LinkedIn.svg' className='icon'></img></span>
    <h3 className='text'>Sponxer Page</h3>
    </a>
    </div>
    </div>
  );
}

export default App;
