import qs from "query-string";

type BuildQueryParams = {
  type: string;
  query: string;
  category: string;
  page: number;
  perPage?: number;
};

type UrlQueryParams = {
  params: string;
  key?: string;
  value?: string | null;
  keysToRemove?: string[];
};

export function buildQuery(params: BuildQueryParams) {
  const { type, query, category, page = 1, perPage = 20 } = params;

  const conditions = [`*[_type =="${type}"`];

  if (query) {
    conditions.push(`title match "*${query}*"`);
  }

  if (category && category !== "all") {
    conditions.push(`category == "${category}"`);
  }

  const offset = (page - 1) * perPage;
  const limit = perPage;

  if (conditions.length > 1) {
    return `${conditions[0]} && (${conditions
      .slice(1)
      .join(" && ")})][${offset}...${limit}]`;
  } else {
    return `${conditions[0]}][${offset}...${limit}]`;
  }
}

export function formUrlQuery({
  params,
  key,
  value,
  keysToRemove,
}: UrlQueryParams) {
  const currentUrl = qs.parse(params);

  if (keysToRemove) {
    keysToRemove.forEach((key) => {
      delete currentUrl[key];
    });
  } else if (key && value) currentUrl[key] = value;

  return qs.stringifyUrl(
    { url: window.location.pathname, query: currentUrl },
    { skipNull: true }
  );
}
