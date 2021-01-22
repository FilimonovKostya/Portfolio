import React, {useLayoutEffect, useState} from "react";
import style from './Projects.module.scss'
import {Project} from "./Project/Project";
import {Zoom} from "react-awesome-reveal";

export const Projects = () => {

    // const backgroundImg = {
    //     backgroundImage: `url()`,
    //     backgroundSize: 'cover',
    //     backgroundRepeat: 'no-repeat',
    //     backgroundPosition: 'center'
    // }

    function useWindowSize() {
        const [size, setSize] = useState([0, 0]);
        useLayoutEffect(() => {
            function updateSize() {
                setSize([window.innerWidth, window.innerHeight]);
            }

            window.addEventListener('resize', updateSize);
            updateSize();
            return () => window.removeEventListener('resize', updateSize);
        }, []);
        return size;
    }

    const [width, height] = useWindowSize();

    return <section className={style.wrapper}>
        <h2><span> My </span> projects </h2>
        <div className={style.container}>
            {width > 1000
                ? <Zoom duration={1500}>
                    <Project title={'TodoList'}/>
                    <Project title={'Social network'}/>
                    <Project title={'Counter'}/>
                    <Project title={'Quiz'}/>
                </Zoom>
                : <>
                    <Project title={'TodoList'}/>
                    <Project title={'Social network'}/>
                    <Project title={'Counter'}/>
                    <Project title={'Quiz'}/>
                </>
            }
        </div>
    </section>
}

