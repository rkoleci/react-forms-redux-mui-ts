import React, { ChangeEventHandler } from 'react'
import { AppDispatch, AppState } from '../store';
import { UITimeListSelectors } from './timeListSelectors';
import { FormErrorsSelectors } from '../formErrors/formErrorsSelectors';
import { connect } from 'react-redux';
import { TextField } from '@mui/material';
import { upsertName } from './timeListSlices';

interface TimeListNameFieldOwnProps {
    id: string;
}

interface TimeListNameFieldProps {
    name: string,
    error: string,
}

interface TimeListNameCallbacks {
    onChange: (value: string) => void
}

const TimeListNameField = ({ name, error, onChange }: TimeListNameFieldProps & TimeListNameCallbacks) => {

    const onTextChange = (e: any) => {
        onChange(e.target.value)
    }

    return (
        <TextField
            value={name}
            FormHelperTextProps={{
                error: !!error,
            }}
            onChange={onTextChange}
        />
    )
}

const mapStateToProps = (state: AppState, { id }: TimeListNameFieldOwnProps): TimeListNameFieldProps => {
    const { name } = UITimeListSelectors.selectById(state, id)

    return {
        name,
        error: FormErrorsSelectors.selectInputError(state, `${id}.${name}`)
    }
}

const mapDispatchToProps = (dispatch: AppDispatch, {id}: TimeListNameFieldOwnProps) => {
    return {
        onChange: (value: string) => {
            dispatch(upsertName({value, id}))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(TimeListNameField)