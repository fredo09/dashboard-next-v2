
import { PokemonResponse } from "@/pokemons";

interface Props {
    params: { id: string }
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
            {
                JSON.stringify(pokemon)
            }
        </div>
    );
}