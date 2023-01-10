

export default function Career() {
  return (
    <div className="careers"></div>
  )
}


//define a loader function
export const careersLoader = async () => {
    const res = await fetch("http://localhost:4000/careers")

    return res.json()
}

