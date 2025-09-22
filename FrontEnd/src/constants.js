const HEROKU_APP_URL = '';

export const BASE_URL = process.env.NODE_ENV === 'production'
    ? HEROKU_APP_URL
    : 'http://localhost:3000';