import React, { Component } from 'react';
import styled from 'styled-components';

const Card = styled.div`
  display: flex;
  justify-content: center;
  height: auto;
  margin-bottom: 0.5rem;
`;

class Picture extends Component {
  render = () => {
    return (
      <Card>
        <img src={this.props.url} alt="" />
      </Card>
    );
  };
}

export default Picture;
