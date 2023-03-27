import { RouteGenericInterface } from "fastify";
import * as jwt from "jsonwebtoken";

export const auth = async (
  request: RouteGenericInterface,
  reply: RouteGenericInterface,
  next
) => {
  if (!request.Headers.authorization) {
    return reply.send();
  }
};
