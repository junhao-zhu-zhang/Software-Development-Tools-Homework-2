// app/page.tsx

import React from 'react';
import Image from 'next/image';

interface Animal {
  wikipediaUrl: string;
  name: string;
  imageUrl: string;
  emoji: string;
}

const ALL_CUTE_ANIMALS: Animal[] = [
  // Added: wikipediaUrl for each animal
  { name: 'Panda', imageUrl: 'https://media.istockphoto.com/id/523761634/pl/zdj%C4%99cie/s%C5%82odkie-panda-nied%C5%BAwiedzia-wspinaj%C4%85cego-si%C4%99-si%C4%99-na-drzewo.jpg?s=612x612&w=0&k=20&c=9nZcnc5e3dU7NO1CKNlq8pzBgf11KdiJ7auPLtIIDDA=', emoji: '🐼', wikipediaUrl: 'https://en.wikipedia.org/wiki/Giant_panda' },
  { name: 'Fennec Fox', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Fennec_Fox_Vulpes_zerda.jpg/1200px-Fennec_Fox_Vulpes_zerda.jpg', emoji: '🦊', wikipediaUrl: 'https://en.wikipedia.org/wiki/Fennec_fox' },
  { name: 'Quokka', imageUrl: 'https://i.redd.it/02dv1ihoyb3a1.jpg', emoji: '🤩', wikipediaUrl: 'https://en.wikipedia.org/wiki/Quokka' },
  { name: 'Red Panda', imageUrl: 'https://wwfgifts-files.worldwildlife.org/wwfgifts/images/red-panda-large-photo.jpg', emoji: '❤️', wikipediaUrl: 'https://en.wikipedia.org/wiki/Red_panda' },
  { name: 'Koala', imageUrl: 'https://shop.wwf.ca/cdn/shop/files/Koalaecardimage.jpg?v=1698423005&width=2048', emoji: '🐨', wikipediaUrl: 'https://en.wikipedia.org/wiki/Koala' },
  { name: 'Sea Otter', imageUrl: 'https://pethelpful.com/.image/c_fill,w_1200,h_900,g_xy_center,x_600,y_304/NDowMDAwMDAwMDAwMDc0NzM2/sea-otter-grooming.jpg', emoji: '🦦', wikipediaUrl: 'https://en.wikipedia.org/wiki/Sea_otter' },
  { name: 'Hedgehog', imageUrl: 'https://images.ctfassets.net/rt5zmd3ipxai/4Z1RIc1p8375Fb1JPvVhcg/f39b175c5b030bd6e2df81fa1b9fb0de/ServiceCards-Hedgehog.png', emoji: '🦔', wikipediaUrl: 'https://en.wikipedia.org/wiki/Hedgehog' },
  { name: 'Baby Elephant', imageUrl: 'https://pethelpful.com/.image/c_fill,w_1200,h_1200,g_faces:center/NDowMDAwMDAwMDAwMDk5NTMy/baby-elephant-in-grass.jpg', emoji: '🐘', wikipediaUrl: 'https://en.wikipedia.org/wiki/Elephant' },
  { name: 'Sloth', imageUrl: 'https://cdn.britannica.com/62/142062-050-E51AEF0F/sloth-tree-branch.jpg', emoji: '🦥', wikipediaUrl: 'https://en.wikipedia.org/wiki/Sloth' },
  { name: 'Pomeranian', imageUrl: 'https://cdn.britannica.com/42/233842-050-E64243D7/Pomeranian-dog.jpg', emoji: '🐶', wikipediaUrl: 'https://en.wikipedia.org/wiki/Pomeranian_dog' },

  // Added animals
  { name: 'Capybara', imageUrl: 'https://cdn.britannica.com/39/233939-050-4EC50136/Capybara.jpg', emoji: '🦫', wikipediaUrl: 'https://en.wikipedia.org/wiki/Capybara' },
  { name: 'Polar Bear Cub', imageUrl: 'https://cdn.mos.cms.futurecdn.net/q6mE6xPD58Ll35p3xNmPR.jpg', emoji: '🐻‍❄️', wikipediaUrl: 'https://en.wikipedia.org/wiki/Polar_bear' },
  { name: 'Golden Retriever Puppy', imageUrl: 'https://www.thesprucepets.com/thmb/7ul3e8DqRLVQjaxAgqW6zGyF_Qw=/2121x1414/filters:fill(auto,1)/golden-retriever-puppy-lying-on-the-grass-1092979412-5c77b47f46e0fb00015290a1.jpg', emoji: '🐕', wikipediaUrl: 'https://en.wikipedia.org/wiki/Golden_Retriever' },
  { name: 'Hamster', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/8b/Cute_dwarf_hamster.jpg', emoji: '🐹', wikipediaUrl: 'https://en.wikipedia.org/wiki/Hamster' },
  { name: 'Snow Leopard Cub', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/0/0f/Snow_Leopard_Cub.jpg', emoji: '🐆', wikipediaUrl: 'https://en.wikipedia.org/wiki/Snow_leopard' },
  { name: 'Baby Seal', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/0/0c/Harp_seal_baby.jpg', emoji: '🦭', wikipediaUrl: 'https://en.wikipedia.org/wiki/Seal' }
];

const getRandomAnimals = (array: Animal[], count: number): Animal[] => {
  const shuffled = [...array].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

export default function HomePageWithPhotos() {
  const NUMBER_OF_ANIMALS_TO_SHOW = 4;
  const randomAnimals = getRandomAnimals(ALL_CUTE_ANIMALS, NUMBER_OF_ANIMALS_TO_SHOW);

  return (
    <div className="container" style={{ padding: '0', maxWidth: '800px', margin: '0 auto', fontFamily: 'sans-serif', backgroundColor: '#f8f8f8', minHeight: '100vh', boxShadow: '0 0 20px rgba(0,0,0,0.05)' }}>
      <div style={{ backgroundColor: '#4CAF50', color: '#fff', padding: '40px 20px', textAlign: 'center', borderRadius: '0 0 15px 15px', boxShadow: '0 5px 15px rgba(0,0,0,0.2)', marginBottom: '40px' }}>
        <h1 style={{ margin: '0 0 10px 0', fontSize: '2.8em' }}>📸 Random Cute Animals with Photos 🐾</h1>
        <p style={{ margin: '0', fontSize: '1.2em', opacity: 0.9 }}>
          Behold, **{randomAnimals.length}** adorable creatures, complete with a picture, randomized on every server render.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '25px', padding: '0 20px 40px' }}>
        {randomAnimals.map((animal) => (
          <a href={animal.wikipediaUrl} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
          <div key={animal.name}$1>
            <div style={{ position: 'relative', width: '100%', paddingBottom: '100%', overflow: 'hidden', borderRadius: '11px 11px 0 0', backgroundColor: '#eee' }}>
              <a href={animal.wikipediaUrl} target="_blank" rel="noopener noreferrer">
              <a href={animal.wikipediaUrl} target="_blank" rel="noopener noreferrer"><Image src={animal.imageUrl} alt={`A cute ${animal.name}`} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" style={{ objectFit: 'cover' }} /></a>
            </a>
            </div>
            <div style={{ padding: '15px', textAlign: 'center' }}>
              <h2 style={{ margin: '0 0 5px 0', fontSize: '1.4em', color: '#333' }}>{animal.emoji} {animal.name}</h2>
            </div>
          </div>
        </a>
        ))}
      </div>

      <small style={{ marginTop: '20px', display: 'block', color: '#666', textAlign: 'center', paddingBottom: '20px' }}>
        Refresh the page to see a new random selection!
      </small>
    </div>
  );
}
