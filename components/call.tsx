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
    branding: { brandColor: "#059669" },
  },
  cssVarsPerTheme: {
    light: {
      "cal-brand": "#059669",
      "cal-brand-emphasis": "#047857",
      "cal-text": "#18181b",
      "cal-text-emphasis": "#18181b",
      "cal-border": "#e4e4e7",
      "cal-border-subtle": "#f4f4f5",
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
