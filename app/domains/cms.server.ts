import { z } from "zod";
import { makeDomainFunction } from "domain-functions";
import { prisma } from "~/db.server";

const getContentByName = makeDomainFunction(z.object({ name: z.string() }))(
  ({ name }) =>
    prisma.content.findFirstOrThrow({
      where: { name },
    })
);

const updateContentBySlug = makeDomainFunction(
  z.object({ name: z.string(), body: z.string() })
)(({ name, body }) =>
  prisma.content.update({
    where: { name },
    data: { body: JSON.parse(body) },
  })
);

export { getContentByName, updateContentBySlug };
