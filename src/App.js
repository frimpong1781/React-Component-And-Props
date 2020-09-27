import React from 'react';
import './App.css';
import Navbar from './navbar-component';
import Banner from './banner-component';
import Foot from './foot-component';
import Thumbnail from './thumbnail-component';

const THUMBNAILS_DATA = ['Thumb_Arr 1', 'Thumb_arr 2', 'Thumb 3','Thumb 4', 'Thumb 5', 'Thumb 6', 'Thumb 7', 'Thumb 8']

function App() {
  return (
    <div>
        <Navbar />

        <Banner />
        
        {/* thumbnails */}	      
	    <div style={{display: 'flex', width:'100%', height:'50vh', flexWrap: 'wrap', flexDirection: 'row', justifyContent:'space-evenly', alignItems: 'center'}}>
          {
              THUMBNAILS_DATA.map((thumb) => {
                return <Thumbnail name={thumb} />
              })
          }
        
	    </div>

      <Foot />

    </div>
  );
}

export default App;
