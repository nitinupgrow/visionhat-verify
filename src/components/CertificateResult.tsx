import { BadgeCheck, ShieldCheck, QrCode, FileBadge } from "lucide-react";

export interface CertificateData {
  studentName: string;
  courseName: string;
  institute: string;
  duration: string;
  certificateId: string;
  issueDate: string;
  emailMasked: string;
  phoneMasked: string;
}

interface Props {
  data: CertificateData;
}

const Field = ({ label, value, mono = false }: { label: string; value: string; mono?: boolean }) => (
  <div className="border-b border-dashed border-border py-3 last:border-0 sm:border-0 sm:border-b sm:py-2.5">
    <div className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
      {label}
    </div>
    <div className={`mt-1 text-sm font-semibold text-foreground sm:text-[15px] ${mono ? "font-mono tracking-wider" : ""}`}>
      {value}
    </div>
  </div>
);

export const CertificateResult = ({ data }: Props) => {
  return (
    <div className="overflow-hidden rounded-lg border border-border bg-card shadow-card">
      {/* Top status bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border bg-success-soft px-5 py-3">
        <div className="flex items-center gap-2">
          <BadgeCheck className="h-5 w-5 text-success" strokeWidth={2.4} />
          <span className="text-sm font-bold text-success">Verified Certificate</span>
        </div>
        <span className="rounded-full border border-success/30 bg-card px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-success">
          Authentic
        </span>
      </div>

      <div className="grid gap-6 p-5 sm:p-7 lg:grid-cols-[1fr_auto] lg:gap-10">
        {/* Left: details */}
        <div>
          <div className="mb-5 flex items-center gap-2 border-b border-border pb-3">
            <FileBadge className="h-4 w-4 text-primary" />
            <h2 className="text-sm font-bold uppercase tracking-wider text-primary">
              Certificate Details
            </h2>
          </div>

          <div className="grid gap-1 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-1">
            <Field label="Student Name" value={data.studentName} />
            <Field label="Certificate ID" value={data.certificateId} mono />
            <Field label="Course Name" value={data.courseName} />
            <Field label="Institute" value={data.institute} />
            <Field label="Course Duration" value={data.duration} />
            <Field label="Issue Date" value={data.issueDate} />
          </div>

          <div className="mt-6 rounded-md border border-border bg-muted/40 p-4">
            <div className="mb-2 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              <ShieldCheck className="h-3.5 w-3.5" /> Privacy-Safe Contact
            </div>
            <div className="grid gap-2 sm:grid-cols-2">
              <div className="text-sm">
                <span className="text-muted-foreground">Email: </span>
                <span className="font-mono font-semibold text-foreground">{data.emailMasked}</span>
              </div>
              <div className="text-sm">
                <span className="text-muted-foreground">Phone: </span>
                <span className="font-mono font-semibold text-foreground">{data.phoneMasked}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right: QR + trust */}
        <div className="flex flex-col items-center justify-start gap-3 lg:w-48">
          <div className="flex h-40 w-40 items-center justify-center rounded-md border-2 border-border bg-card p-3">
            <QrCode className="h-full w-full text-primary" strokeWidth={1.2} />
          </div>
          <div className="text-center">
            <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Scan to Verify
            </div>
            <div className="mt-2 inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-trust-blue-soft px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-primary">
              <ShieldCheck className="h-3 w-3" /> Official Document
            </div>
          </div>
        </div>
      </div>

      {/* Footer note */}
      <div className="border-t border-border bg-muted/30 px-5 py-3 text-center text-xs text-muted-foreground">
        This certificate is issued by{" "}
        <span className="font-semibold text-foreground">VisionHat Academy</span> and can be verified
        online at{" "}
        <span className="font-semibold text-primary">www.visionhat.com</span>.
      </div>
    </div>
  );
};
