import express from 'express'
const dotenv = require('dotenv').config()
const { WebSiteManagementClient } = require('@azure/arm-appservice')
const { DefaultAzureCredential } = require('@azure/identity')
import type { StaticSite } from './types'

const app = express()
app.use(express.json())

/**
 * TODO: Remove this variable as it should instead come from the client
 */
const tempStaticSiteValues = {
  name: 'testStaticSite0',
  branch: 'main',
  output: 'dist',
  appLocation: '/',
  location: 'westus2', // TODO: Find all available locations for static sites
  repoUrl: 'https://github.com/alexwhitmore/astro-portfolio',
}

async function createOrUpdateAStaticSite() {
  const subscriptionId: string = process.env.AZURE_SUBSCRIPTION_ID || ''
  const resourceGroupName = process.env.AZURE_RESOURCE_GROUP_ID || ''
  const name = tempStaticSiteValues.name
  const staticSiteEnvelope: StaticSite = {
    branch: tempStaticSiteValues.branch,
    buildProperties: {
      apiLocation: '',
      outputLocation: tempStaticSiteValues.output,
      appLocation: tempStaticSiteValues.appLocation,
    },
    location: tempStaticSiteValues.location,
    repositoryToken: process.env.GH_TOKEN || '',
    repositoryUrl: tempStaticSiteValues.repoUrl,
    sku: { name: 'Free', tier: 'Free' },
  }
  const credential = new DefaultAzureCredential()
  const client = new WebSiteManagementClient(credential, subscriptionId)
  const result = await client.staticSites.beginCreateOrUpdateStaticSiteAndWait(
    resourceGroupName,
    name,
    staticSiteEnvelope
  )
  console.log(result)
}

createOrUpdateAStaticSite().catch(console.error)
