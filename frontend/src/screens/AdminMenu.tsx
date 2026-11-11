// @ts-nocheck -- generated from the approved design under its JS runtime contract; not hand-written TypeScript.
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";

import * as UI from "@/lib/ui";
import { Icons } from "@/lib/icons";
import { brand } from "@/lib/brand";
import { useNavigate } from "@/lib/navigate";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { Button, Input, Label, Select, Checkbox, Badge, Table, THead, TBody, TR, TH, TD, Avatar, Empty } = UI;
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { Plus, Search, Check, X, Menu, Clock, Edit, Filter, Upload, AlertCircle, CheckCircle } = Icons;

// ─────────────────────────────────────────────────────────────
// Kiosk admin · Menu Management
// ─────────────────────────────────────────────────────────────

const R = typeof brand.radius === "number" ? brand.radius + "px" : brand.radius;

const alpha = (hex, a) => {
  const h = String(hex).replace("#", "");
  const n = parseInt(h.length === 3 ? h.split("").map((c) => c + c).join("") : h, 16);
  return `rgba(${(n >> 16) & 255}, ${(n >> 8) & 255}, ${n & 255}, ${a})`;
};

const WHITE = (a) => `rgba(255, 255, 255, ${a})`;
const HAIRLINE = WHITE(0.12);
const TEXT = WHITE(0.94);

const NOW = new Date("2026-11-11T09:52:00");
const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const CATEGORIES = [
  { id: "c1", name: "Pastries", display_order: 1 },
  { id: "c2", name: "Breads", display_order: 2 },
  { id: "c3", name: "Cakes & Slices", display_order: 3 },
  { id: "c4", name: "Savouries", display_order: 4 },
  { id: "c5", name: "Cookies & Biscuits", display_order: 5 },
  { id: "c6", name: "Drinks", display_order: 6 },
];

const OPTION_LIBRARY = ["Warmed", "Sliced", "Half loaf", "Oat milk", "Extra shot", "Decaf"];

const S3_BUCKET = "bakery-kiosk-media";

const INITIAL_ITEMS = [
  { id: "mi_101", category_id: "c1", name: "Butter Croissant", price: 2.4, photo_url: "s3://bakery-kiosk-media/menu/butter-croissant.jpg", options: ["Warmed", "Sliced"], is_sold_out: false, updated_at: "2026-11-11T07:14:00" },
  { id: "mi_102", category_id: "c1", name: "Pain au Chocolat", price: 2.8, photo_url: "s3://bakery-kiosk-media/menu/pain-au-chocolat.jpg", options: ["Warmed"], is_sold_out: false, updated_at: "2026-11-11T07:16:00" },
  { id: "mi_103", category_id: "c1", name: "Almond Croissant", price: 3.2, photo_url: "s3://bakery-kiosk-media/menu/almond-croissant.jpg", options: ["Warmed"], is_sold_out: false, updated_at: "2026-11-10T16:42:00" },
  { id: "mi_104", category_id: "c1", name: "Cinnamon Morning Bun", price: 3.4, photo_url: "s3://bakery-kiosk-media/menu/morning-bun.jpg", options: [], is_sold_out: false, updated_at: "2026-11-10T08:05:00" },
  { id: "mi_105", category_id: "c1", name: "Apricot Danish", price: 3.1, photo_url: "s3://bakery-kiosk-media/menu/apricot-danish.jpg", options: [], is_sold_out: true, updated_at: "2026-11-11T09:18:00" },
  { id: "mi_106", category_id: "c1", name: "Maple Pecan Plait", price: 3.6, photo_url: null, options: [], is_sold_out: false, updated_at: "2026-11-09T15:30:00" },
  { id: "mi_201", category_id: "c2", name: "Signature Sourdough", price: 4.5, photo_url: "s3://bakery-kiosk-media/menu/signature-sourdough.jpg", options: ["Sliced", "Half loaf"], is_sold_out: false, updated_at: "2026-11-11T06:58:00", manager_locked: true },
  { id: "mi_202", category_id: "c2", name: "Seeded Rye Tin", price: 4.2, photo_url: "s3://bakery-kiosk-media/menu/seeded-rye.jpg", options: ["Sliced"], is_sold_out: false, updated_at: "2026-11-08T11:20:00" },
  { id: "mi_203", category_id: "c2", name: "Walnut & Raisin Boule", price: 4.8, photo_url: "s3://bakery-kiosk-media/menu/walnut-boule.jpg", options: ["Half loaf"], is_sold_out: true, updated_at: "2026-11-11T08:44:00" },
  { id: "mi_204", category_id: "c2", name: "Rosemary Focaccia Slab", price: 3.9, photo_url: "s3://bakery-kiosk-media/menu/focaccia-slab.jpg", options: ["Warmed"], is_sold_out: false, updated_at: "2026-11-10T12:10:00" },
  { id: "mi_205", category_id: "c2", name: "Olive & Thyme Fougasse", price: 4.3, photo_url: null, options: [], is_sold_out: false, updated_at: "2026-11-07T14:02:00" },
  { id: "mi_301", category_id: "c3", name: "Victoria Sponge Slice", price: 3.75, photo_url: "s3://bakery-kiosk-media/menu/victoria-sponge.jpg", options: [], is_sold_out: false, updated_at: "2026-11-10T10:25:00" },
  { id: "mi_302", category_id: "c3", name: "Lemon Drizzle Slice", price: 3.25, photo_url: "s3://bakery-kiosk-media/menu/lemon-drizzle.jpg", options: [], is_sold_out: false, updated_at: "2026-11-06T09:40:00" },
  { id: "mi_303", category_id: "c3", name: "Carrot Cake Slice", price: 3.95, photo_url: "s3://bakery-kiosk-media/menu/carrot-cake.jpg", options: [], is_sold_out: false, updated_at: "2026-11-09T13:05:00" },
  { id: "mi_304", category_id: "c3", name: "Chocolate Fudge Slice", price: 4.0, photo_url: "s3://bakery-kiosk-media/menu/choc-fudge.jpg", options: [], is_sold_out: true, updated_at: "2026-11-10T17:55:00" },
  { id: "mi_401", category_id: "c4", name: "Cheddar & Leek Quiche", price: 4.75, photo_url: "s3://bakery-kiosk-media/menu/cheddar-leek-quiche.jpg", options: ["Warmed"], is_sold_out: false, updated_at: "2026-11-11T07:40:00" },
  { id: "mi_402", category_id: "c4", name: "Sausage Roll", price: 3.3, photo_url: "s3://bakery-kiosk-media/menu/sausage-roll.jpg", options: ["Warmed"], is_sold_out: false, updated_at: "2026-11-11T07:41:00" },
  { id: "mi_403", category_id: "c4", name: "Spinach & Feta Roll", price: 3.6, photo_url: "s3://bakery-kiosk-media/menu/spinach-feta-roll.jpg", options: ["Warmed"], is_sold_out: false, updated_at: "2026-11-08T16:15:00" },
  { id: "mi_404", category_id: "c4", name: "Ham & Gruyère Croissant", price: 4.2, photo_url: "s3://bakery-kiosk-media/menu/ham-gruyere.jpg", options: ["Warmed", "Sliced"], is_sold_out: false, updated_at: "2026-11-09T09:12:00" },
  { id: "mi_501", category_id: "c5", name: "Sea Salt Chocolate Chip Cookie", price: 2.2, photo_url: "s3://bakery-kiosk-media/menu/sea-salt-cookie.jpg", options: [], is_sold_out: false, updated_at: "2026-11-10T14:48:00" },
  { id: "mi_502", category_id: "c5", name: "Oat & Raisin Cookie", price: 2.0, photo_url: null, options: [], is_sold_out: false, updated_at: "2026-11-05T15:22:00" },
  { id: "mi_503", category_id: "c5", name: "Pistachio Shortbread", price: 2.6, photo_url: "s3://bakery-kiosk-media/menu/pistachio-shortbread.jpg", options: [], is_sold_out: true, updated_at: "2026-11-11T09:02:00" },
  { id: "mi_601", category_id: "c6", name: "Flat White", price: 3.1, photo_url: "s3://bakery-kiosk-media/menu/flat-white.jpg", options: ["Oat milk", "Extra shot", "Decaf"], is_sold_out: false, updated_at: "2026-11-10T07:30:00" },
  { id: "mi_602", category_id: "c6", name: "Filter Coffee", price: 2.4, photo_url: "s3://bakery-kiosk-media/menu/filter-coffee.jpg", options: ["Oat milk", "Decaf"], is_sold_out: false, updated_at: "2026-11-06T07:05:00" },
];

