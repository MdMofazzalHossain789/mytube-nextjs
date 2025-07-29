import { HydrateClient, trpc } from "@/trpc/server";

export const dynamic = "force-dynamic"; // Force dynamic rendering

const page = () => {
  void trpc.categories.getMany.prefetch();

  return <HydrateClient>Home</HydrateClient>;
};

export default page;
