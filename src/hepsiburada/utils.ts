export const objectToXml = (object: any): string => {
  return entries(object)
    .map(([key, value]) => {
      let startTag = key;
      let endTag = key;
      let children;

      if (value == null) {
        return `<${startTag} xsi:nil="true"/>`;
      }

      if (typeof value === "object" && "@" in value) {
        startTag += ` ${formatAttributes(value["@"])}`;
        value = "#" in value ? value["#"] : "";
      }
      if (Array.isArray(value)) {
        return value
          .map((item: any) => {
            children = objectToXml(item);
            return `<${startTag}>${children}</${endTag}>`;
          })
          .join("\n");
      } else if (typeof value === "object") {
        children = objectToXml(value);
      } else {
        children = escape(value);
      }

      if (children === "") {
        return `<${startTag}/>`;
      }

      if (/^\d+$/.test(key)) {
        return children;
      }

      return `<${startTag}>${children}</${endTag}>`;
    })
    .join("");
};

// needed in environments that doesn't have `Object.entries()`
const entries = (obj: any) => Object.keys(obj).map((key) => [key, obj[key]]);

const formatAttributes = (attributes: object): string =>
  entries(attributes)
    .map(([key, value]) => `${key}="${value}"`)
    .join(" ");

const escape = (val?: any) => (val ? String(val).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/</g, "&lt;").replace(/>/g, "&gt;") : val);
