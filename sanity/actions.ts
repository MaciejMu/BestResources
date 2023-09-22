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
        resourceLink,
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

export const getResourcesPlaylist = async () => {
  try {
    const resources = await readClient.fetch(
      groq`*[_type == "resourcePlaylist"]{
        _id,
        title,
        resources[0...6]->{
          _id,
        title,
        resourceLink,
        "image": poster.asset->url,
        category
      }
      }`
    );

    return resources;
  } catch (error) {
    console.log(error);
  }
};
