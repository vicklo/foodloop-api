import { Repository } from "typeorm";
import {describe, it, expect, beforeEach} from "vitest"
import { ProductService } from "../src/service/product.service"
import log from "../src/logger";
import { Product } from "../src/model/product.entity";

const service = new ProductService()
describe('Product', async () => {
  it("Should get error name",async () => {
    let error: string = "";
    await service.postProduct(
      {
        // name:"victor",
        price: 1.87,
        description:"6002BD",
        company:{}
      } as Product).then().catch(e => error = e)
    expect(error).toBe("Name is missing")
  })
  it("Should get error price",async () => {
    let error: string = "";
    await service.postProduct(
      {
        name:"victor",
        // price: 1.87,
        description:"6002BD",
        company:{}
      } as Product).then().catch(e => error = e)
    expect(error).toBe("Price is missing")
  })
  it("Should get error description",async () => {
    let error: string = "";
    await service.postProduct(
      {
        name:"victor",
        price: 1.87,
        // description:"6002BD",
        company:{}
      } as Product).then().catch(e => error = e)
    expect(error).toBe("Description is missing")
  })
  it("Should get error company",async () => {
    let error: string = "";
    await service.postProduct(
      {
        name:"victor",
        price: 1.87,
        description:"6002BD",
        // company:{}
      } as Product).then().catch(e => error = e)
    expect(error).toBe("Company is missing")
  })


  it("Should get error id",async () => {
    let error: string = "";
    await service.putProduct(
      {
        // id:1,
        name:"victor",
        price: 1.87,
        description:"6002BD",
        company:{}
      } as Product).then().catch(e => error = e)
    expect(error).toBe("Id is missing")
  })
  it("Should get error name",async () => {
    let error: string = "";
    await service.putProduct(
      {
        id:1,
        // name:"victor",
        price: 1.87,
        description:"6002BD",
        company:{}
      } as Product).then().catch(e => error = e)
    expect(error).toBe("Name is missing")
  })
  it("Should get error price",async () => {
    let error: string = "";
    await service.putProduct(
      {
        id:1,
        name:"victor",
        // price: 1.87,
        description:"6002BD",
        company:{}
      } as Product).then().catch(e => error = e)
    expect(error).toBe("Price is missing")
  })
  it("Should get error description",async () => {
    let error: string = "";
    await service.putProduct(
      {
        id:1,
        name:"victor",
        price: 1.87,
        // description:"6002BD",
        company:{}
      } as Product).then().catch(e => error = e)
    expect(error).toBe("Description is missing")
  })
  it("Should get error company",async () => {
    let error: string = "";
    await service.putProduct(
      {
        id:1,
        name:"victor",
        price: 1.87,
        description:"6002BD",
        // company:{}
      } as Product).then().catch(e => error = e)
    expect(error).toBe("Company is missing")
  })

})
