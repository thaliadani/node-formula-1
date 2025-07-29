import{ FastifyInstance } from "fastify";
import { drivers } from "../repositories/drivers-repository";

export function registerDriversRoute(server: FastifyInstance) {
    server.get(
        "/drivers",
        async (request, response) => {
            response.type("application/json").code(200);
            return { drivers };
    });
};