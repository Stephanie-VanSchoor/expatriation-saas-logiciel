/* =========================================================
   supabase.js — Client Supabase
   ========================================================= */

const SUPABASE_URL = 'https://nmodxukdqyczdasvljec.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5tb2R4dWtkcXljemRhc3ZsamVjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODk0Mzk2NjcsImV4cCI6MjEwNTAxNTY2N30.l5QM8dqC9mEHZNh25XLuaRNOHs52osLc6-8TDEgCEa0';

const { createClient } = supabase;
const sb = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

async function getSession() {
  const { data: { session } } = await sb.auth.getSession();
  return session;
}

async function signUp(email, password, fullName) {
  return sb.auth.signUp({
    email, password,
    options: { data: { full_name: fullName } }
  });
}

async function signIn(email, password) {
  return sb.auth.signInWithPassword({ email, password });
}

async function signOut() {
  return sb.auth.signOut();
}

async function getCurrentUser() {
  const { data: { user } } = await sb.auth.getUser();
  return user;
}