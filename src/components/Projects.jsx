import React from 'react'

const data = [
    {
        year : "2023",
        title : "Title 1",
        details : "example details go here"
    },
    {
        year : "2023",
        title : "Title 2",
        details : "example details go here"
    }
]
const Projects = () => {
  return (
    <div id="projects" className='max-w-[1040px] m-auto p-4 py-20'>
        <h1 className='text-center'>Projects</h1>
    </div>
  )
}

export default Projects