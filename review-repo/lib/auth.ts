// Mock session. Not part of the review. Visit /switch?uid=u2 to change user.
import { cookies } from "next/headers";

export async function getUser() {
  const id = (await cookies()).get("uid")?.value ?? "u1";
  return { id, name: id === "u1" ? "Asha" : "Ravi" };
}
