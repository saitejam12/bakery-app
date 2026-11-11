# Product Requirements

> Maintained by QuorQ AI SDLC. Text between `sdlc:auto` markers is regenerated; anything outside them is yours and is kept.

<!-- sdlc:auto:start narrative -->
## Summary

### REQ-SCOPE-001 · approved · source: requirements:stack

Product owner approved a fixed technology stack for a lightweight-scope kiosk build: FastAPI backend, AWS cloud, PostgreSQL 16, React 19 frontend.

Decisions, with stated rationale:
- Backend: FastAPI 0.115 -- clean JSON API with auto docs for a future external tracking-app integration; platform default; fits single-bakery scale.
- Cloud: AWS -- runs kiosk app, database and menu-photo storage together, always-on and reachable; platform default.
- Database: PostgreSQL 16 -- transactional integrity for orders and the daily token counter (must be exact, no duplicates); also backs the read API; platform default.
- Frontend: React 19 -- handles the interactive, state-heavy cart/browse flow and resizes to any mounted tablet screen; platform default.
Requirements version: 1. Delivery scope: lightweight.

### REQ-SCOPE-002 · approved · source: requirements:runtime_needs

Approved runtime service: Amazon S3 for menu item photo storage, with required API keys/environment variables.

- Service: Amazon S3 (SaaS) -- stores staff-uploaded menu item photos outside the database so kiosks can load images fast and reliably.
- Required environment variables / API keys: AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY, AWS_REGION, S3_BUCKET.

**Related:** US-012

### REQ-SCOPE-003 · approved · source: requirements:scope

The staff/kitchen order-tracking display app (which shows token numbers and advances order status) is explicitly out of scope for this project.

This project builds only the kiosk, its database, menu management, and a read-only orders/tokens API for a future tracking app to consume -- it does not build that tracking app itself. Assumption carried through multiple epics: no live integration exists yet.

**Related:** US-009, US-010

### US-001 · approved · source: requirements:EPIC-001/US-001

Customers browse the kiosk menu organised by category, with no login required, on a touch-friendly responsive screen.

- AC-001: Menu home screen shows available categories; selecting one shows its items.
- AC-002: Each item in a category shows name, price and photo (if one exists).
- AC-003: Layout is touch-friendly and responsive for in-store tablet/screen use, tappable without mouse/keyboard.
Priority: high. Assumption: single bakery location, one or more in-store kiosk tablets/screens, no customer account.

**Related:** EPIC-001, AC-001, AC-002, AC-003, NFR-001

### US-002 · approved · source: requirements:EPIC-001/US-002

Sold-out items are clearly marked unavailable to customers and cannot be added to the cart.

- AC-004: Item marked sold out by staff shows as sold out and cannot be added to cart.
- AC-005: Item marked available again shows as available and can be added to cart.
Priority: high.

**Related:** EPIC-001, AC-004, AC-005, US-013

### US-003 · approved · source: requirements:EPIC-002/US-003

Customers add available items to the cart with a chosen quantity and, where configured, simple options/modifiers.

- AC-006: Adding an item records chosen quantity; cart total = item price x quantity.
- AC-007: Items with configured options let the customer pick them; choices are recorded against that cart line.
- AC-008: Items with no options are added by quantity only, no options prompt.
Priority: critical.

**Related:** EPIC-002, AC-006, AC-007, AC-008, NFR-001

### US-004 · approved · source: requirements:EPIC-002/US-004

Customers review the cart on a dedicated screen and can edit quantities or remove lines before confirming.

- AC-009: Cart review screen lists every line with item name, selected options, quantity, line price, and order total.
- AC-010: Changing a line's quantity or removing a line recalculates the order total.
- AC-011: Empty cart is indicated and the confirm-order action is unavailable.
Priority: high.

**Related:** EPIC-002, AC-009, AC-010, AC-011, NFR-001

### US-005 · approved · source: requirements:EPIC-002/US-005

Customers confirm an order of available items and pay at the counter on collection -- no payment is taken in the kiosk.

- AC-012: Confirming an order with at least one available item records the order and tells the customer payment is at the counter on collection.
- AC-013: No online or card payment is requested or taken in the kiosk (assumption: payment happens at the counter).
Priority: critical. Out of scope: in-kiosk card payment.

