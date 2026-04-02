import { NextRequest, NextResponse } from 'next/server';
import { getAdminClient } from '@/lib/supabase';

export async function POST(request: NextRequest) {
  const supabase = getAdminClient();
  const body = await request.json();

  const { data, error } = await supabase
    .from('articles')
    .insert([
      {
        title: body.title,
        slug: body.slug,
        excerpt: body.excerpt || null,
        content: body.content,
        cover_image_url: body.cover_image_url || null,
        category: body.category || null,
        meta_title: body.meta_title || null,
        meta_description: body.meta_description || null,
        focus_keyword: body.focus_keyword || null,
        status: body.status || 'draft',
        published_at: body.status === 'published' ? new Date().toISOString() : null,
      },
    ])
    .select()
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }

  return NextResponse.json(data, { status: 201 });
}
