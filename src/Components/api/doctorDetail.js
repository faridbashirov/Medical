import { useEffect, useState } from "react"
import axios from "axios"
import i18next from "i18next"


export default function DoctorDetailFetch(id, lang) {

    const [data, setData] = useState({})
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)
    const [review, setReview] = useState([])






    useEffect(() => {

        async function getLang() {
            try {

                setLoading(true)
                const response = await axios.get(`https://hospitalbackend.efgroup.az/${localStorage.getItem("lang") === "ru" ? "" : localStorage.getItem("lang") + "/"}account/doctor_detail/${id}`)

                setData(response.data)
                setReview(response.data.review)

            } catch (err) {
                setError(err)
            } finally {
                setLoading(false)
            }
        }

        getLang()

    }, [id, lang])

    return { data, error, loading, review }

}