export default function (config: any) {
  if (config) {
    if (!config.headers) {
      config.headers = {};
    }
    if (!config.headers["Auth"]) {
      config.headers["Auth"] = "";
    }
  }
  return config;
}
