export const API_URL = import.meta.env.VITE_API_URL;

export function GET_POKEMON(pokemonName) {
  return {
    url: `${API_URL}/pokemon/${pokemonName}`,
    options: {
      method: 'GET',
    },
  };
}
