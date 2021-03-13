import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

const Hero = () => {
    return (
        <section className="py-16 bg-white md:py-24">
            <div className="flex flex-col max-w-6xl px-10 mx-auto lg:flex-row">

                <div className="flex flex-col items-start justify-center w-full pr-10 mb-12 lg:w-1/2 lg:mb-0">
                    <div className="relative">
                        
                        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl xl:text-6xl">
                            <span className="block xl mb-4">Corey Kogan</span>
                            <span className="block text-yellow-400 xl">Full Stack Developer</span>
                        </h1>
                    </div>
                    
                </div>

                <div className="flex flex-col items-center justify-center w-full lg:w-1/2">
                    <StaticImage 
                        src="../images/robot_hero.png"
                        width={400}
                        height={400}
                        alt="Hero Image Robot"
                        placeholder="blurred"
                    />
                </div>
            </div>
    </section>

    )
}

export default Hero;