const catName = (id) => (CATEGORIES.find((c) => c.id === id) || { name: "Uncategorised" }).name;

const money = (n) => "£" + Number(n).toFixed(2);

const startOfDay = (d) => new Date(d.getFullYear(), d.getMonth(), d.getDate()).getTime();

const formatUpdated = (item) => {
  if (item._just_now) return "Just now";
  const d = new Date(item.updated_at);
  const t = String(d.getHours()).padStart(2, "0") + ":" + String(d.getMinutes()).padStart(2, "0");
  const days = Math.round((startOfDay(NOW) - startOfDay(d)) / 86400000);
  if (days === 0) return "Today " + t;
  if (days === 1) return "Yesterday " + t;
  return d.getDate() + " " + MONTHS[d.getMonth()] + " " + t;
};

const initials = (name) =>
  name
    .replace(/&/g, "")
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();

const slugify = (s) =>
  s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "") || "menu-item";

const GLASS = {
  backgroundColor: WHITE(0.055),
  border: "1px solid " + HAIRLINE,
  borderRadius: R,
  backdropFilter: "blur(18px)",
};

function PhotoTile({ item, size }) {
  const px = size || 44;
  if (!item.photo_url) {
    return (
      <div
        className="flex items-center justify-center shrink-0"
        style={{
          width: px,
          height: px,
          borderRadius: 12,
          border: "1px dashed " + WHITE(0.22),
          color: brand.neutralColor,
          fontSize: 9,
          letterSpacing: "0.06em",
          textTransform: "uppercase",
        }}
      >
        No photo
      </div>
    );
  }
  return (
    <div
      role="img"
      aria-label={item.name + " photo, stored in Amazon S3"}
      className="relative flex items-center justify-center shrink-0 font-semibold"
      style={{
        width: px,
        height: px,
        borderRadius: 12,
        color: TEXT,
        fontSize: px > 60 ? 20 : 13,
        letterSpacing: "0.04em",
        background: `linear-gradient(135deg, ${alpha(brand.primaryColor, 0.3)}, ${alpha(brand.accentColor, 0.34)})`,
        border: "1px solid " + WHITE(0.16),
      }}
    >
      {initials(item.name)}
      <span
        aria-hidden="true"
        className="absolute -bottom-1 -right-1 px-1 font-bold"
        style={{
          fontSize: 8,
          lineHeight: "12px",
          borderRadius: 6,
          color: brand.backgroundColor,
          backgroundColor: brand.primaryColor,
        }}
      >
        S3
      </span>
    </div>
  );
}

