import React, { ReactElement } from 'react'
import {
  DeepMap,
  FieldError,
  FieldValues,
  Path,
  RegisterOptions,
  UseFormRegister,
} from 'react-hook-form'

const Input = <TFormValues extends Record<string, unknown>>({
  name,
  register,
  inputName,
  errors,
  rules,
  onlyNumbers,
  ...props
}: FormInputProps<TFormValues> & React.InputHTMLAttributes<HTMLInputElement>) => {
  const validateOnlyNumbers = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const key = event.key
    // Left / Right Arrow, Backspace, Delete keys
    if (
      key == 'ArrowRight' ||
      key == 'ArrowLeft' ||
      key == 'Enter' ||
      key == 'Backspace' ||
      key == 'Delete'
    ) {
      return
    }
    if (!/[0-9]/.test(event.key)) {
      event.preventDefault()
    }
  }

  return (
    <div>
      {name && (
        <label>
          {name} {props.required && <span>*</span>}
        </label>
      )}
      <div>
        <input
          {...(register && register(inputName, rules))}
          type='text'
          aria-label={inputName}
          autoComplete={props.autoComplete ?? 'off'}
          onKeyDown={onlyNumbers ? validateOnlyNumbers : undefined}
          {...props}></input>
      </div>
      <p className={`error ${errors && errors[inputName] && 'visible'}`}>
        {errors && errors[inputName]?.message}
      </p>
    </div>
  )
}

type FormInputProps<TFormValues extends FieldValues> = {
  inputName: Path<TFormValues>
  rules?: RegisterOptions
  register: UseFormRegister<TFormValues>
  errors?: Partial<DeepMap<TFormValues, FieldError>> | any
  className?: string
  inputClassName?: string
  onlyNumbers?: boolean
  name?: string
  autoComplete?: string
  disabled?: boolean
  icon?: ReactElement | null
}

export default Input
