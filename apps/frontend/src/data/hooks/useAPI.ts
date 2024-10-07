import { useCallback } from "react"


const urlBase = process.env.NEXT_PUBLIC_API_URL

export default function useAPI() {
    function fullUrl(path: string) {
        const uri = path.startsWith('/') ? path : `/${path}`;
        return `${urlBase}${uri}`
    }

    async function extractData(response: Response) {
        let content = ''
        try {
            content = await response.text()
            return JSON.parse(content)
        } catch (e) {
            console.log(e)
            return content
        }
    }

    const httpGet = useCallback(async function (path: string) {
        const response = await fetch(fullUrl(path))
        return extractData(response)
    }, [])

    const httpPost = useCallback(async function (path: string, body: any) {
        const response = await fetch(fullUrl(path), {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
        })
        return extractData(response)
    }, [])

    return { httpGet, httpPost }
}