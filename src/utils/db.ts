import * as level from "level";
import { LoginFormType, Photo, User } from "types/types";

export const db = new level.Level<string, User | Photo>("./db", {
  valueEncoding: "json",
});
db.put("muser1", { username: "muser1", password: "mpassword1", enabled: true });
db.put("muser2", { username: "muser2", password: "mpassword2", enabled: true });
db.put("muser3", {
  username: "muser3",
  password: "mpassword3",
  enabled: false,
});

export const authenticate: (data: LoginFormType) => Promise<User> = (
  data: LoginFormType
) => {
  return new Promise(async (resolve, reject) => {
    db.get(data.username, (error, user) => {
      user = user as User;
      if (error) {
        if (error.name === "NotFoundError") {
          console.log(`User "${user?.username}" not found.`);
        } else {
          reject({ msg: "Informations de connexion invalides" });
        }
      } else {
        if (user && user.password === data.password && user.enabled)
          resolve(user);
        else if (user && data.password === user.password && !user.enabled)
          reject({ msg: "Ce compte a été bloqué." });
        else reject({ msg: "Informations de connexion invalides" });
      }
    });
  });
};
