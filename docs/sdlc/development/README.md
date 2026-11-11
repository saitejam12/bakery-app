# Development

> Maintained by QuorQ AI SDLC. Text between `sdlc:auto` markers is regenerated; anything outside them is yours and is kept.

<!-- sdlc:auto:start narrative -->
### PLAN-DEV-V1 · approved · source: plan:PLAN-DEV-V1

Development plan version 1 is approved, spanning 4 sprints (capacity 20 each) that implement menu browsing, cart/ordering, token generation, order storage/API, and staff admin tooling.

Plan status: approved, version 1. Organized as 4 sprints each with capacity 20, covering 5 epics and 13 user stories plus their breakdown tasks.

**Related:** EPIC-001, EPIC-002, EPIC-003, EPIC-004, EPIC-005

### SPRINT-1 · approved · source: plan:SPRINT-1

Sprint 1 goal: stand up menu browsing data/API and staff authentication as the foundation for later screens.

Capacity: 20. Goal as stated in plan: "Stand up menu browsing data/API and staff authentication as the foundation for every later screen." Goal text matches scope of US-001 (menu browsing) and US-011 (staff sign-in) and their sub-tasks; sprint-to-item assignment is inferred from goal wording, not an explicit mapping in the input.

**Related:** US-001, US-001-T1, US-001-T2, US-001-T3, US-011, US-011-T1, US-011-T2, US-011-T3

### SPRINT-2 · approved · source: plan:SPRINT-2

Sprint 2 goal: enable adding items to cart with options, and give staff admin tools to manage and toggle menu items.

Capacity: 20. Goal as stated in plan: "Enable adding items to cart with options, and give staff the admin tools to manage and toggle menu items." Goal text matches scope of US-003 (add to cart with options), US-012 (add/edit menu items) and US-013 (mark sold out). Sprint-to-item assignment inferred from goal wording, not an explicit mapping in the input.

**Related:** US-003, US-012, US-012-T1, US-012-T2, US-012-T3, US-013

### SPRINT-3 · approved · source: plan:SPRINT-3

Sprint 3 goal: deliver the end-to-end order flow — cart review, confirmation, daily token generation, and durable storage.

Capacity: 20. Goal as stated in plan: "Deliver the end-to-end order flow: cart review, confirmation, daily token generation and durable storage." Goal text matches scope of US-004 (review/edit cart), US-005 (confirm order and pay), US-006 (daily-reset token), US-008 (store confirmed orders). Sprint-to-item assignment inferred from goal wording, not an explicit mapping in the input.

**Related:** US-004, US-005, US-006, US-008

### SPRINT-4 · approved · source: plan:SPRINT-4

Sprint 4 goal: show customers their token, expose the read-only orders API, and ship starter documentation.

Capacity: 20. Goal as stated in plan: "Show customers their token, expose the read-only orders API, and ship starter documentation." Goal text matches scope of US-007 (order confirmation screen), US-009 (read-only orders API), US-010 (starter API/setup documentation). Sprint-to-item assignment inferred from goal wording, not an explicit mapping in the input.

**Related:** US-007, US-009, US-010

### EPIC-001 · approved · source: plan:EPIC-001

Epic: Customer Menu Browsing — covers browsing the menu by category and seeing sold-out items marked unavailable.

Epic EPIC-001, role unassigned, no point estimate given. Child stories: US-001 (Browse menu by category, 8 pts, frontend-agent), US-002 (See sold-out items marked as unavailable, 3 pts, frontend-agent).

**Related:** US-001, US-002

### US-001 · approved · source: plan:US-001

Story: Browse menu by category, 8 points, assigned to frontend-agent.

Part of EPIC-001. Broken into 3 tasks: US-001-T1 (create categories and menu_items schema with seed data, backend-agent), US-001-T2 (implement menu browse endpoints, backend-agent), US-001-T3 (build touch-friendly category and item browse screens, frontend-agent).

**Related:** EPIC-001, US-001-T1, US-001-T2, US-001-T3

### US-001-T1 · approved · source: plan:US-001-T1

Task: create categories and menu_items schema with seed data.

Role: backend-agent. Supports US-001 (Browse menu by category).

**Related:** US-001

### US-001-T2 · approved · source: plan:US-001-T2

Task: implement menu browse endpoints.

Role: backend-agent. Supports US-001 (Browse menu by category).

**Related:** US-001

### US-001-T3 · approved · source: plan:US-001-T3

Task: build touch-friendly category and item browse screens.

Role: frontend-agent. Supports US-001 (Browse menu by category).

**Related:** US-001

### US-002 · approved · source: plan:US-002

Story: See sold-out items marked as unavailable, 3 points, assigned to frontend-agent.

Part of EPIC-001. No sub-tasks listed in the input.

**Related:** EPIC-001

### EPIC-002 · approved · source: plan:EPIC-002

Epic: Cart and Ordering — covers adding items to cart with options, reviewing/editing the cart, and confirming an order with pay-at-counter.

Epic EPIC-002, role unassigned, no point estimate given. Child stories: US-003 (Add items to cart with quantity and options, 5 pts, frontend-agent), US-004 (Review and edit the cart before confirming, 5 pts, frontend-agent), US-005 (Confirm order and pay at counter, 5 pts, backend-agent).

**Related:** US-003, US-004, US-005

### US-003 · approved · source: plan:US-003

Story: Add items to cart with quantity and options, 5 points, assigned to frontend-agent.

Part of EPIC-002. No sub-tasks listed in the input.

**Related:** EPIC-002

