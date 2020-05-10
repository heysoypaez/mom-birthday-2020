import React from 'react'
import './card.css'

const MusicCard = ({
  title = 'El amor no se puede olvidar',
  author = 'Pimpinela',
  src = 'https://www.youtube.com/embed/XsNNmg-Ps3A',
}) => (
  <div className="paper">
    <div className="w-full h-64 bg-cover">
      <iframe
        width="100%"
        height="100%"
        src={src}
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2">{title}</div>
      <p className="text-grey-darker text-base">{author}</p>
    </div>
    <div className="px-6 py-4">
      <span className="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2">
        #felizcumpleaños
      </span>
      <span className="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2">
        #betsavive
      </span>
    </div>
  </div>
)

export default MusicCard
