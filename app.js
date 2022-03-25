const express = require("express");
const app = express();
// const argon2 = require("argon2");
const cors = require("cors");
const { sequelize } = require("./models");
// const { Users } = require("./models");
const Router = require("./routes");
sequelize
  .sync({ force: false })
  .then(() => {
    console.log("연결됨");
  })
  .catch((err) => {
    console.log(err);
  });

app.use(express.json());
app.use(cors());

//익스프레스가 지원해주는 restAPI
app.use("/users", Router.UserRoute);
app.use("/users", Router.ListRoute);
app.use("/users", Router.UpdateRoute);
app.use("/users", Router.DeleteRoute);
app.use("/users", Router.LoginRoute);
app.use("/users", Router.OneRoute);
//app.listen으로 서버 실행이 가능해집니다.

app.listen(2000, () => {
  console.log("실행");
});
