// export const API_URL = "http://localhost:3024";

export const API_URL = "https://api-uslugus.onrender.com";

export const directions = {
  from: "от",
  exactly: "",
  "up to": "до",
};

// Сервер CRM запущен.адресу http://localhost:3024
// Доступные методы:
// GET /api/category - получить список категорий
// GET /api/service - получить список услуг
// GET /api/service?{search=""} - поиск услуги по имени и описанию
// POST /api/service/signup - Зарегистрировать специалиста, в теле запроса нужно передать объект
// POST /api/service/signin - Псевдоавторизация, отправьте email и пароль
// GET /api/service/{id} - получить услуги по его ID
// PATCH /api/service/{id} - изменить услугу с ID, в теле запроса нужно передать объект
// DELETE /api/service/{id} - удалить услугу по ID
// POST /api/service/comment/{id} - добавить комментарий
