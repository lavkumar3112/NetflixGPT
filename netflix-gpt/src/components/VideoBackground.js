import { useSelector } from 'react-redux';
import useMovieTrailer from '../hooks/useMovieTrailer';


const VideoBackground = ({movieId}) => {
    const trailerVideo = useSelector(store => store.movies?.trailerVideo);
    
    useMovieTrailer(movieId);

  return (
    <div className='w-screen'>
        <iframe className='w-screen aspect-video' src={"https://www.youtube.com/embed/"+trailerVideo?.key+"?si=S5T03B0YdM2v11cY"} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share">
        </iframe>
    </div>
  )
}

export default VideoBackground;