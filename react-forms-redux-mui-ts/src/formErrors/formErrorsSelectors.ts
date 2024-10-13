import { createSelector } from "@reduxjs/toolkit";
import { UIFormErrors } from "../types";


export namespace FormErrorsSelectors {
    export const selectErrors = createSelector(
        [
          (state) => state.ui.formErrors,
        ],
        (formErrors: UIFormErrors.FormErrorState) => {
          return formErrors.errorMessages;
        }
      );
  
      export const selectInputErrors = createSelector(
        [
          (state) => state.ui.formErrors,
        ],
        (formErrors: UIFormErrors.FormErrorState) => {
          return formErrors.inputErrors;
        }
      );
  
      export const selectInputError = createSelector(
        [
          (state) => state.ui.formErrors,
          (_, field: string) => field
        ],
        (formErrors: UIFormErrors.FormErrorState, field: string) => {
          return formErrors.inputErrors[field]
        }
      );
  
}