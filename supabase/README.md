# Supabase local setup

This folder contains configuration for the local Supabase instance.

## Seeds

A `seed.sql` file is included with a basic example `projects` table and a sample row. When you run `supabase db reset`, this seed script will automatically run so you start with initial data.

```bash
supabase db reset
```

This command drops and recreates the database, applies any migrations and then runs the seed file defined in `config.toml`.