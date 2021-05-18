import axios from 'axios'
import React, { useState, useEffect } from 'react'

const useUrlLoader = (url: string, deps: any[] = []) => {
    const [data, setData] = useState<any>(null)
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        setLoading(true)
        axios.get(url).then(res => {
            setData(res.data)
            setLoading(false)
        })
    }, deps)
    return [data, loading]
}
export default useUrlLoader