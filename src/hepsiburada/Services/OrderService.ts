import Base from "./Base";
import {
  IChangeCargoCompanyRequest,
  IChangeCargoCompanyResponse,
  ICreatePackageRequest,
  ICreatePackageResponse,
  IGetChangableCargoCompaniesResponse,
  IGetOrdersQueryParams,
  IGetOrdersResponse,
} from "../../Interfaces/IOrderService";

class OrderService extends Base {
  constructor(userName: string, userPass: string, merchantId: string) {
    super(userName, userPass, merchantId);
    this.TEST_URL = "https://oms-external-sit.hepsiburada.com/";
    this.APP_URL = "https://oms-external.hepsiburada.com/";
  }

  public getOrders(querySearch: IGetOrdersQueryParams): Promise<IGetOrdersResponse> {
    return this.getInstance().get(`orders/merchantid/${this.MERCHANTID}`, { params: querySearch });
  }

  public createPackage(request: ICreatePackageRequest): Promise<ICreatePackageResponse> {
    return this.getInstance().post(`packages/merchantid/${this.MERCHANTID}`, request);
  }

  public getChangableCargoCompanies(packageNumber: string): Promise<IGetChangableCargoCompaniesResponse> {
    return this.getInstance().get(`packages/merchantid/${this.MERCHANTID}/packagenumber/${packageNumber}/changablecargocompanies`);
  }

  public changeCargoCompany(packageNumber: string, request: IChangeCargoCompanyRequest): Promise<IChangeCargoCompanyResponse> {
    return this.getInstance().put(`packages/merchantid/${this.MERCHANTID}/packagenumber/${packageNumber}/changecargocompany`, request);
  }
}

export default OrderService;
