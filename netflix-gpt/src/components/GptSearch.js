import React from 'react'
import  GptSearchBar  from './GptSearchBar'
import GptMovieSuggestion from './GptMovieSuggestion'
import { NETFLIX_BG_IMAGE } from '../utils/constants'

const GptSearch = () => {
  return (
    <div>
        <div className='fixed -z-10'>
        <img src={NETFLIX_BG_IMAGE} alt='logo'/>
        </div>
        <GptSearchBar/>
        <GptMovieSuggestion/>
    </div>
  )
}

export default GptSearch