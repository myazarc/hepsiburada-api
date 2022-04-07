import axios, { AxiosInstance } from "axios";

class Base {
  public isTestAccount: boolean = false;
  public TEST_URL: string = null;
  public APP_URL: string = null;

  protected instance: AxiosInstance = null;
  protected instanceXML: AxiosInstance = null;
  constructor(public USER_NAME: string, public USER_PASS: string, public MERCHANTID: string) {}

  /**
   * setTestAccount
   */
  public setTestAccount() {
    this.isTestAccount = true;
  }

  public getUrl() {
    if (this.isTestAccount) {
      return this.TEST_URL;
    }
    return this.APP_URL;
  }

  public getInstance() {
    if (this.instance === null) {
      this.instance = axios.create({
        baseURL: this.getUrl(),
        headers: {
          Authorization: `Basic ${Buffer.from(this.USER_NAME + ":" + this.USER_PASS).toString("base64")}`,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
    }
    return this.instance;
  }

  public getInstanceWithXml() {
    if (this.instanceXML === null) {
      this.instanceXML = axios.create({
        baseURL: this.getUrl(),
        headers: {
          Authorization: `Basic ${Buffer.from(this.USER_NAME + ":" + this.USER_PASS).toString("base64")}`,
          "Content-Type": "application/xml",
          Accept: "application/json",
        },
      });
    }
    return this.instanceXML;
  }
}

export default Base;
