import ky from 'ky'

import { env } from '@src/env.mjs'

import { LoginResponse, SearchAdsParams, SearchAdsResponse } from './types'

const COUNTRY = 'fr'
const JOBIJOBA_API_URL = 'https://api.jobijoba.com/v3'

const jobijoba = ky.extend({
  prefixUrl: `${JOBIJOBA_API_URL}/${COUNTRY}/`,
})

export const login = async () => {
  const res = await jobijoba
    .post('login', {
      json: {
        client_id: env.JOBIJOBA_CLIENT_ID,
        client_secret: env.JOBIJOBA_CLIENT_SECRET,
      },
    })
    .json<LoginResponse>()

  return res
}

export const searchAds = async (token: string, params: SearchAdsParams) => {
  const res = await jobijoba
    .get('ads/search', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      searchParams: params,
    })
    .json<SearchAdsResponse>()

  return res.data
}
