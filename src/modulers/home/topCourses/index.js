'use client'
import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import styles from './topCourses.module.scss'
import ClockIcon from '@/icons/clockIcon'
import StarIcon from '@/icons/starIcon'
import Button from '@/components/button'
import CoursesCard from '@/components/coursesCard'
import { topCoursesData } from '@/constants'
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
    const [activeTab, setActiveTab] = React.useState('recorded')

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
                        <button 
                            className={activeTab === 'recorded' ? styles.active : ''}
                            onClick={() => setActiveTab('recorded')}
                        >
                            <span>
                                Recorded Courses
                            </span>
                        </button>
                        <button 
                            className={activeTab === 'live' ? styles.active : ''}
                            onClick={() => setActiveTab('live')}
                        >
                            <span>Live Online Courses</span>
                        </button>
                        <button 
                            className={activeTab === 'inPerson' ? styles.active : ''}
                            onClick={() => setActiveTab('inPerson')}
                        >
                            <span>
                                In Person Courses
                            </span>
                        </button>
                    </div>
                </motion.div>

                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        className={styles.grid}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3, ease: 'easeOut' }}
                    >
                        {topCoursesData.map((item, index) => (
                            <CoursesCard 
                                key={item.id}
                                title={item.title}
                                price={item.price}
                                author={item.author}
                                duration={item.duration}
                                level={item.level}
                                rating={item.rating}
                                image={item.image}
                            />
                        ))}
                    </motion.div>
                </AnimatePresence>
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
