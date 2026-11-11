// @ts-nocheck -- generated from the approved design under its JS runtime contract; not hand-written TypeScript.
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";

import * as UI from "@/lib/ui";
import { Icons } from "@/lib/icons";
import { brand } from "@/lib/brand";
import { useNavigate } from "@/lib/navigate";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { Button } = UI;
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { Check, Bell, Clock, CheckCircle } = Icons;

const ORDER = {
  id: 1184,
  token_number: 42,
  token_date: "2026-11-11",
  status: "received",
  total: 9.1,
  created_at_label: "11 Nov 2026, 10:24",
  stored_at_label: "10:24:17",
  lines: [
    {
      id: "i-3-0-0",
      menu_item_id: 7,
      item_name: "Butter Croissant",
      selected_options: ["Warmed"],
      quantity: 2,
      unit_price: 2.8,
      line_total: 5.6,
    },
    {
      id: "i-3-0-1",
      menu_item_id: 12,
      item_name: "Sourdough Loaf",
      selected_options: ["Sliced"],
      quantity: 1,
      unit_price: 3.5,
      line_total: 3.5,
    },
  ],
};

const RESET_SECONDS = 45;

const money = (n) => "£" + n.toFixed(2);
const padToken = (n) => String(n).padStart(3, "0");

