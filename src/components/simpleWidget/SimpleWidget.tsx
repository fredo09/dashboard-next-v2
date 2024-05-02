import Link from "next/link";

interface Props {
  tittle:     string,
  subTitle?:  string,
  counter?:     string,
  icon?:      React.ReactNode,
  href?:      string
}

export const SimpleWidget = ({ tittle, subTitle, counter, icon, href }: Props) => {
  return (
    <div className="bg-white shadow-xl p-3 sm:min-w-[25%] min-w-full  rounded-2xl border-1 border-gray-50 mx-2 my-2">
      <div className="flex flex-col">
        {
          counter && (
            <div>
              <h2 className="font-bold text-gray-600 text-center">{ counter }</h2>
            </div>
          )
        }
        <div className="my-3">
          <div className="flex flex-row items-center justify-center space-x-1 ">
            <div id="icon">
              {/* Icono irá aquí */}
              { icon }
            </div>
            <div id="temp" className="text-center">
              <h4 className="text-4xl">{ tittle }</h4>
              {subTitle && (<p className="text-xs text-gray-500">{ subTitle }</p>)}
            </div>
          </div>
        </div>

        {
          href && (
            <div className="w-full place-items-end text-right border-t-2 border-gray-100 mt-2">
              <Link href={`${ href }`} className="text-indigo-600 text-xs font-medium">Ver Más</Link>
            </div>
          )
        }
      </div>
    </div>
  )
}