### US-004 · approved · source: plan:US-004

Story: Review and edit the cart before confirming, 5 points, assigned to frontend-agent.

Part of EPIC-002. No sub-tasks listed in the input.

**Related:** EPIC-002

### US-005 · approved · source: plan:US-005

Story: Confirm order and pay at counter, 5 points, assigned to backend-agent.

Part of EPIC-002. No sub-tasks listed in the input.

**Related:** EPIC-002

### EPIC-003 · approved · source: plan:EPIC-003

Epic: Order Token and Confirmation — covers generating a sequential daily-reset order token and showing the order confirmation screen.

Epic EPIC-003, role unassigned, no point estimate given. Child stories: US-006 (Generate a sequential daily-reset order token, 5 pts, backend-agent), US-007 (Show the order confirmation screen, 3 pts, frontend-agent).

**Related:** US-006, US-007

### US-006 · approved · source: plan:US-006

Story: Generate a sequential daily-reset order token, 5 points, assigned to backend-agent.

Part of EPIC-003. No sub-tasks listed in the input.

**Related:** EPIC-003

### US-007 · approved · source: plan:US-007

Story: Show the order confirmation screen, 3 points, assigned to frontend-agent.

Part of EPIC-003. No sub-tasks listed in the input.

**Related:** EPIC-003

### EPIC-004 · approved · source: plan:EPIC-004

Epic: Order Storage and Read API — covers storing confirmed orders, exposing a read-only orders API, and starter API/setup documentation.

Epic EPIC-004, role unassigned, no point estimate given. Child stories: US-008 (Store every confirmed order, 3 pts, backend-agent), US-009 (Expose a read-only orders API, 5 pts, backend-agent), US-010 (Provide starter API and setup documentation, 2 pts, backend-agent).

**Related:** US-008, US-009, US-010

### US-008 · approved · source: plan:US-008

Story: Store every confirmed order, 3 points, assigned to backend-agent.

Part of EPIC-004. No sub-tasks listed in the input.

**Related:** EPIC-004

### US-009 · approved · source: plan:US-009

Story: Expose a read-only orders API, 5 points, assigned to backend-agent.

Part of EPIC-004. This is the API the separate order-tracking app is expected to consume to display token status, per the project description. No sub-tasks listed in the input.

**Related:** EPIC-004

### US-010 · approved · source: plan:US-010

Story: Provide starter API and setup documentation, 2 points, assigned to backend-agent.

Part of EPIC-004. No sub-tasks listed in the input.

**Related:** EPIC-004

### EPIC-005 · approved · source: plan:EPIC-005

Epic: Staff Admin and Menu Management — covers password-protected staff sign-in, adding/editing menu items with prices and photos, and marking items sold out or available.

Epic EPIC-005, role unassigned, no point estimate given. Child stories: US-011 (Password-protected staff sign-in, 8 pts, security-agent), US-012 (Add and edit menu items, prices and photos, 8 pts, backend-agent), US-013 (Mark menu items sold out or available, 3 pts, backend-agent).

**Related:** US-011, US-012, US-013

### US-011 · approved · source: plan:US-011

Story: Password-protected staff sign-in, 8 points, assigned to security-agent.

Part of EPIC-005. Broken into 3 tasks: US-011-T1 (create staff_users and staff_sessions schema with hashed passwords, backend-agent), US-011-T2 (implement login/logout endpoints with session expiry, security-agent), US-011-T3 (build staff sign-in screen, frontend-agent).

**Related:** EPIC-005, US-011-T1, US-011-T2, US-011-T3

### US-011-T1 · approved · source: plan:US-011-T1

Task: create staff_users and staff_sessions schema with hashed passwords.

Role: backend-agent. Supports US-011 (Password-protected staff sign-in).

**Related:** US-011

### US-011-T2 · approved · source: plan:US-011-T2

Task: implement login/logout endpoints with session expiry.

Role: security-agent. Supports US-011 (Password-protected staff sign-in).

**Related:** US-011

### US-011-T3 · approved · source: plan:US-011-T3

Task: build staff sign-in screen.

Role: frontend-agent. Supports US-011 (Password-protected staff sign-in).

**Related:** US-011

### US-012 · approved · source: plan:US-012

Story: Add and edit menu items, prices and photos, 8 points, assigned to backend-agent.

Part of EPIC-005. Broken into 3 tasks: US-012-T1 (implement admin menu-item CRUD endpoints, backend-agent), US-012-T2 (implement photo upload to S3, backend-agent), US-012-T3 (build admin menu item add/edit screen, frontend-agent).

**Related:** EPIC-005, US-012-T1, US-012-T2, US-012-T3

### US-012-T1 · approved · source: plan:US-012-T1

Task: implement admin menu-item CRUD endpoints.

Role: backend-agent. Supports US-012 (Add and edit menu items, prices and photos).

**Related:** US-012

### US-012-T2 · approved · source: plan:US-012-T2

Task: implement photo upload to S3.

Role: backend-agent. Supports US-012 (Add and edit menu items, prices and photos).

**Related:** US-012

### US-012-T3 · approved · source: plan:US-012-T3

Task: build admin menu item add/edit screen.

Role: frontend-agent. Supports US-012 (Add and edit menu items, prices and photos).

**Related:** US-012

### US-013 · approved · source: plan:US-013

Story: Mark menu items sold out or available, 3 points, assigned to backend-agent.

Part of EPIC-005. No sub-tasks listed in the input.

**Related:** EPIC-005
<!-- sdlc:auto:end narrative -->
