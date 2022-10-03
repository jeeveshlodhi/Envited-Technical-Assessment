import React from 'react'
import './home.css'
import card from '../../assets/Landing page image.svg'
import {Link} from 'react-router-dom'

const Home = () => {
  return (
    <div className='home'>
        <button className='home-btn btn'>
            🎉Create my event
        </button>
        <div className='home-left'>
            <img src={card} alt="" />
        </div>
        <div className='home-right'>
            <div>
                <h1>Imagine if</h1>
                <h1 className='home-snapchat'>Snapchat</h1>
                <h1>has events.</h1>
                <h6>Easily host and share events with your friends<br/> across any social media</h6>
                <Link to='/create'>
                    <button className='btn'>
                        🎉Create my event
                    </button>
                </Link>
            </div>
        </div>
        
    </div>
  )
}

export default Home