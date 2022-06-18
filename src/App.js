import logo from './logo.svg';
import './App.css';
import './bootstrap.min.css';

function Header() {
  return (
    <div className="jumbotron col-10 offset-1">
      <h1 className="display-4"> Photo Search </h1>
      <p className="lead"> Search for photos of your favorite things! </p>
    </div>
  );
}

function Search(props) {
  return (
    <div className="row">
      <div className="col-10 offset-1">
        <nav className="navbar navbar-light bg-light">
          <form className="form-inline">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </form>
        </nav>
      </div>
    </div>
  );
}

function Image({ image }) {
  return (
    <div className="row">
      <div className="col-4 offset-1">
        <a href={image.link} target="_blank" rel="noreferrer">
          <img src={image.media.m} alt="showing here" />
        </a>
      </div>
      <div className="col-6">
        <h2>Author : {image.author} </h2>
        <p> Date Taken : {image.date_taken} </p>
        <p> Tags : {image.tags} </p>
      </div>
    </div>
  );
}

function Footer(props) {
  return (
    <div id="footer" className="row">
      <div className="col-4 offset-1">
        <p className="text-muted"> All the images are from flickr! </p>
      </div>
    </div>
  );
}

function App({ searchData }) {
  return (
    <div className="container-fluid">
      <Header />
      <Search />
      <Image {...searchData} />
      <Footer />
    </div>
  );
}

export default App;
