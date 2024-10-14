import { createSelector } from "@reduxjs/toolkit";
import { UIFormErrors } from "../types";


export namespace FormErrorsSelectors {
    export const selectErrors = createSelector(
        [
          (state) => state.formErrors,
        ],
        (formErrors: UIFormErrors.FormErrorState) => {
          return formErrors.errorMessages;
        }
      );
  
      export const selectInputErrors = createSelector(
        [
          (state) => state.formErrors,
        ],
        (formErrors: UIFormErrors.FormErrorState) => {
          return formErrors.inputErrors;
        }
      );
  
      export const selectInputError = createSelector(
        [
          (state) => state.formErrors,
          (_, field: string) => field
        ],
        (formErrors: UIFormErrors.FormErrorState, field: string) => {
          return formErrors.inputErrors[field]
        }
      );

      export const isFormValid = createSelector(
        [
          (state) => state.formErrors,
        ],
        (formErrors: UIFormErrors.FormErrorState) => {
          return formErrors.errorMessages.length === 0 && Object.keys(formErrors.inputErrors)?.length === 0;
        }
      );
  
        export const selectIsErrorBoxVisible = createSelector(
          [
            (state) => state.formErrors,
          ],
          (formErrors: UIFormErrors.FormErrorState) => {
            return formErrors.errorMessages.length > 0;
          }
        );
  
}