export default function Screen() {
  const navigate = useNavigate();
  const [secondsLeft, setSecondsLeft] = React.useState(RESET_SECONDS);
  const [resetting, setResetting] = React.useState(false);

  React.useEffect(() => {
    if (resetting) return undefined;
    const id = setInterval(() => {
      setSecondsLeft((s) => (s > 0 ? s - 1 : 0));
    }, 1000);
    return () => clearInterval(id);
  }, [resetting]);

  React.useEffect(() => {
    if (secondsLeft === 0 && !resetting) {
      setResetting(true);
      navigate("menu");
    }
  }, [secondsLeft, resetting]);

  const startNewOrder = () => {
    setResetting(true);
    navigate("menu");
  };

  const token = padToken(ORDER.token_number);
  const lineCount = ORDER.lines.reduce((n, l) => n + l.quantity, 0);

  const surface = "rgba(255,255,255,0.07)";
  const hairline = "1px solid rgba(255,255,255,0.14)";
  const muted = brand.neutralColor;

  const css = `
    .kiosk-focus:focus-visible {
      outline: 3px solid ${brand.accentColor};
      outline-offset: 4px;
      border-radius: ${brand.radius};
    }
    @keyframes kioskRise {
      from { opacity: 0; transform: translateY(14px); }
      to { opacity: 1; transform: translateY(0); }
    }
    @keyframes kioskGlow {
      0%, 100% { opacity: 0.55; transform: scale(1); }
      50% { opacity: 0.9; transform: scale(1.06); }
    }
    .kiosk-rise { animation: kioskRise 520ms cubic-bezier(.2,.7,.3,1) both; }
    .kiosk-glow { animation: kioskGlow 4.5s ease-in-out infinite; }
    .kiosk-cta { transition: transform 160ms ease, box-shadow 220ms ease, filter 160ms ease; }
    .kiosk-cta:hover { transform: translateY(-2px); filter: saturate(1.1); }
    .kiosk-cta:active { transform: translateY(1px); }
    .kiosk-bar { transition: width 1000ms linear; }
    @media (prefers-reduced-motion: reduce) {
      .kiosk-rise, .kiosk-glow, .kiosk-cta, .kiosk-bar {
        animation: none !important;
        transition: none !important;
      }
    }
  `;

  return (
    <div
      className="w-full min-h-full px-4 sm:px-6 lg:px-8 pt-6 pb-16"
      style={{ fontFamily: brand.fontBody, color: "#eaf2ff" }}
    >
      <style>{css}</style>

      <div className="mx-auto w-full max-w-[880px]">
        {/* Row 1 — page title */}
        <header data-wf="b-0-0" className="kiosk-rise">
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 mb-5"
            style={{
              borderRadius: 999,
              border: hairline,
              backgroundColor: "rgba(34,211,238,0.10)",
              color: brand.primaryColor,
            }}
          >
            <CheckCircle className="w-4 h-4" aria-hidden="true" />
            <span className="text-[12px] font-semibold tracking-[0.14em] uppercase">
              Order received
            </span>
          </div>

          <h1
            className="text-[34px] sm:text-[40px] leading-[1.12] font-extrabold tracking-[-0.02em]"
            style={{ fontFamily: brand.fontHeading }}
          >
            Order confirmed — thank you!
          </h1>
        </header>

        {/* Row 2 — token ticket card */}
        <section
          data-wf="b-1-0"
          aria-labelledby="token-heading"
          className="relative mt-8 kiosk-rise"
          style={{ animationDelay: "60ms" }}
        >
          <div
            aria-hidden="true"
            className="kiosk-glow pointer-events-none absolute -inset-8 -z-10"
            style={{
              background: `radial-gradient(60% 60% at 30% 40%, ${brand.primaryColor}33 0%, transparent 70%), radial-gradient(55% 55% at 72% 60%, ${brand.accentColor}33 0%, transparent 70%)`,
              filter: "blur(44px)",
            }}
          />

          <div
            className="relative overflow-hidden"
            style={{
              borderRadius: brand.radius,
              border: hairline,
              backgroundColor: surface,
              backdropFilter: "blur(18px)",
              WebkitBackdropFilter: "blur(18px)",
              boxShadow: "0 40px 80px -36px rgba(0,0,0,0.85)",
            }}
          >
            <div
              aria-hidden="true"
              style={{
                height: 4,
                background: `linear-gradient(90deg, ${brand.primaryColor}, ${brand.accentColor})`,
              }}
            />

            <div className="px-6 sm:px-10 pt-9 pb-8 text-center">
              <h2
                id="token-heading"
                className="text-[12px] sm:text-[13px] font-semibold uppercase tracking-[0.3em]"
                style={{ color: muted, fontFamily: brand.fontHeading }}
              >
                Your token number
              </h2>

              <p
                className="mt-3 font-extrabold leading-none"
                style={{
                  fontFamily: brand.fontHeading,
                  fontVariantNumeric: "tabular-nums",
                  fontSize: "clamp(92px, 20vw, 168px)",
                  letterSpacing: "-0.04em",
                  backgroundImage: `linear-gradient(135deg, ${brand.primaryColor} 0%, #a5b4fc 45%, ${brand.accentColor} 100%)`,
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                  textShadow: "0 24px 60px rgba(232,121,249,0.22)",
                }}
              >
                {token}
              </p>

              <p className="mt-4 text-[15px]" style={{ color: muted }}>
                Order #{ORDER.id} · {lineCount} items · {money(ORDER.total)} due at the counter
              </p>
            </div>

            {/* ticket tear line + notches — kiosk receipt motif */}
            <div className="relative">
              <span
                aria-hidden="true"
                className="absolute -left-4 -top-4 w-8 h-8 rounded-full"
                style={{ backgroundColor: brand.backgroundColor, border: hairline }}
              />
              <span
                aria-hidden="true"
                className="absolute -right-4 -top-4 w-8 h-8 rounded-full"
                style={{ backgroundColor: brand.backgroundColor, border: hairline }}
              />
              <div
                aria-hidden="true"
                className="mx-10"
                style={{
                  borderTop: "1px dashed rgba(255,255,255,0.22)",
                }}
              />
            </div>

            <div className="px-6 sm:px-10 py-5 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
              <span
                className="inline-flex items-center gap-2 text-[13px] font-semibold"
                style={{ color: brand.primaryColor }}
              >
                <Check className="w-4 h-4" aria-hidden="true" />
                Status: Received — saved to the kiosk at {ORDER.stored_at_label}
              </span>
              <span
                className="text-[13px]"
                style={{ color: muted, fontVariantNumeric: "tabular-nums" }}
              >
                Token date {ORDER.token_date} · resets daily
              </span>
            </div>
          </div>
        </section>

        {/* Row 3 — watch-the-display prompt */}
        <section
          data-wf="b-2-0"
          role="status"
          aria-live="polite"
          className="mt-6 kiosk-rise"
          style={{ animationDelay: "120ms" }}
        >
          <div
            className="flex items-start gap-4 px-6 py-5"
            style={{
              borderRadius: brand.radius,
              border: "1px solid rgba(232,121,249,0.28)",
              backgroundColor: "rgba(232,121,249,0.09)",
            }}
          >
            <span
              className="shrink-0 grid place-items-center w-10 h-10"
              aria-hidden="true"
              style={{
                borderRadius: 12,
                backgroundColor: "rgba(232,121,249,0.18)",
                color: brand.accentColor,
              }}
            >
              <Bell className="w-5 h-5" />
            </span>
            <p className="text-[17px] sm:text-[18px] leading-[1.5] max-w-[62ch]">
              Watch for token{" "}
              <strong style={{ color: brand.accentColor, fontVariantNumeric: "tabular-nums" }}>
                {token}
              </strong>{" "}
              on the order display above the counter. Pay at the counter when you collect your
              order.
            </p>
          </div>
        </section>

        {/* Row 4 — order summary */}
        <section
          data-wf="b-3-0"
          aria-labelledby="summary-heading"
          className="mt-6 kiosk-rise"
          style={{ animationDelay: "180ms" }}
        >
          <div
            style={{
              borderRadius: brand.radius,
              border: hairline,
              backgroundColor: "rgba(255,255,255,0.05)",
              backdropFilter: "blur(14px)",
              WebkitBackdropFilter: "blur(14px)",
            }}
          >
            <div className="px-6 sm:px-7 pt-5 pb-4 flex flex-wrap items-baseline justify-between gap-2">
              <h2
                id="summary-heading"
                className="text-[19px] font-bold tracking-[-0.01em]"
                style={{ fontFamily: brand.fontHeading }}
              >
                Order summary
              </h2>
              <span
                className="text-[13px]"
                style={{ color: muted, fontVariantNumeric: "tabular-nums" }}
              >
                · {ORDER.created_at_label}
              </span>
            </div>

            <ul className="px-6 sm:px-7 pb-2" style={{ fontVariantNumeric: "tabular-nums" }}>
              {ORDER.lines.map((line) => (
                <li
                  key={line.id}
                  data-wf={line.id}
                  className="flex items-start justify-between gap-6 py-4"
                  style={{ borderTop: "1px solid rgba(255,255,255,0.10)" }}
                >
                  <span className="flex items-baseline gap-3">
                    <span
                      className="text-[15px] font-bold shrink-0"
                      style={{ color: brand.primaryColor }}
                    >
                      {line.quantity} ×
                    </span>
                    <span className="text-[16px] leading-[1.45]">
                      {line.item_name}
                      {line.selected_options.length > 0 && (
                        <span style={{ color: muted }}>
                          {" "}
                          ({line.selected_options.join(", ")})
                        </span>
                      )}
                      <span className="block text-[13px] mt-0.5" style={{ color: muted }}>
                        {money(line.unit_price)} each
                      </span>
                    </span>
                  </span>
                  <span className="text-[16px] font-semibold whitespace-nowrap">
                    — {money(line.line_total)}
                  </span>
                </li>
              ))}

              <li
                data-wf="i-3-0-2"
                className="flex items-baseline justify-between gap-6 py-5"
                style={{ borderTop: "1px solid rgba(255,255,255,0.22)" }}
              >
                <span
                  className="text-[13px] font-semibold uppercase tracking-[0.18em]"
                  style={{ color: muted, fontFamily: brand.fontHeading }}
                >
                  Total
                </span>
                <span
                  className="text-[26px] font-extrabold whitespace-nowrap"
                  style={{ fontFamily: brand.fontHeading }}
                >
                  — {money(ORDER.total)}
                </span>
              </li>
            </ul>

            <p className="px-6 sm:px-7 pb-5 text-[13px]" style={{ color: muted }}>
              No payment was taken at this kiosk. Please pay by card or cash at the counter when
              your token is called.
            </p>
          </div>
        </section>

        {/* Row 5 — primary action */}
        <div data-wf="b-4-0" className="mt-8 kiosk-rise" style={{ animationDelay: "240ms" }}>
          <Button
            type="button"
            onClick={startNewOrder}
            disabled={resetting}
            className="kiosk-cta kiosk-focus w-full border-0 font-extrabold"
            style={{
              minHeight: 68,
              borderRadius: brand.radius,
              fontFamily: brand.fontHeading,
              fontSize: 20,
              letterSpacing: "-0.01em",
              color: "#06142b",
              backgroundImage: `linear-gradient(100deg, ${brand.primaryColor} 0%, ${brand.accentColor} 100%)`,
              boxShadow: "0 28px 60px -26px rgba(232,121,249,0.75)",
              opacity: resetting ? 0.7 : 1,
              cursor: resetting ? "progress" : "pointer",
            }}
          >
            {resetting ? "Clearing the kiosk…" : "Done — Start New Order"}
          </Button>

          <div className="mt-4">
            <div
              className="h-[3px] w-full overflow-hidden"
              style={{ borderRadius: 999, backgroundColor: "rgba(255,255,255,0.10)" }}
            >
              <div
                className="kiosk-bar h-full"
                style={{
                  width: `${(secondsLeft / RESET_SECONDS) * 100}%`,
                  borderRadius: 999,
                  background: `linear-gradient(90deg, ${brand.primaryColor}, ${brand.accentColor})`,
                }}
              />
            </div>
            <p
              className="mt-3 text-center text-[13px]"
              style={{ color: muted, fontVariantNumeric: "tabular-nums" }}
            >
              <Clock className="inline w-4 h-4 -mt-0.5 mr-1.5" aria-hidden="true" />
              Kiosk returns to the menu with an empty cart in {secondsLeft}s — tap Done to start the
              next order now.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
