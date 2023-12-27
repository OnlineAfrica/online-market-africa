import React from 'react';
import {IconContainer, ListItemContainer} from './ListItem.styles';
import {ListItemProps} from './ListItem.types';
import {Typography} from 'components/Typography/Typography.component';

export const ListItem = ({
  title,
  onPress,
  leftIcon,
  isFirst = false,
  isLast = false,
}: ListItemProps): JSX.Element => {
  return (
    <ListItemContainer isFirst={isFirst} isLast={isLast} onPress={onPress}>
      {leftIcon && <IconContainer>{leftIcon}</IconContainer>}
      <Typography variant="body1">{title}</Typography>
    </ListItemContainer>
  );
};
