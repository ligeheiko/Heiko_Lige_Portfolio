import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';
import Button from '../../styles/GlobalComponents/Button';

const openInNewTab = (url) =>{
  const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
  if(newWindow)newWindow=null
}

const onClickUrl = (url) => {
  return () => openInNewTab(url)
}

const Projects = () => (
 <Section nopadding id="projects">
   <SectionDivider />
   <SectionTitle main>Projects</SectionTitle>
   <GridContainer>
     {projects.map(({id, image, title, description, tags, source, visit})=> (
       <BlogCard key={id}>
         <Img src={image}/>
         <TitleContent>
           <HeaderThree title>{title}</HeaderThree>
           <Hr />
         </TitleContent>
         <CardInfo>
           {description}
         </CardInfo>
         <br/>
         <div>
           <TitleContent>Stack</TitleContent>
           <TagList>
             {tags.map((tag, i)=> (
                <Tag key={i}>{tag}</Tag>
             ))}
           </TagList>
         </div>
         <UtilityList>
           <ExternalLinks href= {visit} target="_blank">Code</ExternalLinks>
           <ExternalLinks href={onClickUrl(source)}> Source</ExternalLinks>
         </UtilityList>
       </BlogCard>
     ))}
   </GridContainer>
 </Section>
);

export default Projects;