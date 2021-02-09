const userReducer = (state, action) => {
  switch (action.type) {
    case "USER_LOADED":
      return action.payload;
    case "SET_TOKEN":
      return {
        ...state,
        token: action.payload,
      };
    case "LOGIN":
      return { ...state };
    case "CLEAR":
      return null;
    case "LOGOUT":
      return null;
    case "UPVOTE":
      if (state.upvoted_questions.includes(action.payload)) {
        return {
          ...state,
          upvoted_questions: state.upvoted_questions.filter(
            (questionId) => questionId !== action.payload
          ),
        };
      }
      return {
        ...state,
        downvoted_questions: state.downvoted_questions.filter(
          (questionId) => questionId !== action.payload
        ),
        upvoted_questions: [action.payload, ...state.upvoted_questions],
      };
    case "DOWNVOTE":
      if (state.downvoted_questions.includes(action.payload)) {
        return {
          ...state,
          downvoted_questions: state.downvoted_questions.filter(
            (questionId) => questionId !== action.payload
          ),
        };
      }
      return {
        ...state,
        upvoted_questions: state.upvoted_questions.filter(
          (questionId) => questionId !== action.payload
        ),
        downvoted_questions: [action.payload, ...state.downvoted_questions],
      };
    default:
      return state;
  }
};

export default userReducer;
