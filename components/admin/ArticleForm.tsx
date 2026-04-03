'use client';

import { useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { Article, generateSlug } from '@/lib/supabase';
import dynamic from 'next/dynamic';

const MDEditor = dynamic(() => import('@uiw/react-md-editor'), { ssr: false });

const CATEGORIES = ['Airport Transfers', 'Corporate', 'Wedding', 'Events', 'Tips'];

interface ArticleFormProps {
  article?: Article;
  mode: 'create' | 'edit';
}

type FormData = {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  cover_image_url: string;
  category: string;
  meta_title: string;
  meta_description: string;
  focus_keyword: string;
  status: 'draft' | 'published';
};

export default function ArticleForm({ article, mode }: ArticleFormProps) {
  const router = useRouter();
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [form, setForm] = useState<FormData>({
    title: article?.title ?? '',
    slug: article?.slug ?? '',
    excerpt: article?.excerpt ?? '',
    content: article?.content ?? '',
    cover_image_url: article?.cover_image_url ?? '',
    category: article?.category ?? '',
    meta_title: article?.meta_title ?? '',
    meta_description: article?.meta_description ?? '',
    focus_keyword: article?.focus_keyword ?? '',
    status: article?.status ?? 'draft',
  });

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const title = e.target.value;
    setForm((prev) => ({
      ...prev,
      title,
      // Auto-generate slug only on create
      ...(mode === 'create' ? { slug: generateSlug(title) } : {}),
      // Auto-populate meta_title if empty
      ...(prev.meta_title === '' ? { meta_title: title } : {}),
    }));
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleContentChange = useCallback((value: string | undefined) => {
    setForm((prev) => ({ ...prev, content: value ?? '' }));
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setError(null);

    try {
      const url =
        mode === 'create' ? '/api/admin/articles' : `/api/admin/articles/${article!.id}`;
      const method = mode === 'create' ? 'POST' : 'PATCH';

      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || 'Failed to save article');
      }

      router.push('/admin/articles');
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong');
    } finally {
      setSaving(false);
    }
  };

  const handlePublishToggle = async () => {
    if (!article) return;
    setSaving(true);
    setError(null);

    const newStatus = article.status === 'published' ? 'draft' : 'published';

    try {
      const res = await fetch(`/api/admin/articles/${article.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          status: newStatus,
          published_at: newStatus === 'published' ? new Date().toISOString() : null,
        }),
      });

      if (!res.ok) throw new Error('Failed to toggle status');
      router.refresh();
      window.location.reload();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong');
    } finally {
      setSaving(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 text-sm">
          {error}
        </div>
      )}

      {/* Title + Slug */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-semibold text-navy mb-1">Title *</label>
          <input
            type="text"
            name="title"
            value={form.title}
            onChange={handleTitleChange}
            required
            className="w-full border border-gray-300 px-3 py-2 text-navy focus:outline-none focus:border-gold text-sm"
            placeholder="Article title"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-navy mb-1">Slug *</label>
          <input
            type="text"
            name="slug"
            value={form.slug}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 px-3 py-2 text-navy focus:outline-none focus:border-gold text-sm font-mono"
            placeholder="url-friendly-slug"
          />
        </div>
      </div>

      {/* Excerpt */}
      <div>
        <label className="block text-sm font-semibold text-navy mb-1">Excerpt</label>
        <textarea
          name="excerpt"
          value={form.excerpt}
          onChange={handleChange}
          rows={2}
          className="w-full border border-gray-300 px-3 py-2 text-navy focus:outline-none focus:border-gold text-sm"
          placeholder="Short summary shown on blog cards"
        />
      </div>

      {/* Cover Image */}
      <div>
        <label className="block text-sm font-semibold text-navy mb-1">Cover Image URL</label>
        <input
          type="url"
          name="cover_image_url"
          value={form.cover_image_url}
          onChange={handleChange}
          className="w-full border border-gray-300 px-3 py-2 text-navy focus:outline-none focus:border-gold text-sm"
          placeholder="https://..."
        />
      </div>

      {/* Category + Keyword + Status */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div>
          <label className="block text-sm font-semibold text-navy mb-1">Category</label>
          <select
            name="category"
            value={form.category}
            onChange={handleChange}
            className="w-full border border-gray-300 px-3 py-2 text-navy focus:outline-none focus:border-gold text-sm bg-white"
          >
            <option value="">Select category</option>
            {CATEGORIES.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-semibold text-navy mb-1">Focus Keyword</label>
          <input
            type="text"
            name="focus_keyword"
            value={form.focus_keyword}
            onChange={handleChange}
            className="w-full border border-gray-300 px-3 py-2 text-navy focus:outline-none focus:border-gold text-sm"
            placeholder="chauffeur services london"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-navy mb-1">Status</label>
          <select
            name="status"
            value={form.status}
            onChange={handleChange}
            className="w-full border border-gray-300 px-3 py-2 text-navy focus:outline-none focus:border-gold text-sm bg-white"
          >
            <option value="draft">Draft</option>
            <option value="published">Published</option>
          </select>
        </div>
      </div>

      {/* SEO */}
      <div className="border border-gray-200 p-5 space-y-4">
        <h3 className="font-display text-navy text-lg font-semibold">SEO</h3>
        <div>
          <label className="block text-sm font-semibold text-navy mb-1">Meta Title</label>
          <input
            type="text"
            name="meta_title"
            value={form.meta_title}
            onChange={handleChange}
            className="w-full border border-gray-300 px-3 py-2 text-navy focus:outline-none focus:border-gold text-sm"
            placeholder="SEO title tag (60 chars recommended)"
            maxLength={70}
          />
          <p className="text-xs text-navy/40 mt-1">{form.meta_title.length}/70 characters</p>
        </div>
        <div>
          <label className="block text-sm font-semibold text-navy mb-1">Meta Description</label>
          <textarea
            name="meta_description"
            value={form.meta_description}
            onChange={handleChange}
            rows={2}
            className="w-full border border-gray-300 px-3 py-2 text-navy focus:outline-none focus:border-gold text-sm"
            placeholder="SEO meta description (155 chars recommended)"
            maxLength={165}
          />
          <p className="text-xs text-navy/40 mt-1">{form.meta_description.length}/165 characters</p>
        </div>
      </div>

      {/* Markdown editor */}
      <div>
        <label className="block text-sm font-semibold text-navy mb-2">Content (Markdown) *</label>
        <div data-color-mode="light">
          <MDEditor
            value={form.content}
            onChange={handleContentChange}
            height={500}
            preview="live"
          />
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-4 pt-4 border-t border-gray-200">
        <button type="submit" disabled={saving} className="btn-gold">
          {saving ? 'Saving…' : mode === 'create' ? 'Create Article' : 'Save Changes'}
        </button>

        {mode === 'edit' && article && (
          <button
            type="button"
            onClick={handlePublishToggle}
            disabled={saving}
            className={article.status === 'published' ? 'btn-outline' : 'btn-navy'}
          >
            {article.status === 'published' ? 'Unpublish' : 'Publish'}
          </button>
        )}

        <button
          type="button"
          onClick={() => router.back()}
          className="text-navy/60 text-sm font-body hover:text-navy"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}
