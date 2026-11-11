# Traceability Matrix

> Maintained by QuorQ AI SDLC. Text between `sdlc:auto` markers is regenerated; anything outside them is yours and is kept.

<!-- sdlc:auto:start legend -->
Built from recorded links, not written by a model: requirement key → plan item (`source_stable_key`) → development ticket (`stable_key`) → the ticket's test steps → the last live deployment that started after the work finished. **AC tests** counts the story's acceptance criteria that have a test case, and those whose test cases all passed in the latest finished E2E run.
<!-- sdlc:auto:end legend -->

<!-- sdlc:auto:start matrix -->
| Requirement | Epic | Title | Plan items | Sprint | Design | Code | Commits | Ticket | Tests | AC tests | Deployed |
|---|---|---|---|---|---|---|---|---|---|---|---|
| US-001 | EPIC-001 | Browse menu by category | US-001, US-001-T1, US-001-T2, US-001-T3 | 1 | GET /menu/categories, GET /menu/categories/{category_id}/items, categories, database, kiosk_api, kiosk_web, menu_items | — | — | not started | not run | 0/3 tested · 0/3 passing | — |
| US-002 | EPIC-001 | See sold-out items marked as unavailable | US-002 | 1 | GET /menu/categories/{category_id}/items, database, kiosk_api, kiosk_web, menu_items | — | — | not started | not run | 0/2 tested · 0/2 passing | — |
| US-003 | EPIC-002 | Add items to cart with quantity and options | US-003 | 2 | GET /menu/categories/{category_id}/items, kiosk_api, kiosk_web, menu_item_options, menu_items | — | — | not started | not run | 0/3 tested · 0/3 passing | — |
| US-004 | EPIC-002 | Review and edit the cart before confirming | US-004 | 3 | kiosk_web | — | — | not started | not run | 0/3 tested · 0/3 passing | — |
| US-005 | EPIC-002 | Confirm order and pay at counter | US-005 | 3 | POST /orders, database, kiosk_api, kiosk_web, order_lines, orders | — | — | not started | not run | 0/2 tested · 0/2 passing | — |
| US-006 | EPIC-003 | Generate a sequential daily-reset order token | US-006 | 3 | POST /orders, daily_token_counter, database, kiosk_api, orders | — | — | not started | not run | 0/3 tested · 0/3 passing | — |
| US-007 | EPIC-003 | Show the order confirmation screen | US-007 | 4 | kiosk_web | — | — | not started | not run | 0/2 tested · 0/2 passing | — |
| US-008 | EPIC-004 | Store every confirmed order | US-008 | 3 | POST /orders, database, kiosk_api, order_lines, orders | — | — | not started | not run | 0/2 tested · 0/2 passing | — |
| US-009 | EPIC-004 | Expose a read-only orders API | US-009 | 4 | GET /orders, GET /orders/{id_or_token}, database, kiosk_api, order_lines, orders | — | — | not started | not run | 0/3 tested · 0/3 passing | — |
| US-010 | EPIC-004 | Provide starter API and setup documentation | US-010 | 4 | kiosk_api | — | — | not started | not run | 0/1 tested · 0/1 passing | — |
| US-011 | EPIC-005 | Password-protected staff sign-in | US-011, US-011-T1, US-011-T2, US-011-T3 | 1 | POST /auth/login, POST /auth/logout, database, kiosk_api, kiosk_web, staff_sessions, staff_users | — | — | not started | not run | 0/4 tested · 0/4 passing | — |
| US-012 | EPIC-005 | Add and edit menu items, prices and photos | US-012, US-012-T1, US-012-T2, US-012-T3 | 2 | GET /admin/menu-items, POST /admin/menu-items, POST /admin/menu-items/{id}/photo, PUT /admin/menu-items/{id}, categories, database, kiosk_api, kiosk_web, menu_item_options, menu_items, photo_store | — | — | not started | not run | 0/3 tested · 0/3 passing | — |
| US-013 | EPIC-005 | Mark menu items sold out or available | US-013 | 2 | PATCH /admin/menu-items/{id}/availability, database, kiosk_api, kiosk_web, menu_items | — | — | not started | not run | 0/2 tested · 0/2 passing | — |
<!-- sdlc:auto:end matrix -->
