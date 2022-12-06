import * as yup from 'yup'

export const roomValidationSchema = yup.object().shape({
    roomSize: yup
        .number()
        .required('Room size is required'),
    priceFloor: yup
        .number()
        .required('Price for flooring is required'),

    priceFloorInstall: yup
        .number()
        .required('price floor install required'),
})
