import { useLoaderData, useParams } from "react-router-dom"

export default function CareerDetails() {

    const {id} = useParams()
    const career = useLoaderData()

  return (
    <div className="career-details">
        <h2> Career Details for {career.title}</h2>
        <p>Starting Salary: {career.salary}</p>
        <p>Location: {career.location}</p>

        <div className="details">
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae voluptates doloribus, eaque est debitis, voluptatem natus ducimus expedita, ipsa ab laborum repellat ullam officiis dignissimos quia facere id odio architecto tempora modi! Sunt, vel eveniet ullam molestiae quae, architecto voluptatibus sed dolorum ipsam voluptates magni ut cum consequatur ratione omnis eaque adipisci blanditiis quibusdam. Labore velit molestias quasi aperiam illo!</p>
        </div>
    </div>
  )
}


//loader function
export const careerDetailsLoader = async ({params}) => {
    const {id} = params

    const res = await fetch("http://localhost:4000/careers" + id)

    return res.json()

}