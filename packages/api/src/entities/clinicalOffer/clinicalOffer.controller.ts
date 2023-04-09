import { publicProcedure, router } from '../../helpers/server/trpc/trpc.helper'
import { genericCrudRouterController } from '../../helpers/generic-crud/generic-crud.controller'
import { clinicalOfferService } from './clinicalOffer.service'
import { clinicalOfferValidation } from './clinicalOffer.validation'

export const clinicalOfferRouter = router({
  ...genericCrudRouterController('clinicalOffer', clinicalOfferValidation),

  // -------------------------------------

  customRoute: publicProcedure.query(({ ctx: _ctx, input: _input }) => {
    return clinicalOfferService.clinicalOfferCustomService()
  }),
})
