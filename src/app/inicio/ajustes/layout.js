'use client';

import SocialFooter from "@/components/SocialFooter";

const consejos = [
  'Actualiza tus documentos fiscales a tiempo para evitar problemas.',
  'Revisa tus cuotas pendientes para mantener tu cuenta al día.'
];

export default function AjustesLayout({ children }) {
  return (
    <div className="flex flex-col h-full ">


      <div className=" flex-1 space-y-4 p-2 h-4/5 ">
         {children}
      </div>


      <div className='flex flex-col h-1/5 justify-end'>
      <div className="mt-auto">
        <SocialFooter consejos={consejos} />
      </div>
      </div>
  
    </div>
   
  );
}
