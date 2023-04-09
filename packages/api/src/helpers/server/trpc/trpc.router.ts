
import * as trpcExpress from "@trpc/server/adapters/express";
import { createContext } from "./trpc.context.";
import { router } from "./trpc.helper";
import { userRouter } from "../../../entities/user/user.controller";
import { customerRouter } from "../../../entities/customer/customer.controller";
import { supplierRouter } from "../../../entities/supplier/supplier.controller";
import { serviceOfferRouter } from "../../../entities/serviceOffer/serviceOffer.controller";
import { supplierServiceOfferPriceRouter } from "../../../entities/supplierServiceOfferPrice/supplierServiceOfferPrice.controller";
import { clinicalOfferRouter } from "../../../entities/clinicalOffer/clinicalOffer.controller";
import { clinicalServiceOptionRouter } from "../../../entities/clinicalServiceOption/clinicalServiceOption.controller";
import { travelOfferRouter } from "../../../entities/travelOffer/travelOffer.controller";
import { travelServiceOptionRouter } from "../../../entities/travelServiceOption/travelServiceOption.controller";
import { accomodationOfferRouter } from "../../../entities/accomodationOffer/accomodationOffer.controller";
import { accomodationServiceOptionRouter } from "../../../entities/accomodationServiceOption/accomodationServiceOption.controller";
import { supplierAdditionalChargeRouter } from "../../../entities/supplierAdditionalCharge/supplierAdditionalCharge.controller";
import { additionalChargeOptionRouter } from "../../../entities/additionalChargeOption/additionalChargeOption.controller";
import { supplierDiscountRouter } from "../../../entities/supplierDiscount/supplierDiscount.controller";
import { discountOptionRouter } from "../../../entities/discountOption/discountOption.controller";
import { supplierExclusionRouter } from "../../../entities/supplierExclusion/supplierExclusion.controller";
import { exclusionOptionRouter } from "../../../entities/exclusionOption/exclusionOption.controller";
import { bookingRouter } from "../../../entities/booking/booking.controller";
import { bookingItemRouter } from "../../../entities/bookingItem/bookingItem.controller";
import { bookingItemAdditionalChargeRouter } from "../../../entities/bookingItemAdditionalCharge/bookingItemAdditionalCharge.controller";
import { bookingItemDiscountRouter } from "../../../entities/bookingItemDiscount/bookingItemDiscount.controller";
import { expressHandler } from "trpc-playground/handlers/express";
import { renderTrpcPanel } from "trpc-panel";
import { configs } from "../../configs/configs";
import { Request, Response } from "express";

// =================================================================

export const appRouter = router({
    user: userRouter,
    customer: customerRouter,
    supplier: supplierRouter,
    serviceOffer: serviceOfferRouter,
    supplierServiceOfferPrice: supplierServiceOfferPriceRouter,
    clinicalOffer: clinicalOfferRouter,
    clinicalServiceOption: clinicalServiceOptionRouter,
    travelOffer: travelOfferRouter,
    travelServiceOption: travelServiceOptionRouter,
    accomodationOffer: accomodationOfferRouter,
    accomodationServiceOption: accomodationServiceOptionRouter,
    supplierAdditionalCharge: supplierAdditionalChargeRouter,
    additionalChargeOption: additionalChargeOptionRouter,
    supplierDiscount: supplierDiscountRouter,
    discountOption: discountOptionRouter,
    supplierExclusion: supplierExclusionRouter,
    exclusionOption: exclusionOptionRouter,
    booking: bookingRouter,
    bookingItem: bookingItemRouter,
    bookingItemAdditionalCharge: bookingItemAdditionalChargeRouter,
    bookingItemDiscount: bookingItemDiscountRouter,
});

// =================================================================

export const trpcMiddleware = trpcExpress.createExpressMiddleware({
  router: appRouter,
  createContext,
});

// =================================================================

export const trpcDocsMiddleware = (_: Request, res: Response) => {
  return res.send(renderTrpcPanel(appRouter, { url: configs.API_URL }));
};

// =================================================================

export const trpcPlaygroundMiddleware = async () =>
  await expressHandler({
    trpcApiEndpoint: "/trpc",
    playgroundEndpoint: "/playground",
    router: appRouter,
  });

// =================================================================

export type AppRouter = typeof appRouter;