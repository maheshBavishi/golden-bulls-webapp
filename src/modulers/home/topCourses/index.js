'use client'
import React from 'react'
import { motion } from 'framer-motion'
import styles from './topCourses.module.scss'
import ClockIcon from '@/icons/clockIcon'
import StarIcon from '@/icons/starIcon'
import Button from '@/components/button'
import CoursesCard from '@/components/coursesCard'

const CourseImage = '/assets/images/course.png'

const containerVariants = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.15,
        },
    },
}

const cardVariants = {
    hidden: {
        opacity: 0,
        y: 40,
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: 'easeOut',
        },
    },
}

export default function TopCourses() {
    return (
        <div className={styles.topCourses}>
            <div className="container-md">
                <motion.div className={styles.title} initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}>
                    <h2>Explore our top courses</h2>
                </motion.div>
                <motion.div className={styles.tabCenter} initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.5 }}>
                    <div className={styles.tabGroup}>
                        <button className={styles.active}>
                            <span>
                                On Demand Courses
                            </span>
                        </button>
                        <button>
                            <span>Live Online Courses</span>
                        </button>
                        <button>
                            <span>
                                In Person Courses
                            </span>
                        </button>
                    </div>
                </motion.div>

                <motion.div
                    className={styles.grid}
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {[1, 2, 3].map((_, index) => (
                        <CoursesCard key={index} />
                    ))}
                </motion.div>
                <motion.div className={styles.buttonCenter} initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}>
                    <button>
                        <span>
                            See All Courses
                        </span>
                    </button>
                </motion.div>
            </div>
        </div>
    )
}
