import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import project from './lib/sanity/schema/project'

const config = defineConfig({
  name: 'default',
  title: 'Portfolio',

  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'p9vhbvt7',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  basePath: '/studio',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: [project],
  },
})

export default config as ReturnType<typeof defineConfig>