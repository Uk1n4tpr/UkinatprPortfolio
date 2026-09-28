import React from 'react'
import { AiFillHtml5 } from 'react-icons/ai'
import { DiCss3 } from 'react-icons/di'
import { SiJavascript, SiExpress, SiMongodb, SiPython, SiTailwindcss, SiBootstrap, SiLinux } from 'react-icons/si'
import { FaReact, FaNodeJs } from 'react-icons/fa'
import { GrMysql } from 'react-icons/gr'
import { DiGithubBadge } from 'react-icons/di'

function SkillsCard(props) {
    const {skillName, skillIcon: SkillIcon, skillColor} = props;
  return (
    <div className="flex flex-col justify-center items-center w-[25%] px-2 py-2 border border-gray-300/15 bg-[#111827] rounded-lg">
        <SkillIcon size={30} color={skillColor} />
        <h1 className="text-white text-[8px] text-center">{skillName}</h1>
    </div>
  )
}

export default SkillsCard