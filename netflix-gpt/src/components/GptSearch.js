import React from 'react'
import  GptSearchBar  from './GptSearchBar'
import GptMovieSuggestion from './GptMovieSuggestion'
import { NETFLIX_BG_IMAGE } from '../utils/constants'

const GptSearch = () => {
  return (
    <>
      <div className='fixed -z-10'>
        <img className='h-screen object-cover' src={NETFLIX_BG_IMAGE} alt='logo'/>
        </div>
      <div className=''>
        
        <GptSearchBar/>
        <GptMovieSuggestion/>
      </div>
    </>
    
  )
}

export default GptSearch