**Related:** EPIC-002, AC-012, AC-013

### US-006 · approved · source: requirements:EPIC-003/US-006

On confirmation, the kiosk assigns a human-readable sequential order token that resets daily and is unique within the day.

- AC-014: Token assigned on confirmation is next in the current day's sequence.
- AC-015: On a new day, the first order's token restarts from the starting value.
- AC-016: Two orders confirmed the same day get distinct tokens.
Priority: critical. Assumption: tokens are sequential and reset daily.

**Related:** EPIC-003, AC-014, AC-015, AC-016, US-008

### US-007 · approved · source: requirements:EPIC-003/US-007

A confirmation screen prominently displays the assigned token and prompts the customer to watch for it on the bakery's tracking display, then resets for the next customer.

- AC-017: Confirmation screen shows the token prominently with a prompt to watch for it on the order-tracking display.
- AC-018: When the customer finishes or the kiosk resets, it returns to the menu home screen with an empty cart.
Priority: high. Note: the order-tracking display app itself is out of scope and not built in this project.

**Related:** EPIC-003, AC-017, AC-018, US-006

### US-008 · approved · source: requirements:EPIC-004/US-008

Every confirmed order is persisted in the kiosk database with full detail and remains retrievable after restart.

- AC-019: Order persisted with token, line items (item, options, quantity), total, status and creation timestamp.
- AC-020: Stored order and its token remain retrievable after kiosk restart/reload.
Priority: critical.

**Related:** EPIC-004, AC-019, AC-020, NFR-005

### US-009 · approved · source: requirements:EPIC-004/US-009

A read-only REST/JSON API exposes orders, tokens and status for a future tracking app to integrate against; no writes are allowed.

- AC-021: API returns orders in REST/JSON including token, line items, status and timestamp.
- AC-022: API is read-only -- no create/edit/delete of orders (assumption: no live tracking-app integration yet).
- AC-023: A single order can be requested by its identifier or token, returning current details and status.
Priority: high.

**Related:** EPIC-004, AC-021, AC-022, AC-023, NFR-005

### US-010 · approved · source: requirements:EPIC-004/US-010

Starter API and setup documentation must describe how to run the kiosk and call the read-only orders API.

- AC-024: Documentation covers setup/run instructions plus the read-only orders API: endpoints, JSON response shape, and example requests/responses.
Priority: medium.

**Related:** EPIC-004, AC-024, US-009

### US-011 · approved · source: requirements:EPIC-005/US-011

Staff sign in to the admin screen with a password; sessions end on sign-out or inactivity; passwords are stored hashed.

- AC-025: Correct credentials sign the user in and grant access to menu management.
- AC-026: Incorrect credentials deny access; no admin functions available.
- AC-027: Session ends on sign-out or after inactivity timeout; re-sign-in required for admin functions.
- AC-028: Passwords stored hashed, never in plain text.
Priority: critical.

**Related:** EPIC-005, AC-025, AC-026, AC-027, AC-028, NFR-002, NFR-003, NFR-004

### US-012 · approved · source: requirements:EPIC-005/US-012

Signed-in staff add and edit menu items, prices, categories, options and photos; photos are stored in Amazon S3.

- AC-029: New item with name, category, price, optional photo and options is saved and appears in the correct category on the kiosk.
- AC-030: Edits to name, category, price, options or photo are saved and reflected on the kiosk.
- AC-031: Uploaded photo is stored in Amazon S3 and displayed with the item on the kiosk.
Priority: high.

**Related:** EPIC-005, AC-029, AC-030, AC-031, NFR-006, REQ-SCOPE-002

### US-013 · approved · source: requirements:EPIC-005/US-013

Signed-in staff mark menu items sold out or available to control what customers can order.

- AC-032: Marking an available item sold out makes it show as sold out on the kiosk and un-addable to cart.
- AC-033: Marking a sold-out item available makes it orderable again.
Priority: high.

**Related:** EPIC-005, AC-032, AC-033, US-002

### NFR-001 · approved · source: requirements:NFR-001

Usability requirement: kiosk must be touch-friendly and responsive across whatever tablet/screen is mounted.

Items and controls must be tappable without mouse or keyboard, and layout must resize responsively to the mounted screen. Applies to menu browsing, add-to-cart and cart review screens.

**Related:** US-001, US-003, US-004

