import { NextRequest, NextResponse } from 'next/server';
import { getAdminClient } from '@/lib/supabase';

export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const supabase = getAdminClient();
  const body = await request.json();

  const updateData: Record<string, unknown> = {
    updated_at: new Date().toISOString(),
  };

  const allowedFields = [
    'title', 'slug', 'excerpt', 'content', 'cover_image_url',
    'category', 'meta_title', 'meta_description', 'focus_keyword',
    'status', 'published_at',
  ];

  for (const field of allowedFields) {
    if (field in body) {
      updateData[field] = body[field] === '' ? null : body[field];
    }
  }

  // Auto-set published_at when publishing
  if (body.status === 'published' && !body.published_at) {
    updateData.published_at = new Date().toISOString();
  }

  const { data, error } = await supabase
    .from('articles')
    .update(updateData)
    .eq('id', params.id)
    .select()
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }

  return NextResponse.json(data);
}

export async function DELETE(
  _request: NextRequest,
  { params }: { params: { id: string } }
) {
  const supabase = getAdminClient();

  const { error } = await supabase.from('articles').delete().eq('id', params.id);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }

  return NextResponse.json({ ok: true });
}
