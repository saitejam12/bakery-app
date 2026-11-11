// @ts-nocheck -- generated from the approved design under its JS runtime contract; not hand-written TypeScript.
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";

import * as UI from "@/lib/ui";
import { Icons } from "@/lib/icons";
import { brand } from "@/lib/brand";
import { useNavigate } from "@/lib/navigate";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { Button, Badge, Table, THead, TBody, TR, TH, TD, Empty } = UI;
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { Check, Menu, Clock, Trash, ArrowLeft, AlertCircle, CheckCircle } = Icons;

const SEED_LINES = [
  {
    id: "ol_8841",
    menu_item_id: "mi_104",
    item_name: "Sourdough Bloomer",
    unit_price: 4.2,
    quantity: 1,
    selected_options: ["Sliced"],
    is_sold_out: false,
  },
  {
    id: "ol_8842",
    menu_item_id: "mi_117",
    item_name: "Almond Croissant",
    unit_price: 3.1,
    quantity: 2,
    selected_options: [],
    is_sold_out: false,
  },
  {
    id: "ol_8843",
    menu_item_id: "mi_131",
    item_name: "Flat White",
    unit_price: 3.4,
    quantity: 1,
    selected_options: ["Oat milk", "Extra shot"],
    is_sold_out: false,
  },
  {
    id: "ol_8844",
    menu_item_id: "mi_122",
    item_name: "Cinnamon Bun",
    unit_price: 3.6,
    quantity: 2,
    selected_options: ["Warmed"],
    is_sold_out: false,
  },
  {
    id: "ol_8845",
    menu_item_id: "mi_140",
    item_name: "Pistachio Danish",
    unit_price: 4.0,
    quantity: 1,
    selected_options: ["Boxed to take away"],
    is_sold_out: true,
  },
];

const MAX_QTY = 9;

function money(n) {
  return "£" + n.toFixed(2);
}

