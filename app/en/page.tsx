import type { Metadata } from "next";
import { LawFirmLandingPage } from "../components/landing/LawFirmLandingPage";

export const metadata: Metadata = {
  title: "Jankie Law Firm",
  description:
    "Jankie Law Firm in Hoofddorp: legal support in administrative law, criminal law, and immigration law.",
};

export default function EnglishHome() {
  return <LawFirmLandingPage locale="en" />;
}
