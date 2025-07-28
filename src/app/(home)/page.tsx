import React, { Suspense } from "react";
import { HydrateClient, trpc } from "@/trpc/server";
import { PageClient } from "./client";
import { ErrorBoundary } from "react-error-boundary";

const page = async () => {
  void trpc.hello.prefetch({ text: "Antonio" });

  return (
    <HydrateClient>
      <Suspense fallback={<p>Loading...</p>}>
        <ErrorBoundary fallback={<p>Error...</p>}>
          <PageClient />
        </ErrorBoundary>
      </Suspense>
    </HydrateClient>
  );
};

export default page;