export default function Screen() {
  const navigate = useNavigate();
  const [lines, setLines] = React.useState(SEED_LINES);
  const [pendingRemove, setPendingRemove] = React.useState(null);
  const [status, setStatus] = React.useState("idle"); // idle | saving | saved | error
  const [errorMsg, setErrorMsg] = React.useState(null);
  const timers = React.useRef([]);

  React.useEffect(() => {
    return () => timers.current.forEach((t) => clearTimeout(t));
  }, []);

  const soldOutLines = lines.filter((l) => l.is_sold_out);
  const payableLines = lines.filter((l) => !l.is_sold_out);
  const total = payableLines.reduce((s, l) => s + l.unit_price * l.quantity, 0);
  const itemCount = payableLines.reduce((s, l) => s + l.quantity, 0);
  const isEmpty = lines.length === 0;
  const busy = status === "saving" || status === "saved";

  const surface = {
    background: "rgba(255,255,255,0.06)",
    border: "1px solid rgba(255,255,255,0.13)",
    borderRadius: brand.radius,
    backdropFilter: "blur(14px)",
  };
  const hairline = "rgba(255,255,255,0.12)";

  function changeQty(id, delta) {
    setErrorMsg(null);
    setStatus("idle");
    setLines((prev) =>
      prev.map((l) =>
        l.id === id
          ? { ...l, quantity: Math.min(MAX_QTY, Math.max(1, l.quantity + delta)) }
          : l
      )
    );
  }

  function removeLine(id) {
    setLines((prev) => prev.filter((l) => l.id !== id));
    setPendingRemove(null);
    setErrorMsg(null);
    setStatus("idle");
  }

  function confirmOrder() {
    if (isEmpty || busy) return;
    if (soldOutLines.length > 0) {
      setStatus("error");
      setErrorMsg(
        soldOutLines.length === 1
          ? `${soldOutLines[0].item_name} sold out while you were ordering. Remove that line and we'll take the rest.`
          : `${soldOutLines.length} lines sold out while you were ordering. Remove them and we'll take the rest.`
      );
      return;
    }
    setErrorMsg(null);
    setStatus("saving");
    timers.current.push(
      setTimeout(() => setStatus("saved"), 1100),
      setTimeout(() => navigate("order-confirmation"), 2000)
    );
  }

  const css = `
    .np-f:focus-visible { outline: 2px solid ${brand.accentColor}; outline-offset: 3px; }
    @keyframes npIn { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: none; } }
    @keyframes npFade { from { opacity: 0; } to { opacity: 1; } }
    @keyframes npSpin { to { transform: rotate(360deg); } }
    .np-in { animation: npIn .3s cubic-bezier(.2,.7,.3,1) both; }
    .np-fade { animation: npFade .25s ease both; }
    .np-spin { animation: npSpin .9s linear infinite; }
    .np-step:hover:not(:disabled) { background: rgba(255,255,255,0.16); }
    .np-ghost:hover { background: rgba(255,255,255,0.10); }
    .np-cta:hover:not(:disabled) { filter: brightness(1.08); }
    .np-cta:active:not(:disabled) { transform: translateY(1px); }
    @media (prefers-reduced-motion: reduce) {
      .np-in, .np-fade, .np-spin { animation: none !important; }
      .np-cta, .np-step { transition: none !important; }
    }
  `;

  return (
    <div
      className="min-h-full w-full px-5 py-8 sm:px-8 lg:px-10"
      style={{ backgroundColor: brand.backgroundColor, fontFamily: brand.fontBody }}
    >
      <style>{css}</style>

      <div className="mx-auto w-full max-w-6xl">
        {/* ── Row 1 ─────────────────────────────── */}
        <header data-wf="b-0-0" className="mb-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p
                className="mb-2 text-[12px] font-semibold uppercase tracking-[0.22em]"
                style={{ color: brand.accentColor }}
              >
                Counter pickup · Hearth &amp; Crumb
              </p>
              <h1
                className="text-[34px] font-extrabold leading-tight tracking-tight text-white sm:text-[40px]"
                style={{ fontFamily: brand.fontHeading }}
              >
                Your Cart
              </h1>
              <p
                className="mt-2 max-w-[62ch] text-[15px] leading-relaxed"
                style={{ color: brand.neutralColor }}
              >
                Check every line before you confirm. Change a quantity or take something
                off — the total updates straight away.
              </p>
            </div>

            <span
              className="inline-flex items-center gap-2 rounded-full px-3.5 py-2 text-[12px] font-semibold"
              style={{
                border: `1px solid ${hairline}`,
                background: "rgba(255,255,255,0.05)",
                color: brand.neutralColor,
                fontVariantNumeric: "tabular-nums",
              }}
            >
              <Clock className="h-3.5 w-3.5" aria-hidden="true" />
              Kiosk 2 · cart saved 12:41
            </span>
          </div>
        </header>

        {/* ── Row 2 ─────────────────────────────── */}
        <section data-wf="b-1-0" className="mb-7" style={surface}>
          <div
            className="flex items-center justify-between gap-4 px-5 py-4 sm:px-6"
            style={{ borderBottom: `1px solid ${hairline}` }}
          >
            <h2
              className="text-[18px] font-bold text-white"
              style={{ fontFamily: brand.fontHeading }}
            >
              Cart lines
            </h2>
            <span
              className="text-[13px] font-medium"
              style={{ color: brand.neutralColor, fontVariantNumeric: "tabular-nums" }}
            >
              {lines.length} {lines.length === 1 ? "line" : "lines"} · {itemCount}{" "}
              {itemCount === 1 ? "item" : "items"} to pay for
            </span>
          </div>

          <div className="overflow-x-auto">
            <Table
              className="w-full min-w-[720px] text-left"
              style={{ fontVariantNumeric: "tabular-nums" }}
            >
              <caption className="sr-only">
                Cart lines with item, options, unit price, quantity, line total and a
                remove action
              </caption>
              <THead>
                <TR style={{ borderBottom: `1px solid ${hairline}` }}>
                  {[
                    ["i-1-0-0", "Item", "text-left"],
                    ["i-1-0-1", "Options", "text-left"],
                    ["i-1-0-2", "Unit price", "text-right"],
                    ["i-1-0-3", "Quantity", "text-center"],
                    ["i-1-0-4", "Line total", "text-right"],
                    ["i-1-0-5", "Remove", "text-right"],
                  ].map(([wf, label, align]) => (
                    <TH
                      key={wf}
                      data-wf={wf}
                      scope="col"
                      className={`${align} px-5 py-3.5 text-[11px] font-semibold uppercase tracking-[0.16em]`}
                      style={{ color: brand.neutralColor, background: "transparent" }}
                    >
                      {label}
                    </TH>
                  ))}
                </TR>
              </THead>

              <TBody>
                {isEmpty ? (
                  <TR>
                    <TD colSpan={6} className="px-5 py-12 text-center">
                      <p className="text-[15px] font-semibold text-white">
                        Nothing in this order yet
                      </p>
                      <p
                        className="mt-1.5 text-[14px]"
                        style={{ color: brand.neutralColor }}
                      >
                        Pick a category on the menu and your lines will appear here.
                      </p>
                    </TD>
                  </TR>
                ) : (
                  lines.map((line) => {
                    const out = line.is_sold_out;
                    const lineTotal = line.unit_price * line.quantity;
                    const confirming = pendingRemove === line.id;
                    return (
                      <TR
                        key={line.id}
                        className="np-in"
                        style={{
                          borderBottom: `1px solid ${hairline}`,
                          background: out ? "rgba(232,121,249,0.06)" : "transparent",
                        }}
                      >
                        <TD className="px-5 py-4 align-middle">
                          <div className="flex items-center gap-3">
                            <span
                              aria-hidden="true"
                              className="hidden h-9 w-9 shrink-0 items-center justify-center text-[13px] font-bold sm:flex"
                              style={{
                                borderRadius: 12,
                                border: `1px solid ${hairline}`,
                                background: "rgba(255,255,255,0.05)",
                                color: brand.primaryColor,
                              }}
                            >
                              {line.item_name.slice(0, 1)}
                            </span>
                            <span className="min-w-0">
                              <span
                                className="block text-[15px] font-semibold"
                                style={{ color: out ? brand.neutralColor : "#ffffff" }}
                              >
                                {line.item_name}
                              </span>
                              {out ? (
                                <Badge
                                  className="mt-1.5 inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider"
                                  style={{
                                    background: "rgba(232,121,249,0.16)",
                                    color: brand.accentColor,
                                    border: `1px solid ${brand.accentColor}55`,
                                  }}
                                >
                                  <AlertCircle className="h-3 w-3" aria-hidden="true" />
                                  Sold out
                                </Badge>
                              ) : null}
                            </span>
                          </div>
                        </TD>

                        <TD className="px-5 py-4 align-middle">
                          {line.selected_options.length === 0 ? (
                            <span
                              className="text-[13px]"
                              style={{ color: brand.neutralColor }}
                            >
                              No options
                            </span>
                          ) : (
                            <ul className="flex flex-wrap gap-1.5">
                              {line.selected_options.map((opt) => (
                                <li
                                  key={opt}
                                  className="rounded-full px-2.5 py-1 text-[12px] font-medium"
                                  style={{
                                    border: `1px solid ${hairline}`,
                                    background: "rgba(34,211,238,0.10)",
                                    color: brand.primaryColor,
                                  }}
                                >
                                  {opt}
                                </li>
                              ))}
                            </ul>
                          )}
                        </TD>

                        <TD
                          className="px-5 py-4 text-right align-middle text-[15px]"
                          style={{ color: out ? brand.neutralColor : "#ffffff" }}
                        >
                          {money(line.unit_price)}
                        </TD>

                        <TD className="px-5 py-4 align-middle">
                          <div className="flex items-center justify-center gap-1.5">
                            <button
                              type="button"
                              className="np-f np-step h-11 w-11 rounded-full text-[18px] font-bold text-white transition-colors disabled:opacity-35"
                              style={{
                                border: `1px solid ${hairline}`,
                                background: "rgba(255,255,255,0.07)",
                              }}
                              disabled={out || busy || line.quantity <= 1}
                              aria-label={`Decrease quantity of ${line.item_name}`}
                              onClick={() => changeQty(line.id, -1)}
                            >
                              −
                            </button>
                            <span
                              className="w-10 text-center text-[17px] font-bold text-white"
                              aria-live="polite"
                            >
                              {line.quantity}
                            </span>
                            <button
                              type="button"
                              className="np-f np-step h-11 w-11 rounded-full text-[18px] font-bold text-white transition-colors disabled:opacity-35"
                              style={{
                                border: `1px solid ${hairline}`,
                                background: "rgba(255,255,255,0.07)",
                              }}
                              disabled={out || busy || line.quantity >= MAX_QTY}
                              aria-label={`Increase quantity of ${line.item_name}`}
                              onClick={() => changeQty(line.id, 1)}
                            >
                              +
                            </button>
                          </div>
                          {line.quantity >= MAX_QTY && !out ? (
                            <p
                              className="np-fade mt-1.5 text-center text-[11px]"
                              style={{ color: brand.neutralColor }}
                            >
                              9 is the kiosk limit — ask at the counter for more
                            </p>
                          ) : null}
                        </TD>

                        <TD
                          className="px-5 py-4 text-right align-middle text-[16px] font-bold"
                          style={{ color: out ? brand.neutralColor : brand.primaryColor }}
                        >
                          {out ? "—" : money(lineTotal)}
                        </TD>

                        <TD
                          className="px-5 py-4 text-right align-middle"
                          onKeyDown={(e) => {
                            if (e.key === "Escape") setPendingRemove(null);
                          }}
                        >
                          {confirming ? (
                            <div className="np-fade flex items-center justify-end gap-2">
                              <span
                                className="hidden text-[12px] font-medium sm:inline"
                                style={{ color: brand.neutralColor }}
                              >
                                Remove?
                              </span>
                              <button
                                type="button"
                                className="np-f h-11 rounded-full px-3.5 text-[13px] font-bold"
                                style={{
                                  background: brand.accentColor,
                                  color: brand.backgroundColor,
                                }}
                                onClick={() => removeLine(line.id)}
                              >
                                Yes, remove
                              </button>
                              <button
                                type="button"
                                className="np-f np-ghost h-11 rounded-full px-3.5 text-[13px] font-semibold text-white transition-colors"
                                style={{ border: `1px solid ${hairline}` }}
                                onClick={() => setPendingRemove(null)}
                              >
                                Keep
                              </button>
                            </div>
                          ) : (
                            <button
                              type="button"
                              className="np-f np-ghost inline-flex h-11 items-center gap-2 rounded-full px-3.5 text-[13px] font-semibold text-white transition-colors disabled:opacity-40"
                              style={{ border: `1px solid ${hairline}` }}
                              disabled={busy}
                              onClick={() => setPendingRemove(line.id)}
                            >
                              <Trash className="h-4 w-4" aria-hidden="true" />
                              <span>
                                Remove
                                <span className="sr-only"> {line.item_name}</span>
                              </span>
                            </button>
                          )}
                        </TD>
                      </TR>
                    );
                  })
                )}
              </TBody>
            </Table>
          </div>
        </section>

        {/* ── Row 3 ─────────────────────────────── */}
        <div className="mb-7 grid grid-cols-12 gap-6">
          <div data-wf="b-2-0" className="col-span-12 lg:col-span-8">
            <div
              className="relative overflow-hidden px-6 py-6 sm:px-8"
              style={{
                ...surface,
                boxShadow: isEmpty ? "none" : `0 0 56px -18px ${brand.primaryColor}`,
              }}
            >
              {/* ticket-stub notches — the kiosk's token motif */}
              <span
                aria-hidden="true"
                className="absolute left-[-11px] top-1/2 h-[22px] w-[22px] -translate-y-1/2 rounded-full"
                style={{
                  background: brand.backgroundColor,
                  border: `1px solid ${hairline}`,
                }}
              />
              <span
                aria-hidden="true"
                className="absolute right-[-11px] top-1/2 h-[22px] w-[22px] -translate-y-1/2 rounded-full"
                style={{
                  background: brand.backgroundColor,
                  border: `1px solid ${hairline}`,
                }}
              />
              <div className="flex flex-wrap items-end justify-between gap-6">
                <div>
                  <p
                    className="text-[12px] font-semibold uppercase tracking-[0.2em]"
                    style={{ color: brand.neutralColor }}
                  >
                    Order total
                  </p>
                  <p
                    className="mt-1 text-[46px] font-extrabold leading-none sm:text-[56px]"
                    style={{
                      fontFamily: brand.fontHeading,
                      color: isEmpty ? brand.neutralColor : brand.primaryColor,
                      fontVariantNumeric: "tabular-nums",
                      textShadow: isEmpty
                        ? "none"
                        : `0 0 42px ${brand.primaryColor}66`,
                    }}
                  >
                    {money(total)}
                  </p>
                </div>
                <dl
                  className="min-w-[180px] space-y-2 border-t pt-4 text-[13px] sm:border-l sm:border-t-0 sm:pl-6 sm:pt-0"
                  style={{ borderColor: hairline, color: brand.neutralColor }}
                >
                  <div className="flex justify-between gap-6">
                    <dt>Items</dt>
                    <dd
                      className="font-semibold text-white"
                      style={{ fontVariantNumeric: "tabular-nums" }}
                    >
                      {itemCount}
                    </dd>
                  </div>
                  <div className="flex justify-between gap-6">
                    <dt>Lines</dt>
                    <dd
                      className="font-semibold text-white"
                      style={{ fontVariantNumeric: "tabular-nums" }}
                    >
                      {lines.length}
                    </dd>
                  </div>
                  <div className="flex justify-between gap-6">
                    <dt>Collection</dt>
                    <dd className="font-semibold text-white">At the counter</dd>
                  </div>
                </dl>
              </div>
              {soldOutLines.length > 0 ? (
                <p
                  className="np-fade mt-5 flex items-start gap-2 border-t pt-4 text-[13px] leading-relaxed"
                  style={{ borderColor: hairline, color: brand.accentColor }}
                >
                  <AlertCircle
                    className="mt-0.5 h-4 w-4 shrink-0"
                    aria-hidden="true"
                  />
                  <span>
                    Sold-out lines are not counted in this total. Remove them to confirm.
                  </span>
                </p>
              ) : null}
            </div>
          </div>

          <div data-wf="b-2-1" className="col-span-12 lg:col-span-4">
            {isEmpty ? (
              <div
                className="np-in h-full px-2 py-6"
                style={{
                  ...surface,
                  boxShadow: `0 0 60px -26px ${brand.accentColor}`,
                }}
              >
                <Empty
                  title="Your cart is empty"
                  description="Your cart is empty — add an item from the menu to confirm an order."
                  action={
                    <Button
                      className="np-f np-cta mt-1 h-12 rounded-full px-5 text-[14px] font-bold transition"
                      style={{
                        background: brand.accentColor,
                        color: brand.backgroundColor,
                        borderRadius: 999,
                      }}
                      onClick={() => navigate("menu")}
                    >
                      Browse the menu
                    </Button>
                  }
                />
              </div>
            ) : null}
          </div>
        </div>

        {/* ── Row 4 ─────────────────────────────── */}
        <p
          data-wf="b-3-0"
          className="mb-7 flex items-start gap-3 px-5 py-4 text-[14px] leading-relaxed sm:px-6"
          style={{
            ...surface,
            color: brand.neutralColor,
            background: "rgba(34,211,238,0.07)",
            borderColor: "rgba(34,211,238,0.22)",
          }}
        >
          <CheckCircle
            className="mt-0.5 h-5 w-5 shrink-0"
            style={{ color: brand.primaryColor }}
            aria-hidden="true"
          />
          <span>
            <span className="font-semibold text-white">
              No payment is taken at the kiosk.
            </span>{" "}
            You pay at the counter when you collect your order.
          </span>
        </p>

        {/* ── Row 5 ─────────────────────────────── */}
        <div className="grid grid-cols-12 gap-4 sm:gap-6">
          <div className="col-span-12 sm:col-span-6">
            <Button
              data-wf="b-4-0"
              type="button"
              onClick={confirmOrder}
              disabled={isEmpty || busy}
              aria-describedby="confirm-help"
              className="np-f np-cta flex h-[64px] w-full items-center justify-center gap-3 text-[18px] font-extrabold transition disabled:cursor-not-allowed"
              style={{
                borderRadius: brand.radius,
                border: "1px solid rgba(255,255,255,0.18)",
                color: brand.backgroundColor,
                fontFamily: brand.fontHeading,
                backgroundImage:
                  isEmpty || status === "saving"
                    ? "none"
                    : `linear-gradient(100deg, ${brand.primaryColor}, ${brand.accentColor})`,
                backgroundColor:
                  isEmpty || status === "saving"
                    ? "rgba(255,255,255,0.10)"
                    : undefined,
                opacity: isEmpty ? 0.55 : 1,
                boxShadow:
                  isEmpty || busy ? "none" : `0 18px 60px -20px ${brand.accentColor}`,
              }}
            >
              {status === "saving" ? (
                <>
                  <span
                    className="np-spin inline-block h-5 w-5 rounded-full border-2 border-white/30"
                    style={{ borderTopColor: "#ffffff" }}
                    aria-hidden="true"
                  />
                  <span className="text-white">Saving your order…</span>
                </>
              ) : status === "saved" ? (
                <>
                  <CheckCircle className="h-6 w-6" aria-hidden="true" />
                  Token issued
                </>
              ) : (
                <>
                  <Check className="h-6 w-6" aria-hidden="true" />
                  Confirm Order
                </>
              )}
            </Button>

            <div className="mt-3 min-h-[40px]" aria-live="polite">
              {status === "error" && errorMsg ? (
                <p
                  id="confirm-help"
                  className="np-fade flex items-start gap-2 rounded-2xl px-3.5 py-2.5 text-[13px] leading-relaxed"
                  style={{
                    border: `1px solid ${brand.accentColor}66`,
                    background: "rgba(232,121,249,0.12)",
                    color: "#ffffff",
                  }}
                >
                  <AlertCircle
                    className="mt-0.5 h-4 w-4 shrink-0"
                    style={{ color: brand.accentColor }}
                    aria-hidden="true"
                  />
                  <span>{errorMsg}</span>
                </p>
              ) : status === "saved" ? (
                <p
                  id="confirm-help"
                  className="np-fade text-[13px] leading-relaxed"
                  style={{ color: brand.primaryColor }}
                >
                  Saved to the kiosk and given today's next token. Taking you to your
                  number…
                </p>
              ) : (
                <p
                  id="confirm-help"
                  className="text-[13px] leading-relaxed"
                  style={{ color: brand.neutralColor }}
                >
                  {isEmpty
                    ? "Add at least one available item before you can confirm."
                    : "Your token is the next number in today's sequence — it appears as soon as you confirm."}
                </p>
              )}
            </div>
          </div>

          <div className="col-span-12 sm:col-span-6">
            <Button
              data-wf="b-4-1"
              type="button"
              onClick={() => navigate("menu")}
              disabled={busy}
              className="np-f np-ghost flex h-[64px] w-full items-center justify-center gap-3 text-[16px] font-bold text-white transition-colors disabled:opacity-45"
              style={{
                borderRadius: brand.radius,
                border: "1px solid rgba(255,255,255,0.16)",
                background: "rgba(255,255,255,0.05)",
                fontFamily: brand.fontHeading,
              }}
            >
              <ArrowLeft className="h-5 w-5" aria-hidden="true" />
              Back to Menu
            </Button>
            <p
              className="mt-3 text-[13px] leading-relaxed"
              style={{ color: brand.neutralColor }}
            >
              Your lines stay in the cart while you keep browsing.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
