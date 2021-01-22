import React from "react";
import style from './Projects.module.scss'
import {Project} from "./Project/Project";
import {Zoom} from "react-awesome-reveal";

type ProjectsPropsType = {
    width: number
}

export const Projects = (props: ProjectsPropsType) => {

    // const backgroundImg = {
    //     backgroundImage: `url()`,
    //     backgroundSize: 'cover',
    //     backgroundRepeat: 'no-repeat',
    //     backgroundPosition: 'center'
    // }


    return <section className={style.wrapper}>
        <h2><span> My </span> projects </h2>
        <div className={style.container}>
            {props.width > 1000
                ? <Zoom duration={1500}>
                    <Project title={'TodoList'}
                             technology={'React, Redux, TypeScript, Redux-Form, Redux-Thunk, React Hooks, HOC, Axios, Browser-Router'}
                             linkGithub={'https://github.com/FilimonovKostya/TodoList'}
                    />
                    <Project title={'Social network'}
                             technology={'React, Redux, TypeScript, Formik, Redux-Thunk, React Hooks, Axios, Browser-Router, StoryBook, Unit Tests'}
                             linkGithub={'https://github.com/FilimonovKostya/Social-network'}
                    />
                    <Project title={'Counter'}
                             technology={'React, Redux, TypeScript, Local Storage '}
                             linkGithub={'https://github.com/FilimonovKostya/Counter'}
                    />
                    <Project title={'Quiz'} technology={'React, Redux, TypeScript, API'} linkGithub={'https://github.com/FilimonovKostya/Quiz'}/>
                </Zoom>
                : <>
                    <Project title={'TodoList'}
                             technology={'React, Redux, TypeScript, Redux-Form, Redux-Thunk, React Hooks, HOC, Axios, Browser-Router'}
                             linkGithub={'https://github.com/FilimonovKostya/TodoList'}
                    />
                    <Project title={'Social network'}
                             technology={'React, Redux, TypeScript, Formik, Redux-Thunk, React Hooks, Axios, Browser-Router, StoryBook, Unit Tests'}
                             linkGithub={'https://github.com/FilimonovKostya/Social-network'}
                    />
                    <Project title={'Counter'} technology={'React, Redux, TypeScript, Local Storage '}
                             linkGithub={'https://github.com/FilimonovKostya/Counter'}/>
                    <Project title={'Quiz'} technology={'React, Redux, TypeScript, API'} linkGithub={'https://github.com/FilimonovKostya/Quiz'}/>
                </>
            }
        </div>
    </section>
}

