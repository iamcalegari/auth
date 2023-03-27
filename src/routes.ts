import fastify, { FastifyInstance } from "fastify";
import { IBody, saveUser, listUser, login } from "./controller/UserController";
import * as fastifyPlugin from "fastify-plugin";

export default fastifyPlugin(async (fastify, options, callback) => {
  fastify.get("/", options, (_, rpl) => {
    rpl.code(200).send("all ok here");
  });

  callback();
});
// const server: FastifyInstance = fastify({ logger: true });

// server.get("/", async (request, reply) => {
//   const users = await listUser();
//   reply.send({
//     body: users,
//   });
// });

// server.post<{
//   Body: IBody;
// }>("/", async (request, reply) => {
//   const body = request.body;
//   const user = await saveUser(body);

//   return reply.send({
//     code: 200,
//     message: "sucess",
//     body: user,
//   });
// });

// server.post<{
//   Body: IBody;
// }>("/login", async (request, reply) => {
//   const body = request.body;
//   const data = await login(body);

//   return reply.send(data);
// });

// export default server;
