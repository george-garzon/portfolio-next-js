---
title: "Homeport Travel: Document Management"
date: "2026-08-24"
excerpt: "How I added document records, uploaded file connections, and scoped visibility by cruise line and ship for Homeport Travel."
---

# Homeport Travel: Document Management

I added a document management system to Homeport Travel so the team can organize files in a way that maps to cruise operations.

The admin documents page lets the team create and update document records, connect a document to an uploaded file, set a title, manage status, and control where the document should appear.

The visibility model supports several scopes:

- Global
- Cruise line
- Ship
- Cruise line and ship

That scoping is important because travel content is rarely one-size-fits-all. A document might apply to every customer, only to one cruise line, only to one ship, or to a specific combination of both.

On the backend, I added document routes, controllers, models, document data objects, and document scope handling. I also connected document records to stored files and added cruise line endpoints that support the admin selection flow.

I also added document chunks as a backend concept. That creates a path for future document-driven features where larger documents can be broken down and processed in smaller pieces.

The result is a more structured content foundation. Homeport can manage documents through the admin area instead of treating files as disconnected uploads.
