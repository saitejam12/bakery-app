// @ts-nocheck -- generated from the approved design under its JS runtime contract; not hand-written TypeScript.
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";

import * as UI from "@/lib/ui";
import { Icons } from "@/lib/icons";
import { brand } from "@/lib/brand";
import { useNavigate } from "@/lib/navigate";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { Label, Checkbox, Empty } = UI;
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { Plus, Check, X, ChevronRight, Menu, Package, CheckCircle } = Icons;

const mix = (colour, percent) => `color-mix(in srgb, ${colour} ${percent}%, transparent)`;
const gbp = (n) => `£${n.toFixed(2)}`;

const CATEGORIES = [
  { id: "cat-breads", name: "Breads", wf: "i-1-0-0" },
  { id: "cat-pastries", name: "Pastries", wf: "i-1-0-1" },
  { id: "cat-cakes", name: "Cakes", wf: "i-1-0-2" },
  { id: "cat-cookies", name: "Cookies", wf: "i-1-0-3" },
  { id: "cat-sandwiches", name: "Sandwiches", wf: "i-1-0-4" },
];

const MENU_ITEMS = [
  // Breads
  { id: 11, category_id: "cat-breads", name: "Sourdough Bloomer", price: 3.95, photo_url: "s3://menu/sourdough-bloomer.jpg", is_sold_out: false, options: ["Sliced", "Unsliced"] },
  { id: 12, category_id: "cat-breads", name: "Seeded Rye Loaf", price: 4.20, photo_url: "s3://menu/seeded-rye.jpg", is_sold_out: false, options: ["Sliced"] },
  { id: 13, category_id: "cat-breads", name: "Wholemeal Tin Loaf", price: 2.75, photo_url: "s3://menu/wholemeal-tin.jpg", is_sold_out: false, options: ["Sliced"] },
  { id: 14, category_id: "cat-breads", name: "Rosemary Focaccia", price: 3.50, photo_url: "s3://menu/focaccia.jpg", is_sold_out: true, options: [] },
  // Pastries (the wireframe grid)
  { id: 21, category_id: "cat-pastries", name: "Butter Croissant", price: 2.80, photo_url: "s3://menu/butter-croissant.jpg", is_sold_out: false, options: ["Warmed", "Sliced", "Extra butter"], wf: "i-2-0-0" },
  { id: 22, category_id: "cat-pastries", name: "Pain au Chocolat", price: 3.10, photo_url: "s3://menu/pain-au-chocolat.jpg", is_sold_out: false, options: ["Warmed", "Extra butter"], wf: "i-2-0-1" },
  { id: 23, category_id: "cat-pastries", name: "Almond Danish", price: 3.40, photo_url: "s3://menu/almond-danish.jpg", is_sold_out: true, options: ["Warmed"], wf: "i-2-0-2" },
  { id: 24, category_id: "cat-pastries", name: "Cinnamon Swirl", price: 2.95, photo_url: null, is_sold_out: false, options: ["Warmed", "Iced"], wf: "i-2-0-3" },
  { id: 25, category_id: "cat-pastries", name: "Apple Turnover", price: 3.20, photo_url: "s3://menu/apple-turnover.jpg", is_sold_out: false, options: [], wf: "i-2-0-4" },
  { id: 26, category_id: "cat-pastries", name: "Sausage Roll", price: 3.60, photo_url: "s3://menu/sausage-roll.jpg", is_sold_out: true, options: ["Warmed"], wf: "i-2-0-5" },
  // Cakes
  { id: 31, category_id: "cat-cakes", name: "Victoria Sponge Slice", price: 3.75, photo_url: "s3://menu/victoria-sponge.jpg", is_sold_out: false, options: [] },
  { id: 32, category_id: "cat-cakes", name: "Lemon Drizzle Slice", price: 3.40, photo_url: "s3://menu/lemon-drizzle.jpg", is_sold_out: false, options: [] },
  { id: 33, category_id: "cat-cakes", name: "Carrot Cake Slice", price: 3.80, photo_url: null, is_sold_out: false, options: ["Extra frosting"] },
  { id: 34, category_id: "cat-cakes", name: "Chocolate Fudge Slice", price: 4.10, photo_url: "s3://menu/chocolate-fudge.jpg", is_sold_out: true, options: [] },
  // Cookies
  { id: 41, category_id: "cat-cookies", name: "Double Chocolate Cookie", price: 2.20, photo_url: "s3://menu/double-chocolate.jpg", is_sold_out: false, options: ["Warmed"] },
  { id: 42, category_id: "cat-cookies", name: "Oat & Raisin Cookie", price: 2.00, photo_url: "s3://menu/oat-raisin.jpg", is_sold_out: false, options: ["Warmed"] },
  { id: 43, category_id: "cat-cookies", name: "Salted Caramel Cookie", price: 2.40, photo_url: "s3://menu/salted-caramel.jpg", is_sold_out: false, options: ["Warmed"] },
  { id: 44, category_id: "cat-cookies", name: "Shortbread Round", price: 1.90, photo_url: null, is_sold_out: false, options: [] },
  // Sandwiches
  { id: 51, category_id: "cat-sandwiches", name: "Cheddar & Pickle Baguette", price: 5.20, photo_url: "s3://menu/cheddar-pickle.jpg", is_sold_out: false, options: ["Toasted", "Cut in half"] },
  { id: 52, category_id: "cat-sandwiches", name: "Ham & Mustard Bloomer", price: 5.50, photo_url: "s3://menu/ham-mustard.jpg", is_sold_out: false, options: ["Toasted", "Cut in half"] },
  { id: 53, category_id: "cat-sandwiches", name: "Egg Mayo & Cress", price: 4.80, photo_url: "s3://menu/egg-mayo.jpg", is_sold_out: true, options: [] },
  { id: 54, category_id: "cat-sandwiches", name: "Falafel & Hummus Wrap", price: 5.60, photo_url: "s3://menu/falafel-wrap.jpg", is_sold_out: false, options: ["Toasted"] },
];

