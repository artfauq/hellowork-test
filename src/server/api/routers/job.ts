import { z } from 'zod'

import { jobijoba } from '@src/lib'
import { createTRPCRouter, publicProcedure } from '@src/server/api/trpc'

export const jobRouter = createTRPCRouter({
  login: publicProcedure.mutation(async () => {
    const { token } = await jobijoba.login()

    return token
  }),
  search: publicProcedure
    .input(
      z.object({
        limit: z.number().optional().default(10),
        page: z.number().optional().default(1),
        token: z.string(),
        what: z.string(),
        where: z.string(),
      }),
    )
    .query(({ input: { token, ...params } }) => jobijoba.searchAds(token, params)),
})
