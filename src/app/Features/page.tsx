import React from 'react';
import './Features.css';
import { FaUserAlt, FaHeart, FaLanguage, FaShieldAlt, FaMapMarkerAlt, FaDatabase, FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

export default function Features() {
    return (
        <main className="features-main">
            {/* <h1 className="features-title">FEATURES</h1> */}
            <div className="features-grid">
                <div className="feature-box">
                    <FaUserAlt className="feature-icon" />
                    <h2 className="feature-title">USER PROFILE</h2>
                    <p>Passionate adventurer seeking genuine connections. Art, music, and spontaneous adventures await. Let&apos;s explore together!</p>
                    <p>Apasionado aventurero buscando conexiones genuinas. Amante del arte, la música y las aventuras espontáneas. ¡Vamos a explorar juntos!</p>
                </div>
                <div className="feature-box">
                    <FaHeart className="feature-icon" />
                    <h2 className="feature-title">MATCHING</h2>
                    <p>Finding the perfect match requires not just compatibility, but also the willingness to grow together through life&apos;s twists and turns.</p>
                    <p>Den perfekten Partner zu finden, erfordert nicht nur Kompatibilität, sondern auch die Bereitschaft, gemeinsam durch die Höhen und Tiefen des Lebens zu wachsen.</p>
                </div>
                <div className="feature-box">
                    <FaLanguage className="feature-icon" />
                    <h2 className="feature-title">CHAT TRANSLATE</h2>
                    <p>Discover love across languages. Our app seamlessly translates German and English, connecting you worldwide.</p>
                    <p>Entdecke Liebe über Sprachgrenzen hinweg. Unsere App übersetzt nahtlos zwischen Deutsch und Englisch und verbindet dich weltweit.</p>
                </div>
                <div className="feature-box">
                    <FaShieldAlt className="feature-icon" />
                    <h2 className="feature-title">SECURITY</h2>
                    <p>Your safety is our priority. With advanced encryption and vigilant monitoring, our platform ensures your security every step of the way.</p>
                    <p>Ihre Sicherheit hat für uns oberste Priorität. Mit fortschrittlicher Verschlüsselung und aufmerksamer Überwachung gewährleistet unsere Plattform Ihre Sicherheit bei jedem Schritt.</p>
                </div>
                <div className="feature-box">
                    <FaMapMarkerAlt className="feature-icon" />
                    <h2 className="feature-title">GEOLOCATION</h2>
                    <p>Discover matches nearby with our geolocation feature, ensuring convenience and safety in your dating journey.</p>
                    <p>Entdecken Sie Matches in Ihrer Nähe mit unserer Geolocation-Funktion!</p>
                </div>
                <div className="feature-box">
                    <FaDatabase className="feature-icon" />
                    <h2 className="feature-title">STORAGE</h2>
                    <p>We prioritize the security of both images and content for all users, employing robust encryption and privacy measures within our app.</p>
                    <p>Wir priorisieren die Sicherheit Ihrer Daten.</p>
                </div>
                <div className="feature-box">
                    <FaCheckCircle className="feature-icon" />
                    <h2 className="feature-title">USER VERIFICATION</h2>
                    <p><FaCheckCircle style={{ color: 'green' }} /> This user&apos;s identity has been authenticated, providing a safer and more authentic dating experience for our community.</p>
                    <p><FaTimesCircle style={{ color: 'red' }} /> This user&apos;s identity has not been authenticated.</p>
                </div>
            </div>
        </main>
    );
}
