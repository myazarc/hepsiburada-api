import { AxiosResponse } from "axios";

interface ICustomer {
  CustomerId: string;
  Name: string;
}

interface IPrice {
  Amount: number;
  Currency: string;
}

interface ILineItem {
  Sku: string;
  MerchantId?: string;
  Quantity: number;
  Price: IPrice;
  Vat: number;
  TotalPrice: IPrice;
  CargoCompanyId: number;
  DeliveryOptionId: number;
  TagList?: string[];
}

interface IDeliveryAddress {
  AddressId: string;
  Name: string;
  AddressDetail: string;
  Email: string;
  CountryCode: string;
  PhoneNumber: string;
  AlternatePhoneNumber: string;
  Town: string;
  District: string;
  City: string;
}

interface ICreateTestOrderRequest {
  OrderNumber: string;
  OrderDate: string;
  Customer: ICustomer;
  DeliveryAddress: IDeliveryAddress;
  LineItems: ILineItem[];
}

interface ICreateTestOrderResponse extends AxiosResponse {}

export { ICreateTestOrderResponse, ICreateTestOrderRequest };
