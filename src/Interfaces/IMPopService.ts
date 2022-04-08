import { AxiosResponse } from "axios";

interface IBaseResult {
  success: boolean;
  code: number;
  message: string | null;
}

//#region ProductsImport

interface IProductsImportResultData {
  trackingId: string;
}

interface IProductsImportResult extends IBaseResult {
  version: number;
  data: IProductsImportResultData;
}

interface IProductsImportResponse extends AxiosResponse {
  data: IProductsImportResult;
}

interface IProductsImportAttributes {
  [key: string]: string | number;
  merchantSku: string;
  VaryantGroupID: string;
  Barcode: string | number;
  UrunAdi: string;
  UrunAciklamasi: string;
  Marka: string;
  GarantiSuresi: number;
  kg: string;
  tax_vat_rate: string;
  Image1: string;
  Image2?: string;
  Image3?: string;
  Image4?: string;
  Image5?: string;
  price?: number;
  stock?: number;
}

interface IProductsImport {
  categoryId: number;
  merchant?: string;
  attributes: IProductsImportAttributes;
}

interface IProductsImportRequest extends Array<IProductsImport> {}
//#endregion

//#region GetAllCategories

enum GetAllCategoriesStatus {
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE",
}

interface IGetAllCategoriesQueryParams {
  leaf?: boolean;
  status?: GetAllCategoriesStatus;
  available?: boolean;
  page?: number;
  /**
   * @description max 2000
   */
  size?: number;
  version?: number;
}

interface IGetAllCategoriesResultData {
  categoryId: number;
  name: string;
  displayName: string;
  parentCategoryId: number;
  paths: string[];
  leaf: boolean;
  status: GetAllCategoriesStatus;
  type: string;
  sortId: string;
  imageURL: string | null;
  available: boolean;
  productTypes: any[];
}

interface IGetAllCategoriesResult extends IBaseResult {
  totalElements: number;
  totalPages: number;
  number: number;
  numberOfElements: number;
  first: boolean;
  last: boolean;
  data: IGetAllCategoriesResultData[];
}

interface IGetAllCategoriesResponse extends AxiosResponse {
  data: IGetAllCategoriesResult;
}

//#endregion
//#region GetCategoryAttributes

interface IBaseAttributes {
  name: string;
  id: string;
  mandatory: boolean;
  type: string;
  multiValue: string;
}

interface IAttributes extends IBaseAttributes {}
interface IVariantAttributes extends IBaseAttributes {}

interface IGetCategoryAttributesResultData {
  baseAttributes: IBaseAttributes[];
  attributes: IAttributes[];
  variantAttributes: IVariantAttributes[];
}

interface IGetCategoryAttributesResult extends IBaseResult {
  version: number;
  data: IGetCategoryAttributesResultData;
}

interface IGetCategoryAttributesResponse extends AxiosResponse {
  data: IGetCategoryAttributesResult;
}
//#endregion

//#region GetAttributeValues

interface IGetAttributeValuesQueryParams {
  page?: number;
  /**
   * @description max 1000
   */
  size?: number;
  version?: number;
}

interface IGetAttributeValuesResultData {
  value: string;
  id?: string;
}

interface IGetAttributeValuesResult extends IBaseResult {
  totalElements: number;
  totalPages: number;
  number: number;
  numberOfElements: number;
  first: boolean;
  last: boolean;
  data: IGetAttributeValuesResultData[];
}

interface IGetAttributeValuesResponse extends AxiosResponse {
  data: IGetAttributeValuesResult;
}
//#endregion

//#region Status

enum ProductStatus {
  ANALYZE = "Incelenecek",
  PRODUCT_MISSING = "Ürün bilgileri eksik",
  PROCESS_IN_CATALOG = "Katalog Sürecinde",
  MATCH = "Eşleşen",
  READY_FOR_SALE = "Satışa Hazır",
  OPEN_TASK = "Görev açılmış",
  PRE_PROCESS_IN_CATALOG = "Ön katalog Eşleşen",
}

enum ImportStatus {
  PROCESSING = "PROCESSING",
  SUCCESS = "SUCCESS",
  FAILED = "FAILED",
}

enum ImportMessagesSeverity {
  INFORMATION = "INFORMATION",
  WARNING = "WARNING",
  ERROR = "ERROR",
}

interface IProductStatusQueryParams {
  page?: number;
  /**
   * @description max 2000
   */
  size?: number;
  version?: number;
}

interface IValidationResults {
  attributeName: string;
  message: string;
}

interface ITaskDetails {
  reason: string;
  url: string;
}

interface IImportMessages {
  severity: ImportMessagesSeverity;
  message: string;
}

interface IProductStatusResultData {
  itemOrderID: number;
  merchant: string;
  merchantSku: string;
  hbSku: string | null;
  barcode: string | null;
  productStatus: ProductStatus;
  productName: string | null;
  taskDetails: ITaskDetails[];
  validationResults: IValidationResults[];
  importStatus: ImportStatus;
  importMessages: IImportMessages[];
}

interface IProductStatusResult extends IBaseResult {
  totalElements: number;
  totalPages: number;
  number: number;
  numberOfElements: number;
  first: boolean;
  last: boolean;
  data: IProductStatusResultData[];
}

interface IProductStatusResponse extends AxiosResponse {
  data: IProductStatusResult;
}
//#endregion

export {
  IProductsImportRequest,
  IProductsImportResponse,
  IGetAllCategoriesQueryParams,
  GetAllCategoriesStatus,
  IGetAllCategoriesResponse,
  IGetCategoryAttributesResponse,
  IGetAttributeValuesResponse,
  IGetAttributeValuesQueryParams,
  IProductStatusResponse,
  IProductStatusQueryParams,
};
