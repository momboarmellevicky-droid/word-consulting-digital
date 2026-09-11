-- Table des collaborateurs (étape 2 du cahier des charges)
create table if not exists collaborateurs (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete cascade unique,
  prenom text not null,
  nom text not null,
  fonction text,
  pays text,
  ville text,
  email text not null,
  whatsapp text,
  photo_url text,
  role text not null default 'collaborateur' check (role in ('administrateur', 'responsable', 'collaborateur')),
  statut text default 'hors_ligne' check (statut in ('disponible', 'hors_ligne')),
  created_at timestamptz default now()
);

alter table collaborateurs enable row level security;

create policy "Collaborateurs peuvent lire tous les profils"
  on collaborateurs for select
  using (auth.role() = 'authenticated');

create policy "Un collaborateur peut modifier son propre profil"
  on collaborateurs for update
  using (auth.uid() = user_id);
