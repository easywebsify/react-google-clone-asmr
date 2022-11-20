import './App.css';
import mostVisitedDatas from './most-visited.json'

function App() {
  return (
    <div className="App">
      <nav>
        <ul className='nav-bar'>
          <li><a href='./'>Gmail</a></li>
          <li><a href='./'>Images</a></li>
          <li><img alt='app' src='./apps.png' /></li>
        </ul>
      </nav>
      <div className='main'>
        <div className='search'>
          <div><img alt='main-logo' className='main-logo' src='./google.png' /></div>
          <div>
            <form>
              <img alt='img-search' src='./search.png' className='img-search' />
              <input type='text' placeholder='Search google or type a URL' id='txt-search' />
              <img alt='img-mic' src='./mic.png' className='img-mic' />
            </form>
          </div>
        </div>
      </div>
      <div id="most-visited">
        {
          mostVisitedDatas.map((item) => {
            return (
              <a href={item.url} key={item.name}>
                <div className='container-icon'>
                  <img alt={item.name} src={item.icon} className='icon' />
                  <p className='name'>{item.name}</p>
                </div>
              </a>
            )
          })
        }
      </div>
    </div>
  );
}

export default App;
