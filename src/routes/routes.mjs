import HomeRouter from "./home/home.mjs";
import UserRouter from "./users/users.mjs";

export default function routes(app) {
  app.use("/", HomeRouter);
  app.use("/users", UserRouter);
}
