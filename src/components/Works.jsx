import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { live } from '../assets';
import { StarWrapper } from '../hoc';
import { projects } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn('up', 'spring', index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl"
          />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, '_blank')}
              className="bg-purple-700 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={live}
                alt="source code"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <div dir="rtl">
      <motion.div variants={textVariant()}>
        <p id="project" className={`${styles.sectionSubText} text-right`}>
          أعمالنا التقنية
        </p>
        <h2 className={`${styles.sectionHeadText} text-right`}>
          مشاريع حمزة التقنية
        </h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn('', '', 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px] text-right"
        >
          في <strong>منصة حمزة التقنية</strong>، نقدم مجموعة من المشاريع المتنوعة التي تعكس خبراتنا وقدرتنا على الابتكار التقني. كل مشروع تم تطويره بعناية ليعالج تحديات حقيقية ويقدم حلولاً إبداعية باستخدام أحدث التقنيات.
          <br />
          نستعرض هنا نماذج من أعمالنا، مع روابط مباشرة للمستودعات والعروض التفاعلية الحية، لتمنحكم نظرة أعمق على إمكانياتنا في تصميم وتطوير حلول برمجية متكاملة.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </div>
  );
};


export default StarWrapper(Works, '');
