import React from 'react';
import {Container, SectionButtonContainer} from './SectionHeader.styles';
import {Typography} from 'components/Typography/Typography.component';
import {SectionHeaderTypes} from './SectionHeader.types';

export const SectionHeader = ({
  title,
  buttonTitle,
  onPress,
}: SectionHeaderTypes): JSX.Element => {
  return (
    <Container>
      <Typography variant="subtitle">{title}</Typography>
      {buttonTitle && (
        <SectionButtonContainer onPress={onPress}>
          <Typography variant="accent">{buttonTitle}</Typography>
        </SectionButtonContainer>
      )}
    </Container>
  );
};
