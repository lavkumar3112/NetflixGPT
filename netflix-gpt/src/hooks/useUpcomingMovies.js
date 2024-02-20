import { useEffect } from 'react';
import { useDispatch ,useSelector } from 'react-redux';
import { API_OPTIONS ,UPCOMING_API_ENDPOINT } from '../utils/constants';
import { addUpcomingMovies} from '../utils/moviesSlice';

const useUpcomingMovies = () =>{
    const dispatch = useDispatch()
    const upcomingMovies = useSelector((store) =>store.movies.upcomingMovies);
    
    const getUpcomingMovies = async () => {
        const data = await fetch(UPCOMING_API_ENDPOINT, API_OPTIONS)
        const json = await data.json();
        dispatch(addUpcomingMovies(json?.results))
    }
    useEffect(() => {
        !upcomingMovies && getUpcomingMovies();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
};

export default useUpcomingMovies;