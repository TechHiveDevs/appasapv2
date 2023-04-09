import { publicProcedure, router } from '../../helpers/server/trpc/trpc.helper'
import { genericCrudRouterController } from '../../helpers/generic-crud/generic-crud.controller'
import { supplierAdditionalChargeService } from './supplierAdditionalCharge.service'
import { supplierAdditionalChargeValidation } from './supplierAdditionalCharge.validation'

export const supplierAdditionalChargeRouter = router({
  ...genericCrudRouterController('supplierAdditionalCharge', supplierAdditionalChargeValidation),

  // -------------------------------------

  customRoute: publicProcedure.query(({ ctx: _ctx, input: _input }) => {
    return supplierAdditionalChargeService.supplierAdditionalChargeCustomService()
  }),
})
