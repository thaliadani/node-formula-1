import { FastifyInstance } from "fastify";
import { teams } from "../repositories/teams-repository";


export function registerTeamsRoute(server: FastifyInstance) {
    server.get("/teams", async (request, response) => {
    response.type("application/json").code(200);
    return { teams };
    });
};