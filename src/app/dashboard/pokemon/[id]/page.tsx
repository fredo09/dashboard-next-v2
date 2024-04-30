
import { PokemonResponse } from "@/pokemons";
import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

interface Props {
  params: { id: string }
}

/*
 *  esto se usa para generar contenido statico en "build time" ya previamente cargado y listo cuando se solicite
 */
export async function generateStaticParams() {
  // * -> Generamos params [id] para generar contenido statico
  const staticInitialPokemons = generateIdsPokemons();

  return staticInitialPokemons.map(id => ({
    id: id
  }));
}

//* Generate array de 151 ids de pokemons
const generateIdsPokemons = () => {
  return Array.from({ length: 151 }).map((v, i) => `${i + 1}` );
} 

/*
*   -> este es la forma de como hacer que la metada en next sea  dinamica usando en este caso la peticion de la api de pokemon
*   debe de exportar un funcion con el name "generateMetadata"
*/
export async function generateMetadata({ params }: Props): Promise<Metadata> {

    // * Si ocurre algun error al generar Metadata retornaremos una estructura generica 
    try {
      const { id, name } = await getPokemonApi(params.id);
    
      return {
          title: `#${id} - ${name}`,
          description: `Pokemon ${name}`
      }
    } catch (error) {
      return {
        title: 'Listado de Pokemons',
        description: 'Culpa cupidatat ipsum magna reprehenderit ex tempor sint ad minim reprehenderit consequat sit.'
      }
    }
}

const getPokemonApi = async(id: string): Promise<PokemonResponse> => {
  try {
    const responsePokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, {
      //! solo puede usarse uno
      //cache: 'force-cache', // * -> guarda la cache de la peticion para cuando se haga de nuevo la recupere rapido 
      next: { //* -> podemos indicar cuando queremos revalidar esta peticion 
        revalidate: 60 * 60 *30
      }
    }).then(result => result.json());

    return responsePokemon;
  } catch (error) {
    // * si ocurre algun error en el servicio lanzammos "notFound() <Template>" para redireccionar a que no se encontro dicha solicitud
    console.log("🚀 ~ getPokemonApi ~ error:", error);
    
    notFound();
  }
}


export default async function PokemonPage({ params }: Props) {

    const pokemon = await getPokemonApi(params.id);
    
  
    return (
      <div className="flex mt-5 flex-col items-center text-slate-800">
        <div className="relative flex flex-col items-center rounded-[20px] w-[700px] mx-auto bg-white bg-clip-border  shadow-lg  p-3">
          <div className="mt-2 mb-8 w-full">
            <h1 className="px-2 text-xl font-bold text-slate-700 capitalize">
              #{pokemon.id} {pokemon.name}
            </h1>
            <div className="flex flex-col justify-center items-center">
              <Image
                src={pokemon.sprites.other?.dream_world.front_default ?? ''}
                width={150}
                height={150}
                alt={`Imagen del pokemon ${pokemon.name}`}
                className="mb-5"
              />
  
  
              <div className="flex flex-wrap">
                {
                  pokemon.moves.map(move => (
                    <p key={move.move.name} className="mr-2 capitalize">{move.move.name}</p>
                  ))
                }
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 px-2 w-full">
  
            <div className="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4  drop-shadow-lg ">
              <p className="text-sm text-gray-600">Types</p>
              <div className="text-base font-medium text-navy-700 flex">
                {
                  pokemon.types.map(type => (
                    <p key={type.slot} className="mr-2 capitalize">{type.type.name}</p>
                  ))
                }
              </div>
            </div>
  
            <div className="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4  drop-shadow-lg ">
              <p className="text-sm text-gray-600">Peso</p>
              <span className="text-base font-medium text-navy-700 flex">
                {
                  pokemon.weight
                }
              </span>
            </div>
  
            <div className="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4  drop-shadow-lg">
              <p className="text-sm text-gray-600">Regular Sprites</p>
              <div className="flex justify-center">
  
                <Image
                  src={pokemon.sprites.front_default}
                  width={100}
                  height={100}
                  alt={`sprite ${pokemon.name}`}
                />
  
                <Image
                  src={pokemon.sprites.back_default}
                  width={100}
                  height={100}
                  alt={`sprite ${pokemon.name}`}
                />
  
              </div>
            </div>
  
            <div className="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4  drop-shadow-lg">
              <p className="text-sm text-gray-600">Shiny Sprites</p>
              <div className="flex justify-center">
  
                <Image
                  src={pokemon.sprites.front_shiny}
                  width={100}
                  height={100}
                  alt={`sprite ${pokemon.name}`}
                />
  
                <Image
                  src={pokemon.sprites.back_shiny}
                  width={100}
                  height={100}
                  alt={`sprite ${pokemon.name}`}
                />
  
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }