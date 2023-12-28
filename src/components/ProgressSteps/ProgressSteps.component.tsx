import React, {useMemo} from 'react';
import {ProgressStepsProps} from './ProgressSteps.types';
import StepIndicator from 'react-native-step-indicator';
import {StepsContainer} from './ProgressSteps.styles';
import {useTheme} from 'styled-components/native';

export const ProgressSteps = ({
  labels,
  step,
}: ProgressStepsProps): JSX.Element => {
  const theme = useTheme();

  const customStyles = useMemo(() => {
    return {
      stepIndicatorSize: 35,
      currentStepIndicatorSize: 40,
      separatorStrokeWidth: 2,
      currentStepStrokeWidth: 3,
      stepStrokeCurrentColor: theme.colors.background.buttonPrimary,
      stepStrokeWidth: 3,
      stepStrokeFinishedColor: theme.colors.background.buttonPrimary,
      stepStrokeUnFinishedColor: theme.colors.foreground.bodyLight,
      separatorFinishedColor: theme.colors.background.buttonPrimary,
      separatorUnFinishedColor: theme.colors.foreground.bodyLight,
      stepIndicatorFinishedColor: theme.colors.background.buttonPrimary,
      stepIndicatorUnFinishedColor: theme.colors.white,
      stepIndicatorCurrentColor: theme.colors.white,
      stepIndicatorLabelFontSize: 13,
      currentStepIndicatorLabelFontSize: 13,
      stepIndicatorLabelCurrentColor: theme.colors.background.buttonPrimary,
      stepIndicatorLabelFinishedColor: theme.colors.white,
      stepIndicatorLabelUnFinishedColor: theme.colors.foreground.bodyLight,
      labelColor: theme.colors.foreground.bodyLight,
      labelSize: 13,
      currentStepLabelColor: theme.colors.background.buttonPrimary,
      labelFontFamily: 'Arial',
    };
  }, [theme]);
  return (
    <StepsContainer>
      <StepIndicator
        customStyles={customStyles}
        labels={labels}
        currentPosition={step}
        stepCount={labels.length}
      />
    </StepsContainer>
  );
};
