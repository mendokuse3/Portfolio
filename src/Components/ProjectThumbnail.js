import React from 'react';
import RichText from './RichText';
import { uuid } from 'uuidv4';
import {HeaderThree, SmallFlex} from '../Styles/type';


const ProjectThumnails = (props) => {
    return (
        <div className='project-container' key={uuid()}>
            <a href={props.project.fields.link} className='project-link'><img 
                src={props.project.fields.thumbnail.fields.file.url} 
                alt={props.project.fields.thumbnail.fields.title}
                /></a>
            <div className='project-text'>
                <HeaderThree>{props.project.fields.title}</HeaderThree>
                <RichText content={props.project.fields.description}/>
                <SmallFlex>
                    {props.project.fields.technologies.map(name => {
                        return (
                            <p key={uuid()}>{name}</p>
                        )
                    })}
                </SmallFlex>
            </div>
        </div>
    )
}

export default ProjectThumnails;