"use client";
import React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./topCourses.module.scss";
import CoursesCard from "@/components/coursesCard";
import { topCoursesData } from "@/constants";

export default function TopCourses() {
  const [activeTab, setActiveTab] = React.useState("recorded");

  return (
    <div className={styles.topCourses}>
      <div className="container-md">
        <motion.div
          className={styles.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2>Explore our top courses</h2>
        </motion.div>
        <motion.div
          className={styles.tabCenter}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <div className={styles.tabGroup}>
            <button
              className={activeTab === "recorded" ? styles.active : ""}
              onClick={() => setActiveTab("recorded")}
            >
              <span>1.0 Basic to Advance Price Action Course</span>
            </button>
            <button
              className={activeTab === "live" ? styles.active : ""}
              onClick={() => setActiveTab("live")}
            >
              <span>Live Online Courses</span>
            </button>
            <button
              className={activeTab === "inPerson" ? styles.active : ""}
              onClick={() => setActiveTab("inPerson")}
            >
              <span>Personal Mentorship</span>
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
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            {topCoursesData[activeTab]?.map((item) => (
              <CoursesCard
                key={item.id}
                title={item.title}
                price={item.price}
                author={item.author}
                duration={item.duration}
                level={item.level}
                rating={item.rating}
                image={item.image}
                location={item?.location || ""}
              />
            ))}
          </motion.div>
        </AnimatePresence>
        <motion.div
          className={styles.buttonCenter}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Link href="/courses">
            <button>
              <span>See All Courses</span>
            </button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
