import expressLoader from './express.js';
import mongooseLoader from './mongoose.js';

export const init = async (app) => {
  await mongooseLoader();
  expressLoader(app);
};
