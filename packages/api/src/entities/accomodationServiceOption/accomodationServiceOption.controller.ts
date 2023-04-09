import { publicProcedure, router } from '../../helpers/server/trpc/trpc.helper'
import { genericCrudRouterController } from '../../helpers/generic-crud/generic-crud.controller'
import { accomodationServiceOptionService } from './accomodationServiceOption.service'
import { accomodationServiceOptionValidation } from './accomodationServiceOption.validation'

export const accomodationServiceOptionRouter = router({
  ...genericCrudRouterController('accomodationServiceOption', accomodationServiceOptionValidation),

  // -------------------------------------

  customRoute: publicProcedure.query(({ ctx: _ctx, input: _input }) => {
    return accomodationServiceOptionService.accomodationServiceOptionCustomService()
  }),
})
