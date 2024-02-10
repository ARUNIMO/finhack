import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";
import poly from "../assets/poly.png" 
import dev from "../assets/dev.png" 
import eth from "../assets/eth.png" 

const FeedbackCard = ({
  index,
  image,
  altText,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className='bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full'
  >
    {/* Image with Alt Text */}
    <div className='mt-1'>
      <img src={image} alt={altText} />
    </div>

    <div className='mt-7 flex justify-between items-center gap-1'>
      <div className='flex-1 flex flex-col'>
        {/* Additional content can be added here */}
      </div>
    </div>
  </motion.div>
);

const Feedbacks = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}></p>
          <h2 className={styles.sectionHeadText}>Sponsors</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX}`}>
        <div className='flex flex-row gap-7'>
          <FeedbackCard
            index={0}
            image={dev}
            altText="DEVFOLIO LOGO"
          />
          <FeedbackCard
            index={1}
            image={poly}
            altText="POLYGON LOGO"
          />
          <FeedbackCard
            index={2}
            image={eth}
            altText="ETHINDIA LOGO"
          />
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");
