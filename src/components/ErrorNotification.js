import { XCircleIcon } from '@heroicons/react/outline';


export default function ErrorNotification({
    errors
}) {
  return (
    <div className="rounded-md bg-red-50 p-4 my-7 ">
      <div className="flex">
        <div className="flex-shrink-0">
          <XCircleIcon aria-hidden="true" className="h-5 w-5 text-red-400" />
        </div>
        <div className="ml-3">
          <h3 className="text-sm font-medium text-red-800"> Hubo un error { errors.length } no se proceso</h3>
          <div className="mt-2 text-sm text-red-700">
            <ul role="list" className="list-disc space-y-1 pl-5">
                {errors.map((error, index) => (
                    <li key={index}>{error}</li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}