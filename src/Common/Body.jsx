import React, { useState } from 'react';
import ImageWithOverlay from './Overlay';
import PhotoGallery from '../Pages/PhotoGallery';


const photos = [
  { id: 1, category: 'Landscapes', src: require('../assets/lacasablancaysufielescudero.jpg'), alt: 'la casa blanca y su fiel escudero', relatedPhotos: [
      { id: 101, src: require('../assets/fincadelsillero1954.jpg'), alt: 'Finca del Sillero 1954' },
      { id: 102, src: require('../assets/frontside.jpg'), alt: 'Front Side' },
      { id: 103, src: require('../assets/enlaintersección.jpg'), alt: 'En la intersección' },
    ]
  },
  { id: 2, category: 'Portraits', src: require('../assets/whenadoorclosesawindowopens.jpg'), alt: 'when a door closes a window opens', relatedPhotos: [
    { id: 201, src: require('../assets/lacasadelsavis.jpg'), alt: 'La casa dels avis' },
    { id: 202, src: require('../assets/frontside.jpg'), alt: 'Front Side' },
    ] 
  },
  { id: 3, category: 'Landscapes', src: require('../assets/vanishingsunset.jpg'), alt: 'vanishing sunset', relatedPhotos: [
    { id: 301, src: require('../assets/mimaravillosoamigoOriolenlaplaya.jpg'), alt: 'Mi maravilloso amigo Oriol en la playa' },
    { id: 302, src: require('../assets/waterglitter.jpg'), alt: 'water glitter' },
    ] 
  },
  { id: 4, category: 'Landscapes', src: require('../assets/sorollassummer.jpg'), alt: 'sorolla\'s summer', relatedPhotos: [
    { id: 401, src: require('../assets/upsidedowninthepath.jpg'), alt: 'up side downs in the path' },
    { id: 402, src: require('../assets/shouldcleanthefocus.jpg'), alt: 'should clean the focus' },
    { id: 403, src: require('../assets/mardeplata.jpg'), alt: 'mar de plata' },
    ] 
  },
  { id: 5, category: 'Landscapes', src: require('../assets/freshsweetfigs.jpg'), alt: 'fresh sweet figs', relatedPhotos: [
    { id: 501, src: require('../assets/ligthshadowandscarfs.jpg'), alt: 'ligth shadow and scarfs' },
    ] 
  },
  { id: 6, category: 'Landscapes', src: require('../assets/callmebyyournamesummer.jpg'), alt: 'call me by your name summer', relatedPhotos: [
    { id: 601, src: require('../assets/tanned.jpg'), alt: 'tanned' },
    { id: 602, src: require('../assets/yoga.jpg'), alt: 'yoga' },
    { id: 603, src: require('../assets/defeatedbyawave.jpg'), alt: 'defeated by a wave' },
    ] 
  },
  { id: 7, category: 'Landscapes', src: require('../assets/stairstoinfinity.jpg'), alt: 'stairs to infinity', relatedPhotos: [
    { id: 701, src: require('../assets/rojopassión.jpg'), alt: 'rojo passión' },
    ] 
  },
  { id: 8, category: 'Landscapes', src: require('../assets/backgroundmountains.jpg'), alt: 'background mountains'
  },
  { id: 9, category: 'Landscapes', src: require('../assets/breakingwaves.jpg'), alt: 'breaking waves'
  },
  { id: 10, category: 'Landscapes', src: require('../assets/sailorssailing.jpg'), alt: 'sailors sailing', relatedPhotos: [
    { id: 1001, src: require('../assets/spanishshore.jpg'), alt: 'Spanish shore' },
    { id: 1002, src: require('../assets/sailorssailing2.jpg'), alt: 'sailors sailing 2' },
    ] 
  },
  { id: 1101, category: 'Landscapes', src: require('../assets/tallantbachoqueta.jpg'), alt: 'tallant bachoqueta', relatedPhotos: [
    { id: 1102, src: require('../assets/mercadocentral.jpg'), alt: 'mercado central' },
    ] 
  },
  { id: 12, category: 'Landscapes', src: require('../assets/backwindowviews.jpg'), alt: 'back window views' },
  { id: 13, category: 'Landscapes', src: require('../assets/semprealallunadeValència.jpg'), alt: 'sempre a la lluna de València', relatedPhotos: [
    { id: 1301, src: require('../assets/calatrabasmusic.jpg'), alt: 'calatrabas music' },
    { id: 1302, src: require('../assets/calatrabasmadness.jpg'), alt: 'calatrabas madness' },
    ] 
  },
  { id: 14, category: 'Landscapes', src: require('../assets/ligthandgreens.jpg'), alt: 'light and greens' },
];

