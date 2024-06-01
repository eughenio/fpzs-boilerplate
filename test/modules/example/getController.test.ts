import { FastifyReply, FastifyRequest } from "fastify";
import { getController } from "../../../src/modules/example/example.contoller";
import * as service from "../../../src/modules/example/example.service";

describe("getController", () => {
  let request: FastifyRequest;
  let reply: FastifyReply;

  beforeEach(() => {
    request = {} as FastifyRequest;
    reply = {
      status: jest.fn().mockReturnThis(),
      send: jest.fn(),
    } as unknown as FastifyReply;
  });

  it("Deve retornar 200 com a Mensagem correta", () => {
    const mockData = "OK";
    jest.spyOn(service, "getControllerData").mockReturnValue(mockData);

    getController(request, reply);

    expect(reply.status).toHaveBeenCalledWith(200);
    expect(reply.send).toHaveBeenCalledWith({ message: mockData });
  });
});
