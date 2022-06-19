import './App.css';
import './bootstrap.min.css';
import { useState } from 'react';

import Header from '../src/components/Header';
import Search from '../src/components/Search';
import ImageList from '../src/components/ImageList';

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
    <div className="container">
      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-sm-12 col-xs-12">
          <div className="card card-height p-4 mt-4">
            <Header />
            <Search onShowProfile={showProfiles} onHideProfile={hideProfiles} />
            <ImageList {...searchData} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
