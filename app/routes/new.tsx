import type {
  ActionArgs,
  ActionFunction,
  LoaderArgs,
  MetaFunction,
} from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { makeDomainFunction } from "domain-functions";
import { createUser } from "~/domains/user.server";
import { userFormSchema } from "~/domains/user/schema";
import { formAction } from "~/form-action.server";
import { getUserId, createUserSession } from "~/session.server";
import { Form } from "~/form";
import { performMutation } from "remix-forms";

export async function loader({ request }: LoaderArgs) {
  const userId = await getUserId(request);
  if (userId) return redirect("/");
  return json({});
}

export const action: ActionFunction = async ({ request }: ActionArgs) => {
  const mutation = makeDomainFunction(userFormSchema)(async (values) => {
    createUser(values);
  });

  const result = performMutation({ request, schema: userFormSchema, mutation });
  if (!result.success) return json(result, 422);

  return createUserSession({
    request,
    userId: result.data.user.id,
    remember: false,
    redirectTo: "/",
  });
};

export const meta: MetaFunction = () => {
  return {
    title: "Sign Up",
  };
};

export default function Join() {
  return (
    <div className="flex p-10">
      <Form schema={userFormSchema} />
    </div>
  );
}
