import './Sidebar.css'

function Sidebar() {
    return(
<>
<div className="container">
        <img src="https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/10.spotify-clone/assets/Spotify%20logo.png"
          alt="" className="logo" />
        <div className='item'><img className="icons"
          src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/Home.png?raw=true"
          alt="" />
          <p className="text">Home</p>
        </div>
      </div>
      <div className='item'><img className="icons"
        src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/Search.png?raw=true"
        alt="" />
        <p className="text">search</p>
      </div>
      <div className='abc'><img className="icons"
        src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/Your%20library.png?raw=true"
        alt="" />
        <p className="text">Your Library</p>
      </div>


      <div className='new1'><img className="icons"
        src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/Create.png?raw=true"
        alt="" />
        <p className="text">Create playlist</p>
      </div>

      <div className='new2'><img className="icons"
        src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/Liked.png?raw=true"
        alt="" />
        <p className="text">Liked Songs</p>
      </div>


      <div className='new3'><img className="icons"
        src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/your%20episodes.png?raw=true"
        alt="" />
        <p className="text">Your Episodes</p>
      </div>

      <div>
        <p className='fav'>FAV</p>
      </div>
      <div>
        <p className='daily'>Daily Mix 1</p>
      </div>
      <div>
        <p className='discovery'>Discover weekly</p>
      </div>
      <div>
        <p className='malayalam'>Malayalam</p>
      </div>
      <div>
        <p className='dance'>Dance / Electronix mix</p>
      </div>
      <div>
        <p className='edm'>EDM / Popular</p>
      </div>
      <div>
        <img
          src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/grommet-icons_install-option.png?raw=true"
          alt="" className="icons install" />
        <p className='instname'>Install App</p>
      </div>
</>
    )
   
}

export default Sidebar