import {

  SET_BANNER,
  SET_CATEGORY,
  SET_PACKAGE_BY_CATEGORY,
  SET_CATEGORY_ID,
  SET_PACKAGE_ID,
  SET_PACKAGE_BY_PACKAGEID,
  SET_CATEGORY_BY_PACKAGEID,
  SET_EXAM_BY_PACKAGEID,
  SET_STAGE_BY_PACKAGEID,
  SET_SUBJECT_BY_PACKAGEID,
  SET_MINIPACKAGE_BY_PACKAGEID,
  SET_CHAPTER_BY_PACKAGEID,
  SET_LESSON_BY_PACKAGEID,
  SET_VIDEO_BY_PACKAGEID,
  SET_PDF_BY_PACKAGEID,
  SET_QUIZ_BY_PACKAGEID,
  SET_TESTSERIES_BY_CATEGORY

} from "./constant";
const initial_state = {

  all_banner: [],
  all_category: [],
  all_package_by_category: [],
  all_package_by_packageid: {},
  package_id: "",
  category_by_package_id: [],
  exam_by_package_id: [],
  stage_by_package_id: [],
  subject_by_package_id: [],
  minipackage_by_package_id: [],
  chapter_by_package_id: [],
  lesson_by_package_id: [],
  video_by_package_id: [],
  pdf_by_package_id: [],
  quiz_by_package_id: [],
  all_test_series_by_category:[],



};
export default function reducer(state = initial_state, action) {
  switch (action.type) {

    case SET_BANNER:
      return state = { ...state, all_banner: action.payload };
    case SET_CATEGORY:
      return state = { ...state, all_category: action.payload};
    case SET_PACKAGE_BY_CATEGORY:
      return state = { ...state, all_package_by_category: action.payload };
    case SET_CATEGORY_ID:
      return state = { ...state, category_id: action.payload };
    case SET_PACKAGE_ID:
      return state = { ...state, package_id: action.payload };
    case SET_PACKAGE_BY_PACKAGEID:
      return state = { ...state, all_package_by_packageid: action.payload };
    case SET_CATEGORY_BY_PACKAGEID:
      return state = { ...state, category_by_package_id: action.payload };
    case SET_EXAM_BY_PACKAGEID:
      return state = { ...state, exam_by_package_id: action.payload };
    case SET_STAGE_BY_PACKAGEID:
      return state = { ...state, stage_by_package_id: action.payload };
    case SET_SUBJECT_BY_PACKAGEID:
      return state = { ...state, subject_by_package_id: action.payload };
    case SET_MINIPACKAGE_BY_PACKAGEID:
      return state = { ...state, minipackage_by_package_id: action.payload };
    case SET_CHAPTER_BY_PACKAGEID:
      return state = { ...state, chapter_by_package_id: action.payload };
    case SET_LESSON_BY_PACKAGEID:
      return state = { ...state, lesson_by_package_id: action.payload };
    case SET_VIDEO_BY_PACKAGEID:
      return state = { ...state, video_by_package_id: action.payload };
    case SET_PDF_BY_PACKAGEID:
      return state = { ...state, pdf_by_package_id: action.payload };
    case SET_QUIZ_BY_PACKAGEID:
      return state = { ...state, quiz_by_package_id: action.payload };
      case SET_TESTSERIES_BY_CATEGORY:
      return state = { ...state, all_test_series_by_category: action.payload };


    default:
      return state;
  }
}