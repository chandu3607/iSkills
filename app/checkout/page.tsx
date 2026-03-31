import type { Metadata } from "next";
import Headder from "../components/Headder";
import Payment from "./components/Payment";

export const metadata: Metadata = {
  title: "Checkout | iSkills",
  description:
    "Complete your secure checkout for the iSkills program and review your payment summary before purchase.",
};

export default function Page() {
  return (
    <>
      <Headder />
      <main>
        <Payment />
      </main>
    </>
  );
}
