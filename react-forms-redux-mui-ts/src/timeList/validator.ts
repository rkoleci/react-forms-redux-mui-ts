import moment from "moment";
import { UITimeList } from "../types";

export const validateTimeList = (timeList: UITimeList.TimeList[]) => {
    const errorMessages:  string[] = []
    const inputErrors: { [x: string]: string } = {}
    
    timeList.forEach((item: UITimeList.TimeList) => {

        const momentFrom = moment(item.from, 'DD/MM/YYYY')
        const momentTo = moment(item.to, 'DD/MM/YYYY')

        if (!item.name || item.name == '') {
            inputErrors[`${item.id}.name`] = 'invalidValue'
            errorMessages.push('missingFields')
        }
        if (!item.from || !momentFrom.isValid()) {
            inputErrors[`${item.id}.from`] = 'invalidValue'
            errorMessages.push('missingFields')
        }
        if (!item.to || !momentTo.isValid()) {
            inputErrors[`${item.id}.to`] = 'invalidValue'
            errorMessages.push('missingFields')
        }

        if (!momentTo.isAfter(momentFrom)) {
            inputErrors[`${item.id}.to`] = 'notAfterFrom'
            errorMessages.push('invalidBannerError')
        }

    })


    const uniqueBannerErrors = Array.from(new Set(errorMessages))

    return {
        errorMessages: uniqueBannerErrors,
        inputErrors
    }
}