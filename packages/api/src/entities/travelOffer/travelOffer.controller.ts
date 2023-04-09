import { publicProcedure, router } from '../../helpers/server/trpc/trpc.helper'
import { genericCrudRouterController } from '../../helpers/generic-crud/generic-crud.controller'
import { travelOfferService } from './travelOffer.service'
import { travelOfferValidation } from './travelOffer.validation'

export const travelOfferRouter = router({
  ...genericCrudRouterController('travelOffer', travelOfferValidation),

  // -------------------------------------

  customRoute: publicProcedure.query(({ ctx: _ctx, input: _input }) => {
    return travelOfferService.travelOfferCustomService()
  }),
})
