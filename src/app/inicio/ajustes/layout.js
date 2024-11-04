'use client';
import SocialFooter from "@/components/SocialFooter";

const consejos = [
  'Actualiza tus documentos fiscales a tiempo para evitar problemas.',
  'Revisa tus cuotas pendientes para mantener tu cuenta al día.'
];

export default function AjustesLayout({ children }) {
  return (
    <div className="flex flex-col h-full mb-9">
      <div className="flex-1 space-y-4 p-2">
        {children}
      </div>
      <div className="flex flex-col justify-end">
        <div className="mt-auto hidden lg:block"> {/* Solo visible en escritorio (lg y superior) */}
          <SocialFooter consejos={consejos} />
        </div>
      </div>
    </div>
  );
}

