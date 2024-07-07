"use server";

import { signIn } from "@/auth";

export async function handleSocialLogin(formData) {
  const action = formData.get("action");
  await signIn(action, { redirectTo: "/" });
}
