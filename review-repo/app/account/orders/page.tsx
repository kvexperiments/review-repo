import { getUser } from "@/lib/auth";
import { getOrders, getRecommendations, formatTotal } from "@/lib/orders";
import OrderCard from "@/components/OrderCard";

export default async function OrdersPage() {
  const user = await getUser();
  const orders = await getOrders(user.id);
  const recs = await getRecommendations(user.id);

  const lifetimeSpend = orders.reduce((sum, o) => sum + formatTotal(o), 0);

  return (
    <main>
      <h1>Your orders</h1>
      <p>Lifetime spend: ${lifetimeSpend}</p>

      {orders.map((o) => (
        <OrderCard key={o.id} order={o} />
      ))}

      <h2>Recommended for you</h2>
      <ul>
        {recs.map((r) => (
          <li key={r}>{r}</li>
        ))}
      </ul>
    </main>
  );
}