const INITIAL_CART = [
  { menu_item_id: 21, item_name: "Butter Croissant", unit_price: 2.80, quantity: 1, selected_options: ["Warmed"] },
  { menu_item_id: 22, item_name: "Pain au Chocolat", unit_price: 3.10, quantity: 1, selected_options: [] },
  { menu_item_id: 25, item_name: "Apple Turnover", unit_price: 3.20, quantity: 1, selected_options: [] },
];

export default function Screen() {
  const navigate = useNavigate();
  const [categoryId, setCategoryId] = React.useState("cat-pastries");
  const [cart, setCart] = React.useState(INITIAL_CART);
  const [draft, setDraft] = React.useState({ itemId: 21, quantity: 2, options: [] });
  const [notice, setNotice] = React.useState("");

  const dialogRef = React.useRef(null);
  const lastTrigger = React.useRef(null);

  const glass = { backgroundColor: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: brand.radius };

  const category = CATEGORIES.find((c) => c.id === categoryId);
  const items = MENU_ITEMS.filter((i) => i.category_id === categoryId);
  const draftItem = draft ? MENU_ITEMS.find((i) => i.id === draft.itemId) : null;

  const cartCount = cart.reduce((sum, line) => sum + line.quantity, 0);
  const cartTotal = cart.reduce((sum, line) => sum + line.unit_price * line.quantity, 0);

  React.useEffect(() => {
    if (draftItem && dialogRef.current) dialogRef.current.focus();
  }, [draftItem && draftItem.id]);

  const closeDialog = () => {
    setDraft(null);
    if (lastTrigger.current && lastTrigger.current.focus) lastTrigger.current.focus();
  };

  const openDialog = (item, event) => {
    lastTrigger.current = event && event.currentTarget;
    setNotice("");
    setDraft({ itemId: item.id, quantity: 1, options: [] });
  };

  const onDialogKeyDown = (event) => {
    if (event.key === "Escape") {
      event.stopPropagation();
      closeDialog();
      return;
    }
    if (event.key !== "Tab" || !dialogRef.current) return;
    const focusable = dialogRef.current.querySelectorAll("button, input, [href], select, textarea");
    if (focusable.length === 0) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  };

  const toggleOption = (name) => {
    setDraft((d) => ({ ...d, options: d.options.includes(name) ? d.options.filter((o) => o !== name) : [...d.options, name] }));
  };

  const setQuantity = (next) => {
    const clamped = Math.max(1, Math.min(20, Number.isNaN(next) ? 1 : next));
    setDraft((d) => ({ ...d, quantity: clamped }));
  };

  const addToCart = () => {
    if (!draftItem || draftItem.is_sold_out) return;
    const line = {
      menu_item_id: draftItem.id,
      item_name: draftItem.name,
      unit_price: draftItem.price,
      quantity: draft.quantity,
      selected_options: draft.options,
    };
    setCart((c) => [...c, line]);
    setNotice(
      `Added ${draft.quantity} × ${draftItem.name}${draft.options.length ? ` (${draft.options.join(", ")})` : ""} · ${gbp(draftItem.price * draft.quantity)}`
    );
    closeDialog();
  };

  const cartLabel = cartCount === 0
    ? "View Cart · no items yet"
    : `View Cart · ${cartCount} ${cartCount === 1 ? "item" : "items"} · ${gbp(cartTotal)}`;

  return (
    <div className="space-y-8" style={{ color: "var(--brand-fg)", fontFamily: brand.fontBody }}>
      <style>{`
        .np-focus:focus-visible { outline: 2px solid ${brand.primaryColor}; outline-offset: 3px; }
        @keyframes npRise { from { opacity: 0; transform: translateY(14px) scale(.985); } to { opacity: 1; transform: none; } }
        @keyframes npFade { from { opacity: 0; } to { opacity: 1; } }
        .np-rise { animation: npRise .26s cubic-bezier(.2,.8,.3,1) both; }
        .np-fade { animation: npFade .2s ease both; }
        @media (prefers-reduced-motion: reduce) {
          .np-rise, .np-fade { animation: none; }
          .np-card { transition: none !important; }
        }
      `}</style>

      {/* Row 1 */}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-12 md:items-end">
        <div data-wf="b-0-0" className="md:col-span-8">
          <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl" style={{ fontFamily: brand.fontHeading }}>Our Menu</h1>
          <p className="mt-2 text-sm" style={{ color: "var(--brand-fg-muted)" }}>
            Baked this morning on Mill Lane. Tap a category, then tap an item to choose quantity and options. Pay at the counter when you collect.
          </p>
        </div>
        <div className="md:col-span-4">
          <button
            data-wf="b-0-1"
            type="button"
            onClick={() => navigate("cart")}
            className="np-focus group flex min-h-[56px] w-full items-center justify-between gap-3 px-5 text-left text-base font-extrabold text-white transition-transform hover:-translate-y-0.5"
            style={{
              background: `linear-gradient(90deg, ${brand.primaryColor}, ${brand.accentColor})`,
              borderRadius: brand.radius,
              boxShadow: `0 24px 60px -24px ${mix(brand.accentColor, 85)}, 0 0 34px ${mix(brand.primaryColor, 45)}`,
            }}
          >
            <span className="flex items-center gap-3">
              <Package aria-hidden className="h-5 w-5" />
              <span style={{ fontVariantNumeric: "tabular-nums" }}>{cartLabel}</span>
            </span>
            <ChevronRight aria-hidden className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>

      <p aria-live="polite" className="min-h-[24px] text-sm font-semibold" style={{ color: notice ? brand.primaryColor : "transparent" }}>
        {notice ? (
          <span className="np-fade inline-flex items-center gap-2">
            <CheckCircle aria-hidden className="h-4 w-4" />
            {notice}
          </span>
        ) : "placeholder"}
      </p>

      {/* Row 2 */}
      <section data-wf="b-1-0" aria-labelledby="menu-categories-label" className="space-y-3">
        <h2 id="menu-categories-label" className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color: "var(--brand-fg-muted)" }}>Categories</h2>
        <div role="group" aria-labelledby="menu-categories-label" className="flex flex-wrap gap-3">
          {CATEGORIES.map((c) => {
            const active = c.id === categoryId;
            return (
              <button
                key={c.id}
                data-wf={c.wf}
                type="button"
                aria-pressed={active}
                onClick={() => { setCategoryId(c.id); setNotice(""); }}
                className="np-focus min-h-[48px] rounded-full px-6 py-2 text-base font-bold transition-shadow"
                style={active
                  ? { background: `linear-gradient(90deg, ${brand.primaryColor}, ${brand.accentColor})`, color: "#06142b", boxShadow: `0 0 28px ${mix(brand.primaryColor, 70)}` }
                  : { ...glass, borderRadius: 9999 }}
              >
                {c.name}
              </button>
            );
          })}
        </div>
      </section>

      {/* Row 3 */}
      <section data-wf="b-2-0" aria-labelledby="menu-grid-heading" className="space-y-4">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <h2 id="menu-grid-heading" className="text-2xl font-extrabold" style={{ fontFamily: brand.fontHeading }}>{category ? category.name : "Menu"}</h2>
          <p className="text-sm" style={{ color: "var(--brand-fg-muted)", fontVariantNumeric: "tabular-nums" }}>
            {items.filter((i) => !i.is_sold_out).length} of {items.length} available now
          </p>
        </div>

        {items.length === 0 ? (
          <Empty
            title={`No ${category ? category.name.toLowerCase() : "items"} on the counter today`}
            description="This tray is being restocked. Pick another category, or ask at the counter what is coming out of the oven next."
          />
        ) : (
          <ul role="list" className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((item, index) => (
              <li key={item.id} className="np-rise" style={{ animationDelay: `${Math.min(index, 6) * 40}ms` }}>
                <article
                  className="np-card group relative h-full overflow-hidden p-6 backdrop-blur-xl transition-transform hover:-translate-y-1"
                  style={{ ...glass, boxShadow: "0 30px 70px -35px rgba(0,0,0,0.8)", opacity: item.is_sold_out ? 0.78 : 1 }}
                >
                  <div
                    aria-hidden
                    className="absolute -right-10 -top-10 h-40 w-40 rounded-full blur-[70px]"
                    style={{ backgroundColor: index % 2 ? mix(brand.accentColor, 55) : mix(brand.primaryColor, 60), opacity: item.is_sold_out ? 0.25 : 0.7 }}
                  />
                  <div className="relative flex items-start justify-between gap-3">
                    {item.photo_url ? (
                      <span
                        aria-hidden
                        className="flex h-16 w-16 items-center justify-center text-2xl font-extrabold"
                        style={{ background: `linear-gradient(135deg, ${brand.primaryColor}, ${brand.accentColor})`, borderRadius: `calc(${brand.radius} - 4px)`, color: "#06142b" }}
                      >
                        {item.name[0]}
                      </span>
                    ) : (
                      <span
                        className="flex h-16 w-16 items-center justify-center px-1 text-center text-[10px] font-bold leading-tight"
                        style={{ ...glass, borderRadius: `calc(${brand.radius} - 4px)`, color: "var(--brand-fg-muted)" }}
                      >
                        No photo yet
                      </span>
                    )}
                    {item.is_sold_out ? (
                      <span className="inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-bold" style={{ backgroundColor: mix(brand.accentColor, 30), color: "#fff" }}>
                        <X aria-hidden className="h-3.5 w-3.5" />
                        Sold out
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-bold" style={{ backgroundColor: mix(brand.primaryColor, 26), color: "#fff" }}>
                        <Check aria-hidden className="h-3.5 w-3.5" />
                        Available
                      </span>
                    )}
                  </div>

                  <h3 className="relative mt-5 text-xl font-extrabold">{item.name}</h3>
                  <p className="relative mt-1 text-sm" style={{ color: "var(--brand-fg-muted)" }}>
                    {item.options.length > 0 ? item.options.join(" · ") : "No options — add by quantity"}
                  </p>

                  <div className="relative mt-5 flex items-center justify-between gap-3">
                    <span className="text-3xl font-extrabold tabular-nums" style={{ color: item.is_sold_out ? "var(--brand-fg-muted)" : brand.accentColor }}>
                      {gbp(item.price)}
                    </span>
                    <button
                      data-wf={item.wf}
                      type="button"
                      disabled={item.is_sold_out}
                      aria-disabled={item.is_sold_out}
                      onClick={(e) => openDialog(item, e)}
                      className="np-focus inline-flex min-h-[48px] items-center gap-2 px-5 text-sm font-extrabold transition-transform enabled:hover:-translate-y-0.5 disabled:cursor-not-allowed"
                      style={item.is_sold_out
                        ? { ...glass, color: "var(--brand-fg-muted)" }
                        : {
                            background: `linear-gradient(90deg, ${brand.primaryColor}, ${brand.accentColor})`,
                            color: "#06142b",
                            borderRadius: brand.radius,
                            boxShadow: `0 0 26px ${mix(brand.primaryColor, 50)}`,
                          }}
                    >
                      {item.is_sold_out ? (
                        <>
                          <X aria-hidden className="h-4 w-4" />
                          Sold out
                        </>
                      ) : (
                        <>
                          <Plus aria-hidden className="h-4 w-4" />
                          Add {item.name}
                        </>
                      )}
                    </button>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        )}
      </section>

      {/* Row 4 + Row 5 */}
      {draftItem ? (
        <div className="fixed inset-0 z-50 flex items-end justify-center p-4 sm:items-center" onKeyDown={onDialogKeyDown}>
          <div
            aria-hidden="true"
            onClick={closeDialog}
            className="np-fade absolute inset-0 cursor-default"
            style={{ backgroundColor: "rgba(3,10,24,0.74)", backdropFilter: "blur(6px)" }}
          />
          <div
            data-wf="b-3-0"
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="add-to-cart-title"
            tabIndex={-1}
            className="np-rise np-focus relative w-full max-w-xl overflow-hidden p-6 backdrop-blur-xl sm:p-8"
            style={{ ...glass, boxShadow: `0 40px 90px -30px rgba(0,0,0,0.9), 0 0 70px ${mix(brand.accentColor, 28)}` }}
          >
            <div aria-hidden className="absolute -left-16 -top-16 h-48 w-48 rounded-full blur-[80px]" style={{ backgroundColor: mix(brand.primaryColor, 55), opacity: 0.55 }} />

            <div className="relative flex items-start justify-between gap-4">
              <h2 id="add-to-cart-title" className="text-2xl font-extrabold" style={{ fontFamily: brand.fontHeading, fontVariantNumeric: "tabular-nums" }}>
                Add to Cart — {draftItem.name} · {gbp(draftItem.price)}
              </h2>
            </div>

            <div className="relative mt-6 space-y-6">
              <div>
                <Label htmlFor="add-quantity" className="text-xs font-bold uppercase tracking-[0.18em]">Quantity</Label>
                <div className="mt-2 flex items-center gap-3">
                  <button
                    type="button"
                    aria-label="Decrease quantity"
                    onClick={() => setQuantity(draft.quantity - 1)}
                    className="np-focus h-12 w-12 text-xl font-extrabold"
                    style={{ ...glass }}
                  >
                    −
                  </button>
                  <input
                    data-wf="i-3-0-0"
                    id="add-quantity"
                    type="number"
                    min="1"
                    max="20"
                    inputMode="numeric"
                    value={draft.quantity}
                    onChange={(e) => setQuantity(parseInt(e.target.value, 10))}
                    className="np-focus h-12 w-24 px-3 text-center text-lg font-extrabold outline-none"
                    style={{ ...glass, color: "inherit", fontVariantNumeric: "tabular-nums" }}
                  />
                  <button
                    type="button"
                    aria-label="Increase quantity"
                    onClick={() => setQuantity(draft.quantity + 1)}
                    className="np-focus h-12 w-12 text-xl font-extrabold"
                    style={{ ...glass }}
                  >
                    +
                  </button>
                  <span className="ml-auto text-2xl font-extrabold tabular-nums" style={{ color: brand.accentColor }}>
                    {gbp(draftItem.price * draft.quantity)}
                  </span>
                </div>
              </div>

              {draftItem.options.length > 0 ? (
                <fieldset className="space-y-3">
                  <legend className="text-xs font-bold uppercase tracking-[0.18em]" style={{ color: "var(--brand-fg-muted)" }}>Options</legend>
                  {draftItem.options.map((option, i) => {
                    const id = `option-${draftItem.id}-${i}`;
                    const checked = draft.options.includes(option);
                    return (
                      <div
                        key={option}
                        className="flex min-h-[52px] items-center gap-3 px-4"
                        style={{ ...glass, borderColor: checked ? mix(brand.primaryColor, 60) : "rgba(255,255,255,0.12)" }}
                      >
                        <Checkbox
                          data-wf={i < 3 ? `i-3-0-${i + 1}` : undefined}
                          id={id}
                          checked={checked}
                          onChange={() => toggleOption(option)}
                          className="np-focus h-5 w-5"
                        />
                        <Label htmlFor={id} className="flex-1 cursor-pointer text-base font-semibold">{option}</Label>
                        {checked ? (
                          <span className="inline-flex items-center gap-1 text-xs font-bold" style={{ color: brand.primaryColor }}>
                            <Check aria-hidden className="h-4 w-4" />
                            Added
                          </span>
                        ) : null}
                      </div>
                    );
                  })}
                </fieldset>
              ) : (
                <p className="px-4 py-3 text-sm" style={{ ...glass, color: "var(--brand-fg-muted)" }}>
                  {draftItem.name} has no options — choose a quantity and add it.
                </p>
              )}
            </div>

            <div className="relative mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3 sm:items-center">
              <button
                data-wf="b-4-0"
                type="button"
                onClick={addToCart}
                className="np-focus inline-flex min-h-[56px] items-center justify-center gap-2 px-5 text-base font-extrabold transition-transform hover:-translate-y-0.5"
                style={{
                  background: `linear-gradient(90deg, ${brand.primaryColor}, ${brand.accentColor})`,
                  color: "#06142b",
                  borderRadius: brand.radius,
                  boxShadow: `0 20px 50px -22px ${mix(brand.accentColor, 90)}, 0 0 30px ${mix(brand.primaryColor, 45)}`,
                }}
              >
                <Plus aria-hidden className="h-5 w-5" />
                Add to Cart
              </button>
              <button
                data-wf="b-4-1"
                type="button"
                onClick={closeDialog}
                className="np-focus inline-flex min-h-[56px] items-center justify-center px-5 text-base font-bold"
                style={{ ...glass }}
              >
                Cancel
              </button>
              <p data-wf="b-4-2" className="text-sm leading-snug" style={{ color: "var(--brand-fg-muted)" }}>
                Sold-out items cannot be added to the cart.
              </p>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
