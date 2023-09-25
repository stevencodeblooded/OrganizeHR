//all the fetching will be don here
export async function getApplicants() {
    const url = 'https://api.something/smartpersonell.com'
    const res = await fetch(url)
    if (!res.ok) {
        throw {
            error: 'Problem getting the Applicants data.'
        }
    }
    const data = await res.json()
    return data
}