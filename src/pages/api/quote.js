// Next.js API route support: https://nextjs.org/docs/api-routes/introduction


const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': process.env.API_KEY,
    'X-RapidAPI-Host': 'quotes15.p.rapidapi.com'
  }
};

async function getQuote () {

  const response = await fetch('https://quotes15.p.rapidapi.com/quotes/random/', options)
  const data = response.json()
  return data;

}

export default async function handler(req, res) {
  const promiseResult = await getQuote()
  await res.status(200).json(promiseResult)
}
