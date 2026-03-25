import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabase = process.env.SUPABASE_URL && process.env.SUPABASE_ANON_KEY
  ? createClient(process.env.SUPABASE_URL, process.env.SUPABASE_ANON_KEY)
  : null;

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const password = searchParams.get('key');

  if (password !== process.env.ADMIN_PASSWORD) {
    return NextResponse.json({ error: 'Non autorisé' }, { status: 401 });
  }

  if (!supabase) {
    return NextResponse.json({ error: 'Supabase non configuré' }, { status: 500 });
  }

  try {
    const { data, error } = await supabase
      .from('leads')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) throw error;

    return NextResponse.json({ leads: data || [] });
  } catch (error) {
    console.error('Erreur fetch leads:', error);
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 });
  }
}
