const CONSTANT = {
  SALT_ROUNDS: 10,
};
const LAYOUT = {
  ADIM: "admin",
  USERS: "users",
}
const MESSAGE = {
  WARNING: "warning",
  ERROR: "error",
  INFO: "info",
  SUCCESS: "success"
}
const ROLES = {
  AMDIN: "Admin",
  ENTERPRISE: "Enterprise",
  USER: "User",
  STAFF: "Staff",
}
const ROLES_ID = {
  AMDIN: 1,
  ENTERPRISE: 2,
  STAFF: 3,
  USER: 4,
}
const ROOM_STATUS = {
  NEW: "New",
  ACTIED: "ACTIVED",
  PAID: "PAID",
  CALCEL: "CALCEL",
}
module.exports = { ROOM_STATUS, CONSTANT, LAYOUT, MESSAGE, ROLES, ROLES_ID };
