import { publicProcedure, router } from '../../helpers/server/trpc/trpc.helper'
import { genericCrudRouterController } from '../../helpers/generic-crud/generic-crud.controller'
import { supplierExclusionService } from './supplierExclusion.service'
import { supplierExclusionValidation } from './supplierExclusion.validation'

export const supplierExclusionRouter = router({
  ...genericCrudRouterController('supplierExclusion', supplierExclusionValidation),

  // -------------------------------------

  customRoute: publicProcedure.query(({ ctx: _ctx, input: _input }) => {
    return supplierExclusionService.supplierExclusionCustomService()
  }),
})