const Body = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [galleryPhotos, setGalleryPhotos] = useState(null);

  const filterPhotos = (category) => {
    setSelectedCategory(category);
    setIsDropdownVisible(false);
  };

  const openGallery = (relatedPhotos) => {
    setGalleryPhotos(relatedPhotos);
  };

  const closeGallery = () => {
    setGalleryPhotos(null);
  };

  const rows = photos
    .filter(photo => selectedCategory === 'All' || photo.category === selectedCategory)
    .reduce((acc, photo, index) => {
      const rowIndex = Math.floor(index / 2);
      if (!acc[rowIndex]) acc[rowIndex] = [];
      acc[rowIndex].push(photo);
      return acc;
    }, []);

  return (
    <div className="font-lora text-black flex flex-col items-center p-4 relative">
      <div className="w-full max-w-6xl flex flex-col items-center mb-32">
        {rows.map((row, rowIndex) => (
          <div key={rowIndex} className="flex gap-8 mb-24 w-full justify-center">
            {row.map((photo, photoIndex) => {
              const isHorizontal = rowIndex % 2 === 0;
              const isCurrentHorizontal = (photoIndex % 2 === 0) === isHorizontal;
              return (
                <div
                  key={photo.id}
                  className={`flex ${isCurrentHorizontal ? 'flex-row' : 'flex-col'} ${isCurrentHorizontal ? 'w-[550px] h-[350px] mx-12' : 'w-[450px] h-[550px] mx-12 mt-24'}`}
                  onClick={() => openGallery(photo.relatedPhotos)} // Opens the gallery on click
                >
                  <ImageWithOverlay src={photo.src} alt={photo.alt} />
                </div>
              );
            })}
          </div>
        ))}
      </div>

      <div 
        className="fixed bottom-0 left-0 w-full flex items-left justify-start py-4 z-50"
        onMouseEnter={() => setIsDropdownVisible(true)}
        onMouseLeave={() => setIsDropdownVisible(false)}
      >
        <button 
          className={`px-4 py-2 ${selectedCategory === 'All' ? 'text-black underline font-lora text-2xl' : 'text-black font-lora text-2xl'} rounded`}
          onClick={() => setIsDropdownVisible(!isDropdownVisible)}
        >
          All
        </button>
        <div 
          className={`ml-4 flex space-x-4 ${isDropdownVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}
          style={{ transition: 'transform 0.3s ease, opacity 0.3s ease' }}
        >
          <button 
            className={`px-4 py-2 ${selectedCategory === 'Landscapes' ? 'text-black underline font-lora text-2xl' : 'text-black font-lora text-2xl'} rounded`}
            onClick={() => filterPhotos('Landscapes')}
          >
            Landscapes
          </button>
          <button 
            className={`px-4 py-2 ${selectedCategory === 'Portraits' ? 'text-black underline font-lora text-2xl' : 'text-black font-lora text-2xl'} rounded`}
            onClick={() => filterPhotos('Portraits')}
          >
            Portraits
          </button>
        </div>
      </div>

      {galleryPhotos && <PhotoGallery photos={galleryPhotos} onClose={closeGallery} />} 
    </div>
  );
};

export default Body;
