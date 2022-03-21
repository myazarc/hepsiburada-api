import Base from "./Base";
import {
  IGetProductsResponse,
  IUploadInventoryRequest,
  IUploadInventoryResponse,
  IUploadInventoryStatusResponse,
  IUploadPriceRequest,
  IUploadPriceResponse,
  IUploadPriceStatusResponse,
  IUploadStockRequest,
  IUploadStockResponse,
  IUploadStockStatusResponse,
} from "../../Interfaces/IListingService";

class ListingService extends Base {
  constructor(userName: string, userPass: string, merchantId: string) {
    super(userName, userPass, merchantId);
    this.TEST_URL = "https://listing-external-sit.hepsiburada.com/";
    this.APP_URL = "https://listing-external.hepsiburada.com/";
  }

  public sendProducts(products: IUploadInventoryRequest): Promise<IUploadInventoryResponse> {
    return this.getInstance().post(`listings/merchantid/${this.MERCHANTID}/inventory-uploads`, products);
  }

  public getProducts(offset: number = 0, limit: number = 2000, salableListings: boolean | null = null): Promise<IGetProductsResponse> {
    const qsa = `offset=${offset}&limit=${limit}${salableListings !== null ? "&salable-listings=" + salableListings : ""}`;
    return this.getInstance().get(`listings/merchantid/${this.MERCHANTID}?${qsa}`);
  }

  public updatePrices(products: IUploadPriceRequest): Promise<IUploadPriceResponse> {
    return this.getInstance().post(`listings/merchantid/${this.MERCHANTID}/price-uploads`, products);
  }

  public updateStocks(products: IUploadStockRequest): Promise<IUploadStockResponse> {
    return this.getInstance().post(`listings/merchantid/${this.MERCHANTID}/stock-uploads`, products);
  }

  public productStatus(id: string): Promise<IUploadInventoryStatusResponse> {
    return this.getInstance().get(`listings/merchantid/${this.MERCHANTID}/inventory-uploads/id/${id}`);
  }

  public priceStatus(id: string): Promise<IUploadPriceStatusResponse> {
    return this.getInstance().get(`listings/merchantid/${this.MERCHANTID}/price-uploads/id/${id}`);
  }

  public stockStatus(id: string): Promise<IUploadStockStatusResponse> {
    return this.getInstance().get(`listings/merchantid/${this.MERCHANTID}/stock-uploads/id/${id}`);
  }
}

export default ListingService;
