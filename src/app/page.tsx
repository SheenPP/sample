import React from 'react';
import Image from 'next/image';
import './Home.css';

export default function Home() {
  return (
    <div className="App">
      <div className="text-center text-black header-section">
        <h1>Want to Find your</h1>
        <h1 className="highlight">Filipina Dream Girl ?</h1>
        <p className="description">
          Entdecken Sie Ihre Filipina-Traumfrau auf unserer maßgeschneiderten Dating-Plattform für deutsche Männer. Wir legen großen Wert auf Ihre Bedürfnisse und bieten eine sichere sowie unterstützende Umgebung für bedeutungsvolle Verbindungen. Schließen Sie sich uns an, um echte Beziehungen über Grenzen hinweg zu fördern.
        </p>
      </div>
      <div className="container-box"> 
        <div className="profile-box">
          <div className="profile-card1">
            <Image src="/jane.jpg" alt="Jane Doe" width={200} height={200} className="profile-image" />
            <div className="profile-info">
              <h2>Jane Doe, 30</h2>
              <p>Jane Doe ist eine liebevolle und fürsorgliche Person...</p>
            </div>
          </div>
          <div className="profile-card2">
            <Image src="/john.jpg" alt="John Doe" width={200} height={200} className="profile-image" />
            <div className="profile-info">
              <h2>John Doe, 35</h2>
              <p>John Doe ist ein aufgeschlossener und freundlicher Mensch...</p>
            </div>
          </div>
          {/* <div className="profile-card3">
            <Image src="/jane.jpg" alt="John Doe" width={200} height={200} className="profile-image" />
            <div className="profile-info">
              <h2>Anne Noynay, 69</h2>
              <p>Anne Noynay ist eine liebevolle und fürsorgliche Person...</p>
            </div>
          </div>
          <div className="profile-card4">
            <Image src="/john.jpg" alt="John Doe" width={200} height={200} className="profile-image" />
            <div className="profile-info">
              <h2>Mark Labuca, 16</h2>
              <p>Mark Labuca ist ein aufgeschlossener und freundlicher Mensch...</p>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
