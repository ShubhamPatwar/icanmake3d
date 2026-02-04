import cyberCarImg from '@/assets/models/cyber-car.jpg';
import medievalSwordImg from '@/assets/models/medieval-sword.jpg';
import scifiTowerImg from '@/assets/models/scifi-tower.jpg';
import robotWarriorImg from '@/assets/models/robot-warrior.jpg';
import industrialCratesImg from '@/assets/models/industrial-crates.jpg';
import muscleCarImg from '@/assets/models/muscle-car.jpg';
import katanaCollectionImg from '@/assets/models/katana-collection.jpg';
import cyberpunkApartmentImg from '@/assets/models/cyberpunk-apartment.jpg';

export interface Model3D {
  id: string;
  name: string;
  slug: string;
  price: number;
  category: string;
  description: string;
  shortDescription: string;
  thumbnail: string;
  images: string[];
  modelUrl?: string;
  techDetails: {
    format: string;
    polyCount: string;
    textures: string;
    fileSize: string;
    rigged?: boolean;
    animated?: boolean;
  };
  featured?: boolean;
  new?: boolean;
}

export const categories = [
  { id: 'cars', name: 'Cars', icon: '🚗', description: 'High-detail vehicle models' },
  { id: 'weapons', name: 'Weapons', icon: '⚔️', description: 'Swords, guns & combat gear' },
  { id: 'buildings', name: 'Buildings', icon: '🏛️', description: 'Architecture & structures' },
  { id: 'characters', name: 'Characters', icon: '👤', description: 'Humanoid & creature models' },
  { id: 'props', name: 'Props', icon: '📦', description: 'Game-ready props & items' },
];

export const models: Model3D[] = [
  {
    id: '1',
    name: 'Cyber Sports Car',
    slug: 'cyber-sports-car',
    price: 49.99,
    category: 'cars',
    description: 'A futuristic sports car with sleek aerodynamic design, perfect for cyberpunk games and sci-fi visualizations. Features detailed interior, working doors, and PBR materials.',
    shortDescription: 'Futuristic sports car with cyberpunk aesthetics',
    thumbnail: cyberCarImg,
    images: [cyberCarImg, cyberCarImg, cyberCarImg],
    techDetails: {
      format: 'GLB, FBX, OBJ',
      polyCount: '45,000 tris',
      textures: '4K PBR',
      fileSize: '85 MB',
      rigged: false,
      animated: false,
    },
    featured: true,
    new: true,
  },
  {
    id: '2',
    name: 'Medieval Longsword',
    slug: 'medieval-longsword',
    price: 19.99,
    category: 'weapons',
    description: 'Highly detailed medieval longsword with intricate engravings and worn metal textures. Game-ready with multiple LODs included.',
    shortDescription: 'Detailed medieval sword with worn textures',
    thumbnail: medievalSwordImg,
    images: [medievalSwordImg, medievalSwordImg],
    techDetails: {
      format: 'GLB, FBX',
      polyCount: '8,500 tris',
      textures: '4K PBR',
      fileSize: '25 MB',
    },
    new: true,
  },
  {
    id: '3',
    name: 'Sci-Fi Tower',
    slug: 'sci-fi-tower',
    price: 39.99,
    category: 'buildings',
    description: 'Massive futuristic skyscraper with holographic billboards and neon accents. Perfect for cyberpunk cityscapes.',
    shortDescription: 'Futuristic skyscraper with neon details',
    thumbnail: scifiTowerImg,
    images: [scifiTowerImg, scifiTowerImg],
    techDetails: {
      format: 'GLB, FBX, Blend',
      polyCount: '120,000 tris',
      textures: '4K PBR + Emissive',
      fileSize: '150 MB',
    },
  },
  {
    id: '4',
    name: 'Robot Warrior',
    slug: 'robot-warrior',
    price: 79.99,
    category: 'characters',
    description: 'Fully rigged humanoid robot character with combat animations. Ready for game engines with optimized topology.',
    shortDescription: 'Rigged robot character with animations',
    thumbnail: robotWarriorImg,
    images: [robotWarriorImg, robotWarriorImg, robotWarriorImg],
    techDetails: {
      format: 'GLB, FBX',
      polyCount: '35,000 tris',
      textures: '4K PBR',
      fileSize: '120 MB',
      rigged: true,
      animated: true,
    },
    featured: true,
  },
  {
    id: '5',
    name: 'Industrial Crate Set',
    slug: 'industrial-crate-set',
    price: 14.99,
    category: 'props',
    description: 'Collection of 5 industrial crates and containers with various damage states and materials.',
    shortDescription: 'Set of 5 industrial containers',
    thumbnail: industrialCratesImg,
    images: [industrialCratesImg],
    techDetails: {
      format: 'GLB, FBX',
      polyCount: '2,500 tris each',
      textures: '2K PBR',
      fileSize: '30 MB',
    },
  },
  {
    id: '6',
    name: 'Classic Muscle Car',
    slug: 'classic-muscle-car',
    price: 54.99,
    category: 'cars',
    description: 'Vintage American muscle car with chrome details and leather interior. Perfect for racing games or cinematic shots.',
    shortDescription: 'Vintage muscle car with chrome accents',
    thumbnail: muscleCarImg,
    images: [muscleCarImg, muscleCarImg],
    techDetails: {
      format: 'GLB, FBX, OBJ',
      polyCount: '52,000 tris',
      textures: '4K PBR',
      fileSize: '95 MB',
    },
    featured: true,
  },
  {
    id: '7',
    name: 'Katana Collection',
    slug: 'katana-collection',
    price: 29.99,
    category: 'weapons',
    description: 'Set of 3 Japanese katanas with different styles - traditional, modern, and fantasy. Includes sheaths and stands.',
    shortDescription: '3 katana styles with accessories',
    thumbnail: katanaCollectionImg,
    images: [katanaCollectionImg, katanaCollectionImg],
    techDetails: {
      format: 'GLB, FBX',
      polyCount: '12,000 tris total',
      textures: '4K PBR',
      fileSize: '45 MB',
    },
  },
  {
    id: '8',
    name: 'Cyberpunk Apartment',
    slug: 'cyberpunk-apartment',
    price: 69.99,
    category: 'buildings',
    description: 'Complete cyberpunk apartment interior with furniture, decorations, and neon lighting. Modular design for easy customization.',
    shortDescription: 'Full apartment interior with furniture',
    thumbnail: cyberpunkApartmentImg,
    images: [cyberpunkApartmentImg, cyberpunkApartmentImg, cyberpunkApartmentImg],
    techDetails: {
      format: 'GLB, FBX, Blend',
      polyCount: '200,000 tris',
      textures: '4K PBR + Emissive',
      fileSize: '280 MB',
    },
    new: true,
  },
];

export const getModelBySlug = (slug: string) => models.find(m => m.slug === slug);
export const getModelsByCategory = (category: string) => models.filter(m => m.category === category);
export const getFeaturedModels = () => models.filter(m => m.featured);
