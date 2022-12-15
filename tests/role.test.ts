import { Repository } from "typeorm";
import {describe, it, expect, beforeEach} from "vitest"
import { myDataSource } from "../src/appDataSource.mock";
import { RoleService } from "../src/service/role.service"
import { Role } from "../src/model/role.entity";

const service = new RoleService()
describe('Role', async () => {
  it("Should get error name",async () => {
    let error: string = "";
    await service.postRole(
      {
        // name:"victor",
        roleDiscription: "fress",
      } as Role).then().catch(e => error = e)
    expect(error).toBe("Name is missing")
  })
  it("Should get error name description",async () => {
    let error: string = "";
    await service.postRole(
      {
        name:"victor"
        // roleDiscription: "fress",
      } as Role).then().catch(e => error = e)
    expect(error).toBe("Role description is missing")
  })

  it("Should get error name description",async () => {
    let error: string = "";
    await service.putRole(
      {
        id:1,
        name:"victor"
        // roleDiscription: "fress",
      } as Role).then().catch(e => error = e)
    expect(error).toBe("Role description is missing")
  })

  it("Should get error id",async () => {
    let error: string = "";
    await service.putRole(
      {
        // id:1,
        name:"victor",
        roleDiscription: "fress",
      } as Role).then().catch(e => error = e)
    expect(error).toBe("Id is missing")
  })

  it("Should get error id",async () => {
    let error: string = "";
    await service.putRole(
      {
        id:1,
        // name:"victor",
        roleDiscription: "fress",
      } as Role).then().catch(e => error = e)
    expect(error).toBe("Name is missing")
  })
})
