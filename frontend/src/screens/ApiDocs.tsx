// @ts-nocheck -- generated from the approved design under its JS runtime contract; not hand-written TypeScript.
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";

import * as UI from "@/lib/ui";
import { Icons } from "@/lib/icons";
import { brand } from "@/lib/brand";
import { useNavigate } from "@/lib/navigate";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { Button, Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, Badge, Table, THead, TBody, TR, TH, TD, Separator, Empty } = UI;
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { Check, X, ChevronRight, Menu, FileText, Clock, ArrowLeft, AlertCircle, CheckCircle } = Icons;

const MONO = 'ui-monospace, SFMono-Regular, Menlo, Consolas, monospace';
const LINE = 'rgba(255,255,255,0.12)';
const SURFACE = 'rgba(255,255,255,0.06)';
const SUNK = 'rgba(3,10,24,0.62)';

const rgba = (hex, a) => {
  const h = String(hex).replace('#', '');
  const full = h.length === 3 ? h.split('').map((c) => c + c).join('') : h;
  const n = parseInt(full, 16);
  return `rgba(${(n >> 16) & 255}, ${(n >> 8) & 255}, ${n & 255}, ${a})`;
};

const SECTIONS = [
  { key: 'setup', num: '01', label: 'Setup & run the kiosk', wf: 'i-1-0-0' },
  { key: 'api', num: '02', label: 'Orders read API', wf: 'i-1-0-1' },
  { key: 'shape', num: '03', label: 'JSON response shape', wf: 'i-1-0-2' },
  { key: 'examples', num: '04', label: 'Examples', wf: 'i-1-0-3' },
];

const SETUP_STEPS = [
  {
    n: '1',
    title: 'Install dependencies',
    cmd: 'npm install',
    note: 'Node 20 LTS or newer. Installs the React 19 kiosk front end and the orders API server.',
  },
  {
    n: '2',
    title: 'Set the environment',
    cmd: 'cp .env.example .env',
    note: 'Fill in DATABASE_URL, S3_BUCKET, AWS_REGION, AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY and KIOSK_API_KEY. Menu photos are uploaded straight to the S3 bucket.',
  },
  {
    n: '3',
    title: 'Create the database',
    cmd: 'npm run db:migrate',
    note: 'Creates categories, menu_items, menu_item_options, orders, order_lines, daily_token_counter, staff_users and staff_sessions.',
  },
  {
    n: '4',
    title: 'Start the kiosk',
    cmd: 'npm run dev',
    note: 'Kiosk at http://localhost:5173 — orders API mounted at http://localhost:5173/api.',
  },
];

const ENDPOINTS = [
  {
    id: 'e1',
    method: 'GET',
    path: '/api/orders',
    desc: 'List orders, newest first. Narrow with ?date=YYYY-MM-DD, ?status= and ?limit= (default 50, max 200).',
    auth: 'API key',
    authHint: 'X-API-Key',
    ok: true,
  },
  {
    id: 'e2',
    method: 'GET',
    path: '/api/orders/{id_or_token}',
    desc: "One order by database id, or by token number for the current trading day, with its current status.",
    auth: 'API key',
    authHint: 'X-API-Key',
    ok: true,
  },
  {
    id: 'e3',
    method: 'GET',
    path: '/api/health',
    desc: 'Liveness check. Poll this before the display app starts reading orders on open.',
    auth: 'None',
    authHint: 'public',
    ok: true,
  },
  {
    id: 'e4',
    method: 'POST',
    path: '/api/orders',
    desc: 'Not available. Orders are created by the kiosk itself — the API never writes.',
    auth: '—',
    authHint: 'n/a',
    ok: false,
  },
  {
    id: 'e5',
    method: 'PUT · PATCH · DELETE',
    path: '/api/orders/{id}',
    desc: 'Not available. Orders cannot be edited or deleted through this API.',
    auth: '—',
    authHint: 'n/a',
    ok: false,
  },
];

const LIST_FIELDS = [
  { name: 'id', type: 'integer', note: 'Kiosk database id. Stable forever.' },
  { name: 'token_number', type: 'integer', note: 'The number the customer watches for. Restarts at 1 each trading day.' },
  { name: 'token_date', type: 'string', note: 'Trading day the token belongs to, YYYY-MM-DD.' },
  { name: 'status', type: 'string', note: 'new · preparing · ready · collected' },
  { name: 'total', type: 'number', note: 'Order total in GBP, 2 decimal places. Paid at the counter.' },
  { name: 'created_at', type: 'string', note: 'ISO 8601 UTC, set when the customer confirmed.' },
  { name: 'lines[]', type: 'array', note: 'item_name, unit_price, quantity, line_total, selected_options[]' },
];

const LOOKUP_NOTES = [
  'A numeric value under 1000 is read as a token_number for today; anything larger is read as an order id.',
  'Add ?date=2026-11-10 to resolve a token against an earlier trading day.',
  'The body is one order object — the same shape as an entry in lines of GET /api/orders.',
];

const REQUEST_CODE = 'curl https://kiosk.local/api/orders?date=2026-11-11';

