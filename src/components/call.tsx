"use client";

import { useEffect } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";

interface CalBookingEmbedProps {
  calLink: string;
}

const calConfig = {
  layout: "month_view" as const,
  theme: "light" as const,
};

const config = {
  styles: {
    branding: { brandColor: "#065F46" },
  },
  cssVarsPerTheme: {
    light: {
      "cal-brand": "#065F46",
      "cal-brand-emphasis": "#064E3B",
      "cal-text": "#0F172A",
      "cal-text-emphasis": "#022C22",
      "cal-border": "#E2E8F0",
      "cal-border-subtle": "#F1F5F9",
      "cal-bg": "#FFFFFF",
    },
    dark: {
      "cal-brand": "#10B981",
      "cal-brand-emphasis": "#34D399",
      "cal-text": "#F8FAFC",
      "cal-text-emphasis": "#FFFFFF",
      "cal-border": "#1E4D40",
      "cal-border-subtle": "#0B3D31",
      "cal-bg": "#022C22",
    },
  },
};

export default function CalBookingEmbed({ calLink }: CalBookingEmbedProps) {
  useEffect(() => {
  getCalApi().then((cal) => cal("ui", config));
  }, []);
  return (
    <Cal
      calLink={calLink}
      config={calConfig}
      className="min-h-[700px] w-full"
    />
  );
}
