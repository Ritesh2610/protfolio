import React from 'react'
import data from './data'
import SkillComponent from './SkillComponent'

function Skills() {
    return (
        <div className='skill-main'>
            <div id="skill">
                <h1 className='skill-heading'>Skills</h1>
                <div className="row container-flud skill-item" >
                {data.map((d)=>(   
                <SkillComponent key={d.key} d={d}/>
                ))}
                </div>
            </div>
        </div>
    )
}

export default Skills