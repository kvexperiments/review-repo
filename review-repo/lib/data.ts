// Test fixtures standing in for OrderCloud. Not part of the review.
export type OrderItem = { sku: string; name: string; price: number; qty: number };
export type Order = { id: string; userId: string; createdAt: string; items: OrderItem[] };

export const ORDERS: Order[] = [
  { id: "ORD-1001", userId: "u1", createdAt: "2026-10-02T09:30:00Z",
    items: [{ sku: "CRS-101", name: "Intro to Data Science", price: 49, qty: 1 }] },
  { id: "ORD-1002", userId: "u1", createdAt: "2026-10-05T23:45:00Z",
    items: [{ sku: "CRS-205", name: "Advanced Excel", price: 29, qty: 2 }] },
  { id: "ORD-2001", userId: "u2", createdAt: "2026-10-11T14:10:00Z",
    items: [{ sku: "CRS-330", name: "Leadership Essentials", price: 199, qty: 1 }] },
];

// In-memory cart per user id
export const CART: Record<string, OrderItem[]> = {};

export const delay = (ms: number) => new Promise((r) => setTimeout(r, ms));
