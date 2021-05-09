import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
    min-height: 692px;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    z-index: 0;
    overflow: hidden;
    background-image: linear-gradient(to right bottom, #01bf71, #2bca79, #41d581, #53e089, #64eb91, #64eb91, #64eb91, #64eb91, #53e089, #41d581, #2bca79, #01bf71);

    //background-image: linear-gradient(to right top, #fa79f9, #e662f8, #ce4bf8, #b234f9, #901dfb, #901dfb, #901dfb, #901dfb, #b234f9, #ce4bf8, #e662f8, #fa79f9);
`;

export const FormWrap = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media screen and (max-width:400px){
        height: 80%;
    }
`;

export const Icon = styled(Link)`
    margin-left: 32px;
    margin-top: 32px;
    text-decoration: none;
    color: #fff;
    font-weight: 700;
    font-size: 32px;

    @media screen and (max-width:480px){
        margin-left: 16px;
        margin-top: 8px;
    }
`;

export const Logo = styled.img`
    width: 20%;
    display:block;
    margin:auto;
    margin-top: -46px;
    margin-bottom: 32px;

    @media screen and (max-width:400px){
        margin-top: -10px;
        margin-bottom: 10px;
    }
`;

export const FormContent = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media screen and (max-width:480px){
        padding: 10px;
    }
`;

export const Form = styled.form`
    background: #302D30;
    max-width:400px;
    height: auto;
    width: 100%;
    z-index: 1;
    display: grid;
    margin: 0 auto;
    padding: 80px 32px;
    border-radius: 4px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);

    @media screen and (max-width:400px){
        padding: 32px 32px;
    }
`;

export const FormH1 = styled.h1`
    margin-bottom: 40px;
    color: #fff;
    font-size: 20px;
    font-weight: 400;
    text-align: center;
`;

export const FormLabel = styled.label`
    margin-bottom: 8px;
    font-size: 14px;
    color: #fff;
`;

export const FormInput = styled.input`
    padding: 16px 16px;
    margin-bottom: 32px;
    border: none;
    border-radius: 4px;
`;

export const FormButton = styled.button`
    background: #01bf71;
    padding: 16px 0;
    border: none;
    border-radius: 4px;
    color: #fff;
    font-size: 20px;
    cursor: pointer;

    &:hover {
        background: #01bf80;      
    }
`;

export const Text = styled.span`
    text-align: center;
    margin-top: 24px;
    color: #fff;
    font-size: 14px;
`;