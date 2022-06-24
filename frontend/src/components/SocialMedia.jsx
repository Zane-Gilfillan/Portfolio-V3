import React from 'react'

import { RiSpeakerFill, RiDiscordFill, RiGithubFill } from 'react-icons/ri';

const SocialMedia = () => {
  return (
    <div className="app__social">
        <div>
            <RiSpeakerFill />
        </div>
        <div>
            <RiDiscordFill />
        </div>
        <div>
            <RiGithubFill />
        </div>
    </div>
  )
}

export default SocialMedia