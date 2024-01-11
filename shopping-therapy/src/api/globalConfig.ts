// URLS
export const baseUrl = "https://localhost:7049/api/";

export const REGISTER_URL = "/Auth/register";
export const LOGIN_URL = "/Auth/login";
export const ME_URL = "/Auth/me";
export const USERS_LIST_URL = "/Auth/users";
export const UPDATE_ROLE_URL = "/Auth/update-role";
export const USERNAMES_LIST_URL = "/Auth/usernames";
export const ALL_MESSAGES_URL = "/Message";
export const CREATE_MESSAGE_URL = "/Message/create";
export const MY_SENDBOX_MESSAGE_URL = "/Message/sendbox";
export const MY_INBOX_MESSAGE_URL = "/Message/inbox";
export const MY_ORDERS = "/Cart/getbyuser";

export const LOGS_URL = "/Logs";
export const MY_LOGS_URL = "/Logs/mine";

const PATH_PUBLIC = { login: "/login", home: "/" };
export const PATH_DASHBOARD = { dashboard: "/dashboard" };

// Auth Routes
export const PATH_AFTER_REGISTER = PATH_PUBLIC.login;
// export const PATH_AFTER_LOGIN = PATH_DASHBOARD.dashboard;
export const PATH_AFTER_LOGOUT = PATH_PUBLIC.home;
