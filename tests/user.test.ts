import { Repository } from "typeorm";
import {describe, it, expect, beforeEach} from "vitest"
import { myDataSource } from "../src/appDataSource.mock";
import { UserService } from "../src/service/user.service"
import log from "../src/logger";
import { User } from "../src/model/user.entity";

const service = new UserService()
describe('Company', async () => {
  it("Should get error authid",async () => {
    let error: string = "";
    await service.postUser(
      {
        // authId:"victor",
        firstName: "fress",
        lastName:"6002BD"
      } as User).then().catch(e => error = e)
    expect(error).toBe("Authid is missing")
  })
  it("Should get error firstname",async () => {
    let error: string = "";
    await service.postUser(
      {
        authId:"victor",
        // firstName: "fress",
        lastName:"6002BD"
      } as User).then().catch(e => error = e)
    expect(error).toBe("Firstname is missing")
  })
  it("Should get error lastname",async () => {
    let error: string = "";
    await service.postUser(
      {
        authId:"victor",
        firstName: "fress",
        // lastName:"6002BD"
      } as User).then().catch(e => error = e)
    expect(error).toBe("Lastname is missing")
  })
  it("Should get error id",async () => {
    let error: string = "";
    await service.putUser(
      {
        authId:"victor",
        firstName: "fress",
        lastName:"6002BD"
      } as User).then().catch(e => error = e)
    expect(error).toBe("Id is missing")
  })
  it("Should get error authid",async () => {
    let error: string = "";
    await service.putUser(
      {
        id:1,
        // authId:"victor",
        firstName: "fress",
        lastName:"6002BD"
      } as User).then().catch(e => error = e)
    expect(error).toBe("Authid is missing")
  })
  it("Should get error firstname",async () => {
    let error: string = "";
    await service.putUser(
      {
        id:1,
        authId:"victor",
        // firstName: "fress",
        lastName:"6002BD"
      } as User).then().catch(e => error = e)
    expect(error).toBe("Firstname is missing")
  })
  it("Should get error lastame",async () => {
    let error: string = "";
    await service.putUser(
      {
        id:1,
        authId:"victor",
        firstName: "fress",
        // lastName:"6002BD"
      } as User).then().catch(e => error = e)
    expect(error).toBe("Lastname is missing")
  })


})
