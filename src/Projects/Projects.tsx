import React from "react";
import style from './Projects.module.scss'
import {Project} from "./Project/Project";
import {Zoom} from "react-awesome-reveal";

type ProjectsPropsType = {
    width: number
}

export const Projects = (props: ProjectsPropsType) => {

    return <section className={style.wrapper}>
        <h2><span> My </span> projects </h2>
        <div className={style.container}>
            {props.width > 1000
                ? <Zoom duration={1500}>
                    <Project title={'TodoList'}
                             technology={'React, Redux, TypeScript, Formik, Redux-Thunk, React Hooks, HOC, Axios, Browser-Router, StoryBook, Unit Tests'}
                             linkGithub={'https://github.com/FilimonovKostya/TodoList'}
                             linkDemo={'https://filimonovkostya.github.io/TodoList/'}
                             img={'https://cdn.iconscout.com/icon/premium/png-512-thumb/todo-list-1725496-1465657.png'}
                    />
                    <Project title={'Social network'}
                             technology={'React, Redux, TypeScript, Redux-Form, Redux-Thunk, React Hooks / Class Components, Axios, Browser-Router'}
                             linkGithub={'https://github.com/FilimonovKostya/Social-network'}
                             linkDemo={''}
                             img={'https://lh3.googleusercontent.com/proxy/Rb8cweJ6-_MZ-qsGxMGOt7dwqzyDSi79XJOIkgOnmNce8sxT1GrNti4FT0-EF4jsgNC2bNk2-N-QcnSPROot71OQsR1y1SMYhhn7Id-7AHqWzTInVDKcxlNKtoi_s-NpgI8_qou7a0Noyyg'}
                    />
                    <Project title={'Counter'}
                             technology={'React, Redux, TypeScript, Local Storage '}
                             linkGithub={'https://github.com/FilimonovKostya/Counter'}
                             linkDemo={'https://filimonovkostya.github.io/Counter/'}
                             img={'https://img.icons8.com/plasticine/2x/counter.png'}

                    />
                    <Project title={'Quiz'} technology={'React, Redux, TypeScript, API'}
                             linkGithub={'https://github.com/FilimonovKostya/Quiz'}
                             linkDemo={'https://filimonovkostya.github.io/Quiz/'}
                             img={'https://cdn0.iconfinder.com/data/icons/online-education-butterscotch-vol-2/512/Questions_And_Answers-512.png'}

                    />
                    <Project title={'Movies'} technology={'React, Redux, TypeScript, Axios, Rest API, React Hooks, Redux-Thunk'}
                             linkGithub={'https://github.com/FilimonovKostya/Movies'}
                             linkDemo={'https://filimonovkostya.github.io/Movies/'}
                             img={'https://cdn0.iconfinder.com/data/icons/colored-vector-icons-10/128/485-512.png'}

                    />
                </Zoom>
                : <>
                    <Project title={'TodoList'}
                             technology={'React, Redux, TypeScript, Formik, Redux-Thunk, React Hooks, HOC, Axios, Browser-Router, StoryBook, Unit Tests'}
                             linkGithub={'https://github.com/FilimonovKostya/TodoList'}
                             linkDemo={'https://filimonovkostya.github.io/TodoList/'}
                             img={'https://cdn.iconscout.com/icon/premium/png-512-thumb/todo-list-1725496-1465657.png'}
                    />
                    <Project title={'Social network'}
                             technology={'React, Redux, TypeScript, Redux-Form, Redux-Thunk, React Hooks / Class Components, Axios, Browser-Router'}
                             linkGithub={'https://github.com/FilimonovKostya/Social-network'}
                             linkDemo={''}
                             img={'https://lh3.googleusercontent.com/proxy/Rb8cweJ6-_MZ-qsGxMGOt7dwqzyDSi79XJOIkgOnmNce8sxT1GrNti4FT0-EF4jsgNC2bNk2-N-QcnSPROot71OQsR1y1SMYhhn7Id-7AHqWzTInVDKcxlNKtoi_s-NpgI8_qou7a0Noyyg'}

                    />
                    <Project title={'Counter'} technology={'React, Redux, TypeScript, Local Storage '}
                             linkGithub={'https://github.com/FilimonovKostya/Counter'}
                             linkDemo={'https://filimonovkostya.github.io/Counter/'}
                             img={'https://img.icons8.com/plasticine/2x/counter.png'}

                    />
                    <Project title={'Quiz'} technology={'React, Redux, TypeScript, API'}
                             linkGithub={'https://github.com/FilimonovKostya/Quiz'}
                             linkDemo={'https://filimonovkostya.github.io/Quiz/'}
                             img={'https://cdn0.iconfinder.com/data/icons/online-education-butterscotch-vol-2/512/Questions_And_Answers-512.png'}

                    />
                    <Project title={'Movies'} technology={'React, Redux, TypeScript, Axios, Rest API, React Hooks, Redux-Thunk'}
                             linkGithub={'https://github.com/FilimonovKostya/Movies'}
                             linkDemo={'https://filimonovkostya.github.io/Movies/'}
                             img={'https://cdn0.iconfinder.com/data/icons/colored-vector-icons-10/128/485-512.png'}

                    />
                </>
            }
        </div>
    </section>
}

