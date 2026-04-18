import { FormEvent, useState } from "react";
import { Lock, Search, Loader2, AlertCircle, ShieldCheck } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { VisionHatLogo } from "@/components/VisionHatLogo";
import { CertificateResult, CertificateData } from "@/components/CertificateResult";

const VALID_CERTIFICATE: Record<string, CertificateData> = {
  "VH-2026-00001": {
    studentName: "Amrit",
    courseName: "1-Year Professional Course in Digital Marketing",
    institute: "VisionHat Academy",
    duration: "February 2025 – February 2026",
    certificateId: "VH-2026-00001",
    issueDate: "February 2026",
    emailMasked: "am****@gmail.com",
    phoneMasked: "******1234",
  },
};

const Index = () => {
  const [certId, setCertId] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<CertificateData | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleVerify = (e: FormEvent) => {
    e.preventDefault();
    const id = certId.trim().toUpperCase();
    if (!id) return;

    setLoading(true);
    setResult(null);
    setError(null);

    setTimeout(() => {
      const found = VALID_CERTIFICATE[id];
      if (found) {
        setResult(found);
      } else {
        setError("Certificate not found. Please check the ID and try again.");
      }
      setLoading(false);
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Government-style tricolor stripe */}
      <div className="gov-stripe h-1 w-full" />

      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container flex flex-col gap-4 py-5 sm:flex-row sm:items-center sm:justify-between">
          <VisionHatLogo />
          <div className="flex items-center gap-2 text-xs text-muted-foreground sm:text-sm">
            <ShieldCheck className="h-4 w-4 text-success" />
            <span className="font-medium">Official Verification Portal</span>
          </div>
        </div>
      </header>

      {/* Title section */}
      <section className="border-b border-border bg-secondary/40">
        <div className="container py-10 text-center sm:py-14">
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-primary/15 bg-card px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
            <ShieldCheck className="h-3.5 w-3.5" /> Authenticity Check
          </div>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Certificate Verification Portal
          </h1>
          <p className="mx-auto mt-3 max-w-xl text-sm text-muted-foreground sm:text-base">
            Verify the authenticity of your certificate issued by VisionHat Academy in seconds.
          </p>
        </div>
      </section>

      {/* Search */}
      <section className="container -mt-8 max-w-3xl pb-10 sm:-mt-10">
        <div className="rounded-lg border border-border bg-card p-5 shadow-card sm:p-7">
          <form onSubmit={handleVerify} className="space-y-3">
            <label htmlFor="certId" className="block text-sm font-semibold text-foreground">
              Certificate ID
            </label>
            <div className="flex flex-col gap-3 sm:flex-row">
              <div className="relative flex-1">
                <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  id="certId"
                  value={certId}
                  onChange={(e) => setCertId(e.target.value)}
                  placeholder="Enter Certificate ID (e.g. VH-2026-00123)"
                  className="h-12 pl-9 font-mono text-sm uppercase tracking-wider"
                  autoComplete="off"
                  spellCheck={false}
                />
              </div>
              <Button type="submit" size="lg" className="h-12 px-6 font-semibold" disabled={loading}>
                {loading ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" /> Verifying...
                  </>
                ) : (
                  <>
                    <ShieldCheck className="h-4 w-4" /> Verify Certificate
                  </>
                )}
              </Button>
            </div>
            <div className="flex items-center gap-1.5 pt-1 text-xs text-muted-foreground">
              <Lock className="h-3.5 w-3.5" />
              <span>Secure Verification System — your data is encrypted.</span>
            </div>
            <div className="text-xs text-muted-foreground">
              Try sample ID:{" "}
              <button
                type="button"
                onClick={() => setCertId("VH-2026-00001")}
                className="font-mono font-semibold text-primary underline-offset-2 hover:underline"
              >
                VH-2026-00001
              </button>
            </div>
          </form>
        </div>

        {/* Result area */}
        <div className="mt-8">
          {loading && (
            <div className="flex flex-col items-center justify-center gap-3 rounded-lg border border-dashed border-border bg-card py-14 text-center">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
              <p className="text-sm font-medium text-muted-foreground">
                Verifying certificate authenticity...
              </p>
            </div>
          )}

          {!loading && error && (
            <div
              role="alert"
              className="flex items-start gap-3 rounded-lg border border-destructive/30 bg-destructive-soft px-5 py-4"
            >
              <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-destructive" />
              <div>
                <div className="text-sm font-bold text-destructive">Certificate not found</div>
                <p className="mt-0.5 text-sm text-destructive/80">{error}</p>
              </div>
            </div>
          )}

          {!loading && result && <CertificateResult data={result} />}
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto border-t border-border bg-card">
        <div className="gov-stripe h-0.5 w-full" />
        <div className="container flex flex-col items-center gap-2 py-6 text-center text-xs text-muted-foreground sm:flex-row sm:justify-between sm:text-sm">
          <div className="flex items-center gap-2">
            <VisionHatLogo className="scale-90" />
          </div>
          <div className="space-y-1">
            <a
              href="https://www.visionhat.com"
              className="font-semibold text-primary hover:underline"
            >
              www.visionhat.com
            </a>
            <p>© 2026 VisionHat Academy. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
