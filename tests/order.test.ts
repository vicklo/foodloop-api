import {describe, it, expect} from "vitest"
import { Order } from "../src/model/order.entity";
import { OrderService } from "../src/service/order.service";

const service = new OrderService()
describe('Company', async () => {
  it("Should get error adress",async () => {
    let error: string = "";
    await service.postOrder({} as Order).then().catch(e => error = e)
    expect(error).toBe("User is missing")
  })
})
