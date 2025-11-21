// app/page.tsx

import React from 'react';
import Image from 'next/image';

interface Animal {
  name: string;
  imageUrl: string;
  emoji: string;
}

const ALL_CUTE_ANIMALS: Animal[] = [
  { name: 'Panda', imageUrl: 'https://media.istockphoto.com/id/523761634/pl/zdj%C4%99cie/s%C5%82odkie-panda-nied%C5%BAwiedzia-wspinaj%C4%85cego-si%C4%99-si%C4%99-na-drzewo.jpg?s=612x612&w=0&k=20&c=9nZcnc5e3dU7NO1CKNlq8pzBgf11KdiJ7auPLtIIDDA=', emoji: '🐼' },
  { name: 'Fennec Fox', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Fennec_Fox_Vulpes_zerda.jpg/1200px-Fennec_Fox_Vulpes_zerda.jpg', emoji: '🦊' },
  { name: 'Quokka', imageUrl: 'https://i.redd.it/02dv1ihoyb3a1.jpg', emoji: '🤩' },
  { name: 'Red Panda', imageUrl: 'https://wwfgifts-files.worldwildlife.org/wwfgifts/images/red-panda-large-photo.jpg', emoji: '❤️' },
  { name: 'Koala', imageUrl: 'https://shop.wwf.ca/cdn/shop/files/Koalaecardimage.jpg?v=1698423005&width=2048', emoji: '🐨' },
  { name: 'Sea Otter', imageUrl: 'https://pethelpful.com/.image/c_fill,w_1200,h_900,g_xy_center,x_600,y_304/NDowMDAwMDAwMDAwMDc0NzM2/sea-otter-grooming.jpg', emoji: '🦦' },
  { name: 'Hedgehog', imageUrl: 'https://images.ctfassets.net/rt5zmd3ipxai/4Z1RIc1p8375Fb1JPvVhcg/f39b175c5b030bd6e2df81fa1b9fb0de/ServiceCards-Hedgehog.png', emoji: '🦔' },
  { name: 'Baby Elephant', imageUrl: 'https://pethelpful.com/.image/c_fill,w_1200,h_1200,g_faces:center/NDowMDAwMDAwMDAwMDk5NTMy/baby-elephant-in-grass.jpg', emoji: '🐘' },
  { name: 'Sloth', imageUrl: 'https://cdn.britannica.com/62/142062-050-E51AEF0F/sloth-tree-branch.jpg', emoji: '🦥' },
  { name: 'Pomeranian', imageUrl: 'https://cdn.britannica.com/42/233842-050-E64243D7/Pomeranian-dog.jpg', emoji: '🐶' },
];

const getRandomAnimals = (array: Animal[], count: number): Animal[] => {
  const shuffled = [...array].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

export default function HomePageWithPhotos() {
  const NUMBER_OF_ANIMALS_TO_SHOW = 4; // Displaying exactly 4 animals
  const randomAnimals = getRandomAnimals(ALL_CUTE_ANIMALS, NUMBER_OF_ANIMALS_TO_SHOW);

  return (
    <div className="container" style={{ 
        padding: '0', // Adjust padding for the whole container
        maxWidth: '800px', 
        margin: '0 auto', 
        fontFamily: 'sans-serif',
        backgroundColor: '#f8f8f8', // Light background for the overall page
        minHeight: '100vh',
        boxShadow: '0 0 20px rgba(0,0,0,0.05)'
      }}>
      
      {/* --- New: Title Design Section --- */}
      <div style={{
        backgroundColor: '#4CAF50', // A nice green background
        color: '#fff',
        padding: '40px 20px',
        textAlign: 'center',
        borderRadius: '0 0 15px 15px', // Rounded bottom corners
        boxShadow: '0 5px 15px rgba(0,0,0,0.2)',
        marginBottom: '40px' // Space below the title
      }}>
        <h1 style={{ margin: '0 0 10px 0', fontSize: '2.8em' }}>
          📸 Random Cute Animals with Photos 🐾
        </h1>
        <p style={{ margin: '0', fontSize: '1.2em', opacity: 0.9 }}>
          Behold, **{randomAnimals.length}** adorable creatures, complete with a picture,
          randomized on every server render.
        </p>
      </div>

      {/* --- Animal Grid Display --- */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(2, 1fr)', // Force a 2x2 grid for 4 items
        gap: '25px', // Increased gap for better spacing
        padding: '0 20px 40px', // Padding around the grid
      }}>
        {randomAnimals.map((animal) => (
          <div 
            key={animal.name} 
            style={{ 
              border: '1px solid #ddd', 
              borderRadius: '12px', // Slightly more rounded corners
              overflow: 'hidden', 
              boxShadow: '0 6px 15px rgba(0,0,0,0.1)', // More pronounced shadow
              backgroundColor: '#fff',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between' // Distribute space
            }}
          >
            {/* Image Container for Square Aspect Ratio */}
            <div style={{ 
              position: 'relative', 
              width: '100%', 
              paddingBottom: '100%', // Makes the container square (1:1 aspect ratio)
              overflow: 'hidden',
              borderRadius: '11px 11px 0 0', // Match parent border-radius
              backgroundColor: '#eee' // Placeholder background for image loading
            }}>
              <Image
                src={animal.imageUrl}
                alt={`A cute ${animal.name}`}
                fill // Fills the parent div
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // Improve responsiveness
                style={{ objectFit: 'cover' }} // Ensure the image covers the square area
              />
            </div>
            
            <div style={{ padding: '15px', textAlign: 'center' }}>
              <h2 style={{ margin: '0 0 5px 0', fontSize: '1.4em', color: '#333' }}>
                {animal.emoji} {animal.name}
              </h2>
            </div>
          </div>
        ))}
      </div>

      <small style={{ marginTop: '20px', display: 'block', color: '#666', textAlign: 'center', paddingBottom: '20px' }}>
        Refresh the page to see a new random selection!
      </small>
    </div>
  );
}