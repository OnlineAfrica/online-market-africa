import React from 'react';
import {Container} from './SectionHeader.styles';
import {Typography} from 'components/Typography/Typography.component';
import {SectionHeaderTypes} from './SectionHeader.types';

export const SectionHeader = ({
  title,
  buttonTitle,
}: SectionHeaderTypes): JSX.Element => {
  return (
    <Container>
      <Typography variant="subtitle">{title}</Typography>
      {buttonTitle && <Typography variant="accent">{buttonTitle}</Typography>}
    </Container>
  );
};
