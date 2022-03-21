import { AxiosResponse } from "axios";

//#region InventoryUpload
interface IProduct {
  HepsiburadaSku: string;
  MerchantSku: string;
  Price: number;
  AvailableStock: number;
  DispatchTime: number;
  ProductName?: string;
  CargoCompany1?: string;
  CargoCompany2?: string;
  CargoCompany3?: string;
  MaximumPurchasableQuantity?: number;
  ShippingProfileName?: string;
}

interface IUploadInventoryStatus {
  id: string;
}
interface IUploadInventoryResponse extends AxiosResponse {
  data: IUploadInventoryStatus;
}

interface IUploadInventoryRequest extends Array<IProduct> {}
//#endregion

//#region UploadPrice
interface IUploadPrice {
  HepsiburadaSku?: string;
  MerchantSku: string;
  Price: number;
}

interface IUploadPriceRequest extends Array<IUploadPrice> {}
interface IUploadPriceStatus {
  id: string;
}
interface IUploadPriceResponse extends AxiosResponse {
  data: IUploadPriceStatus;
}
//#endregion

//#region UploadStock
interface IUploadStock {
  HepsiburadaSku?: string;
  MerchantSku: string;
  AvailableStock: number;
}

interface IUploadStockRequest extends Array<IUploadStock> {}
interface IUploadStockStatus {
  id: string;
}
interface IUploadStockResponse extends AxiosResponse {
  data: IUploadStockStatus;
}

//#endregion

interface IUploadInventoryStatusError {
  ElementNo: number;
  HepsiburadaSku: string;
  MerchantSku: string;
  Errors: any[];
}
interface IUploadInventoryStatus {
  Id: string;
  Status: string;
  Processed: number;
  Total: number;
  Errors?: IUploadInventoryStatusError[];
}

interface IUploadInventoryStatusResponse extends AxiosResponse {
  data: IUploadInventoryStatus;
}

interface IUploadPriceStatus {
  id: string;
  status: string;
  createdAt: string;
  total: number;
  errors?: any;
}

interface IUploadPriceStatusResponse extends AxiosResponse {
  data: IUploadPriceStatus;
}

interface IUploadStockStatus {
  id: string;
  status: string;
  createdAt: string;
  total: number;
  errors?: any;
}

interface IUploadStockStatusResponse extends AxiosResponse {
  data: IUploadStockStatus;
}

//#region
interface IGetProduct {
  listingId: string;
  uniqueIdentifier: string;
  hepsiburadaSku: string;
  merchantSku: string;
  price: number;
  availableStock: number;
  dispatchTime: number;
  cargoCompany1: string;
  cargoCompany2: string;
  cargoCompany3: string;
  shippingAddressLabel: string;
  shippingProfileName: string;
  claimAddressLabel: string;
  maximumPurchasableQuantity: number;
  minimumPurchasableQuantity: number;
  pricings: any[];
  isSalable: boolean;
  customizableProperties: any[];
  deactivationReasons: any[];
  isSuspended: boolean;
  isLocked: boolean;
  lockReasons: any[];
  isFrozen: boolean;
  commissionRate: number;
  availableWarehouses: any[];
  isFulfilledByHB: boolean;
  priceIncreaseDisabled: boolean;
  priceDecreaseDisabled: boolean;
  stockDecreaseDisabled: boolean;
}

interface IGetProducts {
  listings: IGetProduct[];
  totalCount: number;
  limit: number;
  offset: number;
}

interface IGetProductsResponse extends AxiosResponse {
  data: IGetProducts;
}

//#endregion

export {
  IUploadInventoryRequest,
  IProduct,
  IUploadInventoryResponse,
  IUploadPriceRequest,
  IUploadPriceResponse,
  IUploadStockRequest,
  IUploadStockResponse,
  IUploadInventoryStatusResponse,
  IUploadPriceStatusResponse,
  IUploadStockStatusResponse,
  IGetProductsResponse,
};
