export function getAssetPath(path: string): string {
  // Add the basePath in production, which is '/portfolio'
  const basePath = process.env.NODE_ENV === "production" ? "/portfolio" : ""
  return `${basePath}${path}`
}
