"use server";

import { redirect } from "next/navigation";
import { getUser } from "@/lib/auth";
import { ORDERS, CART, type OrderItem } from "@/lib/data";

export async function reorder(orderId: string, items: OrderItem[]) {
  const user = await getUser();

  try {
    const order = ORDERS.find((o) => o.id === orderId);
    if (!order) throw new Error("Order not found");

    CART[user.id] = [...(CART[user.id] ?? []), ...items];
    redirect("/cart");
  } catch (e) {
    console.error("Reorder failed", e);
    return { ok: false };
  }
}
