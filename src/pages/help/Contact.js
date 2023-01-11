import { Form } from "react-router-dom";


export default function Contact() {
  return (
    <div className="contact">
        <h3>Contact Us</h3>
        <Form method="post" action="/help/contact" >
            <label >
                <span>Your Email:</span>
                <input type="email" name ="email" required />
            </label>
            <label >
                <span>Your Message:</span>
                <textarea name="message" required></textarea>
            </label>
            <button>Submit</button>
        </Form>
    </div>
  )
}

export const contactAction = async ({ request}) => {
  const data = await request.formData()
  constsubmission = {
    email: data.get('email'),
    message: data.get('message')
  }
}