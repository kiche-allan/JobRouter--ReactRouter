import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div>
        <h2>Page Not Found</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit eaque laudantium explicabo culpa. Exercitationem nam ducimus error fuga soluta tenetur corporis ipsum placeat ullam a dignissimos voluptas eos corrupti atque, ut aliquam voluptatum alias illo iure iusto quae perspiciatis? Dicta aliquid et, soluta laborum ratione atque quod perspiciatis neque doloremque error adipisci illum, temporibus saepe quasi aut vel nemo fugiat nobis? Odit doloribus optio beatae eveniet minus saepe deserunt accusantium!</p>
        <p>Go to the <Link to =  "/">HomePage</Link></p>
    </div>
  )
}
