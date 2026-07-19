import { CaseIcon } from "@sanity/icons/Case"
import { defineArrayMember, defineField, defineType } from "sanity"

const TECHNOLOGIES = [
  "CSS",
  "Figma",
  "HTML",
  "JavaScript",
  "Liquid",
  "Next.js",
  "React",
  "Sanity",
  "SCSS",
  "Shopify",
  "Tailwind CSS",
  "TypeScript",
] as const

export const project = defineType({
  name: "project",
  title: "Project",
  type: "document",
  icon: CaseIcon,
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name", maxLength: 96 },
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 3,
      description: "Problem it solved, your role, and the outcome.",
      validation: (rule) => rule.required().max(400),
    }),
    defineField({
      name: "image",
      title: "Screenshot",
      type: "image",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          title: "Alt text",
          type: "string",
        }),
      ],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "technologies",
      title: "Technologies",
      type: "array",
      of: [defineArrayMember({ type: "string" })],
      options: {
        list: TECHNOLOGIES.map((tech) => ({ title: tech, value: tech })),
        layout: "grid",
      },
      description: "Pick from the list — avoids typos creating duplicate tags.",
      validation: (rule) => rule.min(1).unique(),
    }),
    defineField({
      name: "liveUrl",
      title: "Live demo URL",
      type: "url",
      validation: (rule) => rule.uri({ scheme: ["http", "https"] }),
    }),
    defineField({
      name: "repoUrl",
      title: "Code repository URL",
      type: "url",
      validation: (rule) => rule.uri({ scheme: ["http", "https"] }),
    }),
    defineField({
      name: "status",
      title: "Status",
      type: "string",
      options: {
        list: [
          { title: "Completed", value: "completed" },
          { title: "Archived", value: "archived" },
          { title: "In progress", value: "in-progress" },
        ],
        layout: "radio",
      },
      initialValue: "completed",
    }),
    defineField({
      name: "featured",
      title: "Featured",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "order",
      title: "Display order",
      type: "number",
      description: "Lower numbers appear first.",
      initialValue: 0,
      validation: (rule) => rule.integer().min(0),
    }),
  ],
  orderings: [
    {
      title: "Display order",
      name: "orderAsc",
      by: [
        { field: "order", direction: "asc" },
        { field: "name", direction: "asc" },
      ],
    },
  ],
  preview: {
    select: {
      title: "name",
      media: "image",
      technologies: "technologies",
      status: "status",
    },
    prepare({ title, media, technologies, status }) {
      const tech = Array.isArray(technologies)
        ? technologies.slice(0, 3).join(", ")
        : ""
      return {
        title: title || "Untitled project",
        subtitle: [status, tech].filter(Boolean).join(" · "),
        media,
      }
    },
  },
})
