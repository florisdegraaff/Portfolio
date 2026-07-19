import { defineQuery } from "next-sanity"

export const PROJECTS_QUERY = defineQuery(/* groq */ `
  *[_type == "project" && defined(name)]
  | order(coalesce(order, 999) asc, name asc) {
    _id,
    name,
    description,
    technologies,
    liveUrl,
    repoUrl,
    status,
    featured,
    order,
    image {
      asset->{
        _id,
        url,
        metadata { lqip, dimensions }
      },
      alt,
      hotspot,
      crop
    }
  }
`)
