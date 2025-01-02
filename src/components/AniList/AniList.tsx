import AniCard from '../AniCard/AniCard.tsx';
import './AniList.css';
import React from 'react';

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
  anime: Anime[];
}

const AniList: React.FC<AnimeProps> = ({ anime }) => {
  if(!anime.length){
    <p>No anime found</p>
  }

  return(
    <div className="anime-list">
      {anime.slice(0,8).map((ani) => (
        <AniCard 
        key={ani.mal_id} 
        anime={ani}
        />
      ))}
    </div>
  )
}

export default AniList;