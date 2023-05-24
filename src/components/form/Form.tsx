import React from 'react'
import Input from '../input/Input'
import { useForm } from 'react-hook-form'
import { Usuario } from '../../models'
import Button from '../button/Button'

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
        <Input name='id' inputName='id' register={register}></Input>
        <Input name='edad' inputName='edad' register={register}></Input>
        <Input name='email' inputName='email' register={register}></Input>
        <Input name='esAdmin' inputName='esAdmin' register={register}></Input>
        <Input name='fechaCreacion' inputName='fechaCreacion' register={register}></Input>
        <Button label='submit' type='submit'></Button>
      </form>
    </div>
  )
}

export default Form
