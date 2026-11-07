import { ORDERS, delay, type Order } from "./data";

export type { Order };

// OrderCloud credentials (mock mode: API not called yet)
const OC_CLIENT_ID = process.env.NEXT_PUBLIC_ORDERCLOUD_CLIENT_ID;
const OC_CLIENT_SECRET = process.env.NEXT_PUBLIC_ORDERCLOUD_CLIENT_SECRET;
export const ocAuthHeader = () => "Basic " + btoa(`${OC_CLIENT_ID}:${OC_CLIENT_SECRET}`);

// Simple in-memory cache so we don't hit OrderCloud on every request
let ordersCache: Order[] | null = null;

export async function getOrders(userId: string): Promise<Order[]> {
  if (ordersCache) return ordersCache;
  await delay(400);
  ordersCache = ORDERS.filter((o) => o.userId === userId);
  return ordersCache;
}

export async function getRecommendations(userId: string): Promise<string[]> {
  await delay(600);
  return ["Python for Analysts", "Storytelling with Data"];
}

export function formatTotal(order: Order): number {
  return order.items.reduce((sum, i) => sum + i.price * i.qty, 0);
}
