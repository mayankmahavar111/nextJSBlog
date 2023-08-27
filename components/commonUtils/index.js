import { interviewTopicListRoute } from "../api/helper";

export const findNavigationObject = (url) => {
  let correctUrl = null;

  correctUrl = interviewTopicListRoute.filter((item) => item.key === url);
  if (correctUrl.length > 0) return correctUrl[0];

  return correctUrl;
};
