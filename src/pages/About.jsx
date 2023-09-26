import React, { Fragment } from 'react'
import { Avatar } from 'flowbite-react';

function About() {
    return (
        <Fragment>
            <div className='ml-12'>
                <header className='flex flex-col justify-start items-start space-y-4'>
                    <section className="naveen">
                        <Avatar
                            img="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                            rounded
                        >
                            <div className="space-y-1 text-violet-400 font-medium dark:text-white">
                                <div>
                                    Naveen Kumar
                                </div>
                                <div className="text-sm text-gray-500 dark:text-gray-400">
                                    Web developer
                                </div>
                            </div>
                        </Avatar>

                    </section>
                    <section className="vivek">
                        <Avatar
                            img="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                            rounded
                        >
                            <div className="space-y-1 text-violet-400 font-medium dark:text-white">
                                <div>
                                    Vivek Pathak
                                </div>
                                <div className="text-sm text-gray-500 dark:text-gray-400">
                                    Web developer
                                </div>
                            </div>
                        </Avatar>
                    </section>
                    <section className="pritam">
                        <Avatar
                            img="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                            rounded
                        >
                            <div className="space-y-1 text-violet-400 font-medium dark:text-white">
                                <div>
                                    Pritam Kumar Sarangi
                                </div>
                                <div className="text-sm text-gray-500 dark:text-gray-400">
                                    Web developer
                                </div>
                            </div>
                        </Avatar>

                    </section>
                </header>
                <section className="content mt-10">
                    <p><q>Ideated by Naveen Kumar, our project is a collaborative effort among three individuals. We are passionate about bringing ideas to life, drawing inspiration from YouTube animation videos.</q></p>
                    <p className='mt-6 text-center font-mono font-bold'>Visualize, Learn, Remember</p>
                    <p className='text-center font-serif font-thin text-base'>Thankyou! Happy Learning!</p>

                </section>
            </div>
        </Fragment>
    )
}

export default About


