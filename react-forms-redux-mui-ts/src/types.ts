


export namespace UITimeList {
    export interface TimeList {
        id: string;
        name: string;
        from: string;
        to: string; 
    }

}

export namespace UIFormErrors {
    export interface FormErrorState {
        errorMessages: string[],
        inputErrors: { [x: string]: string},
    }
}