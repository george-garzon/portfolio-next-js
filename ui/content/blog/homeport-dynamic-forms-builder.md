---
title: "Homeport Travel: Building a Dynamic Forms Builder"
date: "2026-08-19"
excerpt: "How I added a dynamic form builder for Homeport Travel so admins can create published customer intake forms without hardcoded pages."
---

# Homeport Travel: Building a Dynamic Forms Builder

One of the biggest Homeport Travel features I added was a dynamic forms builder. The goal was to let admins create customer-facing forms without needing a developer to hardcode each page.

The builder supports form names, custom URL slugs, descriptions, publish status, theme settings, and multiple steps. Inside each step, admins can add questions and choose the field type that fits the workflow.

The supported field types include:

- Text
- Textarea
- Email
- Phone
- Number
- Date
- Select
- Multiselect
- Radio
- Checkbox
- Rooms

I also added helper actions for common form structures, like adding a basic information step. That makes the builder faster for travel workflows where the same customer details show up across different forms.

The important concept here was flexibility. Instead of treating every form as a new page, the system treats forms as structured data. The frontend renders the form from that definition, and the backend stores the form as a versionable record.

That gives Homeport a foundation for future intake workflows, quote requests, lead forms, and cruise-specific customer questionnaires without creating a new code path every time.
