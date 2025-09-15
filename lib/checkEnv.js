// checkEnv.js

console.log("✅ Supabase URL:", process.env.NEXT_PUBLIC_SUPABASE_URL);

console.log(
  "✅ Supabase Anon Key:",
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    ? process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY.substring(0, 8) + "..."
    : "❌ Not found"
);
