# Sprint Plan

> Maintained by QuorQ AI SDLC. Text between `sdlc:auto` markers is regenerated; anything outside them is yours and is kept.

<!-- sdlc:auto:start sprints -->
## Sprint 1: Sprint 1

Stand up menu browsing data/API and staff authentication as the foundation for every later screen.

Capacity: 20 points · Committed: 19

| Key | Type | Title | Points | Role | Depends on |
|---|---|---|---|---|---|
| US-001 | Story | Browse menu by category | 8 | frontend-agent | — |
| ↳ US-001-T1 | Task | Create categories and menu_items schema with seed data | — | backend-agent | — |
| ↳ US-001-T2 | Task | Implement menu browse endpoints | — | backend-agent | — |
| ↳ US-001-T3 | Task | Build touch-friendly category and item browse screens | — | frontend-agent | — |
| US-002 | Story | See sold-out items marked as unavailable | 3 | frontend-agent | US-001 |
| US-011 | Story | Password-protected staff sign-in | 8 | security-agent | — |
| ↳ US-011-T1 | Task | Create staff_users and staff_sessions schema with hashed passwords | — | backend-agent | — |
| ↳ US-011-T2 | Task | Implement login/logout endpoints with session expiry | — | security-agent | — |
| ↳ US-011-T3 | Task | Build staff sign-in screen | — | frontend-agent | — |

## Sprint 2: Sprint 2

Enable adding items to cart with options, and give staff the admin tools to manage and toggle menu items.

Capacity: 20 points · Committed: 16

| Key | Type | Title | Points | Role | Depends on |
|---|---|---|---|---|---|
| US-003 | Story | Add items to cart with quantity and options | 5 | frontend-agent | US-001 |
| US-012 | Story | Add and edit menu items, prices and photos | 8 | backend-agent | US-011 |
| ↳ US-012-T1 | Task | Implement admin menu-item CRUD endpoints | — | backend-agent | — |
| ↳ US-012-T2 | Task | Implement photo upload to S3 | — | backend-agent | — |
| ↳ US-012-T3 | Task | Build admin menu item add/edit screen | — | frontend-agent | — |
| US-013 | Story | Mark menu items sold out or available | 3 | backend-agent | US-011, US-001 |

## Sprint 3: Sprint 3

Deliver the end-to-end order flow: cart review, confirmation, daily token generation and durable storage.

Capacity: 20 points · Committed: 18

| Key | Type | Title | Points | Role | Depends on |
|---|---|---|---|---|---|
| US-004 | Story | Review and edit the cart before confirming | 5 | frontend-agent | US-003 |
| US-005 | Story | Confirm order and pay at counter | 5 | backend-agent | US-004 |
| US-006 | Story | Generate a sequential daily-reset order token | 5 | backend-agent | US-005 |
| US-008 | Story | Store every confirmed order | 3 | backend-agent | US-006 |

## Sprint 4: Sprint 4

Show customers their token, expose the read-only orders API, and ship starter documentation.

Capacity: 20 points · Committed: 10

| Key | Type | Title | Points | Role | Depends on |
|---|---|---|---|---|---|
| US-007 | Story | Show the order confirmation screen | 3 | frontend-agent | US-006 |
| US-009 | Story | Expose a read-only orders API | 5 | backend-agent | US-008 |
| US-010 | Story | Provide starter API and setup documentation | 2 | backend-agent | US-009 |

## Unscheduled

_Nothing unscheduled._
<!-- sdlc:auto:end sprints -->
