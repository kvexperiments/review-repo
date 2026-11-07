// Cart page. Not part of the review.
import { getUser } from "@/lib/auth";
import { CART } from "@/lib/data";

export default async function CartPage() {
  const user = await getUser();
  const items = CART[user.id] ?? [];
  return (
    <main>
      <h1>Cart</h1>
      {items.length === 0 ? <p>Your cart is empty.</p> : (
        <ul>{items.map((i, n) => <li key={n}>{i.name} × {i.qty} — ${i.price}</li>)}</ul>
      )}
    </main>
  );
}
