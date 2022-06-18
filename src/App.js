import logo from './logo.svg';
import './App.css';
import './bootstrap.min.css';
import { useState } from 'react';
import axios from 'axios';

function Header() {
  return (
    <div className="jumbotron col-10 offset-1">
      <h1 className="display-4"> User Search </h1>
      <p className="lead"> Search your favorite github users! </p>
    </div>
  );
}

function Search({ onShowProfile, onHideProfile }) {
  const [searchStr, setSearchStr] = useState('');

  async function getPhotos(id) {
    try {
      if (id) {
        const resp = await axios.get(
          `https://api.github.com/users/${searchStr}`
        );
        onShowProfile(resp.data);
      } else {
        onHideProfile();
      }
    } catch (err) {
      console.log(err);
      onHideProfile();
    }
  }

  const handleChange = (e) => {
    setSearchStr(e.target.value);
  };

  const handleSubmit = (e) => {
    getPhotos(e.target.value);
  };

  return (
    <div className="row">
      <div className="col-10 offset-1">
        <nav className="navbar navbar-light bg-light">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            value={searchStr}
            onChange={handleChange}
            onKeyUp={handleSubmit}
          />
        </nav>
      </div>
    </div>
  );
}

function ImageList({ profiles }) {
  return (
    <div className="row">
      {profiles.map((item) => (
        <Image key={item.id} {...item} />
      ))}
    </div>
  );
}

function Image(props) {
  return (
    <div className="row">
      <div className="col-4 offset-1">
        <a href={props.html_url} target="_blank" rel="noreferrer">
          <img src={props.avatar_url} alt="avatar showing here" />
        </a>
      </div>
      <div className="col-6">
        <h2>User : {props.name} </h2>
        <p> Login : {props.login} </p>
        <p> Twitter : {props.twitter_username} </p>
        <p> Created at : {props.created_at} </p>
      </div>
    </div>
  );
}

function App() {
  const [searchData, setSearchData] = useState({ profiles: [] });

  function showProfiles(profileData) {
    setSearchData(() => ({
      profiles: [profileData],
    }));
  }

  function hideProfiles() {
    setSearchData(() => ({ profiles: [] }));
  }

  return (
    <div className="container-fluid">
      <Header />
      <Search onShowProfile={showProfiles} onHideProfile={hideProfiles} />
      <ImageList {...searchData} />
    </div>
  );
}

export default App;
