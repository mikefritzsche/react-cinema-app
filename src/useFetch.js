import { useState, useEffect } from 'react'

export const useFetch = options => {
  const [data, setData] = useState(null)
  console.log('options: ', options.url)

  useEffect(() => {
      console.log('fetch: ', options)
    if (options.url) {
      fetch(options.url)
        .then(resp => resp.json())
        .then(json => setData(json))
    }
  }, [options.url])
  return {
    data
  }
}