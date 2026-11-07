import { getUser } from "@/lib/auth";
import { CART } from "@/lib/data";

export const metadata = { title: "Order history" };

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const user = await getUser();
  const cartCount = CART[user.id]?.length ?? 0;

  return (
    <html lang="en">
      <body style={{ fontFamily: "system-ui", maxWidth: 640, margin: "2rem auto" }}>
        <header style={{ display: "flex", justifyContent: "space-between" }}>
          <strong>Hi, {user.name}</strong>
          <a href="/cart">Cart ({cartCount})</a>
        </header>
        {children}
      </body>
    </html>
  );
}
