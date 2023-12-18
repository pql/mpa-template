import qs from "qs";

export function queryParams() {
  return qs.parse(location.search, { ignoreQueryPrefix: true });
}
