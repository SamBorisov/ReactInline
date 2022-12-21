





//  togle function for boxes that checks if the id is the same and then switch to true of false for box on click
function toggle(id) {
    setSquares(prevSquares => {
      return prevSquares.map(square => (
           square.id === id ? {...square, on: !square.on} : square)
    )})
}

<Box
toggle={() => toggle(square.id)} />



return (
   <div>
    {/* condician redner on h3 or p */}
       {props.setup && <h3>{props.setup}</h3>}      
       {isShown && <p>{props.punchline}</p>}
       <button onClick={toggleShown}>{isShown ? "Hide Punchlime" : "Show Punchline"}</button>
       <hr />
   </div>
)

return (
    <div>
    {
        messages.length === 0 ?
        <h1>You're all caught up!</h1> :
        <h1>You have {messages.length} unread {messages.length > 1 ? "messages" : "message"}</h1>
    }
    </div>
)


// how to add async funcions in useEffects if you don't want to use .then methods
// this is useEffect on Memes (we can replace it)
// we can add clean-up retrun fucntion too "now is not needed"
React.useEffect(() => {
    async function getMemes() {
        const res = await fetch("https://api.imgflip.com/get_memes")
        const data = await res.json()
        setAllMemes(data.data.memes)
    }
    getMemes()
}, [])



// Other notes

        // box-shadow
        // <span> <input /> type="submit/radio..."    <hr />
        // (props) {JS code}			{props.something && ....}

        //                 likes={2}
        //                 comments={[{author: "", body: "", title: ""}]}

        // const map2 = names.map(x => x[0].toUpperCase() + x.substring(1));
        // const capitalized = names.map((name) => {
        //     return name[0].toUpperCase() + name.slice(1)
        // })

        // const pokemon = ["Bulbasaur", "Charmander", "Squirtle"]
        // // -->          ["<p>Bulbasaur</p>", "<p>Charmander</p>", "<p>Squirtle</p>"]
        // // Your code here

        // const paragraphs = pokemon.map(mon => `<p>${mon}</p>`)
        // consle log data

        // let starIcon = (contact.isFavorite ? "star-filled.png" : "star-emptry.png")


        // 	const [contact, setContact] = React.useState({})

        // 		     ...prevContact,
        //                 isFavorite: !prevContact.isFavorite


        // !!!!!!!!!!!!!!!!!!!!!!!Set .map

        // if (formData.password != formData.comfPassword) throw "Passowrds don't match"


        // <pre>

        // React.useEffect( =>() {..}, [something that when change it will re-render])