import React from 'react'
import Input from '../input/Input'
import { useForm } from 'react-hook-form'
import { Usuario } from '../../models'

type TFormInputs = {
  id: number
  edad: number
  email: string
  esAdmin: boolean
  fechaCreacion: string
  name: string
}

const Form = () => {
  const { register, handleSubmit } = useForm<TFormInputs>({
    mode: 'all',
    defaultValues: {},
  })

  const onSubmit = (data: TFormInputs) => {
    alert(JSON.stringify(data))
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input inputName='id' register={register}></Input>
        <Input inputName='edad' register={register}></Input>
        <Input inputName='email' register={register}></Input>
        <Input inputName='esAdmin' register={register}></Input>
        <Input inputName='fechaCreacion' register={register}></Input>
      </form>
    </div>
  )
}

export default Form
