function App() {
  const name = 'StarGazers'
  const color = {color : "SteelBlue"}
  return (
    <div className="container">
      <article>
      <hgroup>
        <img src="images/group.svg" alt="StarGazers Group" />
        <h1>Meet the <i style={color} >{ name }</i></h1>
        <p>Members of an <b>intergalactic alliance</b> paving the way for peace and benevolence among all species. They are known for their enthusiasm for science, for their love of fun, and their dedication to education.</p>
        <button className="outline" onClick={() => alert("Hi There!")}>"Click Me"</button>
      </hgroup>
    </article>
    </div>
  )
}
export default App
