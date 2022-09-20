import { User } from "../models/User";

export async function createUser(body) {
  await new User(body).save();
  return true;
}
