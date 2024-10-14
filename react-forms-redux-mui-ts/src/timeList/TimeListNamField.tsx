import React, { ChangeEventHandler } from 'react'
import { AppDispatch, AppState } from '../store';
import { UITimeListSelectors } from './timeListSelectors';
import { FormErrorsSelectors } from '../formErrors/formErrorsSelectors';
import { connect } from 'react-redux';
import { TextField } from '@mui/material';
import { upsertName } from './timeListSlices';
import { translate } from '../formErrors/translator';
import styled from '@emotion/styled';

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
            onChange={onTextChange}
            error={!!error}
            helperText={translate(error) || ''}
            FormHelperTextProps={{
                sx: {
                    position: 'absolute', bottom: '-20px'
                }
            }}
           
        />
    )
}

const mapStateToProps = (state: AppState, { id }: TimeListNameFieldOwnProps): TimeListNameFieldProps => {
    const { name } = UITimeListSelectors.selectById(state, id)

    return {
        name,
        error: FormErrorsSelectors.selectInputError(state, `${id}.name`)
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