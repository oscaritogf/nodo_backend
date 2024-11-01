'use client';

export default function PrestamosActivosLayout({ children }) {
  return (
    <div>
      <div className="space-y-4">
        {children} {/* Aquí se renderizan las subpáginas de seguridad, privacidad, etc. */}
      </div>
    </div>
  );
}
