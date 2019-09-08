import React from 'react';
import {ContentContainerDiv, SectionTitle, SubSectionTitle, DateText, ExperienceListUl} from './styles';


function ExperienceCard (props) {
    return (
        <ContentContainerDiv>
            <SectionTitle>EXPERIENCE</SectionTitle>

            <div>
                <SubSectionTitle>SimplrFlex, Expert</SubSectionTitle>
                <DateText>MAY 2018 - PRESENT</DateText>
                <ExperienceListUl>
                    <li>Work remotely resolving help desk tickets for multiple businesses.</li>
                    
                    <li>Maintain a high customer satisfaction rating on my profile by following the guidelines set out by each business SimplrFlex has partnered with and listening to customer concerns and responding appropriately.</li>
                </ExperienceListUl>
            </div>



            <div>
                <SubSectionTitle>Kentucky State Board of Elections, IT Help Desk Technician</SubSectionTitle>
                <DateText>APR 2015 - APR 2018</DateText>
                <ExperienceListUl>
                    <li>In charge of Voter Registration System (VRS) and Online Voter Registration System help desk.</li>
                    <li>Answered phone calls and emails from county clerks about any technical questions pertaining to the VRS.</li>
                    <li>I either resolved the issue or worked with the development team to resolve the issue.</li>
                    <li>Kept manuals and documentation on the VRS current.</li>
                    <li>Tested new updates and reported detailed feedback to the development team.</li>
                    <li>Responsible for training all new County Clerks how to use the VRS.</li>
                    <li>Responsible for keeping internal website current.</li>
                    
                </ExperienceListUl>
            </div>

            <div>
                <SubSectionTitle>The Recon Group, Line Technician</SubSectionTitle>
                <DateText>October 2015</DateText>
                <ExperienceListUl>
                    <li>Repaired and repackaged electronics (computers, iPads, iPhones, TVs, etc.)</li>
                    <li>Tested electronics and graded their condition based on performance and cosmetic appearance.</li>
                    <li>Packaged all repaired electronics for shipment.</li>
                </ExperienceListUl>
            </div>
            
        </ContentContainerDiv>
    )
}

export default ExperienceCard;