### NFR-002 · approved · source: requirements:NFR-002

Security requirement: staff sessions must end on sign-out and expire after inactivity.

After sign-out or an inactivity timeout, the staff member must re-authenticate before using any admin function.

**Related:** US-011

### NFR-003 · approved · source: requirements:NFR-003

Security requirement: staff passwords must be stored hashed, never in plain text.

Applies to how staff credentials are persisted; no plain-text password storage permitted.

**Related:** US-011

### NFR-004 · approved · source: requirements:NFR-004

Security requirement: admin functions (menu management, sold-out toggling) require correct staff credentials.

Incorrect credentials must be refused with no admin access granted. Covers menu edit and availability-toggle actions.

**Related:** US-011, US-012, US-013

### NFR-005 · approved · source: requirements:NFR-005

Availability requirement: confirmed orders and tokens must survive kiosk restart/reload, and the read-only orders feed must stay reachable.

Supports the future tracking app being able to call the orders API reliably at any time.

**Related:** US-008, US-009

### NFR-006 · approved · source: requirements:NFR-006

Performance requirement: menu item photos must load quickly on every kiosk, served from file storage rather than the database.

Images are served via Amazon S3 (not stored in the database) to keep menu browsing smooth.

**Related:** US-001, US-012
<!-- sdlc:auto:end narrative -->

<!-- sdlc:auto:start summary -->
**Requirements version:** v1  
**Delivery scope:** lightweight  
**Approved:** 2026-11-11

**Capabilities in scope:** Browse menu by category on the kiosk, Add items to cart with quantities and simple options/modifiers, Review and edit the cart before confirming, Confirm order and generate an order token, Order confirmation screen showing the token to watch for, Store every order in the kiosk database, Password-protected staff admin login, Add and edit menu items, prices and photos, Mark menu items sold out or available, Read-only API of orders, tokens and status for later integration, Starter API and setup documentation, Pay at the counter on collection, no in-kiosk card payment, Sequential order tokens that reset daily, No customer login or account to place an order, Amazon S3 storage for menu item photos, REST/JSON format for the orders read API

**Approved technology stack:**

| Layer | Choice | Rationale |
|---|---|---|
| backend | FastAPI | The kiosk's job on the server is small and clear: save each order, hand back a sequential daily token, serve the menu, and expose a read-only REST/JSON feed of orders and tokens for the tracking app to integrate against later. FastAPI produces exactly that JSON API cleanly and documents it automatically, which matters because another team will connect to it without you in the room. It's the platform default and fits the modest scale of one bakery. |
| cloud | AWS | The kiosk, its database and the menu-photo storage all need somewhere always-on that the in-store tablets reach over the internet and that the future tracking app can call. AWS runs all of it in one place and keeps the order API reachable even if a kiosk reboots. It's the platform default and comfortably covers a single location. |
| database | PostgreSQL | You store every order plus its token, the menu with prices and sold-out flags, and the staff login. Orders and the daily token counter need to be exact and never duplicated, which is precisely what a relational database with proper transactions gives you, and the same database cleanly backs the read API the tracking app will query. It's the platform default and the right tool for records that have to be trustworthy. |
| frontend | React | The kiosk is a touch-friendly responsive web app customers drive themselves: browse menu by category, tap items with quantities and options into a cart, review and confirm. React handles this kind of interactive, state-heavy screen (a live cart that updates as people tap) well, and the same app resizes to whatever tablet or kiosk screen the bakery mounts. It's the platform default and the natural fit here. |
<!-- sdlc:auto:end summary -->

<!-- sdlc:auto:start epics -->
## EPIC-001: Customer Menu Browsing

Customers browse the bakery menu by category on a touch-friendly responsive kiosk screen, with no login or account required. Assumption: the kiosk runs as a touch-friendly responsive web app on one or more in-store kiosk tablets/screens at a single bakery location, and customers place orders without any login or account.

### US-001: Browse menu by category

**Priority:** high

> As a bakery customer at the kiosk, I want to browse the menu organised by category, so that I can find the items I want to order.

| ID | Given | When | Then |
|---|---|---|---|
| AC-001 | the kiosk is showing the menu home screen | the customer views the menu | the available item categories are displayed and the customer can select one to see the items within it |
| AC-002 | a category is selected | the customer views that category | each item is shown with its name, price and photo (where a photo exists) |
| AC-003 | the kiosk is used on an in-store tablet/screen | the customer interacts with the menu by touch | the layout is touch-friendly and responsive so items and controls can be tapped without a mouse or keyboard |

