import { userFormSchema } from "./user/schema";
import { z } from "zod";
import { makeDomainFunction } from "domain-functions";
import { prisma } from "~/db.server";
import bcrypt from "bcryptjs";

const getUserById = makeDomainFunction(z.object({ id: z.string() }))(({ id }) =>
  prisma.user.findUnique({ where: { id } })
);

const getUserByEmail = makeDomainFunction(z.object({ email: z.string() }))(
  ({ email }) => prisma.user.findUnique({ where: { email } })
);

const verifyLogin = makeDomainFunction(
  z.object({ email: z.string(), password: z.string() })
)(async ({ email, password }) => {
  const userWithPassword = await prisma.user.findUnique({
    where: { email },
    include: {
      password: true,
    },
  });

  if (!userWithPassword || !userWithPassword.password) {
    return null;
  }

  const isValid = await bcrypt.compare(
    password,
    userWithPassword.password.hash
  );

  if (!isValid) {
    return null;
  }

  const { password: _password, ...userWithoutPassword } = userWithPassword;

  return userWithoutPassword;
});

const createUser = makeDomainFunction(userFormSchema)(
  async ({ email, name, password, role }) => {
    const hashedPassword = await bcrypt.hash(password, 10);
    return prisma.user.create({
      data: {
        email,
        name,
        role,
        password: {
          create: {
            hash: hashedPassword,
          },
        },
      },
    });
  }
);

export { getUserById, getUserByEmail, createUser, verifyLogin };
