// app/page.tsx

import React from 'react';
// Import the Image component from next/image for optimized images
import Image from 'next/image';

// --- 1. Updated Data Source with Image URLs ---
interface Animal {
  name: string;
  imageUrl: string;
  emoji: string; // Added emoji for extra cuteness
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

// --- 2. Random Selection Logic (unchanged, but now works with Animal objects) ---
const getRandomAnimals = (array: Animal[], count: number): Animal[] => {
  const shuffled = [...array].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

// --- 3. Page Component ---
export default function HomePageWithPhotos() {
  const NUMBER_OF_ANIMALS_TO_SHOW = 4; // Let's show 4 animals with photos
  const randomAnimals = getRandomAnimals(ALL_CUTE_ANIMALS, NUMBER_OF_ANIMALS_TO_SHOW);

  return (
    <div className="container" style={{ padding: '20px', maxWidth: '800px', margin: '0 auto', fontFamily: 'sans-serif' }}>
      <h1>📸 Random Cute Animals with Photos 🐾</h1>
      <p>
        Behold, **{randomAnimals.length}** adorable creatures, complete with a picture,
        randomized on every server render.
      </p>

      {/* Grid Display for Animals */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
        gap: '20px', 
        marginTop: '30px' 
      }}>
        {randomAnimals.map((animal) => (
          <div 
            key={animal.name} 
            style={{ 
              border: '1px solid #ddd', 
              borderRadius: '8px', 
              overflow: 'hidden', 
              boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
              backgroundColor: '#fff'
            }}
          >
            {/* Using next/image for optimized images */}
            <Image
              src={animal.imageUrl}
              alt={`A cute ${animal.name}`}
              width={300} // Define width
              height={200} // Define height
              layout="responsive" // Make image responsive within its parent
              objectFit="cover" // Ensure the image covers the area
              style={{ borderRadius: '8px 8px 0 0' }}
            />
            <div style={{ padding: '15px', textAlign: 'center' }}>
              <h2 style={{ margin: '0 0 5px 0', fontSize: '1.4em', color: '#333' }}>
                {animal.emoji} {animal.name}
              </h2>
            </div>
          </div>
        ))}
      </div>

      <small style={{ marginTop: '40px', display: 'block', color: '#666', textAlign: 'center' }}>
        Refresh the page to see a new random selection!
      </small>
    </div>
  );
}