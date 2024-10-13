import React from 'react';
import { Box, Container, IconButton, Typography, styled } from '@mui/material'
import { SaveOutlined } from '@mui/icons-material';

const StyledHeader = styled(Box)(() => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',

}))

interface ITimeListPageLayoutProps {
    children: React.ReactNode;
    header: React.ReactNode;
    title: string;
    OnSave: () => void;
}

export default function TimeListPageLayout({ children, header, title, OnSave }: ITimeListPageLayoutProps) {

    return (
        <Container >
            <StyledHeader>
                <Typography>{title}</Typography>
                <IconButton onClick={OnSave}>
                    <SaveOutlined />
                </IconButton>
            </StyledHeader>
        </Container>
    )
}