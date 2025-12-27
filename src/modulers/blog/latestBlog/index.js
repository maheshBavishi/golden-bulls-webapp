'use client'
import React from 'react'
import { motion } from 'framer-motion'
import styles from './latestBlog.module.scss'
import Pagination from '@/components/pagination'

const BlogCardImage = '/assets/images/blog-card.png'

/* Container animation */
const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.12,
            delayChildren: 0.1,
        },
    },
}

/* Card animation */
const cardVariants = {
    hidden: {
        opacity: 0,
        y: 24,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: 'easeOut',
        },
    },
}

export default function LatestBlog() {
    return (
        <div className={styles.latestBlog}>
            <div className="container-md">
                <div className={styles.sectionHeaderAlignment}>
                    <div className={styles.title}>
                        <div className={styles.text}>
                            <h2>Latest Blogs</h2>
                        </div>
                    </div>
                    <div className={styles.line}></div>
                    <div className={styles.buttonAlignent}>
                        <button>
                            <span>All Categories</span>
                            {/* SVG unchanged */}
                        </button>
                    </div>
                </div>

                {/* 👇 Grid container animation */}
                <motion.div
                    className={styles.grid}
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {[...Array(12)].map((_, index) => (
                        <motion.div
                            key={index}
                            className={styles.griditems}
                            variants={cardVariants}
                        >
                            <div className={styles.cardImage}>
                                <img src={BlogCardImage} alt="BlogCardImage" />
                            </div>

                            <div className={styles.details}>
                                <h3>
                                    The Beginner’s Roadmap to Understanding Financial Markets
                                </h3>
                                <div className={styles.twoContentAlignment}>
                                    <span>Johnathan Doe</span>
                                    <ul>
                                        <li>19 November 2023</li>
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                <div className={styles.paginationTopAlignment}>
                    <Pagination />
                </div>
            </div>
        </div>
    )
}
