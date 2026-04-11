'use client';

import { useState } from 'react';
import { SITE } from '@/lib/site-config';

export default function GetFeaturedForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const subject = encodeURIComponent(`Feature request: ${data.get('company')}`);
    const body = encodeURIComponent(
      `Company name: ${data.get('company')}\n\nWebsite: ${data.get('website')}\n\nContact name: ${data.get('name')}\n\nEmail: ${data.get('email')}\n\nFocus areas: ${data.get('focus')}\n\nNotes:\n${data.get('notes')}`,
    );
    window.location.href = `mailto:${SITE.contactEmail}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <form onSubmit={onSubmit} className="mt-10 space-y-8 border border-line bg-white p-8 sm:p-10">
      <div className="grid gap-8 sm:grid-cols-2">
        <div>
          <label htmlFor="company" className="editorial-label">
            Company name
          </label>
          <input
            id="company"
            name="company"
            required
            autoComplete="organization"
            className="mt-2 w-full border border-line bg-paper px-3 py-2.5 text-sm text-ink focus:border-ink focus:outline-none"
          />
        </div>
        <div>
          <label htmlFor="website" className="editorial-label">
            Website
          </label>
          <input
            id="website"
            name="website"
            type="url"
            placeholder="https://"
            className="mt-2 w-full border border-line bg-paper px-3 py-2.5 text-sm text-ink focus:border-ink focus:outline-none"
          />
        </div>
      </div>
      <div className="grid gap-8 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="editorial-label">
            Contact name
          </label>
          <input
            id="name"
            name="name"
            required
            autoComplete="name"
            className="mt-2 w-full border border-line bg-paper px-3 py-2.5 text-sm text-ink focus:border-ink focus:outline-none"
          />
        </div>
        <div>
          <label htmlFor="email" className="editorial-label">
            Work email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className="mt-2 w-full border border-line bg-paper px-3 py-2.5 text-sm text-ink focus:border-ink focus:outline-none"
          />
        </div>
      </div>
      <div>
        <label htmlFor="focus" className="editorial-label">
          Primary service focus
        </label>
        <input
          id="focus"
          name="focus"
          placeholder="e.g. Heathrow & City, corporate roadshows"
          className="mt-2 w-full border border-line bg-paper px-3 py-2.5 text-sm text-ink focus:border-ink focus:outline-none"
        />
      </div>
      <div>
        <label htmlFor="notes" className="editorial-label">
          Why you believe you fit our standards
        </label>
        <textarea
          id="notes"
          name="notes"
          rows={5}
          className="mt-2 w-full border border-line bg-paper px-3 py-2.5 text-sm text-ink focus:border-ink focus:outline-none"
        />
      </div>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <button type="submit" className="btn-primary">
          Open email to editorial
        </button>
        <p className="text-xs text-ink-subtle">
          Submits via your email client to {SITE.contactEmail}. No data stored on this page.
        </p>
      </div>
      {sent && (
        <p className="text-sm text-ink-muted" role="status">
          If your mail client opened, send the message when you are satisfied with the detail. We read every serious inquiry. Volume may delay a reply.
        </p>
      )}
    </form>
  );
}
