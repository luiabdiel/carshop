export async function fetchCars() {
  const headers = {
    'X-RapidAPI-Key': '89ea93b3a2mshe4df57ee7bc40edp1c6772jsn528640459607',
    'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
  }

  const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla', {
    headers: headers,
  })

  const result = await response.json()

  return result
}
