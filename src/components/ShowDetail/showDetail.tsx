import React, { Fragment } from 'react';
import { StyledContainer, StyledHeader, StyledContent, StyledCoverImageMedium, StyledCoverImageLarge } from './showDetail.style';
import { IShowDetail } from './showDetail.interface';
import { Grid, Item } from '../Grid';

export const ShowDetail = ({ name, summary, medium, original }: IShowDetail) => (<Fragment>
    <StyledContainer>
        <StyledHeader>{name}</StyledHeader>
        <Grid numberOfColumns={2}>
            <Item>
                {/* 
                // @ts-ignore */}
                <StyledCoverImageMedium src={medium} />
                                {/* 
                // @ts-ignore */}
                <StyledCoverImageLarge src={original} />
            </Item>
            <Item>
                <StyledContent dangerouslySetInnerHTML={{ __html: summary }} />
            </Item>
        </Grid>
    </StyledContainer>
</Fragment>);
