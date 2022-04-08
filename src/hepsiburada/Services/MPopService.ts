import Base from "./Base";
import {
  GetAllCategoriesStatus,
  IGetAllCategoriesQueryParams,
  IGetAllCategoriesResponse,
  IGetAttributeValuesQueryParams,
  IGetCategoryAttributesResponse,
  IProductsImportRequest,
  IProductsImportResponse,
  IProductStatusQueryParams,
  IProductStatusResponse,
} from "../../Interfaces/IMPopService";
class MPopService extends Base {
  constructor(userName: string, userPass: string, merchantId: string) {
    super(userName, userPass, merchantId);
    this.TEST_URL = "https://mpop-sit.hepsiburada.com/product/api/";
    this.APP_URL = "https://mpop.hepsiburada.com/product/api/";
  }

  public productsImport(productImports: IProductsImportRequest): Promise<IProductsImportResponse> {
    productImports = productImports?.map((item) => {
      return { ...item, merchant: this.MERCHANTID };
    });
    return this.getInstance().post(`products/import`, productImports);
  }

  public getAllCategories(
    querySearch: IGetAllCategoriesQueryParams = {
      available: true,
      leaf: true,
      page: 0,
      size: 2000,
      status: GetAllCategoriesStatus.ACTIVE,
      version: 1,
    }
  ): Promise<IGetAllCategoriesResponse> {
    return this.getInstance().get(`categories/get-all-categories`, { params: querySearch });
  }

  public getCategoryAttributes(categoryId: string | number): Promise<IGetCategoryAttributesResponse> {
    return this.getInstance().get(`categories/${categoryId}/attributes`);
  }

  public getAttributeValues(
    categoryId: string | number,
    attributeId: string | number,
    querySearch: IGetAttributeValuesQueryParams = {
      page: 0,
      size: 1000,
      version: 4,
    }
  ): Promise<IGetCategoryAttributesResponse> {
    return this.getInstance().get(`categories/${categoryId}/attribute/${attributeId}/values`, { params: querySearch });
  }

  public getStatus(
    trackingId: string,
    querySearch: IProductStatusQueryParams = {
      page: 0,
      size: 2000,
      version: 1,
    }
  ): Promise<IProductStatusResponse> {
    return this.getInstance().get(`status/${trackingId}`, { params: querySearch });
  }
}

export default MPopService;