const RESPONSE_CODE = `{
  "token_date": "2026-11-11",
  "count": 3,
  "orders": [
    {
      "id": 1184,
      "token_number": 42,
      "token_date": "2026-11-11",
      "status": "new",
      "total": 9.10,
      "created_at": "2026-11-11T09:38:12Z",
      "lines": [
        {
          "item_name": "Almond croissant",
          "unit_price": 3.20,
          "quantity": 2,
          "line_total": 6.40,
          "selected_options": ["Warmed"]
        },
        {
          "item_name": "Flat white",
          "unit_price": 2.70,
          "quantity": 1,
          "line_total": 2.70,
          "selected_options": ["Oat milk"]
        }
      ]
    },
    {
      "id": 1183,
      "token_number": 41,
      "token_date": "2026-11-11",
      "status": "ready",
      "total": 5.50,
      "created_at": "2026-11-11T09:31:47Z",
      "lines": [
        {
          "item_name": "Seeded sourdough loaf",
          "unit_price": 5.50,
          "quantity": 1,
          "line_total": 5.50,
          "selected_options": ["Sliced"]
        }
      ]
    },
    {
      "id": 1182,
      "token_number": 40,
      "token_date": "2026-11-11",
      "status": "collected",
      "total": 12.80,
      "created_at": "2026-11-11T09:24:05Z",
      "lines": [
        {
          "item_name": "Cinnamon knot",
          "unit_price": 3.20,
          "quantity": 4,
          "line_total": 12.80,
          "selected_options": []
        }
      ]
    }
  ]
}`;

const SINGLE_CODE = `{
  "id": 1184,
  "token_number": 42,
  "token_date": "2026-11-11",
  "status": "new",
  "total": 9.10,
  "created_at": "2026-11-11T09:38:12Z"
}`;

const EMPTY_DAY_CODE = `{
  "token_date": "2026-11-12",
  "count": 0,
  "orders": []
}`;

const NOT_FOUND_CODE = `HTTP/1.1 404 Not Found

{
  "error": "order_not_found",
  "message": "No order with token 77 on 2026-11-11. Tokens restart at 1 each trading day."
}`;

const UNAUTHORISED_CODE = `HTTP/1.1 401 Unauthorized

{
  "error": "api_key_invalid",
  "message": "X-API-Key missing or revoked. A bakery owner re-issues keys in Menu Management."
}`;

const highlightJson = (line) => {
  const out = [];
  const re = /("(?:[^"\\]|\\.)*")(\s*:)?|(-?\d+(?:\.\d+)?)|\b(true|false|null)\b|\b(HTTP\/1\.1)\b/g;
  let last = 0;
  let m;
  let k = 0;
  while ((m = re.exec(line)) !== null) {
    if (m.index > last) {
      out.push(
        <span key={`p${k++}`} style={{ color: rgba(brand.neutralColor, 0.75) }}>
          {line.slice(last, m.index)}
        </span>
      );
    }
    if (m[1] && m[2]) {
      out.push(
        <span key={`k${k++}`} style={{ color: brand.accentColor }}>
          {m[1]}
        </span>
      );
      out.push(
        <span key={`c${k++}`} style={{ color: rgba(brand.neutralColor, 0.75) }}>
          {m[2]}
        </span>
      );
    } else if (m[1]) {
      out.push(
        <span key={`s${k++}`} style={{ color: brand.primaryColor }}>
          {m[1]}
        </span>
      );
    } else if (m[3] || m[4]) {
      out.push(
        <span key={`n${k++}`} style={{ color: 'rgba(255,255,255,0.94)', fontWeight: 600 }}>
          {m[3] || m[4]}
        </span>
      );
    } else if (m[5]) {
      out.push(
        <span key={`h${k++}`} style={{ color: 'rgba(255,255,255,0.94)', fontWeight: 700 }}>
          {m[5]}
        </span>
      );
    }
    last = m.index + m[0].length;
  }
  if (last < line.length) {
    out.push(
      <span key={`t${k++}`} style={{ color: rgba(brand.neutralColor, 0.75) }}>
        {line.slice(last)}
      </span>
    );
  }
  return out;
};

