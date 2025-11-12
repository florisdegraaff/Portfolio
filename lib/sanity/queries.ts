import groq from 'groq'

/**
 * GROQ query to fetch all projects
 * Returns an array of Project documents ordered by creation date (descending)
 */
export const projectsQuery = groq`*[_type == "project"] | order(_createdAt desc) {
  _id,
  _type,
  _createdAt,
  _updatedAt,
  _rev,
  name
}`

/**
 * GROQ query to fetch a single project by ID
 * @param id - The document ID of the project to fetch
 */
export const projectByIdQuery = groq`*[_type == "project" && _id == $id][0] {
  _id,
  _type,
  _createdAt,
  _updatedAt,
  _rev,
  name
}`

