import styled from 'styled-components';
import { device, size } from '../../constants';

export const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    max-width: ${size.laptop};
    margin: 0 auto;
`;

export const StyledHeader = styled.h2`
    color: #3C948B;
    text-align: center;
`;

export const StyledContent = styled.div`
    display: block;
    font-size: 1rem;
    @media ${device.tablet} {
        font-size: 1.5rem;
        display: flex;
    }
`;

export const StyledCoverImageMedium = styled.img`
max-height: 350px;
display: block;
@media ${device.tablet} {
    display: none;
}`;

export const StyledCoverImageLarge = styled.img`
max-width: 350px;
display: none;
@media ${device.tablet} {
    display: block;
}`;