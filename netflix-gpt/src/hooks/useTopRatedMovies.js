import { useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { API_OPTIONS ,TOP_RATE_API_ENDPOINT } from '../utils/constants';
import { addTopRatedMovies} from '../utils/moviesSlice';

const useTopRatedMovies = () =>{
    const dispatch = useDispatch()
    const topRatedMovies = useSelector((store) =>store.movies.topRatedMovies);
    
    const getTopRatedMovies = async () => {
        const data = await fetch(TOP_RATE_API_ENDPOINT, API_OPTIONS)
        const json = await data.json();
        dispatch(addTopRatedMovies(json?.results))
    }
    useEffect(() => {
       !topRatedMovies && getTopRatedMovies();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
};

export default useTopRatedMovies;