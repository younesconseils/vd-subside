import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

export const dynamic = 'force-dynamic';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const password = searchParams.get('key');
  const adminPwd = process.env.ADMIN_PASSWORD;

  if (!adminPwd || password !== adminPwd) {
    return NextResponse.json({ error: 'Non autorisé', debug: { hasAdminPwd: !!adminPwd, hasPassword: !!password, match: password === adminPwd } }, { status: 401 });
  }

  const supabaseUrl = process.env.SUPABASE_URL;
  const supabaseKey = process.env.SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseKey) {
    return NextResponse.json({ error: 'Supabase non configuré' }, { status: 500 });
  }

  const supabase = createClient(supabaseUrl, supabaseKey);

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
