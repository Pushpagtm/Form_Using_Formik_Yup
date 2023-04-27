import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useFormik } from 'formik';
import { signUpSchema } from '../schemas';
const initialValues={
  name:'',
  email: '',
  password:'',
  confirmPassword:'',
}
function SignUp(props) {
 const{values,errors,handleBlur,handleChange,handleSubmit,handleReset,touched}=useFormik({
    initialValues: initialValues,
    validationSchema:signUpSchema,
    onSubmit:(values)=>{
      console.log(values);
    }
  })
    return (
      <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label htmlFor='name'>Name</Form.Label>
        <Form.Control type="name" name='name' placeholder="Enter email" 
        value={values.name}
        onChange={handleChange}
        onBlur={handleBlur}
        />
        {errors.name && touched.name ?(<p>{errors.name}</p>):null}
        
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label htmlFor='email'>Email address</Form.Label>
        <Form.Control type="email" name='email' placeholder="Enter email" 
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
        />
       {errors.email && touched.email ?(<p>{errors.email}</p>):null}
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label htmlFor='password'>Password</Form.Label>
        <Form.Control type="password" name='password' placeholder="Password" 
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}
        />
         {errors.password && touched.password ?(<p>{errors.password}</p>):null}
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label htmlFor='confirmPassword' >Confirm Password</Form.Label>
        <Form.Control type="password" name='confirmPassword' placeholder="Enter email"
        value={values.confirmPassword}
        onChange={handleChange}
        onBlur={handleBlur}
        />
 {errors.confirmPassword && touched.confirmPassword?(<p>{errors.confirmPassword}</p>):null}
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    );
}

export default SignUp;