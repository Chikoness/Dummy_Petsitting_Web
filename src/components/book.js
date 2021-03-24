import React from 'react'
import styled from 'styled-components'
import { Button } from './button'

const Book = () => {
    return (
        <BookingContainer>
            <BookingContent>
                <h1>Contact</h1>
                <p>Pick a date and book us now!</p>
                <form action="#">
                    <FormWrap>
                        <label htmlFor="name">
                            <input type="text" id="name" placeholder="Enter Name" />
                        </label>

                        <label htmlFor="email">
                            <input type="email" placeholder="Enter your email" id="email"/>
                        </label>
                        
                        <label htmlFor="datePick">
                            <input type="date" id="datePick" />
                        </label>

                        <Button as="button" primary="false" round="true" type="submit" css={`
                            height: 48px;
                            width: 350px;    
                            
                            @media screen and (max-width: 360px) {
                                width: 250px;
                            }
                            `}>Send</Button>
                    </FormWrap>
                </form>
            </BookingContent>
        </BookingContainer>
    )
}

export default Book

const BookingContainer = styled.div`
    background: linear-gradient(180deg, lightskyblue 5%, #fff 100%);
    height: 450px;
    width: 100%;
    padding: 5rem calc((100we - 1300px) / 2);
    display: flex;
    justify-content: center;
    align-items: center;
`;

const BookingContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
        text-align: center;
        margin-bottom: 1rem;
        font-size: clamp(1rem, 5vw, 3rem);
        padding: 0 1rem;
    }

    p {
        text-align: center;
        font-size: clamp(1rem, 2.5w, 1.5rem);
        padding: 0 1rem;
        margin-bottom: 2rem;
    }

    form {
        z-index: 10;
    }
`;

const FormWrap = styled.div`
    input {
        display: flex;
        flex-direction: column;
        padding: 1rem 1.5rem;
        outline: none;
        width: 350px;
        height: 48px;
        border-radius: 30px;
        border: none;
        margin-right: 0;
        margin-bottom: 1rem;
    }

    @media screen and (max-width: 768px) {
        input {
            width: 100%;
            margin-right: 0;
        }
    }
`;