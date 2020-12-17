import React from 'react'
import styled from 'styled-components'
import {Link} from 'gatsby'

const Footer = () => {
    return (
        <FooterContainer>
            <FooterDesc>
                <p>We will strive to give your pet the best petsitting experience!</p>
            </FooterDesc>

            <FooterWrap>
                <FooterColumn>
                    <FooterLinkItems>
                        <FooterLinkTitle>Contact us</FooterLinkTitle>
                        <FooterWord>
                            Address: <br />
                            Block A, Building B <br />
                            Road C, City D <br />
                            55555 State <br />
                            Country
                        </FooterWord>
                        <FooterWord>Phone: <br />(+01) 234 5678</FooterWord>
                        <FooterWord>Email: <br />hello@lovehappiness.com</FooterWord>
                    </FooterLinkItems>
                </FooterColumn>
                    <FooterLinkItems>
                        <FooterLinkTitle>Social Media</FooterLinkTitle>
                        <FooterLink to='/contact'>Facebook</FooterLink>
                        <FooterLink to='/contact'>Twitter</FooterLink>
                        <FooterLink to='/contact'>Instagram</FooterLink>
                    </FooterLinkItems>
            </FooterWrap>

        </FooterContainer>
    )
}

export default Footer

const FooterContainer = styled.div`
    padding: 5rem calc((100vw - 1300px) / 2);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #000;
    background: #FAFAFB;
`;

const FooterDesc = styled.div`
    font-weight: bolder;
    text-align: center;
    align-items: center;
    padding: 0 3rem;

    p {
        color: #F26A2E;
        font-size: 24px;
    }

    @media screen and (max-width: 400px) {
        padding: 1rem;

        p {
            font-size: 16px;
        }
    }
`;

const FooterWrap = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
`;

const FooterColumn = styled.div`
    display: grid;
    grid-template-columns: 1fr;

    @media screen and (max-width: 820px) {
        grid-template-columns: 1fr;
    }
`;

const FooterLinkItems = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 1rem 2rem;

    @media screen and (max-width: 400px) {
        padding: 1rem;
    }
`;

const FooterLinkTitle = styled.h2`
    font-size: 14px;
    margin-bottom: 16px;
`;

const FooterWord = styled.p`
    margin-bottom: 0.5rem;
    font-size: 14px;
    color: #3D3D4E;
`;

const FooterLink = styled(Link)`
    text-decoration: none;
    margin-bottom: 0.5rem;
    font-size: 14px;
    color: #3D3D4E;

    &:hover {
        color: #F26A2E;
        transition: 0.3s ease-out;
    }
`;