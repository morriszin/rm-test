import axios from 'axios';
import { useState } from 'react';

function Search({ onShowProfile, onHideProfile }) {
  const [searchStr, setSearchStr] = useState('');

  async function getPhotos(str) {
    try {
      if (str) {
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
      <div className="d-flex justify-content-between mb-3">
        <input
          className="form-control"
          type="search"
          placeholder="Search.."
          aria-label="Search"
          value={searchStr}
          onChange={handleChange}
          onKeyUp={handleSubmit}
        />
      </div>
    </div>
  );
}

export default Search;
