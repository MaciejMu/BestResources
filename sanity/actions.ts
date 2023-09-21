import { groq } from "next-sanity";
import { readClient } from "./lib/client";
import { buildQuery } from "./utilis";

type getResourcesParams = {
  query: string;
  category: string;
  page: string;
};

export const getResources = async (params: getResourcesParams) => {
  const { query, category, page } = params;

  try {
    const resources = await readClient.fetch(
      groq`${buildQuery({
        type: "resource",
        query,
        category,
        page: parseInt(page),
      })}{
        title,
        _id,
        "image": poster.asset->url,
        slug,
        category
      }`
    );
    return resources;
  } catch (error) {
    console.log(error);
  }
};
