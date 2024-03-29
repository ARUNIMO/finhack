import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {

  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Welcome to <span className='text-[#915EFF]'>Hacktrix_2.0</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Code for a Cause, Hack for Change <br className='sm:block hidden' />
            Your Genious, Our AI - Hack the Future! 
            
          </p>
          <div class="button-container flex  items-center justify-center relative top-5 rounded-mg right-60 pr-56">
            <div 
            class="apply-button " 
            data-hackathon-slug="hactrix-2-0" 
            data-button-theme="light" >
            </div>
     </div>
          

        </div>
      </div>
      {/* <div className="absolute top-80 left-96  h-96 w-104 "> */}

      <ComputersCanvas  />
      {/* </div> */}


      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
