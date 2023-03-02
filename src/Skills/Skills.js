import React from 'react';
import s from "./Skills.module.css"
import sContainer from "../common/styles/Container.module.css"
import {Skill} from "./skill/Skill";

export const Skills = () => {
    return (
        <div className={s.skillsBlock}>
            <div className={`${sContainer.container} ${s.skillsContainer}`}>
                <h2 className={s.title}>
                    Skills
                </h2>
                <div className={s.skills}>
                    <Skill title={"Js"} description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae" }/>
                    <Skill title={"Css"} description={"dicta eius esse hic iusto, labore magni mollitia omnis quia quidem"}/>
                    <Skill title={"React"} description={"quod quos repellat tenetur unde velit? Eos facilis fugiat totam."}/>
                </div>
            </div>

        </div>
    );
};