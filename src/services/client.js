import { config } from "../constants/config";
import axios from 'axios';
/**
 * Create a quiz with options selected by the user
 *
 * @param quizOptions
 * @returns {Promise<*>}
 */
export const createQuiz = async (quizOptions) => {
  try {
    const port = config.port === 0? 80 : config.port;
    const url = `${config.host}:${port}`;
    const rs = axios.post(
      url,
      quizOptions,
      {  'Content-Type': 'application/json' }
    );

    const obj = JSON.parse(rs);
    if (!obj['quiz-id']) {
      console.log('QUIZ ID NOT FOUND!!!', obj);
    }

    return obj['quiz-id'];
  } catch (e) {
    console.log(e);
  }

};

