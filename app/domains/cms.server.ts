import { z } from "zod";
import { makeDomainFunction } from "domain-functions";
import { prisma } from "~/db.server";

const getContentBySlug = makeDomainFunction(z.object({ slug: z.string() }))(
  ({ slug }) =>
    prisma.content.findFirstOrThrow({
      where: { slug },
    })
);

export { getContentBySlug };
