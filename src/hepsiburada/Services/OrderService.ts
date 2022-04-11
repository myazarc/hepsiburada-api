import Base from "./Base";
import { IGetOrdersQueryParams, IGetOrdersResponse } from "../../Interfaces/IOrderService";

class OrderService extends Base {
  constructor(userName: string, userPass: string, merchantId: string) {
    super(userName, userPass, merchantId);
    this.TEST_URL = "https://oms-external-sit.hepsiburada.com/";
    this.APP_URL = "https://oms-external.hepsiburada.com/";
  }

  public getOrders(querySearch: IGetOrdersQueryParams): Promise<IGetOrdersResponse> {
    return this.getInstance().get(`orders/merchantid/${this.MERCHANTID}`, { params: querySearch });
  }
}

export default OrderService;
