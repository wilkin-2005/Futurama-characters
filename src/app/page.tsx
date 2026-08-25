
import Hero from "@/src/components/hero/hero";
import SignUpForm from "@/src/components/sign-up/sign-up-form";

export default function HomePage()
{
  return (
    <main>
      <Hero title="Hejsan React och Next.js!" imgIds={1} />

      <SignUpForm />
    </main>
  );
}