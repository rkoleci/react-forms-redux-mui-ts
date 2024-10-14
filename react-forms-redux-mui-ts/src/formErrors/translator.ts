export const translate = (key: string) => {
    if (key == 'invalidValue') {
        return 'Invalid value'
    }
    if (key == 'missingFields') {
        return 'This field is mandatory'
    }
    if (key == 'notAfterFrom') {
        return 'Must be after from'
    }
    if (key == 'invalidBannerError') {
        return 'One or more invalid fields!'
    }

    return key
}