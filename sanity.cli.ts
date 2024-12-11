/**
* This configuration file lets you run `$ sanity [command]` in this folder
* Go to https://www.sanity.io/docs/cli to learn more.
**/
import { defineCliConfig } from 'sanity/cli'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET
<<<<<<< HEAD
// const dataset = "production"
=======

>>>>>>> a461a885a55db84d853d94360b8b2c355672cbd9
export default defineCliConfig({ api: { projectId, dataset } })
