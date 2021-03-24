import logo from './logo.svg';
import image1 from './image1.jpg';
import image2 from './image2.jpg';
import './App.css';
import './style.css';

function App() {
  return (
    <div>
      <div>
        <h1 className='title red'>Imane BENCHAIBA</h1>
          <img src={image1} />
          <img src={image2} />
      </div>

      <video width="320" height="240" controls>
        <source src="myVideo.mp4" type="video/mp4" />
      </video>
    </div>
    
  );
}

export default App;
