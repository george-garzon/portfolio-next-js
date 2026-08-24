---
title: "Homeport Travel: Public Form Submissions"
date: "2026-08-20"
excerpt: "How I connected published dynamic forms to public submission pages with backend validation, versioned definitions, and admin review tools."
---

# Homeport Travel: Public Form Submissions

After the dynamic form builder was in place, the next feature was public form submissions. A form is only useful if customers can open it, complete it, and send their answers back into the system.

I added public form loading by slug, so a published form can have a clean URL. The frontend fetches the published definition and renders the form from the stored steps and fields.

On the backend, submissions are validated against the active form definition. That matters because the client cannot be trusted to decide which fields are required, which options are valid, or whether the submitted payload matches the form.

The submission flow includes:

- Active form lookup by ID or slug.
- Validation against the published form version.
- Required field checks.
- Option membership checks for select-style inputs.
- Room data handling for travel-specific forms.
- Payload size limits.
- Origin checks.
- Rate limiting.
- Honeypot spam protection.

I also added admin submission pages so the Homeport team can review responses after a form goes live. Submissions can be listed, opened in detail, and updated with a status as the team works through them.

This feature turned the dynamic form builder into a complete intake workflow: admins can build the form, publish it, collect customer answers, and manage those responses inside the admin area.
