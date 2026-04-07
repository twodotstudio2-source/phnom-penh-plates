"use server";

import { supabase } from "@/lib/supabase";

export type ReservationData = {
  name: string;
  email: string;
  date: string;
  time: string;
  party_size: number;
  requests: string;
};

export async function submitReservation(
  data: ReservationData
): Promise<{ success: true } | { success: false; error: string }> {
  const { error } = await supabase.from("reservations").insert([data]);
  if (error) return { success: false, error: error.message };
  return { success: true };
}
