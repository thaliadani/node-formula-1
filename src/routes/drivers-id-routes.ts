import { FastifyInstance } from "fastify";
import { drivers } from "../repositories/drivers-repository";

export function registerDriversIdRoute(server: FastifyInstance) {
    server.get<{ Params: { id: string } }>(
        "/drivers/:id",
        async (request, response) => {
            const id = parseInt(request.params.id);
            const driver = drivers.find((d) => d.id === id);

            if (!driver) {
                response.type("application/json").code(404);
                return { message: "Driver Not Found" };
            } else {
                response.type("application/json").code(200);
                return { driver };
            }
        });
}