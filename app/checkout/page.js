import Link from "next/link";

export default function CheckoutPage() {
  return (
    <main>
      <h1>Checkout</h1>

      <nav>
        <Link href="/">Home</Link>{" | "}
        <Link href="/menu">Menu</Link>{" | "}
        <Link href="/cart">Cart</Link>
      </nav>

      <hr />

      <h2>Delivery Information</h2>

      <form>
        <div>
          <label htmlFor="name">Name</label>
          <br />
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Enter your name"
          />
        </div>

        <br />

        <div>
          <label htmlFor="phone">Phone</label>
          <br />
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="Enter your phone"
          />
        </div>

        <br />

        <div>
          <label htmlFor="address">Address</label>
          <br />
          <textarea
            id="address"
            name="address"
            placeholder="Enter your delivery address"
          />
        </div>

        <br />

        <button type="submit">
          Place Order
        </button>
      </form>

      <br />

      <Link href="/cart">← Back to Cart</Link>
    </main>
  );
}