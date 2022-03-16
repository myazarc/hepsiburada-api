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
};
