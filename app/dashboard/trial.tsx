
import { createClient } from "@/lib/supabase/server";
import { Suspense } from "react";

async function Trial() {
  const supabase = await createClient();
  const { data: trips } = await supabase.from("trips").select();
  console.log('Profile Data->',trips);

  return <h1>Hii</h1>;
}

export default function Instruments() {
  return (
    <Suspense fallback={<div>Loading instruments...</div>}>
      <Trial />
    </Suspense>
  );
}