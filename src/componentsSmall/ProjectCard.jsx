import React from 'react'

function ProjectCard(props) {
  const { picUrl, projectTitle, projectDescription, projectTehnologies } = props;
  return (
    <div className="flex flex-col justify-center items-center w-[90%] border border-gray-300/15 bg-[#111827] rounded-lg">
        <img src={picUrl} alt="Project Image" className="w-[90%] object-cover rounded-t-lg py-3" />
        <div className="p-4 flex flex-col justify-center items-start w-full">
            <h2 className="text-white text-lg font-semibold mb-2 w-full text-left">{projectTitle}</h2>
            <p className="text-white text-sm w-full text-left">
                {projectDescription}
            </p>
            <div className="flex flex-wrap gap-2 mt-2">
                {projectTehnologies.map((tech, index) => (
                    <span key={index} className="bg-blue-500 text-white text-xs px-2 py-1 rounded">
                        {tech}
                    </span>
                ))}
            </div>
        </div>
    </div>
  )
}

export default ProjectCard