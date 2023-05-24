import React from 'react'
import { DeepMap, FieldError, FieldValues, Path, UseFormRegister } from 'react-hook-form'

const Input = <TFormValues extends Record<string, unknown>>({
  name,
  register,
  inputName,
  errors,
  ...props
}: FormInputProps<TFormValues> & React.InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <div>
      {name && (
        <label>
          {name} {props.required && <span>*</span>}
        </label>
      )}
      <div>
        <input
          {...(register && register(inputName))}
          type='text'
          aria-label={inputName}
          {...props}></input>
      </div>
      <p>{errors && errors[inputName]?.message}</p>
    </div>
  )
}

type FormInputProps<TFormValues extends FieldValues> = {
  inputName: Path<TFormValues>
  register: UseFormRegister<TFormValues>
  errors?: Partial<DeepMap<TFormValues, FieldError>> | any
  name?: string
}

export default Input
