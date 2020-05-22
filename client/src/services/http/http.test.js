import { request } from "./http";
import history from "../history";
import axios from "axios";

jest.mock("axios");

describe("HTTP error handler", () => {
  describe("axios calls and parameters", () => {
    it("should reflect request call in axios when request method is invoked", () => {
      axios.request.mockResolvedValue({ url: "/test.com" });
      request({ test: "test" });
      expect(axios.request).toHaveBeenCalledTimes(1);
    });

    it("should have baseUrl as default configuration the axios call", () => {
      axios.request.mockResolvedValue({ url: "/test.com" });
      request({});
      expect(axios.request).toHaveBeenCalledWith(
        expect.objectContaining({
          baseURL: expect.any(String),
        })
      );
    });
  });

  describe("response and error handling", () => {
    it("should extract data from axios response when the call is executed successfully", () => {
      const resp = { data: { message: "ok" } };
      axios.request.mockImplementation(() => Promise.resolve(resp));
      return request().then((resp) => {
        expect(resp).toEqual({ message: "ok" });
      });
    });

    it("should throw an exception with message if the request fails and at least has a request in the response", () => {
      const resp = { request: {} };
      axios.request.mockImplementation(() => Promise.reject(resp));
      return request().catch((error) => {
        expect(error).toHaveProperty(
          "message",
          "The request was made but no response was received"
        );
      });
    });

    it("should throw an exception with message if the request fails and does not have response neither request in the response", () => {
      axios.request.mockImplementation(() => Promise.reject({message: 'error', config: {}}));
      return request().catch((error) => {
        expect(error).toHaveProperty(
          "message",
          "Something happened in setting up the request that triggered an Error"
        );
      });
    });

    it("should throw the response data when the error code is 400 in order to let user what was the error", () => {
      const resp = {
        response: { status: 400, data: { field: "invalid" } },
      };
      axios.request.mockImplementation(() => Promise.reject(resp));
      return request().catch((data) => {
        expect(data).toEqual({ field: "invalid" });
      });
    });

    it("should throw error when the status code is 400 in order to let user what was the error", () => {
      const resp = { response: { status: 401, data: {} } };
      axios.request.mockImplementation(() => Promise.reject(resp));
      return expect(request()).rejects.toBeUndefined();
    });

    it("should throw a forbidden error message when the status code is 403", () => {
      const resp = { response: { status: 403, data: {} } };
      axios.request.mockImplementation(() => Promise.reject(resp));
      return request().catch((data) => {
        expect(data).toEqual({ error: "forbidden" });
      });
    });

    it("should call push function form history to redirect if status code is 404", () => {
      history.push = jest.fn();
      const resp = { response: { status: 404, data: {} } };
      axios.request.mockImplementation(() => Promise.reject(resp));
      return request().catch((data) => {
        expect(history.push).toHaveBeenCalled();
      });
    });

    it("should throw the response data when the status code is 500 in order to let user what was wrong in server", () => {
      const resp = {
        response: { status: 500, data: { error: "internal server error" } },
      };
      axios.request.mockImplementation(() => Promise.reject(resp));
      return request().catch((data) => {
        expect(data).toEqual({ error: "internal server error" });
      });
    });

    it("should throw the entirely response when the status code is different from evaluated", () => {
      const resp = {
        response: {
          status: 501,
          data: { error: "internal server error" },
          anotherField: "",
        },
      };
      axios.request.mockImplementation(() => Promise.reject(resp));
      return request().catch((data) => {
        expect(data).toEqual(resp.response);
      });
    });
  });
});
