import { publicProcedure, router } from '../../helpers/server/trpc/trpc.helper'
import { genericCrudRouterController } from '../../helpers/generic-crud/generic-crud.controller'
import { supplierServiceOfferPriceService } from './supplierServiceOfferPrice.service'
import { supplierServiceOfferPriceValidation } from './supplierServiceOfferPrice.validation'

export const supplierServiceOfferPriceRouter = router({
  ...genericCrudRouterController('supplierServiceOfferPrice', supplierServiceOfferPriceValidation),

  // -------------------------------------

  customRoute: publicProcedure.query(({ ctx: _ctx, input: _input }) => {
    return supplierServiceOfferPriceService.supplierServiceOfferPriceCustomService()
  }),
})
