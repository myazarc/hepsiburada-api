import { AxiosResponse } from "axios";

//#region getOrders
interface IGetOrdersQueryParams {
  offset?: number;
  limit?: number;
  begindate?: string;
  enddate?: string;
}

interface IPrice {
  currency: string;
  amount: number;
}

interface IHBDiscount {
  totalPrice: IPrice;
  unitPrice: IPrice;
}

enum OrderStatus {
  OPEN = "Open",
  UNPACKED = "Unpacked",
}

enum DeliveryType {
  STANDARD_DELIVERY = "StandardDelivery",
  TODAY = "BT",
  TOMORROW = "YT",
}

interface IAddress {
  addressId: string;
  address: string;
  name: string;
  email: string;
  countryCode: string;
  phoneNumber: string;
  alternatePhoneNumber?: string;
  district: string;
  city: string;
  town: string;
}

interface IInvoiceAddress extends IAddress {
  directions: string;
  postalCode: string;
}

interface IInvoice {
  turkishIdentityNumber: string;
  taxNumber: string;
  taxOffice: string;
  address: IInvoiceAddress;
}

interface ICargoCompanyModel {
  id: number;
  name: string;
  shortName: string;
  logoUrl: string;
  trackingUrl: string;
}

interface IWarehouse {
  shippingModel: string;
  shippingAddressLabel: string;
}

interface IProperties {
  name: string;
  value: string;
  displayName: string;
}

interface IGetOrdersItem {
  [key: string]: any;
  dueDate: string;
  lastStatusUpdateDate: string;
  id: string;
  name: string;
  sku: string;
  orderId: string;
  orderNumber: string;
  orderDate: string;
  quantity: number;
  merchantId: string;
  totalPrice: IPrice;
  unitPrice: IPrice;
  hbDiscount: IHBDiscount;
  vat: number;
  vatRate: number;
  customerName: string;
  customerId: string;
  status: OrderStatus;
  shippingAddress: IAddress;
  invoice: IInvoice;
  sapNumber: string;
  dispatchTime: number;
  commission: IPrice;
  commissionRate: number;
  paymentTermInDays: number;
  commissionType: number;
  cargoCompanyModel: ICargoCompanyModel;
  cargoCompany: string;
  creditCardHolderName: string | null;
  isCustomized: boolean;
  canCreatePackage: boolean;
  isCancellable: boolean;
  isCancellableByHbAdmin: boolean;
  deliveryType: DeliveryType;
  deliveryOptionId: number;
  slot: string | null;
  pickUpTime: string;
  discountInfo: any[];
  merchantSKU: string;
  purchasePrice: IPrice;
  deliveryNote: any;
  isCargoChangable: boolean;
  warehouse: IWarehouse;
  deptorDifferenceAmount: number;
  isJetDelivery: boolean;
  properties: IProperties[];
}

interface IGetOrdersResult {
  totalCount: number;
  limit: number;
  offset: number;
  pageCount: number;
  items: IGetOrdersItem[];
}

interface IGetOrdersResponse extends AxiosResponse {
  data: IGetOrdersResult;
}

//#endregion

//#region createPackage
interface ILineItemRequests {
  id: string;
  quantity: string;
  serialNumbers?: string[];
}

interface ICreatePackageRequest {
  parcelQuantity: number;
  deci?: number;
  lineItemRequests: ILineItemRequests[];
}

interface ICreatePackageResult {
  packageNumber: string;
  barcode: string;
}
interface ICreatePackageResponse extends AxiosResponse {
  data: ICreatePackageResult;
}

//#endregion

//#region changablecargocompanies

interface IGetChangableCargoCompanies {
  Id: number;
  Name: string;
  ShortName: string;
  LogoUrl: string;
  IsActive: boolean;
}

interface IGetChangableCargoCompaniesResult extends Array<IGetChangableCargoCompanies> {}
interface IGetChangableCargoCompaniesResponse extends AxiosResponse {
  data: IGetChangableCargoCompaniesResult;
}

//#endregion

//#region changeCargoCompany

interface IChangeCargoCompanyRequest {
  CargoCompanyShortName: string;
}

interface IChangeCargoCompanyResponse extends AxiosResponse {}
//#endregion

//#region PackageableWith
interface ILineItems {
  orderNumber: string;
  lineItemId: string;
  quantity: string;
}
interface IPackageableWithResult {
  lineItems: ILineItems[];
}

interface IPackageableWithResponse extends AxiosResponse {
  data: IPackageableWithResult;
}

//#endregion

//#region getPackages

interface IGetPackagesQueryParams {
  offset?: number;
  limit?: number;
  timespan?: number;
  begindate?: string;
  enddate?: string;
}

interface IPackageItems {
  [key: string]: any;
  lineItemId: string;
  listingId: string;
  merchantId: string;
  hbSku: string;
  merchantSku: string;
  quantity: number;
  price: IPrice;
  vat: number;
  totalPrice: IPrice;
  commission: IPrice;
  commissionRate: number;
  unitHBDiscount: IPrice;
  totalHBDiscount: IPrice;
  merchantUnitPrice: IPrice;
  merchantTotalPrice: IPrice;
  cargoPaymentInfo: any[];
  properties: IProperties;
  productName: string;
  orderNumber: string;
  orderDate: string;
  deliveryType: string;
  customerDelivery: string;
  pickupTime: string | null;
  gtip: string;
  weight: number;
  vatRate: number;
  warehouse: IWarehouse;
  deptorDifferenceAmount: number;
  purchasePrice: IPrice;
}

interface IGetPackagesResult {
  id: string;
  status: OrderStatus;
  customerId: string;
  orderDate: string;
  dueDate: string;
  barcode: string;
  packageNumber: string;
  cargoCompany: string;
  shippingAddressDetail: string;
  recipientName: string;
  shippingCountryCode: string;
  shippingDistrict: string;
  shippingTown: string;
  shippingCity: string;
  email: string;
  phoneNumber: string;
  companyName: string;
  billingAddress: string;
  billingCity: string;
  billingTown: string;
  billingDistrict: string;
  billingPostalCode: string;
  taxOffice: string;
  taxNumber: string;
  identityNo: string;
  shippingTotalPrice: IPrice;
  customsTotalPrice: IPrice;
  totalPrice: IPrice;
  items: IPackageItems[];
  isCargoChangable: boolean;
  customerName: string;
}
interface IGetPackagesResponse extends AxiosResponse {
  data: IGetPackagesResult[];
}

//#endregion

export {
  IGetOrdersResponse,
  IGetOrdersQueryParams,
  ICreatePackageResponse,
  ICreatePackageRequest,
  IGetChangableCargoCompaniesResponse,
  IChangeCargoCompanyResponse,
  IChangeCargoCompanyRequest,
  IPackageableWithResponse,
  IGetPackagesQueryParams,
  IGetPackagesResponse,
};
