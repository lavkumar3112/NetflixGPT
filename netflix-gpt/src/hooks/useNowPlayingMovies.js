import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { API_OPTIONS ,NOW_PLAYING_API_ENDPOINT } from '../utils/constants';
import {addNowPlayingMovies} from '../utils/moviesSlice';

const useNowPlayingMovies = () =>{
    const dispatch = useDispatch()
    
    const getNowPlayingMovies = async () => {
        const data = await fetch(NOW_PLAYING_API_ENDPOINT, API_OPTIONS)
        const json = await data.json();
        dispatch(addNowPlayingMovies(json?.results))
    }
    useEffect(() => {
        getNowPlayingMovies();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
};

export default useNowPlayingMovies;