import React from 'react'
import styled from 'styled-components'
import PetsIcon from '@material-ui/icons/Pets';
import Dogsit from '../assets/images/sitting-dog.jpg';
import Catsit from '../assets/images/sitting-cat.jpg';
import Rabbitsit from '../assets/images/sitting-rabbit.jpg';
import Reptilesit from '../assets/images/sitting-reptile.jpg';

const Sitting = () => {
        return (
        <SittingContainer>
            <Description>
                Who We Sit
            </Description>
            <ContentWrapper>
                <Column>
                    <ColumnInfo>                        
                        <TextHolder>                            
                            <h3><PetsIcon /> Dogsitting</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur dipiscin elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Molestie a iaculis at erat. Quis lectus nulla at volutpat. Ultrices gravida dictum fusce ut placerat orci nulla pellentesque. Viverra adipiscing at in tellus integer feugiat scelerisque varius morbi.</p>
                            <TextList>
                                <ul>
                                    Lorem ipsum dolor sit amet:
                                    <li>Molestie a iaculis at erat</li>
                                    <li>Quis lectus nulla at volutpat</li>
                                    <li>Ultrices gravida dictum fusce ut placerat orci nulla pellentesque</li>
                                </ul>
                            </TextList>
                        </TextHolder>
                        <ImageHolder>
                            <Images src={Dogsit} />
                        </ImageHolder>
                    </ColumnInfo>

                    <ColumnInfo>
                        <TextHolder>                            
                            <h3><PetsIcon /> Catsitting</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur dipiscin elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Molestie a iaculis at erat. Quis lectus nulla at volutpat. Ultrices gravida dictum fusce ut placerat orci nulla pellentesque. Viverra adipiscing at in tellus integer feugiat scelerisque varius morbi.</p>
                            <TextList>
                                    <ul>
                                        Lorem ipsum dolor sit amet:
                                        <li>Molestie a iaculis at erat</li>
                                        <li>Quis lectus nulla at volutpat</li>
                                        <li>Ultrices gravida dictum fusce ut placerat orci nulla pellentesque</li>
                                    </ul>
                                </TextList>
                        </TextHolder>
                        <ImageHolder>
                            <Images src={Catsit} />
                        </ImageHolder>
                    </ColumnInfo>

                    <ColumnInfo>
                        <TextHolder>                            
                            <h3><PetsIcon /> Small animals sitting</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur dipiscin elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Molestie a iaculis at erat. Quis lectus nulla at volutpat. Ultrices gravida dictum fusce ut placerat orci nulla pellentesque. Viverra adipiscing at in tellus integer feugiat scelerisque varius morbi.</p>
                            <TextList>
                                <ul>
                                    Lorem ipsum dolor sit amet:
                                    <li>Molestie a iaculis at erat</li>
                                    <li>Quis lectus nulla at volutpat</li>
                                    <li>Ultrices gravida dictum fusce ut placerat orci nulla pellentesque</li>
                                </ul>
                            </TextList>
                        </TextHolder>
                        <ImageHolder>
                            <Images src={Rabbitsit} />
                        </ImageHolder>
                    </ColumnInfo>

                    <ColumnInfo>
                        <TextHolder>                            
                            <h3><PetsIcon /> Reptilesitting</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur dipiscin elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Molestie a iaculis at erat. Quis lectus nulla at volutpat. Ultrices gravida dictum fusce ut placerat orci nulla pellentesque. Viverra adipiscing at in tellus integer feugiat scelerisque varius morbi.</p>
                            <TextList>
                                <ul>
                                    Lorem ipsum dolor sit amet:
                                    <li>Molestie a iaculis at erat</li>
                                    <li>Quis lectus nulla at volutpat</li>
                                    <li>Ultrices gravida dictum fusce ut placerat orci nulla pellentesque</li>
                                </ul>
                            </TextList>
                        </TextHolder>
                        <ImageHolder>
                            <Images src={Reptilesit} />
                        </ImageHolder>                 
                    </ColumnInfo>
                </Column>
            </ContentWrapper>
        </SittingContainer>
    )
}

export default Sitting

const SittingContainer = styled.div`
    height: 100%;
    width: 100%;
    padding: 5rem calc((100vw - 1300px) / 2);
    background: #fcfcfc;
    align-items: center;
`;

const Description = styled.div`
    font-size: clamp(1.2rem, 5vw, 3rem);
    text-align: center;
    margin-bottom: 3rem;
    color: #000;
`;

const ContentWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 2rem;
`;

const Column = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 10px;
    padding: 0 2rem;
`;

const ColumnInfo = styled.div`
    display: flex;
    flex-direction: space-between;
    border-radius: 10px;
    padding: 15px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);

    @media screen and (max-width: 768px) {
        flex-direction: column;
        padding: 5px;
    }
`;

const TextHolder = styled.div`
    padding: 5px;
    margin-top: 20px;
    font-size: 0.5rem;
    color: #3b3b3b;

    h3 {
        margin-bottom: 1rem;
        font-size: 1rem;
        font-style: italic;
    }

    @media screen and (max-width: 768px) {
        padding: 0;
    }

`

const TextList = styled.div`
    padding: 30px 10px;
    
    li {
        padding-left: 10px;
    }
`;

const ImageHolder = styled.div`
    padding: 30px;
`;

const Images = styled.img`
    height: 350px;
    border-radius: 10px;

    @media screen and (max-width: 1200px) {
        height: 450px;
    }

    @media screen and (max-width: 768px) {
        padding: 20px;
        height: 550px;
    }

    @media screen and (max-width: 500px) {
        padding: 30px;
        height: 350px;
    }
`