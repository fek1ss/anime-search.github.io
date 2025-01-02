import React, { useEffect, useState } from 'react';
import SearchBar from '../../components/SearchBar/SearchBar.tsx';
import AniList from '../../components/AniList/AniList.tsx';
import Pagination from '../../components/Pagination/Pagination.tsx';
import './Home.css';



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

interface Error {
  status_message: string;
}

interface ApiResponse extends Error{
  data: Anime[];
  pagination: {
    last_visible_page: number;
  };
}


const Home = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [anime, setAnime] = useState<Anime[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(()=> {
    setCurrentPage(1);
  }, [searchQuery]);

  useEffect(()=> {
    const fetchAnime = async ()=> {
      setIsLoading(true);

      try{
        const url = searchQuery
        ? `https://api.jikan.moe/v4/anime?q=${searchQuery}&page=${currentPage}`
        : `https://api.jikan.moe/v4/top/anime?page=${currentPage}`;
        
        const response = await fetch(url);
        const data: ApiResponse = await response.json();
        console.log(data);

        if(response.ok) {
          setAnime(data.data);
          setTotalPages(data.pagination.last_visible_page);
          setError(null);
        } else {
          setError({ status_message: data.status_message || 'Error fetching anime.' })
        }
      } catch(e) {
        setError({status_message: 'Network error. Please try again later.'})
      } finally {
        setIsLoading(false);
      }
    };

    fetchAnime();
  }, [searchQuery, currentPage]);

  return(
    <div className='Home'>
      <SearchBar onSearch={setSearchQuery} />
      {error && <p className="error">{error.status_message}</p>}
      
      {isLoading 
      ? <div className="loader"></div> 
      : (<AniList anime={anime} />)}

      {totalPages > 1 && (
        <Pagination 
          currentPage={currentPage} 
          totalPages={totalPages} 
          onPageChange={setCurrentPage} 
        />
      )}    
    </div>
  )
};



export default Home;