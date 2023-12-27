import React, {useCallback, useState} from 'react';
import {InputTypes, TextInputComponentProps} from './TextInput.types';
import {
  Container,
  ErrorContainer,
  StyledTextInput,
  TextInputContainer,
} from './TextInput.styles';
import {Typography} from 'components/Typography/Typography.component';
import {useTheme} from 'styled-components/native';
import {useField} from 'formik';

export const InputText = ({
  label,
  name,
  isEditable = true,
  LeftIcon,
  ...rest
}: TextInputComponentProps): JSX.Element => {
  const theme = useTheme();

  const [field, meta, {setTouched, setValue}] = useField(name);

  const [hasFocus, setHasFocus] = useState(false);

  const hasError = !!meta.error && meta.touched;

  const inputTypes: InputTypes = {
    hasError,
    hasFocus,
    isEditable,
  };

  const handleHasFocus = useCallback(() => {
    setHasFocus(true);
  }, []);

  const handleOnBlur = useCallback(() => {
    setHasFocus(false);
    setTouched(true);
  }, [setTouched]);

  const handleOnChange = useCallback(
    (text: string) => {
      setValue(text);
    },
    [setValue],
  );

  return (
    <Container>
      <Typography variant="body1">{label}</Typography>
      <TextInputContainer {...inputTypes}>
        {LeftIcon && (
          <LeftIcon
            width={24}
            height={24}
            color={
              hasError
                ? theme.colors.foreground.bodyLight
                : theme.colors.background.buttonPrimary
            }
          />
        )}
        <StyledTextInput
          onFocus={handleHasFocus}
          onBlur={handleOnBlur}
          returnKeyType="done"
          selectionColor={theme.colors.background.buttonPrimary}
          editable={isEditable}
          value={field.value}
          autoCapitalize="none"
          onChangeText={handleOnChange}
          placeholder={label}
          {...inputTypes}
          {...rest}
        />
      </TextInputContainer>
      {hasError && meta.error && (
        <ErrorContainer>
          <Typography variant="danger">{meta.error}</Typography>
        </ErrorContainer>
      )}
    </Container>
  );
};
