import React from 'react';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import { FaRegCircleUser } from "react-icons/fa6";
import { TbUserSearch } from "react-icons/tb";
import { MdTranslate, MdOutlineSecurity } from "react-icons/md";
import { GoLocation } from "react-icons/go";
import { BsCloudArrowDown } from "react-icons/bs";
import { LuBadgeCheck } from "react-icons/lu";

export default function Features() {
    return (
        <main className="text-center p-4 pt-24 md:p-10">
            <div className="flex flex-wrap justify-center gap-5">
                <div className="bg-white border border-gray-300 rounded-lg p-5 w-full sm:w-72 shadow-lg relative text-left">
                    <div className="flex flex-col items-center mb-2">
                        <FaRegCircleUser className="text-pink-500 text-3xl mb-2" />
                        <h2 className="text-lg text-gray-800">USER PROFILE</h2>
                    </div>
                    <p className="text-sm text-gray-600 leading-6">Passionate adventurer seeking genuine connections. Art, music, and spontaneous adventures await. Let's explore together!</p>
                    <p className="text-sm text-gray-600 leading-6">Apasionado aventurero buscando conexiones genuinas. Amante del arte, la música y las aventuras espontáneas. ¡Vamos a explorar juntos!</p>
                </div>
                <div className="bg-white border border-gray-300 rounded-lg p-5 w-full sm:w-72 shadow-lg relative text-left">
                    <div className="flex flex-col items-center mb-2">
                        <TbUserSearch className="text-pink-500 text-3xl mb-2" />
                        <h2 className="text-lg text-gray-800">MATCHING</h2>
                    </div>
                    <p className="text-sm text-gray-600 leading-6">Finding the perfect match requires not just compatibility, but also the willingness to grow together through life's twists and turns.</p>
                    <p className="text-sm text-gray-600 leading-6">Den perfekten Partner zu finden, erfordert nicht nur Kompatibilität, sondern auch die Bereitschaft, gemeinsam durch die Höhen und Tiefen des Lebens zu wachsen.</p>
                </div>
                <div className="bg-white border border-gray-300 rounded-lg p-5 w-full sm:w-72 shadow-lg relative text-left">
                    <div className="flex flex-col items-center mb-2">
                        <MdTranslate className="text-pink-500 text-3xl mb-2" />
                        <h2 className="text-lg text-gray-800">CHAT TRANSLATE</h2>
                    </div>
                    <p className="text-sm text-gray-600 leading-6">Discover love across languages. Our app seamlessly translates German and English, connecting you worldwide.</p>
                    <p className="text-sm text-gray-600 leading-6">Entdecke Liebe über Sprachgrenzen hinweg. Unsere App übersetzt nahtlos zwischen Deutsch und Englisch und verbindet dich weltweit.</p>
                </div>
                <div className="bg-white border border-gray-300 rounded-lg p-5 w-full sm:w-72 shadow-lg relative text-left">
                    <div className="flex flex-col items-center mb-2">
                        <MdOutlineSecurity className="text-pink-500 text-3xl mb-2" />
                        <h2 className="text-lg text-gray-800">SECURITY</h2>
                    </div>
                    <p className="text-sm text-gray-600 leading-6">Your safety is our priority. With advanced encryption and vigilant monitoring, our platform ensures your security every step of the way.</p>
                    <p className="text-sm text-gray-600 leading-6">Ihre Sicherheit hat für uns oberste Priorität. Mit fortschrittlicher Verschlüsselung und aufmerksamer Überwachung gewährleistet unsere Plattform Ihre Sicherheit bei jedem Schritt.</p>
                </div>
                <div className="bg-white border border-gray-300 rounded-lg p-5 w-full sm:w-72 shadow-lg relative text-left">
                    <div className="flex flex-col items-center mb-2">
                        <GoLocation className="text-pink-500 text-3xl mb-2" />
                        <h2 className="text-lg text-gray-800">GEOLOCATION</h2>
                    </div>
                    <p className="text-sm text-gray-600 leading-6">Discover matches nearby with our geolocation feature, ensuring convenience and safety in your dating journey.</p>
                    <p className="text-sm text-gray-600 leading-6">Entdecken Sie Matches in Ihrer Nähe mit unserer Geolocation-Funktion!</p>
                </div>
                <div className="bg-white border border-gray-300 rounded-lg p-5 w-full sm:w-72 shadow-lg relative text-left">
                    <div className="flex flex-col items-center mb-2">
                        <BsCloudArrowDown className="text-pink-500 text-3xl mb-2" />
                        <h2 className="text-lg text-gray-800">STORAGE</h2>
                    </div>
                    <p className="text-sm text-gray-600 leading-6">We prioritize the security of both images and content for all users, employing robust encryption and privacy measures within our app.</p>
                    <p className="text-sm text-gray-600 leading-6">Wir priorisieren die Sicherheit Ihrer Daten.</p>
                </div>
                <div className="bg-white border border-gray-300 rounded-lg p-5 w-full sm:w-72 shadow-lg relative text-left">
                    <div className="flex flex-col items-center mb-2">
                        <LuBadgeCheck className="text-pink-500 text-3xl mb-2" />
                        <h2 className="text-lg text-gray-800">USER VERIFICATION</h2>
                    </div>
                    <p className="text-sm text-gray-600 leading-6"><FaCheckCircle className="text-blue-500" /> This user's identity has been authenticated, providing a safer and more authentic dating experience for our community.</p>
                    <p className="text-sm text-gray-600 leading-6"><FaTimesCircle className="text-red-500" /> This user's identity has not been authenticated.</p>
                </div>
            </div>
        </main>
    );
}
