


export namespace UITimeList {
    export interface TimeList {
        id: string;
        name: string;
        from: Date;
        to: Date; 
    }

}

export namespace UIFormErrors {
    export interface FormErrorState {
        errorMessages: string[],
        inputErrors: { [x: string]: string},
    }
}