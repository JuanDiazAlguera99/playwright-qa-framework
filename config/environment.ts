import 'dotenv/config';

export const environments = {
  qa: {
    orangeHrmUrl:
      process.env.ORANGEHRM_URL ||
      'https://opensource-demo.orangehrmlive.com',

    username:
      process.env.ORANGEHRM_USERNAME ||
      'Admin',

    password:
      process.env.ORANGEHRM_PASSWORD ||
      'admin123',
  },
};