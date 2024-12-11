import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId,
<<<<<<< HEAD
  dataset:"production",
  apiVersion,
  useCdn: false, // Set to false if statically generating pages, using ISR or tag-based revalidation
=======
  dataset,
  apiVersion,
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
>>>>>>> a461a885a55db84d853d94360b8b2c355672cbd9
})
