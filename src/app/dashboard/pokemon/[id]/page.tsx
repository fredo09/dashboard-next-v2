
import { PokemonResponse } from "@/pokemons";
import { Metadata } from "next";

interface Props {
    params: { id: string }
}

/*
*   -> este es la forma de como hacer que la metada en next sea  dinamica usando en este caso la peticion de la api de pokemon
*   debe de exportar un funcion con el name "generateMetadata"
*/
export async function generateMetadata({ params }: Props): Promise<Metadata> {
    
    const { id, name } = await getPokemonApi(params.id);
    
    return {
        title: `#${id} - ${name}`,
        description: `Pokemon ${name}`
    }
}

const getPokemonApi = async(id: string): Promise<PokemonResponse> => {
    const responsePokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, {
        cache: 'force-cache' // -> guarda la cache de la peticion para cuando se haga de nuevo la recupere rapido
    }).then(result => result.json());

    return responsePokemon
}

export default async function PokemonPage({ params }: Props) {
    
    const pokemon = await getPokemonApi(params.id);
    return (
        <div>
            Pokemon Page
        </div>
    );
}