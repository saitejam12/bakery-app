// @ts-nocheck -- generated from the approved design under its JS runtime contract; not hand-written TypeScript.
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";

import * as UI from "@/lib/ui";
import { Icons } from "@/lib/icons";
import { brand } from "@/lib/brand";
import { useNavigate } from "@/lib/navigate";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { Button, Input, Label } = UI;
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { Check, X, Menu, Clock, ArrowRight, AlertCircle, CheckCircle } = Icons;

const STAFF_ACCOUNT = { username: "mara.okonkwo", password: "rye-starter-07", display: "Mara Okonkwo" };

const MAX_ATTEMPTS = 3;
const LOCK_SECONDS = 30;

const hexToRgba = (hex, a) => {
  const h = String(hex || "#000000").replace("#", "");
  const full = h.length === 3 ? h.split("").map((c) => c + c).join("") : h;
  const n = parseInt(full, 16);
  return `rgba(${(n >> 16) & 255}, ${(n >> 8) & 255}, ${n & 255}, ${a})`;
};

const mmss = (s) => `${String(Math.floor(s / 60)).padStart(2, "0")}:${String(s % 60).padStart(2, "0")}`;

export default function Screen() {
  const navigate = useNavigate();
  const P = brand.primaryColor;
  const A = brand.accentColor;
  const N = brand.neutralColor;
  const BG = brand.backgroundColor;
  const R = brand.radius;

  const hairline = "rgba(255,255,255,0.13)";
  const glass = "rgba(255,255,255,0.06)";

  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [showPassword, setShowPassword] = React.useState(false);
  const [status, setStatus] = React.useState("idle"); // idle | checking | error | locked | unlocked | success
  const [errorKind, setErrorKind] = React.useState(null); // missing | credentials
  const [attempts, setAttempts] = React.useState(0);
  const [cooldown, setCooldown] = React.useState(0);
  const [sessionNotice, setSessionNotice] = React.useState(true);

  const timers = React.useRef([]);
  const userRef = React.useRef(null);

  React.useEffect(() => () => timers.current.forEach(clearTimeout), []);

  React.useEffect(() => {
    if (status !== "locked") return;
    const id = setInterval(() => {
      setCooldown((c) => {
        if (c <= 1) {
          clearInterval(id);
          setStatus("unlocked");
          setErrorKind(null);
          setAttempts(0);
          return 0;
        }
        return c - 1;
      });
    }, 1000);
    return () => clearInterval(id);
  }, [status]);

  const locked = status === "locked";
  const checking = status === "checking";
  const success = status === "success";
  const busy = checking || success || locked;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (busy) return;

    if (!username.trim() || !password) {
      setStatus("error");
      setErrorKind("missing");
      return;
    }

    setStatus("checking");
    setErrorKind(null);

    const t = setTimeout(() => {
      const ok =
        username.trim().toLowerCase() === STAFF_ACCOUNT.username &&
        password === STAFF_ACCOUNT.password;

      if (ok) {
        setStatus("success");
        const t2 = setTimeout(() => navigate("admin-menu"), 750);
        timers.current.push(t2);
        return;
      }

      const next = attempts + 1;
      setAttempts(next);
      setPassword("");
      if (next >= MAX_ATTEMPTS) {
        setCooldown(LOCK_SECONDS);
        setStatus("locked");
        setErrorKind("credentials");
      } else {
        setStatus("error");
        setErrorKind("credentials");
      }
    }, 900);
    timers.current.push(t);
  };

  const fieldStyle = {
    backgroundColor: "rgba(255,255,255,0.05)",
    border: `1px solid ${hairline}`,
    borderRadius: R,
    color: "#ffffff",
    height: 56,
    fontFamily: brand.fontBody,
    fontSize: 16,
  };

  const invalid = status === "error" && errorKind === "credentials";

  const css = `
    @keyframes np-rise { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: none; } }
    @keyframes np-spin { to { transform: rotate(360deg); } }
    @keyframes np-breathe { 0%, 100% { opacity: .45; } 50% { opacity: .9; } }
    .np-rise { animation: np-rise .4s cubic-bezier(.2,.8,.3,1) both; }
    .np-breathe { animation: np-breathe 5s ease-in-out infinite; }
    .np-spin { animation: np-spin .8s linear infinite; }
    .np-focus:focus-visible { outline: 2px solid var(--np-primary); outline-offset: 3px; }
    .np-field:focus { outline: none; border-color: var(--np-primary) !important; box-shadow: 0 0 0 4px var(--np-primary-soft), 0 0 36px var(--np-primary-glow); }
    .np-field::placeholder { color: var(--np-muted); }
    .np-cta { transition: transform .18s ease, filter .18s ease, box-shadow .18s ease; }
    .np-cta:hover:not(:disabled) { transform: translateY(-1px); filter: brightness(1.07); }
    .np-cta:active:not(:disabled) { transform: translateY(0); filter: brightness(.96); }
    .np-ghost { transition: background-color .18s ease, color .18s ease, border-color .18s ease; }
    .np-ghost:hover { background-color: rgba(255,255,255,0.08); color: #fff; }
    @media (prefers-reduced-motion: reduce) {
      *, *::before, *::after { animation: none !important; transition: none !important; }
    }
  `;

  return (
    <div
      className="relative min-h-screen w-full overflow-hidden"
      style={{
        backgroundColor: BG,
        fontFamily: brand.fontBody,
        "--np-primary": P,
        "--np-primary-soft": hexToRgba(P, 0.16),
        "--np-primary-glow": hexToRgba(P, 0.22),
        "--np-muted": hexToRgba(N, 0.6),
      }}
    >
      <style>{css}</style>

      {/* ambient glows + kiosk ticket motif — decorative */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="np-breathe absolute -left-32 -top-40 h-[520px] w-[520px] rounded-full"
          style={{ background: `radial-gradient(circle, ${hexToRgba(P, 0.26)} 0%, transparent 65%)`, filter: "blur(60px)" }}
        />
        <div
          className="np-breathe absolute right-[-10rem] top-1/3 h-[560px] w-[560px] rounded-full"
          style={{ background: `radial-gradient(circle, ${hexToRgba(A, 0.24)} 0%, transparent 65%)`, filter: "blur(72px)", animationDelay: "1.6s" }}
        />
        <div
          className="absolute inset-x-0 bottom-0 h-56"
          style={{ background: `linear-gradient(to top, ${hexToRgba(A, 0.08)}, transparent)` }}
        />
        <div className="hidden xl:block absolute right-[7%] top-1/2 -translate-y-1/2" style={{ transform: "translateY(-50%) rotate(-6deg)" }}>
          <div
            className="relative w-[280px] px-8 py-10 text-center"
            style={{
              backgroundColor: "rgba(255,255,255,0.05)",
              border: `1px solid ${hairline}`,
              borderRadius: R,
              backdropFilter: "blur(14px)",
              boxShadow: `0 40px 90px ${hexToRgba(P, 0.18)}`,
            }}
          >
            <p className="text-[11px] font-semibold tracking-[0.42em]" style={{ color: hexToRgba(N, 0.75) }}>
              ORDER TOKEN
            </p>
            <p
              className="mt-3 text-[96px] font-black leading-none"
              style={{
                fontFamily: brand.fontHeading,
                fontVariantNumeric: "tabular-nums",
                backgroundImage: `linear-gradient(135deg, ${P}, ${A})`,
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              42
            </p>
            <div className="relative my-6">
              <div
                className="h-px w-full"
                style={{ backgroundImage: `repeating-linear-gradient(to right, ${hexToRgba(N, 0.5)} 0 5px, transparent 5px 11px)` }}
              />
              <span className="absolute -left-[41px] -top-[9px] h-[18px] w-[18px] rounded-full" style={{ backgroundColor: BG }} />
              <span className="absolute -right-[41px] -top-[9px] h-[18px] w-[18px] rounded-full" style={{ backgroundColor: BG }} />
            </div>
            <p className="text-sm" style={{ color: hexToRgba(N, 0.85) }}>
              Kiosk 2 · Front counter
            </p>
          </div>
        </div>
      </div>

      <main className="relative mx-auto w-full max-w-6xl px-6 py-14 sm:px-10 lg:py-24">
        <div className="w-full max-w-[560px] lg:ml-[4%]">
          {/* b-0-0 — page title */}
          <header data-wf="b-0-0" className="np-rise">
            <div className="flex items-center gap-3">
              <span
                className="inline-flex h-10 w-10 items-center justify-center text-base font-black"
                style={{
                  borderRadius: 12,
                  backgroundImage: `linear-gradient(135deg, ${P}, ${A})`,
                  color: BG,
                  fontFamily: brand.fontHeading,
                  boxShadow: `0 10px 36px ${hexToRgba(A, 0.35)}`,
                }}
                aria-hidden="true"
              >
                C
              </span>
              <p className="text-[11px] font-semibold uppercase tracking-[0.34em]" style={{ color: hexToRgba(N, 0.8) }}>
                Crumb &amp; Current · Kiosk admin
              </p>
            </div>
            <h1
              className="mt-6 text-[38px] font-black leading-[1.08] tracking-tight sm:text-[44px]"
              style={{ fontFamily: brand.fontHeading, color: "#ffffff" }}
            >
              Staff Sign In
            </h1>
          </header>

          {/* b-1-0 — form */}
          <section
            data-wf="b-1-0"
            className="np-rise relative mt-8 px-6 py-8 sm:px-8"
            style={{
              backgroundColor: glass,
              border: `1px solid ${hairline}`,
              borderRadius: R,
              backdropFilter: "blur(18px)",
              boxShadow: `0 40px 90px ${hexToRgba("#000000", 0.45)}`,
              animationDelay: "60ms",
            }}
          >
            <h2 className="text-xl font-bold" style={{ fontFamily: brand.fontHeading, color: "#ffffff" }}>
              Sign in to manage the menu
            </h2>
            <p className="mt-2 text-sm leading-relaxed" style={{ color: hexToRgba(N, 0.9), maxWidth: "52ch" }}>
              Menu items, prices, photos and sold-out marks are staff only. Customers never sign in at the kiosk.
            </p>

            {sessionNotice && (
              <div
                className="np-rise mt-6 flex items-start gap-3 px-4 py-3"
                style={{ backgroundColor: hexToRgba(P, 0.1), border: `1px solid ${hexToRgba(P, 0.32)}`, borderRadius: 12 }}
              >
                <Clock className="mt-[2px] h-4 w-4 shrink-0" style={{ color: P }} aria-hidden="true" />
                <p className="flex-1 text-sm leading-relaxed" style={{ color: "#ffffff" }}>
                  <span className="font-semibold">Session ended.</span>{" "}
                  <span style={{ color: hexToRgba(N, 0.95) }}>
                    Mara was signed out at 14:08 after 20 minutes idle. Nothing was lost — the menu saved at 13:46.
                  </span>
                </p>
                <button
                  type="button"
                  onClick={() => setSessionNotice(false)}
                  aria-label="Dismiss session ended notice"
                  className="np-focus np-ghost -mr-1 -mt-1 inline-flex h-9 w-9 shrink-0 items-center justify-center"
                  style={{ borderRadius: 10, color: hexToRgba(N, 0.9) }}
                >
                  <X className="h-4 w-4" aria-hidden="true" />
                </button>
              </div>
            )}

            <div className="relative my-7" aria-hidden="true">
              <div
                className="h-px w-full"
                style={{ backgroundImage: `repeating-linear-gradient(to right, ${hexToRgba(N, 0.35)} 0 5px, transparent 5px 11px)` }}
              />
              <span className="absolute -left-[33px] -top-[9px] h-[18px] w-[18px] rounded-full sm:-left-[41px]" style={{ backgroundColor: BG }} />
              <span className="absolute -right-[33px] -top-[9px] h-[18px] w-[18px] rounded-full sm:-right-[41px]" style={{ backgroundColor: BG }} />
            </div>

            <form onSubmit={handleSubmit} noValidate>
              <div className="space-y-5">
                <div>
                  <Label htmlFor="staff-username" className="text-[13px] font-semibold tracking-wide" style={{ color: hexToRgba(N, 0.95) }}>
                    Username
                  </Label>
                  <Input
                    data-wf="i-1-0-0"
                    id="staff-username"
                    ref={userRef}
                    name="username"
                    autoComplete="username"
                    spellCheck={false}
                    placeholder="e.g. mara.okonkwo"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    disabled={busy}
                    aria-invalid={invalid || (status === "error" && errorKind === "missing" && !username.trim()) ? true : undefined}
                    aria-describedby="signin-status"
                    className="np-field np-focus mt-2 w-full px-4"
                    style={{ ...fieldStyle, opacity: busy ? 0.6 : 1 }}
                  />
                </div>

                <div>
                  <Label htmlFor="staff-password" className="text-[13px] font-semibold tracking-wide" style={{ color: hexToRgba(N, 0.95) }}>
                    Password
                  </Label>
                  <div className="relative mt-2">
                    <Input
                      data-wf="i-1-0-1"
                      id="staff-password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      autoComplete="current-password"
                      placeholder="Your staff password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      disabled={busy}
                      aria-invalid={invalid || (status === "error" && errorKind === "missing" && !password) ? true : undefined}
                      aria-describedby="signin-status"
                      className="np-field np-focus w-full px-4 pr-24"
                      style={{ ...fieldStyle, opacity: busy ? 0.6 : 1 }}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword((v) => !v)}
                      disabled={busy}
                      className="np-focus np-ghost absolute right-2 top-1/2 inline-flex h-11 -translate-y-1/2 items-center px-3 text-[13px] font-semibold"
                      style={{ borderRadius: 10, color: P, opacity: busy ? 0.5 : 1 }}
                    >
                      {showPassword ? "Hide" : "Show"}
                      <span className="sr-only"> password</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* b-2-0 — status / error text */}
              <div data-wf="b-2-0" id="signin-status" aria-live="polite" className="mt-6 min-h-[64px]">
                {status === "idle" && (
                  <p className="text-[13px] leading-relaxed" style={{ color: hexToRgba(N, 0.75) }}>
                    Staff accounts are created by the bakery manager. Passwords are stored hashed — nobody at the counter can read yours.
                  </p>
                )}

                {status === "unlocked" && (
                  <p className="np-rise text-[13px] leading-relaxed" style={{ color: hexToRgba(N, 0.9) }}>
                    Sign-in is open again. Enter your password carefully — three more misses pauses it for another {LOCK_SECONDS} seconds.
                  </p>
                )}

                {checking && (
                  <p className="np-rise flex items-center gap-2 text-sm" style={{ color: hexToRgba(N, 0.95) }}>
                    <span
                      className="np-spin inline-block h-4 w-4 rounded-full"
                      style={{ border: `2px solid ${hexToRgba(P, 0.25)}`, borderTopColor: P }}
                      aria-hidden="true"
                    />
                    Checking your credentials…
                  </p>
                )}

                {status === "error" && errorKind === "missing" && (
                  <div
                    className="np-rise flex items-start gap-3 px-4 py-3"
                    style={{ backgroundColor: hexToRgba(A, 0.12), border: `1px solid ${hexToRgba(A, 0.4)}`, borderRadius: 12 }}
                  >
                    <AlertCircle className="mt-[2px] h-4 w-4 shrink-0" style={{ color: A }} aria-hidden="true" />
                    <p className="text-sm leading-relaxed" style={{ color: "#ffffff" }}>
                      <span className="font-semibold">Missing details.</span> Enter both your username and password to continue.
                    </p>
                  </div>
                )}

                {status === "error" && errorKind === "credentials" && (
                  <div
                    className="np-rise flex items-start gap-3 px-4 py-3"
                    style={{ backgroundColor: hexToRgba(A, 0.12), border: `1px solid ${hexToRgba(A, 0.4)}`, borderRadius: 12 }}
                  >
                    <AlertCircle className="mt-[2px] h-4 w-4 shrink-0" style={{ color: A }} aria-hidden="true" />
                    <div>
                      <p className="text-sm font-semibold" style={{ color: "#ffffff" }}>
                        Incorrect username or password. Please try again.
                      </p>
                      <p className="mt-1 text-[13px]" style={{ color: hexToRgba(N, 0.95), fontVariantNumeric: "tabular-nums" }}>
                        {MAX_ATTEMPTS - attempts} of {MAX_ATTEMPTS} attempts left before sign-in pauses. Your username is kept.
                      </p>
                    </div>
                  </div>
                )}

                {locked && (
                  <div
                    className="np-rise flex items-start gap-3 px-4 py-3"
                    style={{ backgroundColor: hexToRgba(A, 0.12), border: `1px solid ${hexToRgba(A, 0.4)}`, borderRadius: 12 }}
                  >
                    <AlertCircle className="mt-[2px] h-4 w-4 shrink-0" style={{ color: A }} aria-hidden="true" />
                    <div>
                      <p className="text-sm font-semibold" style={{ color: "#ffffff" }}>
                        Sign-in paused for{" "}
                        <span style={{ fontVariantNumeric: "tabular-nums" }}>{mmss(cooldown)}</span>
                      </p>
                      <p className="mt-1 text-[13px] leading-relaxed" style={{ color: hexToRgba(N, 0.95) }}>
                        Three attempts failed on this kiosk. Only the bakery manager (Dilan Varma) can reset a staff password — ask at the
                        counter terminal, then try again.
                      </p>
                    </div>
                  </div>
                )}

                {success && (
                  <div
                    className="np-rise flex items-start gap-3 px-4 py-3"
                    style={{ backgroundColor: hexToRgba(P, 0.12), border: `1px solid ${hexToRgba(P, 0.42)}`, borderRadius: 12 }}
                  >
                    <CheckCircle className="mt-[2px] h-4 w-4 shrink-0" style={{ color: P }} aria-hidden="true" />
                    <p className="text-sm leading-relaxed" style={{ color: "#ffffff" }}>
                      <span className="font-semibold">Signed in as {STAFF_ACCOUNT.display}.</span>{" "}
                      <span style={{ color: hexToRgba(N, 0.95) }}>Opening menu management…</span>
                    </p>
                  </div>
                )}
              </div>

              {/* b-3-0 — primary action */}
              <div data-wf="b-3-0" className="mt-2">
                <Button
                  type="submit"
                  disabled={busy}
                  className="np-cta np-focus flex w-full items-center justify-center gap-2 border-0 text-base font-bold"
                  style={{
                    height: 56,
                    borderRadius: R,
                    backgroundImage: `linear-gradient(120deg, ${P}, ${A})`,
                    color: BG,
                    fontFamily: brand.fontHeading,
                    boxShadow: busy ? "none" : `0 18px 48px ${hexToRgba(P, 0.3)}`,
                    opacity: busy ? 0.55 : 1,
                    cursor: busy ? "not-allowed" : "pointer",
                  }}
                >
                  {checking ? (
                    <>
                      <span
                        className="np-spin inline-block h-4 w-4 rounded-full"
                        style={{ border: `2px solid ${hexToRgba(BG, 0.3)}`, borderTopColor: BG }}
                        aria-hidden="true"
                      />
                      Signing in…
                    </>
                  ) : locked ? (
                    <>
                      <Clock className="h-4 w-4" aria-hidden="true" />
                      Paused · <span style={{ fontVariantNumeric: "tabular-nums" }}>{mmss(cooldown)}</span>
                    </>
                  ) : success ? (
                    <>
                      <Check className="h-4 w-4" aria-hidden="true" />
                      Signed in
                    </>
                  ) : (
                    <>
                      Sign In
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </>
                  )}
                </Button>
              </div>

              <p className="mt-4 text-[12px] leading-relaxed" style={{ color: hexToRgba(N, 0.65) }}>
                Demo kiosk build — sign in with{" "}
                <span className="font-semibold" style={{ color: hexToRgba(N, 0.95) }}>
                  mara.okonkwo
                </span>{" "}
                /{" "}
                <span className="font-semibold" style={{ color: hexToRgba(N, 0.95) }}>
                  rye-starter-07
                </span>
                .
              </p>
            </form>
          </section>

          {/* b-4-0 — session note */}
          <p
            data-wf="b-4-0"
            className="np-rise mt-6 flex items-start gap-2 text-[13px] leading-relaxed"
            style={{ color: hexToRgba(N, 0.8), animationDelay: "120ms", maxWidth: "62ch" }}
          >
            <Clock className="mt-[2px] h-4 w-4 shrink-0" style={{ color: hexToRgba(N, 0.8) }} aria-hidden="true" />
            Your session ends after 20 minutes of inactivity and you will need to sign in again.
          </p>
        </div>
      </main>
    </div>
  );
}
