import './App.css'

function App() {
  return <div>
    <h1 class="text-3xl font-bold underline bg-blue-900 p-8 border-4"> Hello world! </h1>
    <button class="uppercase rounded-full bg-green-900 p-5 md:bg-red-600  "> Me clique </button>
    <form action="https://getform.io/f/aejlnxdb" method="POST">
      <input type="text" name="name" />
      <input type="email" name="email" />
      <input type="text" name="message" />
      {/* add hidden Honeypot input to prevent spams */}
      <input type="hidden" name="_gotcha" style={{ display: "none !important" }} />
      {/* checkbox handle */}
      <input
        type="checkbox"
        name="subscribe"
        defaultValue="yes"
        defaultChecked=""
      />
      <input type="hidden" name="subscribe" defaultValue="no" />
      {/* radio button handle */}
      <input type="radio" name="gender" defaultValue="male" defaultChecked="" />
      <input type="radio" name="gender" defaultValue="female" />
      <input type="radio" name="gender" defaultValue="other" />
      {/* select field handle */}
      <select name="work-experience">
        <option value="one-year">0-1 years</option>
        <option value="one-five-years">1-5 years</option>
      </select>
      <button type="submit">Send</button>
    </form>


  </div>
}

export default App
