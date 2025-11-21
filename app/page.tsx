// app/page.tsx

import React from 'react';

// --- 1. Data Source ---
// A list of cute animals to choose from
const ALL_CUTE_ANIMALS: string[] = [
  'Panda 🐼',
  'Fennec Fox 🦊',
  'Quokka 🤩',
  'Red Panda ❤️',
  'Koala 🐨',
  'Sea Otter 🦦',
  'Hedgehog 🦔',
  'Baby Elephant 🐘',
  'Sloth 🦥',
  'Pomeranian 🐶',
];

// --- 2. Random Selection Logic ---
/**
 * Function to randomly select a specified number of items from an array.
 * @param array The array to select from.
 * @param count The number of random items to select.
 * @returns A new array with the randomly selected items.
 */
const getRandomAnimals = (array: string[], count: number): string[] => {
  // 1. Shuffle the array using a simple Fisher-Yates shuffle implementation
  const shuffled = [...array].sort(() => 0.5 - Math.random());
  
  // 2. Return the first 'count' items from the shuffled array
  return shuffled.slice(0, count);
};

// --- 3. Page Component ---
export default function HomePage() {
  
  // Define how many random animals you want to show
  const NUMBER_OF_ANIMALS_TO_SHOW = 5; 
  
  // Get the random list. This function runs on the server (Server Component).
  const randomAnimals = getRandomAnimals(ALL_CUTE_ANIMALS, NUMBER_OF_ANIMALS_TO_SHOW);
  
  return (
    <div className="container" style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h1>🐾 Randomly Selected Cute Animals 🐾</h1>
      <p>
        Here is a list of **{randomAnimals.length}** adorable creatures, randomized on every server render.
      </p>
      
      {/* List Display */}
      <ul>
        {randomAnimals.map((animal, index) => (
          <li 
            key={index} 
            style={{ 
              fontSize: '1.2em', 
              padding: '8px 0', 
              borderBottom: '1px solid #eee' 
            }}
          >
            {animal}
          </li>
        ))}
      </ul>
      
      {/* Simple Instruction */}
      <small style={{ marginTop: '20px', display: 'block', color: '#666' }}>
        Refresh the page to see a new random list!
      </small>
    </div>
  );
}