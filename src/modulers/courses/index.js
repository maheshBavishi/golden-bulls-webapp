import React from 'react'
import CoursesBanner from './coursesBanner'
import OnDemandCourses from './onDemandCourses'
import TrustedSection from './trustedSection'
import ClassroominYourPocket from '../home/classroominYourPocket'
import FaqSection from '../home/faqSection'
import { topCoursesData } from '@/constants'
export default function Courses() {
    return (
        <div>
            <CoursesBanner />
            <OnDemandCourses title='1.0 Basic to Advance Price Action Course' data={topCoursesData.recorded} bgColor='#0C0C0C' />
            <OnDemandCourses title="Live online courses" data={topCoursesData.live} bgColor='#000' />
            <OnDemandCourses title='Personal Mentorship' data={topCoursesData.inPerson} bgColor='#0C0C0C' />
            <TrustedSection />
            <ClassroominYourPocket spacingRemove />
            <FaqSection />
        </div>
    )
}
