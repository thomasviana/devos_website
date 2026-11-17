create table if not exists public.waitlist (id uuid primary key default gen_random_uuid(),email text not null unique,locale text not null check(locale in ('en','es')),source text not null default 'direct',created_at timestamptz not null default now());
alter table public.waitlist enable row level security;
-- No anonymous policies. Only server-side service role writes.
