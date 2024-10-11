import { useEffect, useState } from "react"
import axios from "axios"

export default function getHospitalReview(id, lang) {

    const [data, setData] = useState({})
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    useEffect(() => {

        async function getLang() {
            try {
                setLoading(true)
                const response = await axios.get(`https://hospitalbackend.efgroup.az/${localStorage.getItem("lang") === "ru" ? "" : localStorage.getItem("lang") + "/"}hospital/hospital_reviews/${id}`)
                setData(response.data)
            } catch (err) {
                setError(err)
            } finally {
                setLoading(false)
            }
        }
        getLang()
    }, [id, lang])

    return { data, error, loading }

}