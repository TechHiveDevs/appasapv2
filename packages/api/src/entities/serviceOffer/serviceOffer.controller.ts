import { publicProcedure, router } from '../../helpers/server/trpc/trpc.helper'
import { genericCrudRouterController } from '../../helpers/generic-crud/generic-crud.controller'
import { serviceOfferService } from './serviceOffer.service'
import { serviceOfferValidation } from './serviceOffer.validation'

export const serviceOfferRouter = router({
  ...genericCrudRouterController('serviceOffer', serviceOfferValidation),

  // -------------------------------------

  customRoute: publicProcedure.query(({ ctx: _ctx, input: _input }) => {
    return serviceOfferService.serviceOfferCustomService()
  }),
})
