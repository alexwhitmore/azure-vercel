/*
*   Parameters
*/

@description('Required. Name of the static site.')
@minLength(1)
@maxLength(40)
param staticSiteName string

@allowed([
  'Free'
  'Standard'
])
@description('Optional. Type of static site to deploy.')
param sku string = 'Free'

@description('Optional. Location to deploy all resources.')
param location string = resourceGroup().location

@description('Optional. Tags of the resource.')
param tags object?

@description('Optional. False if config file is locked for this static web app; otherwise, true.')
param allowConfigFileUpdates bool = true

@allowed([
  'Enabled'
  'Disabled'
])
@description('Optional. State indicating whether staging environments are allowed or not allowed for a static web app.')
param stagingEnvironmentPolicy string = 'Enabled'

@allowed([
  'Disabled'
  'Disabling'
  'Enabled'
  'Enabling'
])
@description('Optional. State indicating the status of the enterprise grade CDN serving traffic to the static web app.')
param enterpriseGradeCdnStatus string = 'Disabled'

@description('Optional. The provider that submitted the last deployment to the primary environment of the static site.')
param provider string = 'None'

@description('Optional. The branch name of the GitHub repository.')
param branch string?

@description('Optional. Build properties for the static site.')
param buildProperties object?

@secure()
@description('Optional. The Personal Access Token for accessing the GitHub repository.')
param repositoryToken string?

@description('Optional. The name of the GitHub repository.')
param repositoryUrl string?

@description('Optional. Template Options for the static site.')
param templateProperties object?

/*
*   Static Site
*/

resource staticSite 'Microsoft.Web/staticSites@2021-03-01' = {
  name: staticSiteName
  location: location
  tags: tags
  // identity: identity
  sku: {
    name: sku
    tier: sku
  }
  properties: {
    allowConfigFileUpdates: allowConfigFileUpdates
    stagingEnvironmentPolicy: stagingEnvironmentPolicy
    enterpriseGradeCdnStatus: enterpriseGradeCdnStatus
    provider: !empty(provider) ? provider : 'None'
    branch: branch
    buildProperties: buildProperties
    repositoryToken: repositoryToken
    repositoryUrl: repositoryUrl
    templateProperties: templateProperties
  }
}

/*
*   Outputs
*/

@description('The name of the static site.')
output name string = staticSite.name

@description('The resource ID of the static site.')
output id string = staticSite.id

@description('The resource group the static site was deployed into.')
output resourceGroupName string = resourceGroup().name

@description('The location the resource was deployed into.')
output location string = staticSite.location
