'use client';

export default function MetodosPagosLayout({ children }) {
  return (
    <div>
      <div className="space-y-4">
        {children} {/* Aquí se renderizan las subpáginas de seguridad, privacidad, etc. */}
      </div>
    </div>
  );
}
