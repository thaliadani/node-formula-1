import fastify from "fastify";
import cors from "@fastify/cors";
import {registerDriversIdRoute } from "./routes/drivers-id-routes";  
import { registerDriversRoute } from "./routes/drivers-route";
import { registerTeamsRoute } from "./routes/teams-route";

const server = fastify({ logger: true });

const port = process.env.PORT;

server.register(cors, {
  origin: "*",
});

registerDriversIdRoute(server);
registerDriversRoute(server);
registerTeamsRoute(server);

server.listen({ port: Number(port)}, (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening on ${port}`);
});
