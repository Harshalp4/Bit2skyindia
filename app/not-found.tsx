import { ButtonLink } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="container flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
      <p className="text-7xl font-bold text-gradient">404</p>
      <h1 className="mt-4 text-2xl font-bold">Page not found</h1>
      <p className="mt-2 max-w-sm text-muted-foreground">The page you're looking for doesn't exist or has moved.</p>
      <ButtonLink href="/" className="mt-8">Back to home</ButtonLink>
    </section>
  );
}
