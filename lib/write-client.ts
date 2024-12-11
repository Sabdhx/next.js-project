import "server-only"
import { createClient } from 'next-sanity'
import { apiVersion, dataset, projectId,token } from '../sanity/env'
export const writeClient = createClient({
  projectId,
  dataset:"production",
  apiVersion,
  useCdn: false, // Set to false if statically generating pages, using ISR or tag-based revalidation
  token
})
if(!writeClient.config().token){
    throw new Error("token not found")
}