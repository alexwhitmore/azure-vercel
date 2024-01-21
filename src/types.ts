type StaticSiteBuildProperties = {
  apiLocation: string
  outputLocation: string
  appLocation: string
}

type StaticSiteSku = {
  tier: 'Free' | 'Standard'
  name: 'Free' | 'Standard'
}

export type StaticSite = {
  branch: string
  location: string
  buildProperties: StaticSiteBuildProperties
  repositoryToken: string
  repositoryUrl: string
  sku: StaticSiteSku
}
