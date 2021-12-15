import React from 'react';
import { DiDotnet, DiHtml5, DiReact, DiVisualstudio } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
<Section id="tech">
  <SectionDivider></SectionDivider>
  <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      Technologies I'm familiar with
    </SectionText>
    <List>
      <ListItem>
        <ListContainer>
          <ListTitle>
            <DiReact size="3rem" color="#61DBFB"/>
            <DiHtml5 size="3rem" color="orange"/>
            <br />
            Front End
          </ListTitle>
           <ListParagraph>
             Experience with<br />
             React.js and Html 5
           </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <ListContainer>
          <ListTitle>
            <DiDotnet size="3rem"/>
            <DiVisualstudio size="3rem" color = "#9417A2" />
            <br/>
            Back End
          </ListTitle>
          <ListParagraph>
            Experience with<br />
            .Net and Visualstudio
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
</Section>
);

export default Technologies;
