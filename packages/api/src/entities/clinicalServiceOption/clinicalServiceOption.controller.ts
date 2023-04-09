import { publicProcedure, router } from '../../helpers/server/trpc/trpc.helper'
import { genericCrudRouterController } from '../../helpers/generic-crud/generic-crud.controller'
import { clinicalServiceOptionService } from './clinicalServiceOption.service'
import { clinicalServiceOptionValidation } from './clinicalServiceOption.validation'

export const clinicalServiceOptionRouter = router({
  ...genericCrudRouterController('clinicalServiceOption', clinicalServiceOptionValidation),

  // -------------------------------------

  customRoute: publicProcedure.query(({ ctx: _ctx, input: _input }) => {
    return clinicalServiceOptionService.clinicalServiceOptionCustomService()
  }),
})
