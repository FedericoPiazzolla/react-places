import React from 'react';
import Input from '../../shared/components/FormElements/Input';

import './style/NewPlace.css'

function NewPlace() {
  return (
    <form action="" className='place-form'>
      <Input element='input' type='text' label='Title'/>
    </form>
  )
}

export default NewPlace