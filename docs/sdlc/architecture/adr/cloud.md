<!-- sdlc:auto:start adr -->
# ADR-0004: Use AWS for Cloud

Status: Accepted  
Date: 2026-11-11

## Context and Problem Statement

Which Cloud technology does the project use? Decided in architecture v1.

## Considered Options

- AWS
- Google Cloud
- Azure

## Decision Outcome

Chosen option: AWS, because Runs the always-on API, managed PostgreSQL and the S3 photo bucket in one place reachable by in-store tablets and the future tracking app, keeping the order API available across kiosk reboots.

## Consequences

Single-region single-location footprint is intentional; multi-region HA is unnecessary overhead for one bakery.
<!-- sdlc:auto:end adr -->