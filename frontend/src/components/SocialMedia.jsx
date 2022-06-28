import React from 'react'
import Link from 'react'

import { RiSpeakerFill, RiDiscordFill, RiGithubFill } from 'react-icons/ri';

const SocialMedia = () => {
  return (
    <div className="app__social">
        <div>
          <a href="https://www.heavyveils.com" target='_blank'>
            <RiSpeakerFill />
          </a>
        </div>
        <div>
          <a href="https://discordapp.com/users/doublewave#8651" target='_blank'>
            <RiDiscordFill />
          </a>  
        </div>
        <div>
          <a href="https://github.com/Zane-Gilfillan" target='_blank'>
            <RiGithubFill />
          </a>

        </div>
    </div>
  )
}

export default SocialMedia