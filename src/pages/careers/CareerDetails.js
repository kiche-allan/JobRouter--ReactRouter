import { useParams } from "react-router-dom"

export default function CareerDetails() {

    const {id} = useParams()

  return (
    <div className="career-details">
        <h2>{ id }</h2>
    </div>
  )
}
