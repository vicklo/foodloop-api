import { Repository } from "typeorm";
import {describe, it, expect, beforeEach} from "vitest"
import { myDataSource } from "../src/appDataSource.mock";
import { CompanyService } from "../src/service/company.service"
import log from "../src/logger";
import { Company } from "../src/model/company.entity";

const service = new CompanyService()
describe('Company', async () => {
  it("Should get error adress",async () => {
    let error: string = "";
    await service.postCompany(
      {
        name:"victor",
        type: "fress",
        postCode:"6002BD"
      } as Company).then().catch(e => error = e)
    expect(error).toBe("Adress is missing")
  })
  it("Should get error name",async () => {
    let error: string = "";
    await service.postCompany(
      {
        // name:"victor",
        type: "fress",
        postCode:"6002BD",
        adress:"sint odastraat 22"
      } as Company).then().catch(e => error = e)
    expect(error).toBe("Name is missing")
  })
  it("Should get error type",async () => {
    let error: string = "";
    await service.postCompany(
      {
        name:"victor",
        // type: "fress",
        postCode:"6002BD",
        adress:"sint odastraat 22"
      } as Company).then().catch(e => error = e)
    expect(error).toBe("Type is missing")
  })
  it("Should get error postcode",async () => {
    let error: string = "";
    await service.postCompany(
      {
        name:"victor",
        type: "fress",
        // postCode:"6002BD",
        adress:"sint odastraat 22"
      } as Company).then().catch(e => error = e)
    expect(error).toBe("Postcode is missing")
  })


  it("Should get error adress",async () => {
    let error: string = "";
    await service.putCompany(
      {
        id:1,
        name:"victor",
        type: "fress",
        postCode:"6002BD"
      } as Company).then().catch(e => error = e)
    expect(error).toBe("Adress is missing")
  })
  it("Should get error name",async () => {
    let error: string = "";
    await service.putCompany(
      {
        id:1,
        // name:"victor",
        type: "fress",
        postCode:"6002BD",
        adress:"sint odastraat 22"
      } as Company).then().catch(e => error = e)
    expect(error).toBe("Name is missing")
  })
  it("Should get error type",async () => {
    let error: string = "";
    await service.putCompany(
      {
        id:1,
        name:"victor",
        // type: "fress",
        postCode:"6002BD",
        adress:"sint odastraat 22"
      } as Company).then().catch(e => error = e)
    expect(error).toBe("Type is missing")
  })
  it("Should get error postcode",async () => {
    let error: string = "";
    await service.putCompany(
      {
        id:1,
        name:"victor",
        type: "fress",
        // postCode:"6002BD",
        adress:"sint odastraat 22"
      } as Company).then().catch(e => error = e)
    expect(error).toBe("Postcode is missing")
  })
})
