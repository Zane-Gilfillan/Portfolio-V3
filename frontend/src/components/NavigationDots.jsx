import React from 'react'

const NavigationDots = ({ active }) => {
  return (
    <div className="app__navigation">
        {['home', 'about', 'contact', 'work', 'skills'].map((item, index) => (
            <li key={item}>
                <a href={`#${item}`} onClick={() => setToggle(false)}>{item}</a>          
            </li>
        ))}
    </div>
  )
}

export default NavigationDots