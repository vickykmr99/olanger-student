import {
    STUDENT_SPECIAL,
    SET_PACKAGE_DETAILS,
    SET_PACKAGE_NAME,
    SET_PACKAGE_CATEGORY_NAME,
    SET_PACKAGE_VALIDITY,
    SET_PACKAGE_PRICE,
    SET_PACKAGE_DISCOUNT_PRICE

} from "./Constant";

const initial_state = {

    package_category: [],
    student_special: [],
    package_details: [],
    package_name: "",
    packagecategory_name:"",
    package_duration:"",
    package_price:"",
    discounted_price:""
};

export default function reducer(state = initial_state, action) {
    switch (action.type) {
        case STUDENT_SPECIAL:
            return state = { ...state, student_special: action.payload };
        case SET_PACKAGE_DETAILS:
            return state = { ...state, package_details: action.payload };

        case SET_PACKAGE_NAME:
            return {
                ...state,
                package_name: action.payload
            };

        case SET_PACKAGE_CATEGORY_NAME:
            return {
                ...state,
                packagecategory_name: action.payload
            };

            case SET_PACKAGE_VALIDITY:
                return {
                    ...state,
                    package_duration: action.payload
                };

                case SET_PACKAGE_PRICE:
                    return {
                        ...state,
                        package_price: action.payload
                    };

                    case SET_PACKAGE_DISCOUNT_PRICE:
                        return {
                            ...state,
                            discounted_price: action.payload
                        };

        default:
            return state;
    }
}