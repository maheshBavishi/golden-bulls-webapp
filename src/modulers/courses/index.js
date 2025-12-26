import React from 'react'
import CoursesBanner from './coursesBanner'
import OnDemandCourses from './onDemandCourses'
import LiveCourses from './liveCourses'
import TrustedSection from './trustedSection'
import ClassroominYourPocket from '../home/classroominYourPocket'
import FaqSection from '../home/faqSection'

export default function Courses() {
    return (
        <div>
            <CoursesBanner />
            <OnDemandCourses title='live online courses' />
            <LiveCourses />
            <OnDemandCourses title='In-person courses' />
            <TrustedSection />
            <ClassroominYourPocket spacingRemove />
            <FaqSection />
        </div>
    )
}
