import {
    SET_EXAM_QUESTION,


} from "./constant";
import UNIVERSAL from "../../config/config";
import { setLoader, unsetLoader } from "../../common/loader/action";

export function viewExamQuestion(quiz_id) {
    console.log("qqquuueeessstttiiiooonn", quiz_id)
    return (dispatch) => {
        dispatch(setLoader());
        return fetch(UNIVERSAL.BASEURL + "view_question_by_quiz_id", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                quiz_id: quiz_id,
            })

        })
            .then((response) => response.json())
            .then((responseJson) => {
                console.log("ccccccccccccccaaaaddddddddddddddddvvvv", responseJson)

                if (responseJson.status) {
                    dispatch({ type: SET_EXAM_QUESTION, payload: responseJson.result });

                    dispatch(unsetLoader());
                } else {
                    dispatch({ type: SET_EXAM_QUESTION, payload: [] })
                }
                dispatch(unsetLoader());
            })
            .catch((error) => {
                console.error(error);
            });
    };
}

// export function setExamQuestionByQuiz(payload) {
//     console.log("nngfhjk", payload)
//     return {
//         type: SET_EXAM_QUESTION,
//         payload: payload,
//     };
// }