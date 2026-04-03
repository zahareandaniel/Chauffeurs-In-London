-- Chauffeurs in London: Supabase schema
-- Run this in your Supabase SQL editor

create table if not exists articles (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text unique not null,
  excerpt text,
  content text not null,
  cover_image_url text,
  category text,              -- 'Airport Transfers' | 'Corporate' | 'Wedding' | 'Events' | 'Tips'
  meta_title text,
  meta_description text,
  focus_keyword text,
  status text default 'draft', -- 'draft' | 'published'
  created_at timestamptz default now(),
  updated_at timestamptz default now(),
  published_at timestamptz
);

-- Auto-update updated_at on row changes
create or replace function update_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

create trigger articles_updated_at
  before update on articles
  for each row execute function update_updated_at();

-- Index for public queries
create index if not exists articles_status_published_at
  on articles(status, published_at desc);

create index if not exists articles_category
  on articles(category);

create index if not exists articles_slug
  on articles(slug);

-- Row Level Security: public can only read published articles
alter table articles enable row level security;

create policy "Public read published articles"
  on articles for select
  using (status = 'published');

-- Service role bypasses RLS (used by admin API routes)
