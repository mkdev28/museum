import React from "react";

const halls = [
    {
        id:"ancient", name : "Ancient Civillization" , icon : "🏛️"
    },
    { 
        id: 'renaissance', name: 'Renaissance Art', icon: '🎨' 
    },
    { id: 'modern', name: 'Modern Sculptures', icon: '🗿' },

  { id: 'nature', name: 'Natural History', icon: '🦕' }
]

function Navigation({activeHall,onHallChange}){
return(
<nav className=" bg-white dark:bg-gray-900 shadow-sm transition-colors duration-300">
   <div className="w-full mx-auto px-4 py-6">
        <div className="flex flex-wrap gap-10 justify-center">
            {
                halls.map((hall)=>(
                    <button
                        key={hall.id}
                        onClick={()=>onHallChange(hall.id)}
                         className={`px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 ${
                activeHall === hall.id
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                                    }`}
                    >
                    <span className="text-lg">{hall.icon}</span>
                    <span className="hidden sm:inline">{hall.name}</span>
                    </button>
                ))
            }
        </div>
    </div>
</nav>
)
}

export default Navigation