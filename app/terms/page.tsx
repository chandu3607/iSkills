import type { Metadata } from "next";
import Footer from "../components/Footer";
import Headder from "../components/Headder";
import TermsBanner from "./components/TermsBanner";
import TermsContent from "./components/TermsContent";

export const metadata: Metadata = {
  title: "Terms & Conditions | iSkills Job Guarantee Program",
  description:
    "Review the eligibility requirements, completion guidelines, placement clauses, and disclaimers for the iSkills Job Guarantee Program.",
};

export default function Page() {
  return (
    <>
      <Headder />
      <main>
        <TermsBanner />
        <TermsContent />
      </main>
      <Footer />
    </>
  );
}
