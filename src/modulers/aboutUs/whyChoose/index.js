'use client'
import React, { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import styles from './whyChoose.module.scss';
const RightVec = '/assets/images/right-layer.png'
const BookIcon = '/assets/icons/book.svg';

const gamesData = [
    {
        title: 'Flappy Fox',
        description:
            'Navigate your fox through a mesmerizing background of glowing candles while dodging obstacles and collecting crypto coins floating between them. Each coin you grab boosts your score and brings you closer to victory.',
        points: [
            'Smooth & responsive controls',
            'Crypto coin boosts for higher scores',
            'Eye-catching candle-lit background',
        ],
        image: '/assets/images/flappy.png',
    },
    {
        title: 'Crypto Ninja',
        description:
            'In this fast-paced, reflex-testing game, fruits engraved with crypto token symbols appear in mid-air — your mission is to slice them with precision, stack up combos, and chase the highest score possible. The sharper your moves, the bigger your rewards.',
        points: [
            'Unique crypto-themed fruits',
            'Combo bonuses & satisfying slicing animations',
            'Engaging sound effects for an immersive feel',
        ],
        image: '/assets/images/crypto-ninja.png',
    },
    {
        title: 'Bull Run',
        description:
            'Run endlessly through busy streets, collect crypto coins using magnets and 2x boosts, leap over obstacles, and dash your way to record-breaking scores.',
        points: [
            'Fast-paced, run-to-earn style gameplay',
            'Multiple power-ups: Magnet, 2x Boost, and more',
            'Challenging cityscape with dynamic obstacles',
        ],
        image: '/assets/images/bullrun.png',
    },
    {
        title: 'CrypTetris',
        description:
            'Here, the blocks are made of vibrant crypto tokens and colorful shapes. Match, clear, and stack strategically while enjoying smooth animations and high-energy sound effects.',
        points: [
            'Crypto token–inspired block designs',
            'Addictive puzzle mechanics',
            'Visually captivating animations',
        ],
        image: '/assets/images/crypTetris.png',
    },
];
export default function WhyChoose() {
    const containerRef = useRef(null);
    const titleRef = useRef(null);
    const titleInView = useInView(titleRef, { once: true });

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    const titleVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" }
        }
    };

    const iconVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };
    return (
        <div className={styles.whyChooseAlignment} ref={containerRef}>
            <div className='container-md'>
                <div className={styles.text}>
                    <h2>
                        Why choose golden bulls academy
                    </h2>
                </div>
                <div className={styles.allBoxAlignment}>
                    {gamesData.map((game, index) => {
                        const itemsLength = gamesData.length;
                        const scale = useTransform(
                            scrollYProgress,
                            [(index * 1) / itemsLength, 1],
                            [1, 1 - (itemsLength - index) * 0.01]
                        );

                        return (
                            <motion.div
                                key={game.title}
                                className={styles.box}
                                style={{
                                    scale,
                                    position: 'sticky',
                                    top: `calc(120px + ${index * 20}px)`,
                                }}
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                            >
                                <div className={styles.textgrid}>
                                    <div className={styles.content}>
                                        <h2>
                                            <span className={styles.fontfamily}>01. </span> <span className={styles.textcolor}> Industry-Focused </span> Curriculum
                                        </h2>
                                        <p>
                                            Our courses are designed to bridge the gap between theory and real-world trading knowledge. Every lesson is structured to help learners understand how financial markets work, why price moves the way it does, and how to build a logical trading routine. Instead of overwhelming students with complicated jargon, we focus on
                                            clarity, structure, and practical learning that builds strong foundations over time.
                                        </p>
                                        <div className={styles.icon}>
                                            <img src={BookIcon} alt='BookIcon' />
                                        </div>
                                    </div>
                                    <div className={styles.list}>
                                        <div className={styles.iconText}>
                                            <span> ✦ Well structured lessons</span>
                                        </div>
                                        <div className={styles.iconText}>
                                            <span> ✦ Step-by-step learning</span>
                                        </div>
                                        <div className={styles.iconText}>
                                            <span> ✦ Market-focused education</span>
                                        </div>
                                        <div className={styles.iconText}>
                                            <span> ✦  Practical examples</span>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.rightvec}>
                                    <img src={RightVec} alt='RightVec' />
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </div>
    )
}
