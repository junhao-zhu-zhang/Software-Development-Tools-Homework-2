// app/page.tsx

import React from 'react';
import Image from 'next/image';

interface Animal {
  wikipediaUrl: string;
  name: string;
  imageUrl: string;
  emoji: string;
}

const NAME = "App";

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
  { name: 'Capybara', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Hydrochoeris_hydrochaeris_in_Brazil_in_Petr%C3%B3polis%2C_Rio_de_Janeiro%2C_Brazil_09.jpg/500px-Hydrochoeris_hydrochaeris_in_Brazil_in_Petr%C3%B3polis%2C_Rio_de_Janeiro%2C_Brazil_09.jpg', emoji: '🦫', wikipediaUrl: 'https://en.wikipedia.org/wiki/Capybara' },
  { name: 'Polar Bear Cub', imageUrl: 'https://images.ctfassets.net/i04syw39vv9p/124UGQIEgROYoBKKPzm2oM/aac2ecd5e8931acf01d99b2e4c5082c4/Top-5-Favorite-Mom-and-Cub-Facts-03.jpeg?w=750&h=500&q=70&fit=fill&fm=png', emoji: '🐻‍❄️', wikipediaUrl: 'https://en.wikipedia.org/wiki/Polar_bear' },
  { name: 'Golden Retriever Puppy', imageUrl: 'https://m.media-amazon.com/images/I/613k8S4lp7L._AC_UF894,1000_QL80_.jpg', emoji: '🐕', wikipediaUrl: 'https://en.wikipedia.org/wiki/Golden_Retriever' },
  { name: 'Hamster', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/European_hamster_%28Cricetus_cricetus%29_Meidling.jpg/500px-European_hamster_%28Cricetus_cricetus%29_Meidling.jpg', emoji: '🐹', wikipediaUrl: 'https://en.wikipedia.org/wiki/Hamster' },
  { name: 'Snow Leopard Cub', imageUrl: 'https://i.natgeofe.com/k/cd962d91-1791-42b2-a25b-7d56a6b23811/snow-leopard-cub.jpg', emoji: '🐆', wikipediaUrl: 'https://en.wikipedia.org/wiki/Snow_leopard' },
  { name: 'Baby Seal', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/2/22/Harp_Seal_%28Pagophilus_groenlandicus%29%2C_Greenland_Sea_IMG_5075.jpg', emoji: '🦭', wikipediaUrl: 'https://en.wikipedia.org/wiki/Seal' }
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
  <a
    key={animal.name}
    href={animal.wikipediaUrl}
    target="_blank"
    rel="noopener noreferrer"
    style={{ textDecoration: 'none', color: 'inherit' }}
  >
    <div>
      <div style={{
        position: 'relative',
        width: '100%',
        paddingBottom: '100%',
        overflow: 'hidden',
        borderRadius: '11px 11px 0 0',
        backgroundColor: '#eee'
      }}>
        <Image
          src={animal.imageUrl}
          alt={`A cute ${animal.name}`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          style={{ objectFit: 'cover' }}
        />
      </div>

      <div style={{ color: '#000', padding: '15px', textAlign: 'center' }}>
        <h2 style={{ margin: 0 }}>{animal.emoji} {animal.name}</h2>
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
