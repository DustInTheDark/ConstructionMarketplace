-- Example schema and data
create table if not exists projects (
    id uuid primary key default uuid_generate_v4(),
    name text not null,
    description text
);

insert into projects (name, description)
values ('Example Project', 'My first project in Supabase');