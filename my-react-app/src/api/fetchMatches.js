export const fetchMatches = async ()=>{
const response = await fetch("https://jsonmock.hackerrank.com/api/football_matches?page=2")

if(!response.ok){
    throw new Error("failed to load matches")
}
const data = await response.json()
return data.data
}
export default fetchMatches