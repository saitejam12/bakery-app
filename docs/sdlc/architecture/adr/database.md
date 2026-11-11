<!-- sdlc:auto:start adr -->
# ADR-0003: Use PostgreSQL 16 for Database

Status: Accepted  
Date: 2026-11-11

## Context and Problem Statement

Which Database technology does the project use? Decided in architecture v1.

## Considered Options

- PostgreSQL 16
- MySQL
- SQLite

## Decision Outcome

Chosen option: PostgreSQL 16, because Gives exact, transactional issuance of the sequential daily token via row locking so tokens never duplicate or skip (AC-016), and durably stores orders, menu, staff and sessions so orders survive restart and back the read API (NFR-005).

## Consequences

A relational store needs schema migrations as the menu model evolves; mitigated by Alembic in the scaffold.
<!-- sdlc:auto:end adr -->