export default function Screen() {
  const navigate = useNavigate();
  const [loading, setLoading] = React.useState(true);
  const [items, setItems] = React.useState(INITIAL_ITEMS);
  const [categoryFilter, setCategoryFilter] = React.useState("all");
  const [availabilityFilter, setAvailabilityFilter] = React.useState("all");
  const [query, setQuery] = React.useState("");
  const [editor, setEditor] = React.useState(null);
  const [toast, setToast] = React.useState(null);
  const [flashId, setFlashId] = React.useState(null);
  const [kioskTwoOffline, setKioskTwoOffline] = React.useState(true);
  const [sessionLeft, setSessionLeft] = React.useState(14 * 60 + 58);

  const timers = React.useRef([]);
  const nameRef = React.useRef(null);
  const dialogRef = React.useRef(null);
  const openerRef = React.useRef(null);

  const later = (fn, ms) => {
    const id = setTimeout(fn, ms);
    timers.current.push(id);
    return id;
  };

  React.useEffect(() => () => timers.current.forEach(clearTimeout), []);

  React.useEffect(() => {
    const id = setTimeout(() => setLoading(false), 760);
    return () => clearTimeout(id);
  }, []);

  React.useEffect(() => {
    const id = setInterval(() => setSessionLeft((s) => (s > 0 ? s - 1 : 0)), 1000);
    return () => clearInterval(id);
  }, []);

  React.useEffect(() => {
    if (!toast) return;
    const id = setTimeout(() => setToast(null), 4800);
    return () => clearTimeout(id);
  }, [toast]);

  React.useEffect(() => {
    if (!flashId) return;
    const id = setTimeout(() => setFlashId(null), 1800);
    return () => clearTimeout(id);
  }, [flashId]);

  React.useEffect(() => {
    if (editor && nameRef.current) nameRef.current.focus();
  }, [editor && editor.openedAt]);

  const sessionExpired = sessionLeft <= 0;
  const mmss =
    String(Math.floor(sessionLeft / 60)).padStart(2, "0") + ":" + String(sessionLeft % 60).padStart(2, "0");

  const filtered = items.filter((it) => {
    if (categoryFilter !== "all" && it.category_id !== categoryFilter) return false;
    if (availabilityFilter === "available" && it.is_sold_out) return false;
    if (availabilityFilter === "sold_out" && !it.is_sold_out) return false;
    if (query.trim() && !it.name.toLowerCase().includes(query.trim().toLowerCase())) return false;
    return true;
  });

  const soldOutCount = items.filter((i) => i.is_sold_out).length;
  const filtersOn = categoryFilter !== "all" || availabilityFilter !== "all" || query.trim() !== "";

  const clearFilters = () => {
    setCategoryFilter("all");
    setAvailabilityFilter("all");
    setQuery("");
  };

  const openAdd = (e) => {
    openerRef.current = e && e.currentTarget;
    setEditor({
      mode: "add",
      openedAt: Date.now(),
      id: null,
      name: "",
      category_id: "c1",
      price: "",
      options: [],
      is_sold_out: false,
      photo_url: null,
      photoState: "none",
      locked: false,
      errors: {},
      banner: null,
      saving: false,
    });
  };

  const openEdit = (item, e) => {
    openerRef.current = e && e.currentTarget;
    setEditor({
      mode: "edit",
      openedAt: Date.now(),
      id: item.id,
      name: item.name,
      category_id: item.category_id,
      price: Number(item.price).toFixed(2),
      options: item.options.slice(),
      is_sold_out: item.is_sold_out,
      photo_url: item.photo_url,
      photoState: item.photo_url ? "stored" : "none",
      locked: !!item.manager_locked,
      errors: {},
      banner: null,
      saving: false,
    });
  };

  const closeEditor = () => {
    setEditor(null);
    const node = openerRef.current;
    if (node && typeof node.focus === "function") later(() => node.focus(), 0);
  };

  const patchEditor = (patch) => setEditor((e) => (e ? Object.assign({}, e, patch) : e));

  const toggleRowAvailability = (item) => {
    const next = !item.is_sold_out;
    setItems((list) =>
      list.map((it) =>
        it.id === item.id
          ? Object.assign({}, it, { is_sold_out: next, updated_at: NOW.toISOString(), _just_now: true })
          : it
      )
    );
    setFlashId(item.id);
    setToast({
      kind: next ? "info" : "success",
      text: next
        ? item.name + " is off the kiosk — customers can no longer add it."
        : item.name + " is back on the kiosk and orderable again.",
    });
  };

  const uploadPhoto = () => {
    patchEditor({ photoState: "uploading" });
    later(() => {
      patchEditor({
        photoState: "stored",
        photo_url:
          "s3://" + S3_BUCKET + "/menu/" + slugify(editorNameRef.current || "menu-item") + "-" + "20261111" + ".jpg",
      });
    }, 950);
  };

  // keeps the latest typed name available to the upload callback
  const editorNameRef = React.useRef("");
  editorNameRef.current = editor ? editor.name : "";

  const handleSave = (e) => {
    e.preventDefault();
    if (!editor) return;
    const errors = {};
    if (!editor.name.trim()) errors.name = "Give the item a name customers will recognise on the kiosk.";
    const price = parseFloat(editor.price);
    if (!editor.price.toString().trim() || isNaN(price) || price <= 0)
      errors.price = "Enter a price above £0.00 — the kiosk needs it to total the order.";

    const duplicate = items.find(
      (it) =>
        it.id !== editor.id &&
        it.name.trim().toLowerCase() === editor.name.trim().toLowerCase() &&
        it.category_id === editor.category_id
    );

    if (Object.keys(errors).length) {
      patchEditor({ errors: errors, banner: null });
      return;
    }
    if (duplicate) {
      patchEditor({
        errors: {},
        banner:
          "There is already a " + duplicate.name + " in " + catName(duplicate.category_id) +
          ". Rename this one, or close and edit the original.",
      });
      return;
    }

    patchEditor({ errors: {}, banner: null, saving: true });
    const snapshot = editor;
    later(() => {
      if (snapshot.mode === "add") {
        const id = "mi_" + Math.floor(900 + Math.random() * 99);
        setItems((list) => [
          {
            id: id,
            category_id: snapshot.category_id,
            name: snapshot.name.trim(),
            price: price,
            photo_url: snapshot.photo_url,
            options: snapshot.options,
            is_sold_out: snapshot.is_sold_out,
            updated_at: NOW.toISOString(),
            _just_now: true,
          },
          ...list,
        ]);
        setFlashId(id);
        setToast({
          kind: "success",
          text: snapshot.name.trim() + " added to " + catName(snapshot.category_id) + " — live on the kiosk menu.",
        });
      } else {
        setItems((list) =>
          list.map((it) =>
            it.id === snapshot.id
              ? Object.assign({}, it, {
                  name: snapshot.name.trim(),
                  category_id: snapshot.category_id,
                  price: snapshot.locked ? it.price : price,
                  options: snapshot.options,
                  is_sold_out: snapshot.is_sold_out,
                  photo_url: snapshot.photo_url,
                  updated_at: NOW.toISOString(),
                  _just_now: true,
                })
              : it
          )
        );
        setFlashId(snapshot.id);
        setToast({ kind: "success", text: snapshot.name.trim() + " saved — the kiosk menu is updated." });
      }
      closeEditor();
    }, 680);
  };

  const onDialogKeyDown = (e) => {
    if (e.key === "Escape") {
      e.stopPropagation();
      closeEditor();
      return;
    }
    if (e.key !== "Tab" || !dialogRef.current) return;
    const nodes = dialogRef.current.querySelectorAll("button, input, select, textarea, [tabindex]:not([tabindex='-1'])");
    const list = Array.prototype.filter.call(nodes, (n) => !n.disabled && n.offsetParent !== null);
    if (!list.length) return;
    const first = list[0];
    const last = list[list.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  };

  const css = `
    [data-np] input::placeholder { color: ${alpha(brand.neutralColor, 0.62)}; }
    [data-np] select option { background: ${brand.backgroundColor}; color: ${TEXT}; }
    [data-np] :is(button, input, select, textarea, a, [tabindex]):focus-visible {
      outline: 2px solid ${brand.primaryColor};
      outline-offset: 2px;
    }
    @keyframes npRowIn { from { opacity: 0; transform: translateY(6px); } to { opacity: 1; transform: none; } }
    @keyframes npFlash { 0% { background-color: ${alpha(brand.primaryColor, 0.22)}; } 100% { background-color: transparent; } }
    @keyframes npModalIn { from { opacity: 0; transform: translateY(14px) scale(.985); } to { opacity: 1; transform: none; } }
    @keyframes npFadeIn { from { opacity: 0; } to { opacity: 1; } }
    @keyframes npSheen { 0% { background-position: -220% 0; } 100% { background-position: 220% 0; } }
    @keyframes npBar { 0% { transform: translateX(-100%); } 100% { transform: translateX(260%); } }
    .np-row { animation: npRowIn .28s ease both; }
    .np-flash { animation: npFlash 1.6s ease-out both; }
    .np-modal { animation: npModalIn .22s cubic-bezier(.2,.8,.3,1) both; }
    .np-fade { animation: npFadeIn .2s ease both; }
    .np-skel {
      background: linear-gradient(90deg, ${WHITE(0.05)} 25%, ${WHITE(0.11)} 45%, ${WHITE(0.05)} 65%);
      background-size: 220% 100%;
      animation: npSheen 1.5s linear infinite;
    }
    .np-bar { animation: npBar 1.1s ease-in-out infinite; }
    .np-press { transition: transform .12s ease, background-color .18s ease, border-color .18s ease, box-shadow .18s ease, opacity .18s ease; }
    .np-press:active { transform: translateY(1px); }
    @media (prefers-reduced-motion: reduce) {
      [data-np] *, [data-np] *::before, [data-np] *::after {
        animation-duration: .001ms !important; animation-iteration-count: 1 !important; transition-duration: .001ms !important;
      }
    }
  `;

  const btnPrimary = {
    background: `linear-gradient(118deg, ${brand.primaryColor}, ${brand.accentColor})`,
    color: brand.backgroundColor,
    borderRadius: R,
    border: "1px solid " + WHITE(0.18),
    boxShadow: `0 22px 52px -22px ${alpha(brand.accentColor, 0.95)}`,
  };
  const btnQuiet = {
    backgroundColor: WHITE(0.05),
    color: TEXT,
    borderRadius: R,
    border: "1px solid " + HAIRLINE,
  };
  const fieldStyle = {
    backgroundColor: WHITE(0.05),
    border: "1px solid " + HAIRLINE,
    color: TEXT,
    borderRadius: R,
  };

  const labelCls = "text-[12px] font-semibold tracking-[0.1em] uppercase";
  const labelStyle = { color: brand.neutralColor };

  // ── session timed out ───────────────────────────────────────
  if (sessionExpired) {
    return (
      <div data-np className="relative" style={{ fontFamily: brand.fontBody, color: TEXT }}>
        <style>{css}</style>
        <div className="max-w-xl mx-auto mt-16 p-8 np-fade" style={GLASS}>
          <h1 className="text-3xl font-extrabold tracking-tight" style={{ fontFamily: brand.fontHeading }}>
            Your admin session timed out
          </h1>
          <p className="mt-3 text-[15px] leading-relaxed" style={{ color: brand.neutralColor }}>
            Fifteen minutes of inactivity ends the session so the counter tablet can’t be left open. Nothing you saved
            is lost — sign in again to keep editing the menu.
          </p>
          <Button
            className="mt-6 h-12 px-6 font-semibold np-press"
            style={btnPrimary}
            onClick={() => navigate("staff-login")}
          >
            Sign in again
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div data-np className="relative" style={{ fontFamily: brand.fontBody, color: TEXT }}>
      <style>{css}</style>

      {/* ambient glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -left-10 w-[420px] h-[420px] rounded-full"
        style={{ background: alpha(brand.primaryColor, 0.16), filter: "blur(120px)" }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-10 right-0 w-[380px] h-[380px] rounded-full"
        style={{ background: alpha(brand.accentColor, 0.14), filter: "blur(130px)" }}
      />

      <div className="relative space-y-6">
        {/* ── Row 1 ───────────────────────────────────────────── */}
        <div className="grid grid-cols-12 gap-4 items-start">
          <div data-wf="b-0-0" className="col-span-12 lg:col-span-6">
            <div className="flex items-start gap-4">
              <span
                aria-hidden="true"
                className="mt-2 block shrink-0"
                style={{
                  width: 4,
                  height: 52,
                  borderRadius: 4,
                  background: `linear-gradient(${brand.primaryColor}, ${brand.accentColor})`,
                  boxShadow: `0 0 28px ${alpha(brand.accentColor, 0.65)}`,
                }}
              />
              <div>
                <h1
                  className="text-[34px] leading-[1.1] font-extrabold tracking-[-0.02em]"
                  style={{ fontFamily: brand.fontHeading }}
                >
                  Menu Management
                </h1>
                <p className="mt-2 text-[14px] leading-relaxed max-w-[58ch]" style={{ color: brand.neutralColor }}>
                  Edits save straight to the kiosk menu. Items marked sold out disappear from the customer’s add button.
                </p>
                <div className="mt-3 flex flex-wrap items-center gap-2">
                  <span
                    className="inline-flex items-center gap-2 px-3 py-1.5 text-[12px]"
                    style={{ borderRadius: 999, border: "1px solid " + HAIRLINE, backgroundColor: WHITE(0.04) }}
                  >
                    <Avatar name="Priya Raman" className="w-5 h-5" />
                    <span style={{ color: TEXT }}>Priya Raman</span>
                    <span style={{ color: brand.neutralColor }}>· counter lead</span>
                  </span>
                  <span
                    className="inline-flex items-center gap-2 px-3 py-1.5 text-[12px]"
                    style={{
                      borderRadius: 999,
                      border: "1px solid " + (sessionLeft <= 120 ? alpha(brand.accentColor, 0.5) : HAIRLINE),
                      backgroundColor: sessionLeft <= 120 ? alpha(brand.accentColor, 0.12) : WHITE(0.04),
                      color: sessionLeft <= 120 ? brand.accentColor : brand.neutralColor,
                      fontVariantNumeric: "tabular-nums",
                    }}
                  >
                    <Clock className="w-3.5 h-3.5" aria-hidden="true" />
                    {sessionLeft <= 120 ? "Session ends in " : "Session active · "}
                    {mmss}
                  </span>
                  {kioskTwoOffline && (
                    <span
                      className="inline-flex items-center gap-2 px-3 py-1.5 text-[12px]"
                      style={{
                        borderRadius: 999,
                        border: "1px solid " + HAIRLINE,
                        backgroundColor: WHITE(0.04),
                        color: brand.neutralColor,
                      }}
                    >
                      <AlertCircle className="w-3.5 h-3.5" aria-hidden="true" />
                      Kiosk 2 offline — last synced 09:41, changes apply when it reconnects
                      <button
                        type="button"
                        className="np-press ml-1"
                        aria-label="Dismiss the kiosk 2 offline notice"
                        onClick={() => setKioskTwoOffline(false)}
                        style={{ color: TEXT }}
                      >
                        <X className="w-3.5 h-3.5" aria-hidden="true" />
                      </button>
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-6 grid grid-cols-2 gap-3">
            <Button
              data-wf="b-0-1"
              className="h-12 px-5 inline-flex items-center justify-center gap-2 font-semibold text-[15px] np-press"
              style={btnPrimary}
              onClick={openAdd}
            >
              <Plus className="w-4 h-4" aria-hidden="true" />
              Add Menu Item
            </Button>
            <Button
              data-wf="b-0-2"
              className="h-12 px-5 inline-flex items-center justify-center gap-2 font-semibold text-[15px] np-press"
              style={btnQuiet}
              onClick={() => navigate("staff-login")}
            >
              Sign Out
            </Button>
          </div>
        </div>

        {/* ── Row 2 · filter bar ──────────────────────────────── */}
        <section data-wf="b-1-0" className="p-5" style={GLASS} aria-label="Filter items">
          <div className="flex flex-wrap items-end gap-4">
            <div className="w-full sm:w-auto sm:min-w-[200px]">
              <Label htmlFor="f-category" className={labelCls} style={labelStyle}>
                Category
              </Label>
              <Select
                id="f-category"
                data-wf="i-1-0-0"
                className="mt-2 h-12 w-full px-3 text-[15px]"
                style={fieldStyle}
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
              >
                <option value="all">All categories</option>
                {CATEGORIES.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.name}
                  </option>
                ))}
              </Select>
            </div>

            <div className="w-full sm:w-auto sm:min-w-[190px]">
              <Label htmlFor="f-availability" className={labelCls} style={labelStyle}>
                Availability
              </Label>
              <Select
                id="f-availability"
                data-wf="i-1-0-1"
                className="mt-2 h-12 w-full px-3 text-[15px]"
                style={fieldStyle}
                value={availabilityFilter}
                onChange={(e) => setAvailabilityFilter(e.target.value)}
              >
                <option value="all">All items</option>
                <option value="available">Available</option>
                <option value="sold_out">Sold out</option>
              </Select>
            </div>

            <div className="flex-1 min-w-[220px]">
              <Label htmlFor="f-search" className={labelCls} style={labelStyle}>
                Search by name
              </Label>
              <div className="relative mt-2">
                <Search
                  className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2"
                  aria-hidden="true"
                  style={{ color: brand.neutralColor }}
                />
                <Input
                  id="f-search"
                  data-wf="i-1-0-2"
                  type="search"
                  className="h-12 w-full pl-11 pr-4 text-[15px]"
                  style={fieldStyle}
                  placeholder="Croissant, sourdough, flat white…"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
              </div>
            </div>

            {filtersOn && (
              <Button
                className="h-12 px-4 text-[14px] font-medium np-press"
                style={btnQuiet}
                onClick={clearFilters}
              >
                Clear filters
              </Button>
            )}
          </div>
        </section>

        {/* toast */}
        {toast && (
          <div
            role="status"
            className="flex items-start gap-3 px-4 py-3 np-fade"
            style={{
              borderRadius: R,
              border: "1px solid " + alpha(toast.kind === "success" ? brand.primaryColor : brand.accentColor, 0.45),
              backgroundColor: alpha(toast.kind === "success" ? brand.primaryColor : brand.accentColor, 0.1),
            }}
          >
            {toast.kind === "success" ? (
              <CheckCircle className="w-5 h-5 shrink-0 mt-0.5" aria-hidden="true" style={{ color: brand.primaryColor }} />
            ) : (
              <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" aria-hidden="true" style={{ color: brand.accentColor }} />
            )}
            <p className="text-[14px] leading-relaxed">{toast.text}</p>
          </div>
        )}

        {/* ── Row 3 · table ───────────────────────────────────── */}
        <section data-wf="b-2-0" style={GLASS} className="overflow-hidden">
          <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2 px-6 pt-6 pb-4">
            <h2 className="text-[20px] font-bold tracking-[-0.01em]" style={{ fontFamily: brand.fontHeading }}>
              Menu items{" "}
              <span style={{ fontVariantNumeric: "tabular-nums", color: brand.neutralColor }}>
                ({filtered.length === items.length ? items.length : filtered.length + " of " + items.length})
              </span>
            </h2>
            <span className="text-[13px]" style={{ color: brand.neutralColor, fontVariantNumeric: "tabular-nums" }}>
              {soldOutCount} sold out right now · {CATEGORIES.length} categories
            </span>
          </div>
          <div style={{ height: 1, backgroundColor: HAIRLINE }} />

          {loading ? (
            <div className="p-6 space-y-3" aria-live="polite">
              <p className="text-[13px]" style={{ color: brand.neutralColor }}>
                Loading the kiosk menu…
              </p>
              {[0, 1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="np-skel" style={{ width: 44, height: 44, borderRadius: 12 }} />
                  <div className="np-skel" style={{ height: 12, borderRadius: 6, width: "28%" }} />
                  <div className="np-skel" style={{ height: 12, borderRadius: 6, width: "14%" }} />
                  <div className="np-skel ml-auto" style={{ height: 12, borderRadius: 6, width: "18%" }} />
                </div>
              ))}
            </div>
          ) : items.length === 0 ? (
            <div className="p-8">
              <Empty
                title="The kiosk menu is empty"
                description="Add your first item — name, category, price and a photo — and customers will see it on the kiosk the moment you save."
                action={
                  <Button className="h-12 px-5 font-semibold np-press" style={btnPrimary} onClick={openAdd}>
                    Add Menu Item
                  </Button>
                }
              />
            </div>
          ) : filtered.length === 0 ? (
            <div className="p-8">
              <Empty
                title="Nothing on the menu matches that"
                description={
                  "No " +
                  (availabilityFilter === "sold_out" ? "sold-out " : availabilityFilter === "available" ? "available " : "") +
                  "items in " +
                  (categoryFilter === "all" ? "any category" : catName(categoryFilter)) +
                  (query.trim() ? " named “" + query.trim() + "”" : "") +
                  ". Clear the filters to see all 24 items."
                }
                action={
                  <Button className="h-12 px-5 font-semibold np-press" style={btnQuiet} onClick={clearFilters}>
                    Clear filters
                  </Button>
                }
              />
            </div>
          ) : (
            <div className="overflow-x-auto">
              <Table className="w-full min-w-[920px]" style={{ fontVariantNumeric: "tabular-nums", borderCollapse: "collapse" }}>
                <THead>
                  <TR>
                    {[
                      ["i-2-0-0", "Photo", "w-[84px]"],
                      ["i-2-0-1", "Name", ""],
                      ["i-2-0-2", "Category", "w-[160px]"],
                      ["i-2-0-3", "Price", "w-[110px]"],
                      ["i-2-0-4", "Options", "w-[230px]"],
                      ["i-2-0-5", "Sold out", "w-[150px]"],
                      ["i-2-0-6", "Updated", "w-[140px]"],
                    ].map(([wf, label, w]) => (
                      <TH
                        key={wf}
                        data-wf={wf}
                        scope="col"
                        className={"text-left px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.14em] " + w}
                        style={{ color: brand.neutralColor, borderBottom: "1px solid " + HAIRLINE }}
                      >
                        {label}
                      </TH>
                    ))}
                  </TR>
                </THead>
                <TBody>
                  {filtered.map((item, idx) => (
                    <TR
                      key={item.id}
                      className={"np-row " + (flashId === item.id ? "np-flash" : "")}
                      style={{
                        animationDelay: Math.min(idx, 10) * 16 + "ms",
                        borderBottom: "1px solid " + WHITE(0.07),
                        borderLeft: item.is_sold_out ? "1px solid " + alpha(brand.accentColor, 0.75) : "1px solid transparent",
                        backgroundColor: item.is_sold_out ? alpha(brand.accentColor, 0.05) : "transparent",
                      }}
                    >
                      <TD className="px-4 py-3">
                        <PhotoTile item={item} />
                      </TD>
                      <TD className="px-4 py-3">
                        <button
                          type="button"
                          className="group inline-flex items-center gap-2 text-left text-[15px] font-semibold np-press"
                          style={{ color: TEXT, borderRadius: 8 }}
                          onClick={(e) => openEdit(item, e)}
                        >
                          <span>{item.name}</span>
                          <Edit className="w-3.5 h-3.5 opacity-60" aria-hidden="true" style={{ color: brand.primaryColor }} />
                          <span className="sr-only">— edit this item</span>
                        </button>
                        {item.manager_locked && (
                          <span
                            className="ml-2 inline-block px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.1em] align-middle"
                            style={{ borderRadius: 999, border: "1px solid " + HAIRLINE, color: brand.neutralColor }}
                          >
                            Manager-locked price
                          </span>
                        )}
                      </TD>
                      <TD className="px-4 py-3 text-[14px]" style={{ color: brand.neutralColor }}>
                        {catName(item.category_id)}
                      </TD>
                      <TD className="px-4 py-3 text-[15px] font-semibold" style={{ fontVariantNumeric: "tabular-nums" }}>
                        {money(item.price)}
                      </TD>
                      <TD className="px-4 py-3">
                        {item.options.length === 0 ? (
                          <span className="text-[13px]" style={{ color: alpha(brand.neutralColor, 0.75) }}>
                            No options
                          </span>
                        ) : (
                          <span className="flex flex-wrap gap-1.5">
                            {item.options.map((o) => (
                              <Badge
                                key={o}
                                className="px-2.5 py-1 text-[11px] font-medium"
                                style={{
                                  borderRadius: 999,
                                  backgroundColor: alpha(brand.primaryColor, 0.12),
                                  border: "1px solid " + alpha(brand.primaryColor, 0.35),
                                  color: brand.primaryColor,
                                }}
                              >
                                {o}
                              </Badge>
                            ))}
                          </span>
                        )}
                      </TD>
                      <TD className="px-4 py-3">
                        <button
                          type="button"
                          aria-pressed={item.is_sold_out}
                          onClick={() => toggleRowAvailability(item)}
                          className="inline-flex items-center gap-2 px-3 h-11 text-[13px] font-semibold np-press"
                          style={{
                            borderRadius: 999,
                            color: item.is_sold_out ? brand.accentColor : brand.primaryColor,
                            backgroundColor: alpha(item.is_sold_out ? brand.accentColor : brand.primaryColor, 0.12),
                            border: "1px solid " + alpha(item.is_sold_out ? brand.accentColor : brand.primaryColor, 0.42),
                          }}
                        >
                          {item.is_sold_out ? (
                            <X className="w-4 h-4" aria-hidden="true" />
                          ) : (
                            <Check className="w-4 h-4" aria-hidden="true" />
                          )}
                          {item.is_sold_out ? "Sold out" : "Available"}
                          <span className="sr-only">
                            — tap to mark {item.name} {item.is_sold_out ? "available" : "sold out"}
                          </span>
                        </button>
                      </TD>
                      <TD
                        className="px-4 py-3 text-[13px]"
                        style={{ color: brand.neutralColor, fontVariantNumeric: "tabular-nums" }}
                      >
                        {formatUpdated(item)}
                      </TD>
                    </TR>
                  ))}
                </TBody>
              </Table>
            </div>
          )}
        </section>
      </div>

      {/* ── Row 4 + Row 5 · editor modal ──────────────────────── */}
      {editor && (
        <div
          className="fixed inset-0 z-50 flex items-start sm:items-center justify-center p-4 overflow-y-auto np-fade"
          style={{ backgroundColor: "rgba(3, 9, 22, 0.74)", backdropFilter: "blur(6px)" }}
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) closeEditor();
          }}
        >
          <div
            data-wf="b-3-0"
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="editor-title"
            onKeyDown={onDialogKeyDown}
            className="w-full max-w-2xl my-auto np-modal"
            style={{
              backgroundColor: "rgba(10, 24, 48, 0.92)",
              border: "1px solid " + WHITE(0.14),
              borderRadius: R,
              backdropFilter: "blur(24px)",
              boxShadow: `0 60px 140px -50px ${alpha(brand.accentColor, 0.8)}, 0 0 0 1px ${WHITE(0.04)}`,
            }}
          >
            <form onSubmit={handleSave}>
              <div className="flex items-start gap-4 px-6 pt-6 pb-5">
                <div className="min-w-0">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.16em]" style={{ color: brand.primaryColor }}>
                    {editor.mode === "add" ? "New item" : "Editing"}
                  </p>
                  <h2
                    id="editor-title"
                    className="mt-1 text-[24px] font-extrabold tracking-[-0.02em] truncate"
                    style={{ fontFamily: brand.fontHeading }}
                  >
                    {editor.mode === "add" ? "Add Menu Item" : "Edit Menu Item — " + (editor.name || "Untitled item")}
                  </h2>
                </div>
                <button
                  type="button"
                  className="ml-auto shrink-0 w-11 h-11 inline-flex items-center justify-center np-press"
                  style={{ borderRadius: 999, border: "1px solid " + HAIRLINE, color: TEXT }}
                  aria-label="Close the item editor"
                  onClick={closeEditor}
                >
                  <X className="w-4 h-4" aria-hidden="true" />
                </button>
              </div>
              <div style={{ height: 1, backgroundColor: HAIRLINE }} />

              <div className="px-6 py-6 space-y-6">
                {editor.banner && (
                  <div
                    role="alert"
                    className="flex items-start gap-3 px-4 py-3"
                    style={{
                      borderRadius: R,
                      border: "1px solid " + alpha(brand.accentColor, 0.5),
                      backgroundColor: alpha(brand.accentColor, 0.12),
                    }}
                  >
                    <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" aria-hidden="true" style={{ color: brand.accentColor }} />
                    <p className="text-[14px] leading-relaxed">{editor.banner}</p>
                  </div>
                )}

                <div className="grid grid-cols-12 gap-5">
                  <div className="col-span-12 sm:col-span-7">
                    <Label htmlFor="mi-name" className={labelCls} style={labelStyle}>
                      Name
                    </Label>
                    <Input
                      id="mi-name"
                      data-wf="i-3-0-0"
                      ref={nameRef}
                      className="mt-2 h-12 w-full px-4 text-[15px]"
                      style={Object.assign({}, fieldStyle, {
                        border: "1px solid " + (editor.errors.name ? alpha(brand.accentColor, 0.7) : HAIRLINE),
                      })}
                      placeholder="Butter Croissant"
                      value={editor.name}
                      aria-invalid={editor.errors.name ? "true" : undefined}
                      aria-describedby={editor.errors.name ? "mi-name-err" : undefined}
                      onChange={(e) => patchEditor({ name: e.target.value })}
                    />
                    {editor.errors.name && (
                      <p id="mi-name-err" className="mt-2 text-[13px]" style={{ color: brand.accentColor }}>
                        {editor.errors.name}
                      </p>
                    )}
                  </div>

                  <div className="col-span-12 sm:col-span-5">
                    <Label htmlFor="mi-category" className={labelCls} style={labelStyle}>
                      Category
                    </Label>
                    <Select
                      id="mi-category"
                      data-wf="i-3-0-1"
                      className="mt-2 h-12 w-full px-3 text-[15px]"
                      style={fieldStyle}
                      value={editor.category_id}
                      onChange={(e) => patchEditor({ category_id: e.target.value })}
                    >
                      {CATEGORIES.map((c) => (
                        <option key={c.id} value={c.id}>
                          {c.name}
                        </option>
                      ))}
                    </Select>
                  </div>

                  <div className="col-span-12 sm:col-span-5">
                    <Label htmlFor="mi-price" className={labelCls} style={labelStyle}>
                      Price (£)
                    </Label>
                    <Input
                      id="mi-price"
                      data-wf="i-3-0-2"
                      type="number"
                      inputMode="decimal"
                      step="0.05"
                      min="0"
                      disabled={editor.locked}
                      className="mt-2 h-12 w-full px-4 text-[15px]"
                      style={Object.assign({}, fieldStyle, {
                        border: "1px solid " + (editor.errors.price ? alpha(brand.accentColor, 0.7) : HAIRLINE),
                        opacity: editor.locked ? 0.55 : 1,
                        fontVariantNumeric: "tabular-nums",
                      })}
                      placeholder="2.40"
                      value={editor.price}
                      aria-invalid={editor.errors.price ? "true" : undefined}
                      aria-describedby={
                        editor.errors.price ? "mi-price-err" : editor.locked ? "mi-price-lock" : undefined
                      }
                      onChange={(e) => patchEditor({ price: e.target.value })}
                    />
                    {editor.errors.price && (
                      <p id="mi-price-err" className="mt-2 text-[13px]" style={{ color: brand.accentColor }}>
                        {editor.errors.price}
                      </p>
                    )}
                    {editor.locked && !editor.errors.price && (
                      <p
                        id="mi-price-lock"
                        className="mt-2 text-[13px] leading-relaxed flex items-start gap-2"
                        style={{ color: brand.neutralColor }}
                      >
                        <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" aria-hidden="true" />
                        Price is manager-only on bakery specials. Marta Vieira (head baker) can unlock it — everything
                        else here is yours to edit.
                      </p>
                    )}
                  </div>

                  <div className="col-span-12 sm:col-span-7">
                    <span className={labelCls} style={labelStyle} id="mi-options-label">
                      Options
                    </span>
                    <div
                      data-wf="i-3-0-3"
                      role="group"
                      aria-labelledby="mi-options-label"
                      className="mt-2 flex flex-wrap gap-2"
                    >
                      {OPTION_LIBRARY.map((opt) => {
                        const on = editor.options.indexOf(opt) !== -1;
                        const id = "mi-opt-" + slugify(opt);
                        return (
                          <span
                            key={opt}
                            className="inline-flex items-center gap-2 px-3 h-11 np-press"
                            style={{
                              borderRadius: 999,
                              border: "1px solid " + (on ? alpha(brand.primaryColor, 0.5) : HAIRLINE),
                              backgroundColor: on ? alpha(brand.primaryColor, 0.14) : WHITE(0.04),
                            }}
                          >
                            <Checkbox
                              id={id}
                              checked={on}
                              onChange={() =>
                                patchEditor({
                                  options: on
                                    ? editor.options.filter((o) => o !== opt)
                                    : editor.options.concat([opt]),
                                })
                              }
                            />
                            <Label
                              htmlFor={id}
                              className="text-[13px] font-medium cursor-pointer"
                              style={{ color: on ? brand.primaryColor : TEXT }}
                            >
                              {opt}
                            </Label>
                          </span>
                        );
                      })}
                    </div>
                    <p className="mt-2 text-[12px]" style={{ color: brand.neutralColor }}>
                      Ticked options are offered to the customer when they add this item.
                    </p>
                  </div>
                </div>

                <div style={{ height: 1, backgroundColor: HAIRLINE }} />

                {/* Photo */}
                <div>
                  <span className={labelCls} style={labelStyle} id="mi-photo-label">
                    Photo — upload to S3
                  </span>
                  <div className="mt-3 flex items-center gap-4">
                    <PhotoTile
                      item={{ name: editor.name || "New item", photo_url: editor.photoState === "stored" ? editor.photo_url : null }}
                      size={72}
                    />
                    <div className="min-w-0 flex-1">
                      {editor.photoState === "uploading" ? (
                        <div aria-live="polite">
                          <p className="text-[14px]">Uploading to {S3_BUCKET}…</p>
                          <div
                            className="mt-2 h-1.5 overflow-hidden"
                            style={{ borderRadius: 999, backgroundColor: WHITE(0.08) }}
                          >
                            <div
                              className="np-bar h-full w-1/3"
                              style={{
                                borderRadius: 999,
                                background: `linear-gradient(90deg, ${brand.primaryColor}, ${brand.accentColor})`,
                              }}
                            />
                          </div>
                        </div>
                      ) : editor.photoState === "stored" ? (
                        <p className="text-[13px] break-all" style={{ color: brand.neutralColor }}>
                          <span className="inline-flex items-center gap-1.5" style={{ color: brand.primaryColor }}>
                            <CheckCircle className="w-4 h-4" aria-hidden="true" /> Stored in S3
                          </span>
                          <br />
                          {editor.photo_url}
                        </p>
                      ) : (
                        <p className="text-[13px]" style={{ color: brand.neutralColor }}>
                          No photo yet — the kiosk will show the item name only. JPG or PNG up to 5 MB, stored in
                          Amazon S3 (eu-west-2).
                        </p>
                      )}
                    </div>
                    <Button
                      data-wf="i-3-0-4"
                      type="button"
                      aria-describedby="mi-photo-label"
                      disabled={editor.photoState === "uploading"}
                      onClick={uploadPhoto}
                      className="h-12 px-4 shrink-0 inline-flex items-center gap-2 text-[14px] font-semibold np-press"
                      style={Object.assign({}, btnQuiet, {
                        opacity: editor.photoState === "uploading" ? 0.6 : 1,
                        borderColor: alpha(brand.primaryColor, 0.4),
                      })}
                    >
                      <Upload className="w-4 h-4" aria-hidden="true" />
                      {editor.photoState === "uploading"
                        ? "Uploading…"
                        : editor.photoState === "stored"
                        ? "Replace photo"
                        : "Upload photo"}
                    </Button>
                  </div>
                </div>

                <div style={{ height: 1, backgroundColor: HAIRLINE }} />

                {/* Mark sold out */}
                <div className="flex items-center gap-3">
                  <Checkbox
                    id="mi-soldout"
                    data-wf="i-3-0-5"
                    checked={editor.is_sold_out}
                    onChange={(e) => patchEditor({ is_sold_out: e.target.checked })}
                  />
                  <Label htmlFor="mi-soldout" className="text-[15px] font-medium cursor-pointer">
                    Mark sold out
                  </Label>
                  <span className="text-[13px]" style={{ color: brand.neutralColor }}>
                    Customers still see it, greyed out, with no add button.
                  </span>
                </div>
              </div>

              <div style={{ height: 1, backgroundColor: HAIRLINE }} />

              {/* ── Row 5 · footer actions ──────────────────── */}
              <div className="grid grid-cols-12 gap-3 px-6 py-5">
                <Button
                  data-wf="b-4-0"
                  type="submit"
                  disabled={editor.saving}
                  className="col-span-12 sm:col-span-4 h-12 px-5 inline-flex items-center justify-center gap-2 font-semibold text-[15px] np-press"
                  style={Object.assign({}, btnPrimary, { opacity: editor.saving ? 0.72 : 1 })}
                >
                  {editor.saving ? (
                    <>
                      <Clock className="w-4 h-4" aria-hidden="true" />
                      Saving…
                    </>
                  ) : (
                    <>
                      <Check className="w-4 h-4" aria-hidden="true" />
                      Save Item
                    </>
                  )}
                </Button>
                <Button
                  data-wf="b-4-1"
                  type="button"
                  disabled={editor.saving}
                  onClick={() => patchEditor({ is_sold_out: !editor.is_sold_out })}
                  className="col-span-12 sm:col-span-4 h-12 px-5 inline-flex items-center justify-center gap-2 font-semibold text-[15px] np-press"
                  style={{
                    borderRadius: R,
                    border: "1px solid " + alpha(brand.accentColor, 0.45),
                    backgroundColor: alpha(brand.accentColor, 0.12),
                    color: brand.accentColor,
                  }}
                >
                  {editor.is_sold_out ? (
                    <>
                      <Check className="w-4 h-4" aria-hidden="true" />
                      Mark Available
                    </>
                  ) : (
                    <>
                      <X className="w-4 h-4" aria-hidden="true" />
                      Mark Sold Out
                    </>
                  )}
                </Button>
                <Button
                  data-wf="b-4-2"
                  type="button"
                  onClick={closeEditor}
                  className="col-span-12 sm:col-span-4 h-12 px-5 inline-flex items-center justify-center font-semibold text-[15px] np-press"
                  style={btnQuiet}
                >
                  Cancel
                </Button>
                <p className="col-span-12 text-[12px] mt-1" style={{ color: brand.neutralColor }}>
                  Saving pushes the change to every kiosk screen in the shop straight away.
                </p>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