const highlightShell = (line) =>
  line.split(/(\s+)/).map((tok, i) => {
    let color = 'rgba(255,255,255,0.9)';
    if (/^\s+$/.test(tok)) color = 'transparent';
    else if (i === 0) color = brand.accentColor;
    else if (tok.startsWith('-')) color = brand.neutralColor;
    else if (/^https?:\/\//.test(tok)) color = brand.primaryColor;
    return (
      <span key={i} style={{ color }}>
        {tok}
      </span>
    );
  });

function CodeBlock({ label, code, tone, copyId, copiedId, onCopy, status }) {
  const lines = code.split('\n');
  const isCopied = copiedId === copyId;
  return (
    <figure
      className="overflow-hidden"
      style={{ borderRadius: brand.radius, border: `1px solid ${LINE}`, backgroundColor: SUNK }}
    >
      <figcaption
        className="flex items-center justify-between gap-3 px-4 py-3"
        style={{ borderBottom: `1px solid ${LINE}` }}
      >
        <span className="flex items-center gap-2 min-w-0">
          <span
            className="text-[11px] font-bold uppercase tracking-[0.14em] truncate"
            style={{ color: rgba(brand.neutralColor, 0.95) }}
          >
            {label}
          </span>
          {status ? (
            <span
              className="text-[11px] font-semibold px-2 py-0.5 rounded-full shrink-0"
              style={{
                color: status.ok ? brand.primaryColor : brand.accentColor,
                border: `1px solid ${rgba(status.ok ? brand.primaryColor : brand.accentColor, 0.4)}`,
                backgroundColor: rgba(status.ok ? brand.primaryColor : brand.accentColor, 0.12),
                fontVariantNumeric: 'tabular-nums',
              }}
            >
              {status.text}
            </span>
          ) : null}
        </span>
        {onCopy ? (
          <button
            type="button"
            onClick={() => onCopy(copyId, code)}
            className="np-focus shrink-0 inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold transition-colors"
            style={{
              color: isCopied ? brand.primaryColor : rgba(brand.neutralColor, 0.95),
              border: `1px solid ${isCopied ? rgba(brand.primaryColor, 0.5) : LINE}`,
              backgroundColor: isCopied ? rgba(brand.primaryColor, 0.12) : 'transparent',
            }}
          >
            {isCopied ? <Check className="h-3.5 w-3.5" aria-hidden="true" /> : null}
            {isCopied ? 'Copied' : 'Copy'}
            <span className="sr-only"> {label}</span>
          </button>
        ) : null}
      </figcaption>
      <pre
        className="overflow-x-auto px-4 py-4 text-[13px] leading-6"
        style={{ fontFamily: MONO, fontVariantNumeric: 'tabular-nums' }}
      >
        <code>
          {lines.map((l, i) => (
            <div key={i} style={{ minHeight: '1.5rem' }}>
              {l.length === 0 ? ' ' : tone === 'shell' ? highlightShell(l) : highlightJson(l)}
            </div>
          ))}
        </code>
      </pre>
    </figure>
  );
}

export default function Screen() {
  const navigate = useNavigate();
  const [active, setActive] = React.useState('setup');
  const [copiedId, setCopiedId] = React.useState(null);
  const [runState, setRunState] = React.useState('idle');
  const refs = React.useRef({});
  const runTimer = React.useRef(null);
  const copyTimer = React.useRef(null);

  React.useEffect(
    () => () => {
      if (runTimer.current) clearTimeout(runTimer.current);
      if (copyTimer.current) clearTimeout(copyTimer.current);
    },
    []
  );

  const reduced = () =>
    typeof window !== 'undefined' &&
    window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const goTo = (key) => {
    setActive(key);
    const el = refs.current[key];
    if (el && el.scrollIntoView) {
      el.scrollIntoView({ behavior: reduced() ? 'auto' : 'smooth', block: 'start' });
    }
  };

  const handleCopy = (id, text) => {
    try {
      if (navigator && navigator.clipboard) navigator.clipboard.writeText(text);
    } catch (e) {
      /* clipboard unavailable on this kiosk browser — the code stays selectable */
    }
    setCopiedId(id);
    if (copyTimer.current) clearTimeout(copyTimer.current);
    copyTimer.current = setTimeout(() => setCopiedId(null), 1800);
  };

  const runExample = () => {
    setRunState('loading');
    if (runTimer.current) clearTimeout(runTimer.current);
    runTimer.current = setTimeout(() => setRunState('done'), 1100);
  };

  const sectionStyle = (key) => ({
    borderRadius: brand.radius,
    backgroundColor: SURFACE,
    border: `1px solid ${active === key ? rgba(brand.accentColor, 0.5) : LINE}`,
    backdropFilter: 'blur(16px)',
    boxShadow: active === key ? `0 0 70px -18px ${rgba(brand.accentColor, 0.55)}` : 'none',
  });

  const SectionHead = ({ num, title, id, subtitle, akey }) => (
    <div className="flex items-start gap-4 mb-6">
      <span
        aria-hidden="true"
        className="shrink-0 inline-flex h-9 w-9 items-center justify-center text-[13px] font-extrabold"
        style={{
          borderRadius: 12,
          color: brand.backgroundColor,
          backgroundImage: `linear-gradient(135deg, ${brand.primaryColor}, ${brand.accentColor})`,
          fontVariantNumeric: 'tabular-nums',
        }}
      >
        {num}
      </span>
      <div className="min-w-0">
        <div className="flex flex-wrap items-center gap-3">
          <h2
            id={id}
            className="text-[24px] md:text-[26px] font-extrabold tracking-tight"
            style={{ fontFamily: brand.fontHeading, color: '#ffffff' }}
          >
            {title}
          </h2>
          {active === akey ? (
            <span
              className="text-[11px] font-bold uppercase tracking-[0.14em] px-2.5 py-1 rounded-full"
              style={{
                color: brand.accentColor,
                border: `1px solid ${rgba(brand.accentColor, 0.45)}`,
                backgroundColor: rgba(brand.accentColor, 0.14),
              }}
            >
              Reading now
            </span>
          ) : null}
        </div>
        {subtitle ? (
          <p className="mt-1.5 text-[15px] leading-relaxed" style={{ color: brand.neutralColor, maxWidth: '68ch' }}>
            {subtitle}
          </p>
        ) : null}
      </div>
    </div>
  );

  return (
    <div
      className="w-full"
      style={{ fontFamily: brand.fontBody, backgroundColor: brand.backgroundColor }}
    >
      <style>{`
        @keyframes npFadeUp { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: none; } }
        @keyframes npShimmer { 0% { background-position: -240px 0; } 100% { background-position: calc(240px + 100%) 0; } }
        @keyframes npPulse { 0%, 100% { opacity: .45; } 50% { opacity: 1; } }
        .np-in { animation: npFadeUp .45s cubic-bezier(.22,.8,.3,1) both; }
        .np-shimmer { background-image: linear-gradient(90deg, rgba(255,255,255,.04), rgba(255,255,255,.14), rgba(255,255,255,.04)); background-size: 240px 100%; background-repeat: no-repeat; animation: npShimmer 1.2s infinite linear; }
        .np-dot { animation: npPulse 2.2s ease-in-out infinite; }
        .np-focus:focus-visible { outline: 2px solid ${brand.accentColor}; outline-offset: 2px; }
        .np-row:hover { background-color: rgba(255,255,255,0.05); }
        @media (prefers-reduced-motion: reduce) {
          .np-in, .np-shimmer, .np-dot { animation: none !important; }
          * { transition-duration: .001ms !important; }
        }
      `}</style>

      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 py-8 space-y-6 md:space-y-8">
        {/* Row 1 — page title */}
        <header
          data-wf="b-0-0"
          className="relative overflow-hidden np-in p-6 md:p-8"
          style={{
            borderRadius: brand.radius,
            backgroundColor: SURFACE,
            border: `1px solid ${LINE}`,
            backdropFilter: 'blur(16px)',
          }}
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-28 -right-10 h-72 w-72 rounded-full"
            style={{
              background: `radial-gradient(circle, ${rgba(brand.accentColor, 0.4)}, transparent 70%)`,
              filter: 'blur(44px)',
            }}
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-32 left-8 h-64 w-64 rounded-full"
            style={{
              background: `radial-gradient(circle, ${rgba(brand.primaryColor, 0.3)}, transparent 70%)`,
              filter: 'blur(48px)',
            }}
          />
          <div className="relative">
            <p
              className="text-[11px] font-bold uppercase tracking-[0.2em]"
              style={{ color: brand.primaryColor }}
            >
              Crumb &amp; Co kiosk · developer docs
            </p>
            <h1
              className="mt-3 font-extrabold tracking-tight"
              style={{
                fontFamily: brand.fontHeading,
                fontSize: 'clamp(32px, 4.4vw, 40px)',
                lineHeight: 1.1,
                color: '#ffffff',
              }}
            >
              API &amp; Setup Documentation
            </h1>
            <p
              className="mt-4 text-[16px] leading-relaxed"
              style={{ color: brand.neutralColor, maxWidth: '68ch' }}
            >
              Everything the order-tracking display app needs to read tokens out of this kiosk — how to run it
              locally, which endpoints exist, and exactly what comes back.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-2">
              <Badge
                className="rounded-full px-3 py-1 text-[12px] font-bold"
                style={{
                  color: brand.backgroundColor,
                  backgroundImage: `linear-gradient(135deg, ${brand.primaryColor}, ${brand.accentColor})`,
                  border: 'none',
                }}
              >
                Read-only · REST / JSON
              </Badge>
              <span
                className="rounded-full px-3 py-1 text-[12px]"
                style={{ fontFamily: MONO, color: brand.primaryColor, border: `1px solid ${LINE}` }}
              >
                https://kiosk.local/api
              </span>
              <span
                className="rounded-full px-3 py-1 text-[12px] font-semibold"
                style={{ color: brand.neutralColor, border: `1px solid ${LINE}`, fontVariantNumeric: 'tabular-nums' }}
              >
                Spec v1.2 · build 2026-11-09
              </span>
            </div>

            <p
              className="mt-5 flex items-start gap-2 text-[13px] leading-relaxed"
              style={{ color: rgba(brand.neutralColor, 0.9), maxWidth: '68ch' }}
            >
              <span
                aria-hidden="true"
                className="np-dot mt-1.5 h-2 w-2 rounded-full shrink-0"
                style={{ backgroundColor: brand.primaryColor }}
              />
              <span>
                Offline copy, bundled with the kiosk build. Last checked against the live spec on 11 Nov 2026 at
                09:42 — regenerate with <span style={{ fontFamily: MONO, color: '#ffffff' }}>npm run docs:sync</span>.
              </span>
            </p>
          </div>
        </header>

        {/* Row 2 — section tabs */}
        <nav data-wf="b-1-0" aria-label="Documentation sections">
          <ul className="flex flex-wrap gap-2">
            {SECTIONS.map((s) => {
              const on = active === s.key;
              return (
                <li key={s.key}>
                  <button
                    type="button"
                    data-wf={s.wf}
                    aria-current={on ? 'true' : undefined}
                    onClick={() => goTo(s.key)}
                    className="np-focus inline-flex items-center gap-2.5 px-4 py-3 text-[14px] font-semibold transition-all duration-200"
                    style={{
                      borderRadius: 999,
                      minHeight: 44,
                      color: on ? brand.backgroundColor : '#ffffff',
                      backgroundImage: on
                        ? `linear-gradient(135deg, ${brand.primaryColor}, ${brand.accentColor})`
                        : 'none',
                      backgroundColor: on ? 'transparent' : 'rgba(255,255,255,0.05)',
                      border: `1px solid ${on ? 'transparent' : LINE}`,
                      boxShadow: on ? `0 12px 40px -14px ${rgba(brand.accentColor, 0.9)}` : 'none',
                    }}
                  >
                    <span
                      className="text-[11px] font-extrabold"
                      style={{
                        fontVariantNumeric: 'tabular-nums',
                        color: on ? rgba(brand.backgroundColor, 0.7) : brand.primaryColor,
                      }}
                    >
                      {s.num}
                    </span>
                    {s.label}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Row 3 — setup text */}
        <section
          data-wf="b-2-0"
          ref={(el) => {
            refs.current.setup = el;
          }}
          aria-labelledby="sec-setup"
          className="np-in scroll-mt-6 p-6 md:p-8 transition-all duration-300"
          style={sectionStyle('setup')}
        >
          <SectionHead
            num="01"
            akey="setup"
            id="sec-setup"
            title="Setup &amp; run the kiosk"
            subtitle="Install dependencies, set the database and S3 environment variables, then start the kiosk web app. The orders API is read-only: it never creates, edits or deletes orders."
          />

          <ol className="space-y-3">
            {SETUP_STEPS.map((step) => (
              <li
                key={step.n}
                className="flex flex-col gap-3 p-4 sm:flex-row sm:items-center sm:gap-5"
                style={{ borderRadius: brand.radius, border: `1px solid ${LINE}`, backgroundColor: SUNK }}
              >
                <span className="flex items-center gap-3 sm:w-[52%] shrink-0">
                  <span
                    aria-hidden="true"
                    className="inline-flex h-7 w-7 items-center justify-center text-[12px] font-extrabold shrink-0"
                    style={{
                      borderRadius: 9,
                      color: brand.primaryColor,
                      border: `1px solid ${rgba(brand.primaryColor, 0.45)}`,
                      backgroundColor: rgba(brand.primaryColor, 0.12),
                      fontVariantNumeric: 'tabular-nums',
                    }}
                  >
                    {step.n}
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[14px] font-bold" style={{ color: '#ffffff' }}>
                      {step.title}
                    </span>
                    <span
                      className="block text-[13px] mt-0.5 truncate"
                      style={{ fontFamily: MONO, color: brand.accentColor }}
                    >
                      {step.cmd}
                    </span>
                  </span>
                </span>
                <span className="text-[13px] leading-relaxed" style={{ color: brand.neutralColor }}>
                  {step.note}
                </span>
              </li>
            ))}
          </ol>

          <p className="mt-5 text-[13px] leading-relaxed" style={{ color: brand.neutralColor, maxWidth: '70ch' }}>
            Staff passwords are stored hashed, never in plain text, so there is no seed account in the repo —
            create the first one with{' '}
            <span style={{ fontFamily: MONO, color: '#ffffff' }}>npm run staff:create -- --username=ida</span>.
          </p>
        </section>

        {/* Row 4 — endpoints table */}
        <section
          data-wf="b-3-0"
          ref={(el) => {
            refs.current.api = el;
          }}
          aria-labelledby="sec-api"
          className="np-in scroll-mt-6 p-6 md:p-8 transition-all duration-300"
          style={sectionStyle('api')}
        >
          <SectionHead
            num="02"
            akey="api"
            id="sec-api"
            title="Orders read API"
            subtitle="Read-only endpoints. Every call carries the X-API-Key header issued to the display app; write methods are answered with 405 and the order is left untouched."
          />

          <div className="overflow-x-auto">
            <Table className="w-full min-w-[720px] text-left" style={{ fontVariantNumeric: 'tabular-nums' }}>
              <caption className="sr-only">Read-only endpoints of the kiosk orders API</caption>
              <THead>
                <TR style={{ borderBottom: `1px solid ${LINE}` }}>
                  <TH
                    data-wf="i-3-0-0"
                    scope="col"
                    className="px-3 py-3 text-[11px] font-bold uppercase tracking-[0.14em]"
                    style={{ color: brand.neutralColor }}
                  >
                    Method
                  </TH>
                  <TH
                    data-wf="i-3-0-1"
                    scope="col"
                    className="px-3 py-3 text-[11px] font-bold uppercase tracking-[0.14em]"
                    style={{ color: brand.neutralColor }}
                  >
                    Endpoint
                  </TH>
                  <TH
                    data-wf="i-3-0-2"
                    scope="col"
                    className="px-3 py-3 text-[11px] font-bold uppercase tracking-[0.14em]"
                    style={{ color: brand.neutralColor }}
                  >
                    Description
                  </TH>
                  <TH
                    data-wf="i-3-0-3"
                    scope="col"
                    className="px-3 py-3 text-[11px] font-bold uppercase tracking-[0.14em]"
                    style={{ color: brand.neutralColor }}
                  >
                    Auth
                  </TH>
                </TR>
              </THead>
              <TBody>
                {ENDPOINTS.map((e) => (
                  <TR key={e.id} className="np-row transition-colors" style={{ borderBottom: `1px solid ${LINE}` }}>
                    <TD className="px-3 py-4 align-top">
                      <span
                        className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[12px] font-bold whitespace-nowrap"
                        style={{
                          color: e.ok ? brand.primaryColor : rgba(brand.neutralColor, 0.95),
                          border: `1px solid ${e.ok ? rgba(brand.primaryColor, 0.45) : LINE}`,
                          backgroundColor: e.ok ? rgba(brand.primaryColor, 0.12) : 'rgba(255,255,255,0.04)',
                        }}
                      >
                        {e.ok ? (
                          <Check className="h-3.5 w-3.5" aria-hidden="true" />
                        ) : (
                          <X className="h-3.5 w-3.5" aria-hidden="true" />
                        )}
                        {e.method}
                      </span>
                    </TD>
                    <TD
                      className="px-3 py-4 align-top text-[13px]"
                      style={{ fontFamily: MONO, color: '#ffffff' }}
                    >
                      {e.path}
                    </TD>
                    <TD className="px-3 py-4 align-top text-[13px] leading-relaxed" style={{ color: brand.neutralColor }}>
                      {e.desc}
                      {!e.ok ? (
                        <span
                          className="ml-2 inline-block rounded-full px-2 py-0.5 text-[11px] font-bold align-middle"
                          style={{
                            color: brand.accentColor,
                            border: `1px solid ${rgba(brand.accentColor, 0.4)}`,
                            backgroundColor: rgba(brand.accentColor, 0.12),
                          }}
                        >
                          Returns 405
                        </span>
                      ) : null}
                    </TD>
                    <TD className="px-3 py-4 align-top">
                      <span className="block text-[13px] font-semibold" style={{ color: '#ffffff' }}>
                        {e.auth}
                      </span>
                      <span className="block text-[12px] mt-0.5" style={{ fontFamily: MONO, color: rgba(brand.neutralColor, 0.8) }}>
                        {e.authHint}
                      </span>
                    </TD>
                  </TR>
                ))}
              </TBody>
            </Table>
          </div>

          <p className="mt-5 text-[13px] leading-relaxed" style={{ color: brand.neutralColor, maxWidth: '70ch' }}>
            Rate limit: 120 requests a minute per key. The display app polls{' '}
            <span style={{ fontFamily: MONO, color: '#ffffff' }}>/api/orders?status=new,preparing,ready</span> every
            five seconds and stays well inside it.
          </p>
        </section>

        {/* Row 5 — response shape cards */}
        <section
          ref={(el) => {
            refs.current.shape = el;
          }}
          aria-labelledby="sec-shape"
          className="np-in scroll-mt-6 p-6 md:p-8 transition-all duration-300"
          style={sectionStyle('shape')}
        >
          <SectionHead
            num="03"
            akey="shape"
            id="sec-shape"
            title="JSON response shape"
            subtitle="Both endpoints return the same order object. Money is a number in GBP; timestamps are ISO 8601 in UTC."
          />

          <div className="grid gap-6 md:grid-cols-2">
            <Card
              data-wf="b-4-0"
              className="shadow-none"
              style={{ borderRadius: brand.radius, backgroundColor: SUNK, border: `1px solid ${LINE}` }}
            >
              <CardHeader className="p-5 pb-3">
                <CardTitle
                  className="text-[15px] font-bold"
                  style={{ fontFamily: MONO, color: brand.primaryColor }}
                >
                  GET /orders
                </CardTitle>
                <CardDescription className="mt-1.5 text-[13px] leading-relaxed" style={{ color: brand.neutralColor }}>
                  Returns id, token_number, token_date, status, total, created_at and lines[].
                </CardDescription>
              </CardHeader>
              <CardContent className="p-5 pt-0">
                <dl className="space-y-3">
                  {LIST_FIELDS.map((f) => (
                    <div
                      key={f.name}
                      className="grid gap-1 sm:grid-cols-[150px_1fr] sm:gap-4 pt-3"
                      style={{ borderTop: `1px solid ${LINE}` }}
                    >
                      <dt className="text-[13px]" style={{ fontFamily: MONO, color: brand.accentColor }}>
                        {f.name}
                        <span className="block text-[11px] mt-0.5" style={{ color: rgba(brand.neutralColor, 0.75) }}>
                          {f.type}
                        </span>
                      </dt>
                      <dd className="text-[13px] leading-relaxed" style={{ color: brand.neutralColor }}>
                        {f.note}
                      </dd>
                    </div>
                  ))}
                </dl>
              </CardContent>
              <CardFooter className="p-5 pt-0">
                <p className="flex items-start gap-2 text-[12px] leading-relaxed" style={{ color: rgba(brand.neutralColor, 0.9) }}>
                  <FileText className="h-4 w-4 mt-0.5 shrink-0" aria-hidden="true" style={{ color: brand.primaryColor }} />
                  <span>Results are ordered by created_at descending, so the newest token is first.</span>
                </p>
              </CardFooter>
            </Card>

            <Card
              data-wf="b-4-1"
              className="shadow-none"
              style={{ borderRadius: brand.radius, backgroundColor: SUNK, border: `1px solid ${LINE}` }}
            >
              <CardHeader className="p-5 pb-3">
                <CardTitle
                  className="text-[15px] font-bold"
                  style={{ fontFamily: MONO, color: brand.primaryColor }}
                >
                  GET /orders/{'{id_or_token}'}
                </CardTitle>
                <CardDescription className="mt-1.5 text-[13px] leading-relaxed" style={{ color: brand.neutralColor }}>
                  Returns one order&rsquo;s current details and status.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-5 pt-0 space-y-4">
                <ul className="space-y-3">
                  {LOOKUP_NOTES.map((n, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2.5 pt-3 text-[13px] leading-relaxed"
                      style={{ borderTop: `1px solid ${LINE}`, color: brand.neutralColor }}
                    >
                      <ChevronRight
                        className="h-4 w-4 mt-0.5 shrink-0"
                        aria-hidden="true"
                        style={{ color: brand.accentColor }}
                      />
                      <span>{n}</span>
                    </li>
                  ))}
                </ul>
                <CodeBlock
                  label="200 response body"
                  code={SINGLE_CODE}
                  copyId="single"
                  copiedId={copiedId}
                  onCopy={handleCopy}
                  status={{ ok: true, text: '200 OK' }}
                />
              </CardContent>
              <CardFooter className="p-5 pt-0">
                <p className="flex items-start gap-2 text-[12px] leading-relaxed" style={{ color: rgba(brand.neutralColor, 0.9) }}>
                  <Clock className="h-4 w-4 mt-0.5 shrink-0" aria-hidden="true" style={{ color: brand.primaryColor }} />
                  <span>Status reflects the counter in real time; the kiosk never changes it after confirmation.</span>
                </p>
              </CardFooter>
            </Card>
          </div>
        </section>

        {/* Row 6 — examples */}
        <section
          data-wf="b-5-0"
          ref={(el) => {
            refs.current.examples = el;
          }}
          aria-labelledby="sec-examples"
          className="np-in scroll-mt-6 p-6 md:p-8 transition-all duration-300"
          style={sectionStyle('examples')}
        >
          <SectionHead
            num="04"
            akey="examples"
            id="sec-examples"
            title="Examples"
            subtitle="A plain GET with the API key in your shell profile. This is the call the display app makes when a shift opens."
          />

          <div className="grid gap-6 lg:grid-cols-2">
            <div className="space-y-4">
              <CodeBlock
                label="Example request"
                code={REQUEST_CODE}
                tone="shell"
                copyId="req"
                copiedId={copiedId}
                onCopy={handleCopy}
              />
              <CodeBlock
                label="Example response"
                code={RESPONSE_CODE}
                copyId="res"
                copiedId={copiedId}
                onCopy={handleCopy}
                status={{ ok: true, text: '200 OK' }}
              />
            </div>

            <div className="space-y-4">
              <div
                aria-live="polite"
                className="p-5"
                style={{ borderRadius: brand.radius, border: `1px solid ${LINE}`, backgroundColor: SUNK }}
              >
                <h3 className="text-[15px] font-bold" style={{ fontFamily: brand.fontHeading, color: '#ffffff' }}>
                  Try it against this kiosk
                </h3>

                {runState === 'idle' ? (
                  <div className="mt-2">
                    <Empty
                      title="No response yet"
                      description="Send the example request to see exactly what the order-tracking display app receives from this kiosk."
                      action={
                        <Button
                          type="button"
                          onClick={runExample}
                          className="np-focus font-bold"
                          style={{
                            borderRadius: 999,
                            minHeight: 44,
                            paddingLeft: 24,
                            paddingRight: 24,
                            color: brand.backgroundColor,
                            backgroundImage: `linear-gradient(135deg, ${brand.primaryColor}, ${brand.accentColor})`,
                            border: 'none',
                            boxShadow: `0 16px 48px -16px ${rgba(brand.accentColor, 0.95)}`,
                          }}
                        >
                          Send example request
                        </Button>
                      }
                    />
                  </div>
                ) : null}

                {runState === 'loading' ? (
                  <div className="mt-4 space-y-3">
                    <p className="text-[13px] font-semibold" style={{ color: brand.primaryColor }}>
                      Calling kiosk.local…
                    </p>
                    {[0, 1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="np-shimmer h-3"
                        style={{ borderRadius: 6, width: ['92%', '74%', '84%', '60%'][i] }}
                      />
                    ))}
                  </div>
                ) : null}

                {runState === 'done' ? (
                  <div className="mt-4 np-in space-y-4">
                    <div className="flex flex-wrap items-end gap-x-8 gap-y-3">
                      <span>
                        <span
                          className="block text-[11px] font-bold uppercase tracking-[0.14em]"
                          style={{ color: brand.neutralColor }}
                        >
                          Status
                        </span>
                        <span
                          className="flex items-center gap-2 text-[30px] font-extrabold leading-none mt-1"
                          style={{ color: brand.primaryColor, fontVariantNumeric: 'tabular-nums' }}
                        >
                          <CheckCircle className="h-6 w-6" aria-hidden="true" />
                          200 OK
                        </span>
                      </span>
                      <span>
                        <span
                          className="block text-[11px] font-bold uppercase tracking-[0.14em]"
                          style={{ color: brand.neutralColor }}
                        >
                          Time
                        </span>
                        <span
                          className="block text-[30px] font-extrabold leading-none mt-1"
                          style={{ color: '#ffffff', fontVariantNumeric: 'tabular-nums' }}
                        >
                          128 ms
                        </span>
                      </span>
                      <span>
                        <span
                          className="block text-[11px] font-bold uppercase tracking-[0.14em]"
                          style={{ color: brand.neutralColor }}
                        >
                          Orders
                        </span>
                        <span
                          className="block text-[30px] font-extrabold leading-none mt-1"
                          style={{ color: '#ffffff', fontVariantNumeric: 'tabular-nums' }}
                        >
                          3
                        </span>
                      </span>
                    </div>
                    <p className="text-[13px]" style={{ fontFamily: MONO, color: brand.neutralColor }}>
                      GET /api/orders?date=2026-11-11 · tokens 42, 41, 40
                    </p>
                    <Button
                      type="button"
                      onClick={runExample}
                      className="np-focus text-[13px] font-semibold"
                      style={{
                        borderRadius: 999,
                        minHeight: 44,
                        paddingLeft: 20,
                        paddingRight: 20,
                        color: '#ffffff',
                        backgroundColor: 'rgba(255,255,255,0.05)',
                        border: `1px solid ${LINE}`,
                      }}
                    >
                      Send again
                    </Button>
                  </div>
                ) : null}
              </div>

              <div
                className="p-5 space-y-4"
                style={{ borderRadius: brand.radius, border: `1px solid ${LINE}`, backgroundColor: SUNK }}
              >
                <h3 className="text-[15px] font-bold" style={{ fontFamily: brand.fontHeading, color: '#ffffff' }}>
                  The other three answers
                </h3>
                <p className="text-[13px] leading-relaxed" style={{ color: brand.neutralColor, maxWidth: '62ch' }}>
                  Handle these before the bakery opens — a quiet morning, a token the display app has cached from
                  yesterday, and a key that was rotated overnight.
                </p>
                <CodeBlock
                  label="Trading day with no orders yet"
                  code={EMPTY_DAY_CODE}
                  copyId="empty"
                  copiedId={copiedId}
                  onCopy={handleCopy}
                  status={{ ok: true, text: '200 OK' }}
                />
                <CodeBlock
                  label="Unknown token"
                  code={NOT_FOUND_CODE}
                  copyId="nf"
                  copiedId={copiedId}
                  onCopy={handleCopy}
                  status={{ ok: false, text: '404' }}
                />
                <CodeBlock
                  label="Key missing or revoked"
                  code={UNAUTHORISED_CODE}
                  copyId="401"
                  copiedId={copiedId}
                  onCopy={handleCopy}
                  status={{ ok: false, text: '401' }}
                />
                <p
                  className="flex items-start gap-2 text-[12px] leading-relaxed"
                  style={{ color: rgba(brand.neutralColor, 0.9) }}
                >
                  <AlertCircle
                    className="h-4 w-4 mt-0.5 shrink-0"
                    aria-hidden="true"
                    style={{ color: brand.accentColor }}
                  />
                  <span>
                    Only a signed-in staff member can issue or revoke an API key. Ask the bakery owner to re-issue
                    one from Menu Management, then restart the display app.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Row 7 — back link */}
        <div className="pt-2">
          <div style={{ color: LINE }}>
            <Separator className="opacity-20" />
          </div>
          <div className="pt-6">
            <button
              type="button"
              data-wf="b-6-0"
              onClick={() => navigate('admin-menu')}
              className="np-focus inline-flex items-center gap-2 px-4 py-3 text-[14px] font-semibold transition-colors"
              style={{
                borderRadius: 999,
                minHeight: 44,
                color: brand.primaryColor,
                border: `1px solid ${rgba(brand.primaryColor, 0.4)}`,
                backgroundColor: rgba(brand.primaryColor, 0.08),
              }}
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              Back to Menu Management
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
