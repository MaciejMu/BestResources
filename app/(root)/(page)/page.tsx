import Filters from "@/components/Filters";
import ResourceCard from "@/components/ResourceCard";
import SearchForm from "@/components/SearchForm";
import { getResources } from "@/sanity/actions";
import React from "react";

export const revalidate = 3600;

const Page = async () => {
  const resources = await getResources({
    query: "",
    category: "",
    page: "1",
  });

  console.log(resources);

  return (
    <main className="flex-center paddings mx-auto w-full max-w-screen-2xl flex-col">
      <section className="nav-padding w-full">
        <div className="flex-center relative min-h-[274px] w-full flex-col rounded-xl bg-banner bg-cover bg-center text-center">
          <h1 className="sm:heading1 heading2 mb-6 text-center text-white">
            Best resources to learn web
          </h1>
        </div>
        <SearchForm />
        <Filters />
        <div className="mt-12 flex w-full flex-wrap justify-center gap-16 sm:justify-start">
          {resources?.length > 0 ? (
            resources.map((resource: any) => (
              <ResourceCard
                key={resource._id}
                title={resource.title}
                id={resource._id}
                image={resource.image}
                resourceLink={resource.resourceLink}
              />
            ))
          ) : (
            <p className="body-regular text-white-400">No resources found</p>
          )}
        </div>
      </section>
    </main>
  );
};

export default Page;
