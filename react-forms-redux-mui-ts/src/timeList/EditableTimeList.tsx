import React from "react";
import { AppState } from "../store";
import { UITimeListSelectors } from "./timeListSelectors";
import { connect } from "react-redux";
import { UITimeList } from "../types";
import { Box, Typography } from "@mui/material";
import TimeListNameField from "./TimeListNamField";
import styled from "@emotion/styled";
import { FromPeriodField, ToPeriodField } from "./PeriodField";

const StyledRow = styled(Box)(() => ({
    display: 'flex',
    justifyContent: 'flex-star',
    alignItems: 'center',
    gap: '32px'
}))

interface EditableTimeListProps {
    timeList: UITimeList.TimeList[]
}

const EditableTimeList = ({ timeList }: EditableTimeListProps) => {


    const children: React.ReactNode[] = []
    timeList.forEach((item) => {
        children.push(
            <StyledRow key={item.id}>
                <StyledRow sx={{ width: '30%' }}>
                    <TimeListNameField id={item.id} />
                </StyledRow>
                <StyledRow sx={{ width: '35%' }}>
                    <FromPeriodField id={item.id} />
                </StyledRow>
                <StyledRow sx={{ width: '35%' }}>
                    <ToPeriodField id={item.id} />
                </StyledRow>
            </StyledRow>
        )
    })

    return (
        <Box sx={{display: 'flex', flexDirection: 'column', gap: '16px'}}>
            <Box sx={{ display: 'flex' }}>
                <StyledRow sx={{ width: '30%' }}>
                    <Typography>Name</Typography>
                </StyledRow>
                <StyledRow sx={{ width: '35%' }}>
                    <Typography>Start</Typography>
                </StyledRow>
                <StyledRow sx={{ width: '35%' }}>
                    <Typography>To</Typography>
                </StyledRow>
            </Box>

            {children}
        </Box>
    )
}

const mapStateToProps = (state: AppState): EditableTimeListProps => {
    console.log(111, 'timelist', UITimeListSelectors.selectAll(state))
    return {
        timeList: UITimeListSelectors.selectAll(state)
    }
}

export default connect(mapStateToProps)(EditableTimeList)