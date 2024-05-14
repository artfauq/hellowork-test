import { z } from 'zod'

import { jobijoba } from '@src/lib'
import { createTRPCRouter, publicProcedure } from '@src/server/api/trpc'

export const jobRouter = createTRPCRouter({
  login: publicProcedure.mutation(() => jobijoba.login()),
  search: publicProcedure
    .input(
      z.object({
        limit: z.number().optional(),
        page: z.number().optional(),
        token: z.string(),
        what: z.string(),
        where: z.string(),
      }),
    )
    .query(({ input: { token, ...params } }) => jobijoba.searchAds(token, params)),
})
