"use client";

import { ReactNode } from "react";
import { ConvexReactClient } from "convex/react";
import { ConvexProviderWithClerk } from "convex/react-clerk";
import { useAuth } from "@clerk/nextjs";

const convexUrl = process.env.NEXT_PUBLIC_CONVEX_URL;
const convex = convexUrl ? new ConvexReactClient(convexUrl) : null;
let hasLoggedMissingConvexUrl = false;

export default function ConvexClientProvider({ children }: { children: ReactNode }) {
  if (!convex) {
    // Keep rendering so static prerender/build does not fail when Convex is not configured yet.
    if (!hasLoggedMissingConvexUrl) {
      console.warn("Missing NEXT_PUBLIC_CONVEX_URL. Convex provider is disabled for this environment.");
      hasLoggedMissingConvexUrl = true;
    }
    return <>{children}</>;
  }

  return (
    <ConvexProviderWithClerk client={convex} useAuth={useAuth}>
      {children}
    </ConvexProviderWithClerk>
  );
}
