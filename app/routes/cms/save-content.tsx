import { ActionArgs, json } from "@remix-run/server-runtime";
import { updateContentBySlug } from "~/domains/cms.server";

export async function action({ request }: ActionArgs) {
  const data = (await request.formData()).get("data");
  const { name, value } = JSON.parse(data);

  try {
    await updateContentBySlug({
      name,
      body: JSON.stringify(value),
    });
    return json({ error: null, ok: true });
  } catch (error) {
    return json({ error: error.message, ok: false });
  }
}
