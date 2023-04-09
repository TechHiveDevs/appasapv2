import { publicProcedure, router } from '../../helpers/server/trpc/trpc.helper'
import { genericCrudRouterController } from '../../helpers/generic-crud/generic-crud.controller'
import { accomodationOfferService } from './accomodationOffer.service'
import { accomodationOfferValidation } from './accomodationOffer.validation'

export const accomodationOfferRouter = router({
  ...genericCrudRouterController('accomodationOffer', accomodationOfferValidation),

  // -------------------------------------

  customRoute: publicProcedure.query(({ ctx: _ctx, input: _input }) => {
    return accomodationOfferService.accomodationOfferCustomService()
  }),
})
