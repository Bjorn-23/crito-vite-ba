import React from 'react'

import SectionTitle from '@generics/SectionTitle'
import ProjectsBox from '@generics/ProjectsBox'
import Button from '@generics/Button'

import img_Growth from '@assets/img/projects/top-lft.png'
import img_Responsive from '@assets/img/projects/top-rgt.png'
import img_Educate from '@assets/img/projects/bottom-lft.png'
import img_Insight from '@assets/img/projects/bottom-rgt.png'

const ProjectsSection = () => {
    return (
        <section className="projects">
            <div className="container">
                <div className="projects-wrapper">

                    <div className="title-wrapper">
                        <SectionTitle title="Let's Look At Our Global Projects" orangeText="Project & Case Studies" />
                    </div>

                    <div className="grid-container-p">

                        <ProjectsBox img={img_Growth} altText="a mans hands holding a business newspaper" title="Grow your business" url="/news/cc6c2b75-8ee7-4e4e-8a99-66fe89a4b789" />
                        <ProjectsBox img={img_Responsive} altText="a pair of glasses in front of apple products on a white desk" title="your client needs a responsive website" url="/news/228c829d-4f66-431f-bb20-1b3aed2869b6" />
                        <ProjectsBox img={img_Educate} altText="a notepad with a pen and a ruler in front of a calculator on a desk" title="Educate your employees to get better results" url="/news/64c35699-a737-4712-a85e-f76c7dc43172" />
                        <ProjectsBox img={img_Insight} altText="a laptop with the screen open, showing business intel" title="Business insight is an important part of your business" url="/news/9a686f0a-8397-41c2-8adb-bd731eea59ac" />

                    </div>

                    <div className="btn-projects">
                        <Button type="black" url="#" title="All Recent Projects" />

                    </div>

                </div>
            </div>
        </section>
    )
}

export default ProjectsSection