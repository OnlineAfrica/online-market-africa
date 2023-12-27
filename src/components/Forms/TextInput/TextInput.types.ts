import {ComponentType} from 'react';
import {TextInputProps} from 'react-native';
import {SvgProps} from 'react-native-svg';

export interface TextInputComponentProps extends TextInputProps {
  label: string;
  name: string;
  LeftIcon?: ComponentType<SvgProps>;
  isEditable?: boolean;
}

export type InputTypes = {
  hasFocus: boolean;
  hasError: boolean;
  isEditable: boolean;
};
