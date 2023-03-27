import { User } from "../entity/User";
import { hash, compare } from "bcrypt";
import { AppDataSource } from "../data-source";
import * as jwt from "jsonwebtoken";

export interface IBody {
  name: string;
  email: string;
  password: string;
}

export const login = async (body: IBody) => {
  const { email, password } = body;

  const _user = await AppDataSource.manager.find(User, {
    where: {
      email,
    },
  });

  if (_user.length === 1) {
    const [user] = _user;
    if (await compare(password, user.password)) {
      const token = jwt.sign({ id: user.id }, process.env.APP_SECRET, {
        expiresIn: "1d",
      });

      const data = {
        id: user.id,
        name: user.name,
        email: user.email,
        token,
      };

      return data;
    } else {
      return {
        status: 404,
        message: "User not found",
      };
    }
  } else {
    return {
      status: 404,
      message: "User not found",
    };
  }
};

export const saveUser = async (body: IBody) => {
  const { name, email, password } = body;

  const passwordHash = await hash(password, 8);

  const user = new User();

  user.name = name;
  user.email = email;
  user.password = passwordHash;

  await AppDataSource.manager.save(user);
  return user;
};

export const listUser = async () => {
  return AppDataSource.manager.find(User);
};
