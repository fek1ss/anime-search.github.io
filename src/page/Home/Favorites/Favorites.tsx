import React from 'react';
import './Favorites.css';
import AniCard from '../../../components/AniCard/AniCard.tsx';


interface Anime {
  mal_id: number;
  synopsis: string;
  title: string;
  images: {
    jpg: {
      image_url: string;
    };
  };
}

interface AnimeProps {
  anime?: Anime[];
  favorites: Anime[];
  setFavorites: React.Dispatch<React.SetStateAction<Anime[]>>;
}

const Favorites:React.FC<AnimeProps> = ({favorites, setFavorites})=> {
  const onRemove = (ani: Anime)=> {
      setFavorites((prev)=> prev.filter((anime)=> anime.mal_id !== ani.mal_id))
  }
  return (
    <div>
      <h1>Favorites</h1>
      {favorites.length === 0 ? (
        <p>No favorites added yet.</p>
      ) : (
        <div className="anime-list">
          {favorites.map((anime) => (
            <AniCard 
            key={anime.mal_id} 
            anime={anime} 
            favorites={favorites}
            onRemove={onRemove}
            />
            
          ))}
        </div>
      )}
    </div>
  );
}

export default Favorites;
