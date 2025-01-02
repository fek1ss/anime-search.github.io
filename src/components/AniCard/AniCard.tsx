import React from 'react';
import useModal from '../../hooks/useModal.tsx';
import Modal from '../../components/Modal/Modal.tsx';
import './AniCard.css';



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
  anime: Anime;
}

const AniCard:React.FC<AnimeProps> = ({ anime }) => {
  const { isOpen, toggle } = useModal();

  if(!anime.synopsis) return <p>No data available</p>;

  const posterUrl = anime.images.jpg.image_url 
    ? anime.images.jpg.image_url 
    : 'https://via.placeholder.com/500x750?text=No+Image';


  return (
      <div className="animeCard">
        <img src={posterUrl} alt={anime.title} />
        <h2 className="animeTitle">{anime.title}</h2>
        <p>
          {`${anime.synopsis.substring(0, 150)}... `}
            <span
              className= "toggleMore"
              onClick={toggle}
            >
              Read more
            </span>
          
        </p>
        <Modal isOpen={isOpen} toggle={toggle}>
          {anime.synopsis}
        </Modal>
  
        <button>Add to Favorites</button>
        </div>
      );
}

export default AniCard;