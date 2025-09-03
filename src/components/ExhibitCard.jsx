import { Calendar} from 'lucide-react'

import React from 'react'

function ExhibitCard({exhibit , onclick}) {
  return (
    <div className='bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all
     duration-300 transform hover:-translate-y-2 cursor-pointer overflow-hidden group'
    onclick={onclick}
    >
        {/* Image Section */}
        <div className='relative overflow-hidden'>
            <img src={exhibit.image} 
            alt={exhibit.name} 
            className='w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110 '
            loading='lazy'
            />
        {/* Hover effect on the card*/}

        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all 
        duration-300 flex items-center justify-center"> 
        </div>
        </div>
        {/* Text Info */}

        <div className='p-6'>
            <h3 className='text-xl text-gray-900 dark:text-white mb-2'>
                {exhibit.name}
            </h3>

            <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm mb-3">
                <Calendar className="h-4 w-4 mr-1" />
                <span>{exhibit.year}</span>
             </div>

            {exhibit.artist && (
                <p className="text-gray-500 dark:text-gray-500 text-sm mb-3">
                    by {exhibit.artist}
                </p>
            )}
            <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-3">
                {exhibit.description}
            </p>       
        </div>
    </div>
  )
}

export default ExhibitCard