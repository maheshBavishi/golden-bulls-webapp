'use client'
import React from 'react'
import { motion } from 'framer-motion'
import styles from './coursesBanner.module.scss';
import Button from '@/components/button'

const BullImage = '/assets/images/courses-bull.png'

/* Left Content Animation */
const textVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
      staggerChildren: 0.15,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
}

/* Right Image Infinite Animation */
const bullVariants = {
  animate: {
    rotateY: [0, 10, 0, -10, 0],
    rotateX: [0, 3, 0, -3, 0],
    // scale: [1, 1.02, 1],
    transition: {
      duration: 6,
      ease: 'easeInOut',
      repeat: Infinity,
    },
  },
}
export default function CoursesBanner() {
  return (
    <div className={styles.coursesBanner}>
      <div className="container-md">
        <div className={styles.grid}>

          {/* LEFT CONTENT */}
          <div className={styles.griditems}>
            <motion.div
              className={styles.text}
              variants={textVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.h1 variants={itemVariants}>
                Learn to Trade with <span>
                  Confidence
                </span>
              </motion.h1>

              <motion.p variants={itemVariants}>
                We guide you through the world of trading with clear, structured education designed to build confidence, skill, and long-term understanding. Whether you’re just
                getting started or looking to sharpen your strategies.
              </motion.p>

              <motion.div
                className={styles.buttonAlignment}
                variants={itemVariants}
              >
                <button className={styles.outlineButton}>
                  Download App
                </button>
              </motion.div>
            </motion.div>
          </div>

          {/* RIGHT IMAGE */}
          <div className={styles.griditems}>
            <motion.div
              className={styles.image}
              variants={bullVariants}
              animate="animate"
            >
              <img src={BullImage} alt="BullImage" />
            </motion.div>
          </div>

        </div>
      </div>
    </div>
  )
}
