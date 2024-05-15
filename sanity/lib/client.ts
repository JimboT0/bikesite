import { createClient } from "next-sanity"

import { apiVersion, dataset, projectId, useCdn } from "../env"

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  token: "sktNdEH8hBKw4hslhQ47twkbMcaUWEMQ8uDiG0ari89QuFzrJw9Uw8uVleN1zxbPLQGegUexwsGA1KrjJ5iE9AxokhF48HzkT0DLGXWPLNkSaB7clwKvESpHYUMdBihcW1w2EYGrLzYohL6LzTIjKSAPEhav12A8vKR3L1UuDMciQygTM3NX"
})