### US-002: See sold-out items marked as unavailable

**Priority:** high

> As a bakery customer at the kiosk, I want to clearly see which items are sold out, so that I do not try to order something that is unavailable.

| ID | Given | When | Then |
|---|---|---|---|
| AC-004 | an item has been marked sold out by staff | the customer views that item in its category | the item is shown as sold out and cannot be added to the cart |
| AC-005 | an item has been marked available again by staff | the customer views that item | the item is shown as available and can be added to the cart |

## EPIC-002: Cart and Ordering

Customers add items to a cart with quantities and simple options/modifiers, review and edit the cart, and confirm the order. Assumptions: simple options/modifiers apply only where relevant to an item; orders are takeaway/counter-pickup with no customer login; payment is taken at the counter on collection, not in the kiosk.

### US-003: Add items to cart with quantity and options

**Priority:** critical

> As a bakery customer at the kiosk, I want to add menu items to my cart, choosing a quantity and any simple options, so that I can build up my order before confirming it.

| ID | Given | When | Then |
|---|---|---|---|
| AC-006 | an available menu item is displayed | the customer adds it to the cart | the item is added with the chosen quantity and the cart total reflects the item price multiplied by the quantity |
| AC-007 | a menu item has simple options/modifiers configured | the customer adds that item to the cart | the customer can select the applicable options and the chosen options are recorded against that cart line |
| AC-008 | a menu item has no options/modifiers configured | the customer adds that item to the cart | the item is added by quantity only with no options prompt |

### US-004: Review and edit the cart before confirming

**Priority:** high

> As a bakery customer at the kiosk, I want to review my cart and change it before confirming, so that I can correct mistakes and order exactly what I want.

| ID | Given | When | Then |
|---|---|---|---|
| AC-009 | the cart contains one or more items | the customer opens the cart review screen | every line is listed with its item name, selected options, quantity, line price and the order total |
| AC-010 | the customer is on the cart review screen | the customer changes the quantity of a line or removes a line | the cart updates and the order total is recalculated |
| AC-011 | the cart is empty | the customer views the cart | the kiosk indicates the cart is empty and the confirm-order action is not available |

### US-005: Confirm order and pay at counter

**Priority:** critical

> As a bakery customer at the kiosk, I want to confirm my order knowing I will pay at the counter on collection, so that I can place a takeaway order without paying in the kiosk.

| ID | Given | When | Then |
|---|---|---|---|
| AC-012 | the cart contains at least one available item | the customer confirms the order | the order is recorded and the customer is told that payment is made at the counter on collection |
| AC-013 | the customer is confirming an order | the kiosk completes confirmation | no online or card payment is requested or taken in the kiosk (assumption: payment happens at the counter on collection) |

## EPIC-003: Order Token and Confirmation

On confirmation the kiosk generates a human-readable sequential order token (resetting daily) and shows it on a confirmation screen so the customer can watch for it on the bakery's existing tracking display. Assumptions: tokens are sequential and reset daily; the order-tracking/display app itself is out of scope and is not built in this project.

### US-006: Generate a sequential daily-reset order token

**Priority:** critical

> As a bakery customer at the kiosk, I want to receive a human-readable order token when I confirm, so that I have a number to identify my order at pickup.

| ID | Given | When | Then |
|---|---|---|---|
| AC-014 | an order is confirmed | the kiosk generates the token | a human-readable sequential token is assigned that is the next in the current day's sequence |
| AC-015 | it is a new day | the first order of that day is confirmed | the token sequence restarts from its starting value (assumption: tokens are sequential and reset daily) |
| AC-016 | two orders are confirmed on the same day | their tokens are generated | each order has a distinct token within that day |

### US-007: Show the order confirmation screen

**Priority:** high

> As a bakery customer at the kiosk, I want to see a confirmation screen showing my token, so that I know my order was placed and which number to watch for.

| ID | Given | When | Then |
|---|---|---|---|
| AC-017 | an order has been confirmed and a token assigned | the confirmation screen is shown | the token is displayed prominently along with a prompt to watch for it on the bakery's order-tracking display |
| AC-018 | the confirmation screen is shown | the customer finishes or the kiosk resets for the next customer | the kiosk returns to the menu home screen with an empty cart ready for a new order |

