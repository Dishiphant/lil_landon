import React, { useEffect, useState } from 'react';
// import welcomeGalleryData from './data/welcome_gallery.json';

const Welcome = () => {
  const [welcomeGalleryData, setWelcomeGalleryData] = useState([]);

  const loadWelcomeGalleryData = async() => {
    //Query the API Gateway
    const resp = await fetch('https://0b6j4bl708.execute-api.us-east-2.amazonaws.com/Production/welcome_gallery');
    let jsonData = await resp.json();

    //Assign response data to our state variable
    setWelcomeGalleryData(jsonData)
  }

  useEffect(() => {
    //Load the welcome gallery data from the API Gateway
    loadWelcomeGalleryData();

    //If have other side effects, put them here
  }, []);

  return (
      <div className="scene" id="welcome">
          <article className="content">
            <div className="gallery">
              {
                welcomeGalleryData.map((img) => 
                <img className={img.className} src={img.src} alt={img.alt}  />)
              }
              {/* <img src="https://landonhotel.com/images/hotel/intro_room.jpg" alt="Intro Gallery Room Sample Pictures" />
              <img src="https://landonhotel.com/images/hotel/intro_pool.jpg" alt="Intro Gallery Pool Sample Pictures" />
              <img src="https://landonhotel.com/images/hotel/intro_dining.jpg" alt="Intro Gallery Dining Sample Pictures" />
              <img src="https://landonhotel.com/images/hotel/intro_attractions.jpg" alt="Intro Gallery Attractions Sample Pictures" />
              <img className="hidesm" src="https://landonhotel.com/images/hotel/intro_wedding.jpg" alt="Intro Gallery Dining Sample Pictures" /> */}
            </div>
            <h1>Welcome to the Landon&nbsp;Hotel</h1>
            <p>The original Landon perseveres after 50 years in the heart of West London. The West End neighborhood has something for everyone—from theater to dining to historic sights. And the not-to-miss Rooftop Cafe is a great place for travelers and locals to engage over drinks, food, and good&nbsp;conversation. &nbsp;To learn more about the Landon Hotel in the West End, browse our website and <a href="files/landon_information_sheet_London.pdf">download our handy information sheet</a>.</p>
          </article>
      </div>
  );
}
export default Welcome;
