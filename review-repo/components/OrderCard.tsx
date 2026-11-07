"use client";

import { useTransition } from "react";
import { formatTotal, type Order } from "@/lib/orders";
import { reorder } from "@/app/account/orders/actions";

export default function OrderCard({ order: o }: { order: Order }) {
  const [pending, startTransition] = useTransition();

  return (
    <div style={{ border: "1px solid #ccc", padding: 12, marginBottom: 8 }}>
      <p>
        <strong>{o.id}</strong> · {new Date(o.createdAt).toLocaleString()}
      </p>
      <p>Total: ${formatTotal(o)}</p>
      <button
        disabled={pending}
        onClick={() => startTransition(() => { reorder(o.id, o.items); })}
      >
        {pending ? "Adding..." : "Reorder"}
      </button>
    </div>
  );
}
