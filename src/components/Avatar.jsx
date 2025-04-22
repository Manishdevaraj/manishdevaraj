import React from 'react';
import { FaGithubAlt } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";
import { SiLeetcode } from "react-icons/si";
import { HoverBorderGradient } from './hover-border-gradient';
import { motion } from "motion/react";

function Avatar() {
  return (
    <>
      <div className="relative flex flex-col items-center justify-center w-full">
        {/* Animated Circle */}
        <motion.svg
  className='absolute w-[220px] h-[220px] sm:w-[300px] sm:h-[300px] lg:w-[400px] lg:h-[400px]'
  fill='transparent'
  viewBox='0 0 506 506'
  xmlns='http://www.w3.org/2000/svg'
>
  <motion.circle
    cx='253'
    cy='253'
    r='250'
    stroke='#00ff99'
    strokeWidth='4'
    strokeLinecap='round'
    strokeLinejoin='round'
    initial={{ strokeDasharray: '24 10 0 0', rotate: 0 }} // Initialize rotation
    animate={{
      strokeDasharray: ['15 120 25 25', '16 25 92 72', '4 250 22 22'], // Keep or simplify
      rotate: [0, 360, 0], // Rotate forward and then back
      stroke: ['#00ff99', '#ff0066', '#0099ff', '#ffcc00'], // Keep your color cycle
    }}
    transition={{
      duration: 15, // Adjust for desired speed (total cycle time)
      repeat: Infinity,
      repeatType: 'yoyo',
      ease: 'linear',
    }}
  />
</motion.svg>

        {/* Profile Image */}
        <div className="relative w-[160px] h-[160px] sm:w-[220px] sm:h-[220px] lg:w-[300px] lg:h-[300px] rounded-full overflow-hidden border-4 border-white/20">
          <img
            src='/u5.png'
            alt='Avatar'
            className="object-cover w-full h-full"
          />
        </div>
      </div>

      {/* Social Buttons */}
      <div className='flex flex-col items-center justify-center gap-6 mt-10 md:mt-20'>
        <div className='flex gap-6'>
          <SocialButton
            link="https://leetcode.com/u/ManishDevaraj/"
            icon={<SiLeetcode className='text-2xl text-purple' />}
            label="LeetCode"
          />
          <SocialButton
            link="https://www.linkedin.com/in/manishdevaraj"
            icon={<CiLinkedin className='text-3xl text-purple' />}
            label="LinkedIn"
            
          />
        </div>

        <SocialButton
          link="https://github.com/Manishdevaraj"
          icon={<FaGithubAlt className='text-2xl text-purple' />}
          label="GitHub"
        />
      </div>
    </>
  );
}

function SocialButton({ link, icon, label }) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <HoverBorderGradient
        containerClassName="rounded-full"
        as="button"
        className="dark:bg-black bg-white text-black dark:text-white flex items-center gap-2 px-4 py-2 text-sm md:text-base hover:cursor-pointer"
      >
        {icon}
        <span>{label}</span>
      </HoverBorderGradient>
    </a>
  );
}

export default Avatar;
