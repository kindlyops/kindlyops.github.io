import React from 'react';

import Container from 'components/ui/Container';

import * as Styled from './styles';

const Footer: React.FC = () => (
  <Styled.Footer>
    <Container>
      <Styled.Links>
        <Styled.Link href="https://github.com/kindlyops/" rel="noreferrer noopener" target="_blank">
          GitHub
        </Styled.Link>
        <Styled.Link href="https://youtube.com/kindlyops/" rel="noreferrer noopener" target="_blank">
          YouTube
        </Styled.Link>
        <Styled.Link href="https://www.instagram.com/kindlyops/" rel="noreferrer noopener" target="_blank">
          Instagram
        </Styled.Link>
      </Styled.Links>
    </Container>
  </Styled.Footer>
);

export default Footer;
