import React from 'react';
import elise from '../EliseZoom.png';
import michael from '../MichaelZoom.png';
import lee from '../LeeZoom.png';
import { Card, Header } from 'semantic-ui-react';
import styled from 'styled-components';

function About(props) {
  return (
    <div>
      <h1>Three friends on a mission</h1>
      <h2>to survive this <strike>headache</strike> hackathon</h2>
      <MyCard>
        <Card.Content>
          <Card>
          <img src={michael} alt="Michael on Zoom" width="200px"/>
          </Card>
          <Card>
          <img src={elise} alt="Elise on Zoom" width="200px" />
          </Card>
          <Card>
          <img src={lee} alt="Lee on Zoom" width="200px" />
          </Card>
        </Card.Content>
      </MyCard>

    </div>
  );
}

export default About;

const MyCard = styled(Card)`
  display: flex;
`