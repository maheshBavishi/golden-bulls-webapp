import React from 'react'
import AboutUsBanner from './aboutUsBanner'
import WhoWeAre from './whoWeAre'
import ClassroominYourPocket from '../home/classroominYourPocket'
import FaqSection from '../home/faqSection'

export default function AboutUs() {
    return (
        <div>
            <AboutUsBanner />
            <WhoWeAre />
            <ClassroominYourPocket />
            <FaqSection />
        </div>
    )
}
