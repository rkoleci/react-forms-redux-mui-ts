import React, { useMemo } from "react";
import { AppState } from "../store";
import { connect } from "react-redux";
import { Box, Typography } from "@mui/material";
import { FormErrorsSelectors } from "./formErrorsSelectors";
import { translate } from "./translator";

interface GenericErrorsBannerProps {
    errors: string[]
}

function GenericErrorsBanner({ errors }: GenericErrorsBannerProps) {


    return (
        <Box>
            {errors.map((error, index) => (
                <Box>
                    <Typography key={error}>{`${index +1 }. ${translate(error)}`}</Typography>
                </Box>
            ))}
        </Box>
    )
}

const mapStateToProps = (state: AppState): GenericErrorsBannerProps => {

    return {
        errors: FormErrorsSelectors.selectErrors(state)
    }
}

export default connect(mapStateToProps, null)(GenericErrorsBanner)