const supertest = require("supertest");
const app = require("../app");
const person = require("../person");

test("GET /", async () => {
    const res = await supertest(app).get("/");
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual(person)
}) 