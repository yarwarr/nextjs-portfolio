import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range of technologies in the web development world.
      From Back-end To Design
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            Angular <br />
            React.js <br />
            Next.js <br />
            Java GUI <br />
            HTML <br />

          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="3rem" />
        <ListContainer>

          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            Sequelize ORM <br />
            Drizzle ORM <br />
            Prisma ORM <br />
            PostgreSQL <br />
            MySQL <br />
            MongoDB <br />
            Node.js <br />
            Express.js <br />
            Java - Spring <br />
            Python - Flask <br />
            REST APIs <br />

          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiZend size="3rem" />
        <ListContainer>
          <ListTitle>UI/UX</ListTitle>
          <ListParagraph>
            Experience with <br />
            CSS <br />
            TailwindCSS <br />
            Material UI <br />
            Adobe Photoshop <br />
            Adobe Illustrator <br />


          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>

);

export default Technologies;
