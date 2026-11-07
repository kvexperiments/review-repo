# PR #142: Order history with one-click reorder

An AI wrote this PR **and** an AI reviewed it. Your job is to review the review.

## Your task (45 minutes, solo, no AI tools)

1. Read the ticket below and the 5 files in scope.
2. Open `AI_REVIEW.md` and grade each of the 11 comments in `REVIEW.md` (Part A, 30 min).
3. Find what the AI missed, then give your verdict and top 3 (Part B, 15 min).

Allowed: Next.js / React docs, browser DevTools, running the app.
Not allowed: ChatGPT, Claude, Copilot or any other AI assistant, including inline autocomplete.

## The ticket: ACC-142

> As a signed-in learner, I can see my past orders with their date and total, and reorder any of them with one click. Reordering adds the same courses to my cart and takes me to the cart.

## Files in scope (about 120 lines)

| File | What it does |
|---|---|
| `app/account/orders/page.tsx` | The order history page (Server Component) |
| `app/account/orders/actions.ts` | `reorder` Server Action |
| `components/OrderCard.tsx` | One order card with the Reorder button (Client Component) |
| `lib/orders.ts` | Data access for orders and recommendations |
| `app/layout.tsx` | Header with the user's name and cart count |
| `.env.example` | Environment variables |

Out of scope (fixtures and helpers, you can skip them): `lib/data.ts`, `lib/auth.ts`, `app/cart`, `app/switch`, `app/page.tsx`.

## Running it (optional)

The app starts automatically in the online IDE. You can also run it locally with `npm install && npm run dev`.

- `/account/orders` is the order history page (you are signed in as **Asha**, user `u1`).
- `/switch?uid=u2` signs you in as **Ravi** (`u2`). `/switch?uid=u1` switches back.
- `/cart` shows the cart.

Test data: Asha owns `ORD-1001` and `ORD-1002`. Ravi owns `ORD-2001`.
