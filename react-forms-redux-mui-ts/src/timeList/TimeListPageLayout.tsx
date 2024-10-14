import React from 'react';
import { Box, Container, IconButton, Paper, Typography, styled } from '@mui/material'
import { PlusOneOutlined, SaveOutlined } from '@mui/icons-material';

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
    onAdd: () => void;
}

export default function TimeListPageLayout({ children, header, title, OnSave, onAdd }: ITimeListPageLayoutProps) {

    return (
        <Container >
            <Paper sx={{ p: 4 }}>
                <StyledHeader>
                    <Typography variant='h6'>{title}</Typography>
                    <StyledHeader>
                        <IconButton onClick={onAdd}>
                            <PlusOneOutlined />
                        </IconButton>
                        <IconButton onClick={OnSave}>
                            <SaveOutlined />
                        </IconButton>
                    </StyledHeader>
                </StyledHeader>
                {children}
            </Paper>
        </Container>
    )
}