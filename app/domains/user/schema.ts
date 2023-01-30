import { z } from "zod";

const ROLES = ["ADMIN", "EDITOR", "USER"] as const;

const userSchema = z.object({
  id: z.string(),
  email: z.string().email(),
  name: z.string(),
  role: z.enum(ROLES),
  password: z.string(),
});

const userFormSchema = z.object({
  email: z.string().email(),
  name: z.string().min(1),
  role: z.enum(ROLES),
  password: z.string().min(6),
});

export { userSchema, userFormSchema };
