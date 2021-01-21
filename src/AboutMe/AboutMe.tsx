import React from "react";
import style from './AboutMe.module.scss'
import {Skill} from "./Skill/Skill";
import ts from '../assets/img/tsLogo.svg'
import react from '../assets/img/reactLogo.svg'
import redux from '../assets/img/redux-seeklogo.com.svg'
import js from '../assets/img/jsLogo.svg'
import html from '../assets/img/htmlLogo.svg'
import css from '../assets/img/cssLogo.svg'
import git from '../assets/img/gitLogo.svg'
import mui from '../assets/img/muiLogo.svg'
import {MainInformation} from "./Information/MainInformation";
import {SecondaryInformation} from "./Information/SecondaryInformation";
import Particles from "react-particles-js";
import {Slide, Zoom} from "react-awesome-reveal";

export const AboutMe = () => {

    return <section className={style.wrapper}>
        <Particles className={'particles'} params={{
            autoPlay: true,
            background: {
                color: {
                    value: 'rgb(17, 17, 17)'
                },
                position: '50% 50%',
                repeat: ' no-repeat',
                size: 'cover',
                opacity: 1
            },
            backgroundMask: {
                composite: 'destination-out',
                cover: {
                    color: {
                        value: '#e59292'
                    },
                    opacity: 1
                },
                enable: false
            },
            backgroundMode: {
                enable: false,
                zIndex: -1
            },
            detectRetina: true,
            fpsLimit: 60,
            infection: {
                cure: false,
                delay: 0,
                enable: false,
                infections: 0,
                stages: []
            },
            interactivity: {
                detectsOn: 'canvas',
                events: {
                    onClick: {
                        enable: false,
                        mode: 'push'
                    },
                    onDiv: {
                        selectors: [],
                        enable: false,
                        mode: [],
                    },
                    onHover: {
                        enable: true,
                        mode: 'grab',
                        parallax: {
                            enable: true,
                            force: 60,
                            smooth: 10
                        }
                    },
                    resize: true
                },
                modes: {
                    attract: {
                        distance: 200,
                        duration: 0.4,
                        speed: 1
                    },
                    bubble: {
                        distance: 400,
                        duration: 2,
                        opacity: 0.8,
                        size: 40
                    },
                    connect: {
                        distance: 80,
                        links: {
                            opacity: 0.5
                        },
                        radius: 60
                    },
                    grab: {
                        distance: 400,
                        links: {
                            blink: false,
                            consent: false,
                            opacity: 1
                        }
                    },
                    light: {
                        area: {
                            gradient: {
                                start: {
                                    value: '#ffffff'
                                },
                                stop: {
                                    value: ' #000000'
                                }
                            },
                            radius: 1000
                        },
                        shadow: {
                            color: {
                                value: ' #000000'
                            },
                            length: 2000
                        }
                    },
                    push: {
                        quantity: 4
                    },
                    remove: {
                        quantity: 2
                    },
                    repulse: {
                        distance: 200,
                        duration: 0.4,
                        speed: 1
                    },
                    slow: {
                        factor: 3,
                        radius: 200
                    },
                    trail: {
                        delay: 1,
                        quantity: 1
                    }
                }
            },
            manualParticles: [],
            motion: {
                disable: false,
                reduce: {
                    factor: 4,
                    value: false
                }
            },
            particles: {
                bounce: {
                    horizontal: {
                        random: {
                            enable: false,
                            minimumValue: 0.1
                        },
                        value: 1
                    },
                    vertical: {
                        random: {
                            enable: false,
                            minimumValue: 0.1
                        },
                        value: 1
                    }
                },
                collisions: {
                    bounce: {
                        horizontal: {
                            random: {
                                enable: false,
                                minimumValue: 0.1
                            },
                            value: 1
                        },
                        vertical: {
                            random: {
                                enable: false,
                                minimumValue: 0.1
                            },
                            value: 1
                        }
                    },
                    enable: false,
                    mode: 'bounce'
                },
                color: {
                    value: ' #eee',
                    animation: {
                        enable: false,
                        speed: 1,
                        sync: true
                    }
                },
                life: {
                    count: 0,
                    delay: {
                        random: {
                            enable: false,
                            minimumValue: 0
                        },
                        value: 0,
                        sync: false
                    },
                    duration: {
                        random: {
                            enable: false,
                            minimumValue: 0.0001
                        },
                        value: 0,
                        sync: false
                    }
                },
                links: {
                    blink: false,
                    color: {
                        value: '#ffb400'
                    },
                    consent: false,
                    distance: 150,
                    enable: true,
                    frequency: 1,
                    opacity: 0.4,
                    shadow: {
                        blur: 5,
                        color: {
                            value: '#00ff00'
                        },
                        enable: false
                    },
                    triangles: {
                        enable: false,
                        frequency: 1
                    },
                    width: 1,
                    warp: false
                },
                move: {
                    angle: {
                        offset: 45,
                        value: 90
                    },
                    attract: {
                        enable: false,
                        rotate: {
                            x: 600,
                            y: 1200
                        }
                    },
                    direction: 'none',
                    distance: 0,
                    enable: true,
                    gravity: {
                        acceleration: 9.81,
                        enable: false,
                        maxSpeed: 50
                    },
                    noise: {
                        delay: {
                            random: {
                                enable: false,
                                minimumValue: 0
                            },
                            value: 0
                        },
                        enable: false
                    },
                    outModes: {
                        default: 'out',
                        bottom: 'out',
                        left: 'out',
                        right: 'out',
                        top: 'out'
                    },
                    random: false,
                    size: false,
                    speed: 2,
                    straight: false,
                    trail: {
                        enable: false,
                        length: 10,
                        fillColor: {
                            value: ' #000000'
                        }
                    },
                    vibrate: false,
                    warp: false
                },
                number: {
                    density: {
                        enable: true,
                        area: 800,
                        factor: 1000
                    },
                    limit: 0,
                    value: 100
                },
                opacity: {
                    random: {
                        enable: true,
                        minimumValue: 0.1
                    },
                    value: 0.2,
                    animation: {
                        enable: true,
                        minimumValue: 0.1,
                        speed: 3,
                        sync: false
                    }
                },
                reduceDuplicates: false,
                rotate: {
                    random: {
                        enable: false,
                        minimumValue: 0
                    },
                    value: 0,
                    animation: {
                        enable: false,
                        speed: 0,
                        sync: false
                    },
                    direction: 'clockwise',
                    path: false
                },
                shadow: {
                    blur: 0,
                    color: {
                        value: '#000000'
                    },
                    enable: false,
                    offset: {
                        x: 0,
                        y: 0
                    }
                },
                shape: {
                    type: 'circle'
                },
                size: {
                    random: {
                        enable: true,
                        minimumValue: 1
                    },
                    value: 6,
                    animation: {
                        destroy: 'none',
                        enable: true,
                        minimumValue: 0.1,
                        speed: 20,
                        startValue: 'max',
                        sync: false
                    }
                },
                stroke: {
                    width: 0,
                    color: {
                        value: "#000000",
                        animation: {
                            enable: false,
                            speed: 1,
                            sync: true
                        }
                    }
                },
                twinkle: {
                    lines: {
                        enable: false,
                        frequency: 0.05,
                        opacity: 1
                    },
                    particles: {
                        enable: false,
                        frequency: 0.05,
                        opacity: 1
                    }
                }
            },
            pauseOnBlur: true,
            pauseOnOutsideViewport: false,
            themes: []
        }}/>
        <h2 className={style.title}> About <span> Me </span></h2>
        <div className={style.personalInfo}>
            <Zoom>
            <h3> Personal Information </h3>
            <div className={style.information}>
                <MainInformation/>
                <SecondaryInformation/>
            </div>
            </Zoom>
        </div>
        <div className={style.container}>
            <h3>My skills </h3>
            <div className={style.skillsBlock}>
                <Slide direction={'left'}>
                    <Skill title={'TypeScript'} skillLogo={ts}/>
                    <Skill title={'React'} skillLogo={react}/>
                    <Skill title={'Redux'} skillLogo={redux}/>
                </Slide>
                <Slide direction={'right'}>
                    <Skill title={'JavaScript'} skillLogo={js}/>
                    <Skill title={'Html'} skillLogo={html}/>
                    <Skill title={'Css'} skillLogo={css}/>
                    <Skill title={'Git'} skillLogo={git}/>
                    <Skill title={'Material UI'} skillLogo={mui}/>
                </Slide>
            </div>
        </div>
    </section>

}


