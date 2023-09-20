const schema = {
  name: "resource",
  title: "Resource",
  type: "document",
  field: [
    {
      name: "title",
      title: "Title",
      type: "string",
      require,
      validation: (Rule: any) => Rule.required(),
    },
    { name: "slug", title: "Slug", type: "slug", options: { source: "title" } },
    {
      name: "poster",
      title: "Poster",
      type: "image",
      validation: (Rule: any) => Rule.required(),
      options: { hotspot: true },
    },
    {
      name: "category",
      title: "Category",
      type: "string",
      validation: (Rule: any) => Rule.required(),
      options: {
        list: ["frontend", "backend", "next 13", "fullstack", "other"],
      },
    },
  ],
};

export default schema;