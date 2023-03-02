import React from 'react';
import s from "./Skill.module.css"
export const Skill = ({title, description}) => {
    return (
        <div className={s.skill}>
            <div className={s.icon}></div>
            <h3>{title}</h3>
            <span className={s.description}>
                {description}
            </span>
        </div>
    );
};
