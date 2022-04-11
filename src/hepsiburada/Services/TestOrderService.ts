import { AxiosResponse } from "axios";
import Base from "./Base";
import { ICreateTestOrderRequest, ICreateTestOrderResponse } from "../../Interfaces/ITestOrderService";
/**
 * @description only testAccount
 */
class TestOrderService extends Base {
  constructor(userName: string, userPass: string, merchantId: string) {
    super(userName, userPass, merchantId);
    this.TEST_URL = "https://oms-stub-external-sit.hepsiburada.com/";
    this.APP_URL = "https://oms-stub-external-sit.hepsiburada.com/";
  }

  public createTestOrder(order: ICreateTestOrderRequest): Promise<ICreateTestOrderResponse> {
    const orderRequest = order?.LineItems?.map((item) => {
      return {
        ...item,
        MerchantId: this.MERCHANTID,
      };
    });
    return this.getInstance().post(`orders/merchantid/${this.MERCHANTID}`, orderRequest);
  }
}

export default TestOrderService;
