import {describe, it, expect, beforeEach} from "vitest"
import { CompanyService } from "../src/service/company.service"
import { Company } from "../src/model/company.entity";
import { createConnection } from "typeorm";
import { User } from "../src/model/user.entity";
import { Role } from "../src/model/role.entity";
import { Order } from "../src/model/order.entity";
import { Product } from "../src/model/product.entity";

let service = new CompanyService()
describe('Company', async () => {
  beforeEach(async () =>
  {
    const con = await createConnection({
      type: "sqlite",
      database: ":memory:",
      dropSchema: true,
      entities: [Company,User,Role,Order,Product],
      synchronize: true,
      logging: false,
    });
    service = new CompanyService(con.getRepository('Company'))
  })




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
