import { Outlet } from "react-router-dom";


export default function CareersLayout() {
  return (
    <div className="careers-layout">
        <h2>Careers</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur minus incidunt laudantium aliquam similique? Vero recusandae dolorum aliquid omnis commodi sapiente quo, aut amet culpa nihil maiores ratione similique deleniti?</p>

        <Outlet/>
    </div>
  )
}
