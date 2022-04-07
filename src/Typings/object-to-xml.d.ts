declare module "object-to-xml" {
  function objectToXML(obj: any, namespace?: string, depth?: number): string;
  export = objectToXML;
}
