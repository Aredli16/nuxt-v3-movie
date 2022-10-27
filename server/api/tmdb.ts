export default defineEventHandler(async event => {
    const config = useRuntimeConfig()
    const {media, categorie, page, random, optional} = useQuery(event);

    const BASE_URL = 'https://api.themoviedb.org/3'
    const LANG = 'fr'

    if (random && random === 'true') {
        const res = await $fetch(`${BASE_URL}/${media}/${categorie}`, {
            params: {
                api_key: config.TMDB_API_KEY,
                page: Math.floor(Math.random() * 500),
                language: LANG
            }
        })

        return await $fetch(`${BASE_URL}/${media}/${res["results"][Math.floor(Math.random() * 20)].id}`, {
            params: {
                api_key: config.TMDB_API_KEY,
                language: LANG
            }
        })
    }

    if (optional) {
        return $fetch(`${BASE_URL}/${media}/${categorie}/${optional}`, {
            params: {
                api_key: config.TMDB_API_KEY,
                page: page,
                language: LANG
            }
        })
    }

    return $fetch(`${BASE_URL}/${media}/${categorie}`, {
        params: {
            api_key: config.TMDB_API_KEY,
            page: page,
            language: LANG
        }
    })
})