## EPIC-004: Order Storage and Read API

The kiosk stores every order in its own database and exposes a read-only REST/JSON API listing orders with their tokens and status, plus starter API and setup documentation, so the existing order-tracking/display app can be integrated later. Assumptions: there is no live integration yet and the tracking app is out of scope; the read API is REST/JSON.

### US-008: Store every confirmed order

**Priority:** critical

> As a bakery operator, I want every confirmed order stored in the kiosk database, so that orders are not lost and can be served to the tracking app later.

| ID | Given | When | Then |
|---|---|---|---|
| AC-019 | a customer confirms an order | the kiosk records it | the order is persisted in the kiosk database with its token, line items (item, options, quantity), total, status and creation timestamp |
| AC-020 | an order has been stored | the kiosk is restarted or reloaded | the stored order and its token remain retrievable |

### US-009: Expose a read-only orders API

**Priority:** high

> As a developer of the future order-tracking app, I want a read-only REST/JSON API listing orders with tokens and status, so that the tracking app can be integrated against the kiosk later.

| ID | Given | When | Then |
|---|---|---|---|
| AC-021 | orders exist in the kiosk database | a client calls the read API | the API returns the orders in REST/JSON format including each order's token, line items, status and timestamp |
| AC-022 | a request to the orders API | the client reads data | the API is read-only and does not allow creating, editing or deleting orders (assumption: no live tracking-app integration yet) |
| AC-023 | a single order's token is known | a client requests that order by its identifier or token | the API returns that order's current details and status in REST/JSON |

### US-010: Provide starter API and setup documentation

**Priority:** medium

> As a developer integrating or deploying the kiosk, I want starter API and setup documentation, so that I can run the kiosk and consume the orders API without reverse-engineering it.

| ID | Given | When | Then |
|---|---|---|---|
| AC-024 | the project is delivered | a developer reads the documentation | it describes how to set up and run the kiosk and how to call the read-only orders API, including endpoints, the JSON response shape and example requests/responses |

## EPIC-005: Staff Admin and Menu Management

A password-protected staff admin screen lets staff manage menu items, prices and photos and mark items sold out or available. Menu item photos are stored in Amazon S3. Sign-in and session security are stated as checkable outcomes.

### US-011: Password-protected staff sign-in

**Priority:** critical

> As a bakery staff member, I want to sign in to the admin screen with a password, so that only authorised staff can manage the menu.

| ID | Given | When | Then |
|---|---|---|---|
| AC-025 | the staff admin screen | a user provides correct credentials | they are signed in and can access menu management |
| AC-026 | the staff admin screen | a user provides incorrect credentials | access is denied and no admin functions are available |
| AC-027 | a staff member is signed in | they sign out or their session expires after a period of inactivity | the session ends and they must sign in again to access admin functions |
| AC-028 | staff credentials are stored | a password is saved | it is stored hashed and never in plain text |

### US-012: Add and edit menu items, prices and photos

**Priority:** high

> As a signed-in bakery staff member, I want to add and edit menu items, their prices and photos, so that the kiosk menu stays accurate and up to date.

| ID | Given | When | Then |
|---|---|---|---|
| AC-029 | a signed-in staff member on the admin screen | they add a new menu item with a name, category, price and optional photo and any simple options | the item is saved and appears in the correct category on the customer kiosk |
| AC-030 | an existing menu item | a signed-in staff member edits its name, category, price, options or photo | the changes are saved and reflected on the customer kiosk |
| AC-031 | a staff member uploads a menu item photo | the photo is saved | the image is stored in Amazon S3 and displayed with the item on the kiosk |

### US-013: Mark menu items sold out or available

**Priority:** high

> As a signed-in bakery staff member, I want to mark menu items sold out or available, so that customers only order what is in stock.

| ID | Given | When | Then |
|---|---|---|---|
| AC-032 | an available menu item | a signed-in staff member marks it sold out | the item is shown as sold out on the kiosk and cannot be added to the cart |
| AC-033 | a sold-out menu item | a signed-in staff member marks it available | the item becomes orderable on the kiosk again |
<!-- sdlc:auto:end epics -->
