import { CheckCircle2, ShieldCheck, ArrowLeft, BadgeCheck } from "lucide-react";
import { QRCodeSVG } from "qrcode.react";
import { Button } from "@/components/ui/button";
import { VisionHatLogo } from "@/components/VisionHatLogo";
import { CertificateData } from "@/components/CertificateResult";

interface Props {
  data: CertificateData;
  onBack: () => void;
}

export const VerifiedSuccessPage = ({ data, onBack }: Props) => {
  return (
    <div className="min-h-screen bg-background">
      <div className="gov-stripe h-1 w-full" />

      <header className="border-b border-border bg-card">
        <div className="container flex items-center justify-between py-4">
          <VisionHatLogo />
          <Button variant="ghost" size="sm" onClick={onBack} className="gap-1.5">
            <ArrowLeft className="h-4 w-4" /> <span className="hidden sm:inline">Verify Another</span>
          </Button>
        </div>
      </header>

      <main className="container max-w-3xl py-8 sm:py-12">
        {/* Big success banner */}
        <div className="overflow-hidden rounded-xl border-2 border-success/30 bg-card shadow-card">
          <div className="relative bg-gradient-to-br from-success-soft via-card to-success-soft px-6 py-8 text-center sm:py-10">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-success shadow-lg ring-8 ring-success/15">
              <CheckCircle2 className="h-12 w-12 text-success-foreground" strokeWidth={2.5} />
            </div>
            <h1 className="mt-5 text-2xl font-bold tracking-tight text-success sm:text-3xl">
              Certificate Verified
            </h1>
            <p className="mt-2 text-sm text-muted-foreground sm:text-base">
              This is a genuine certificate issued by VisionHat Academy.
            </p>
            <div className="mt-4 inline-flex items-center gap-1.5 rounded-full border border-success/30 bg-card px-3 py-1 text-xs font-bold uppercase tracking-wider text-success">
              <BadgeCheck className="h-3.5 w-3.5" /> Authentic Document
            </div>
          </div>

          <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[1fr_auto]">
            {/* Details */}
            <div>
              <h2 className="mb-4 border-b border-border pb-2 text-xs font-bold uppercase tracking-wider text-primary">
                Certificate Details
              </h2>
              <dl className="space-y-3.5 text-sm">
                <Row label="Student Name" value={data.studentName} bold />
                <Row label="Course Name" value={data.courseName} />
                <Row label="Institute" value={data.institute} />
                <Row label="Course Duration" value={data.duration} />
                <Row label="Certificate ID" value={data.certificateId} mono />
                <Row label="Issue Date" value={data.issueDate} />
              </dl>
            </div>

            {/* Real QR code */}
            <div className="flex flex-col items-center gap-3 lg:w-52">
              <div className="rounded-xl border-2 border-primary/15 bg-card p-3 shadow-soft">
                <QRCodeSVG
                  value={`https://www.visionhat.com/verify/${data.certificateId}`}
                  size={160}
                  level="H"
                  bgColor="#ffffff"
                  fgColor="hsl(215 75% 22%)"
                  imageSettings={{
                    src:
                      "data:image/svg+xml;utf8," +
                      encodeURIComponent(
                        `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='hsl(145 60% 38%)'><path d='M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z'/></svg>`
                      ),
                    height: 28,
                    width: 28,
                    excavate: true,
                  }}
                />
              </div>
              <div className="text-center">
                <div className="text-xs font-bold uppercase tracking-wider text-primary">
                  Scan to Verify
                </div>
                <p className="mt-1 max-w-[180px] text-[11px] leading-relaxed text-muted-foreground">
                  Scan this QR with any device to confirm authenticity online.
                </p>
              </div>
            </div>
          </div>

          {/* Trust footer inside card */}
          <div className="flex flex-col items-center gap-2 border-t border-border bg-muted/40 px-6 py-4 text-center sm:flex-row sm:justify-between sm:text-left">
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <ShieldCheck className="h-4 w-4 text-success" />
              <span>
                Issued by <span className="font-semibold text-foreground">VisionHat Academy</span>
              </span>
            </div>
            <a
              href={`https://www.visionhat.com/verify/${data.certificateId}`}
              className="font-mono text-xs font-semibold text-primary hover:underline"
            >
              www.visionhat.com/verify/{data.certificateId}
            </a>
          </div>
        </div>

        {/* Trust badges row */}
        <div className="mt-6 grid gap-3 sm:grid-cols-3">
          <TrustBadge icon={<ShieldCheck className="h-4 w-4" />} text="Officially Issued" />
          <TrustBadge icon={<BadgeCheck className="h-4 w-4" />} text="Digitally Signed" />
          <TrustBadge icon={<CheckCircle2 className="h-4 w-4" />} text="Tamper-Proof" />
        </div>

        <p className="mt-6 text-center text-xs text-muted-foreground">
          This certificate has been verified against VisionHat Academy's official records.
        </p>
      </main>

      <footer className="border-t border-border bg-card">
        <div className="gov-stripe h-0.5 w-full" />
        <div className="container py-5 text-center text-xs text-muted-foreground">
          <a href="https://www.visionhat.com" className="font-semibold text-primary hover:underline">
            www.visionhat.com
          </a>
          <p className="mt-1">© 2026 VisionHat Academy. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

const Row = ({
  label,
  value,
  bold = false,
  mono = false,
}: {
  label: string;
  value: string;
  bold?: boolean;
  mono?: boolean;
}) => (
  <div className="flex flex-col gap-0.5 border-b border-dashed border-border pb-3 last:border-0 sm:flex-row sm:items-baseline sm:gap-4">
    <dt className="text-xs font-medium uppercase tracking-wider text-muted-foreground sm:w-40 sm:shrink-0">
      {label}
    </dt>
    <dd
      className={`text-foreground ${bold ? "text-base font-bold sm:text-lg" : "text-sm font-semibold"} ${
        mono ? "font-mono tracking-wider" : ""
      }`}
    >
      {value}
    </dd>
  </div>
);

const TrustBadge = ({ icon, text }: { icon: React.ReactNode; text: string }) => (
  <div className="flex items-center justify-center gap-2 rounded-md border border-border bg-card px-3 py-2.5 text-xs font-semibold text-foreground shadow-soft">
    <span className="text-success">{icon}</span>
    {text}
  </div>
);
