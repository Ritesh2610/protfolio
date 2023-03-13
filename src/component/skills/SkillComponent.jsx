import React from 'react'

function SkillComponent(props) {
    // console.log(props.d)
    return (
        <>
            <div className="skills-logo my-3 mx-2">
                <img className="skill-img" src={props.d.url} alt=""/>
                <h5 className='skill-title my-2'>{props.d.name}</h5>
            </div>
        </>
    )
}

export default SkillComponent