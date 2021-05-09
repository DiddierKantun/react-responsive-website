import React from 'react'
import logo from '../../images/logo512.png'
import { 
    Container, 
    Form, 
    FormButton, 
    FormContent, 
    FormH1, 
    FormInput, 
    FormLabel, 
    FormWrap, 
    Icon, 
    Text,
    Logo
} from './SigninElements'

const SignIn = () => {
    return (
        <>
        <Container>
            <FormWrap>
                <Icon to="/">Website</Icon>
                <FormContent>
                    <Form action="#">
                        <Logo src={logo} />
                        <FormH1>Sign in to your account</FormH1>
                        <FormLabel htmlFor='for'>Email</FormLabel>
                        <FormInput type='email' required />
                        <FormLabel htmlFor='for'>Pasword</FormLabel>
                        <FormInput type='password' required />
                        <FormButton type='submit'>Sign In</FormButton>
                        <Text>Forgot password?</Text>
                    </Form>
                </FormContent>
            </FormWrap>
        </Container> 
        </>
    )
}

export default SignIn
