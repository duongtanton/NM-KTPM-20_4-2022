import HomeRouter from "./home/home.mjs";
import UserRouter from "./user/user.mjs";

export default function routes(app) {
  app.use("/", HomeRouter);
  app.use("/user", UserRouter);
}
