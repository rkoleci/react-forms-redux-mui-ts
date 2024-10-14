import React from "react";
import { AppDispatch, AppState } from "../store";
import { UITimeListSelectors } from "./timeListSelectors";
import { FormErrorsSelectors } from "../formErrors/formErrorsSelectors";
import { connect } from "react-redux";
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import moment, { Moment } from "moment";
import { upsertFromPeriod, upsertToPeriod } from "./timeListSlices";
import { FormControl, FormHelperText } from "@mui/material";


interface PeriodFieldProps {
    value: string;
    error: string;
    onChange: (value: Moment | null) => void;
}

const PeriodField = ({ value, error, onChange }: PeriodFieldProps) => {

    return (
        <FormControl error={!!error} fullWidth>
        <LocalizationProvider dateAdapter={AdapterMoment}>
            <DateTimePicker
                label="Select Date & Time"
                value={moment(value)}
                onChange={onChange}
            />
        </LocalizationProvider>
        {error && <FormHelperText>{error}</FormHelperText>}
    </FormControl>
    )
}

interface ToFieldOwnProps {
    id: string,
}

interface ToFieldProps {
    value: string;
    error: string;
    onChange: (value: Moment | null) => void;
}

const ToField = ({ value, error, onChange }: ToFieldProps) => {

    return (
        <PeriodField value={value} error={error} onChange={onChange} />
    )
}

const mapStateToProps = (state: AppState, { id }: ToFieldOwnProps) => {
    const { to } = UITimeListSelectors.selectById(state, id)

    return {
        value: to,
        error: FormErrorsSelectors.selectInputError(state, `${id}.to`)
    }
}

const mapDispatchToProps = (dispatch: AppDispatch, ownProps: FromFieldOwnProps) => {
    return {
        onChange: (value: Moment | null) => {
            dispatch(upsertToPeriod({ value: value?.format('DD/MM/YYYY'), id: ownProps.id }))
        }
    }
}

export const ToPeriodField = connect(mapStateToProps, mapDispatchToProps)(ToField)


interface FromFieldOwnProps {
    id: string
}

interface FromFieldProps {
    value: string;
    error: string;
    onChange: (value: Moment | null) => void;
}


const FromField = ({ value, error, onChange }: FromFieldProps) => {

    return (
        <PeriodField value={value} error={error} onChange={onChange} />
    )
}

const mapStateToPropsFrom = (state: AppState, { id }: FromFieldOwnProps) => {
    const { to } = UITimeListSelectors.selectById(state, id)

    return {
        value: to,
        error: FormErrorsSelectors.selectInputError(state, `${id}.from`)
    }
}

const mapDispatchToPropsTo = (dispatch: AppDispatch, ownProps: FromFieldOwnProps) => {
    return {
        onChange: (value: Moment | null) => {
            dispatch(upsertFromPeriod({ value: value?.format('DD/MM/YYYY'), id: ownProps.id }))
        }
    }
}

export const FromPeriodField = connect(mapStateToPropsFrom, mapDispatchToPropsTo)(FromField)
