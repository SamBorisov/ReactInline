// import React from "react"
// import ReactDOM from "react-dom/client"

var boxes = [
    {
        id: 1,
        on: true
    },   
    {
        id: 2,
        on: false
    },   
    {
        id: 3,
        on: true
    },   
    {
        id: 4,
        on: true
    },   
    {
        id: 5,
        on: false
    },   
    {
        id: 6,
        on: true
    },   
]

ReactDOM.render(
    <div>
        <App />
    </div>, document.getElementById("root"))



//---------------------------------------------------------------Components---------------------------------------------------------------\\



function App() {
    // box sqares
    const [squares, setSquares] = React.useState(boxes)
    
    const squareElements = squares.map(square => (
        <Box key={square.id} on={square.on} />
    ))

        // width button
    const [show, setShow] = React.useState(true)
    
    function toggle() {
        setShow(prevShow => !prevShow)
    }
    
    return (
        <div>
            <Navbar />
            <Main />
            {squareElements}
            <From1 />
            <div className="logmeme">
            <Login />
            <Meme />
            </div> 
            <StarWars />
            <Navbar />
            {show && <WindowTracker />}
            <button className="button--width" onClick={toggle}> Toggle WindowTracker </button>
            
        </div>
    )
}


function Navbar(props) {
    return(
        <div className="nav--s">
            <p className="mytrav--s"> My learning experience</p>
        </div>
    )
}




function Main(props) {

    const [fromData, setFromData] = React.useState({firstName:"", lastName: "",email:"", comment:""})

    function handleChange() {
        setFromData(prevFD => {
            return {
            ...prevFD,
            [event.target.name]: event.target.value
            }
        })
    }


    return(
        <div className="main">
        <h1> Froms? </h1>
        <form>
            <input
                type="text"
                placeholder="First Name"
                onChange={handleChange}
                name="firstName"
                value={fromData.firstName}
            />
            <input
                type="text"
                placeholder="Last Name"
                onChange={handleChange}
                name="lastName"
                value={fromData.lastName}
            />
            <input
                type="email"
                placeholder="E-mail"
                onChange={handleChange}
                name="email"
                value={fromData.email}
            />
            <br></br>
            <textarea 
                value={fromData.comments}
                placeholder="Comments"
                onChange={handleChange}
                name="comment"
            />
        </form>
        </div>
    )
}
// ---Form Radio, Checkbox, Submit, CHOOSE -------------------------------------------
function From1(props) {

    const [formData, setFormData] = React.useState(
        {
            isFriendly: true,
            employment: "",
            favColor: ""
        }
    )
    
    function handleChange(event) {
        const {name, value, type, checked} = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }
 
    function handleSubmit(event) {
        event.preventDefault()
        //sumbitToApi(formData)
        console.log(formData)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="checkbox" 
                id="isFriendly" 
                checked={formData.isFriendly}
                onChange={handleChange}
                name="isFriendly"
            />
            <label htmlFor="isFriendly">Are you friendly?</label>
            <br />
            <br />
            
            <fieldset>
                <legend>Current employment status</legend>
                <input 
                    type="radio"
                    id="unemployed"
                    name="employment"
                    value="unemployed"
                    checked={formData.employment === "unemployed"}
                    onChange={handleChange}
                />
                <label htmlFor="unemployed">Unemployed</label>
                <br />
                
                <input 
                    type="radio"
                    id="part-time"
                    name="employment"
                    value="part-time"
                    checked={formData.employment === "part-time"}
                    onChange={handleChange}
                />
                <label htmlFor="part-time">Part-time</label>
                <br />
                
                <input 
                    type="radio"
                    id="full-time"
                    name="employment"
                    value="full-time"
                    checked={formData.employment === "full-time"}
                    onChange={handleChange}
                />
                <label htmlFor="full-time">Full-time</label>
                <br />
            </fieldset>
            <br />
            
            <label htmlFor="favColor">What is your favorite color?</label>
            <br />
            <select 
                id="favColor" 
                value={formData.favColor}
                onChange={handleChange}
                name="favColor"
            >
                <option value="">-Select-</option>
                <option value="red">Red</option>
                <option value="orange">Orange</option>
                <option value="yellow">Yellow</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
                <option value="indigo">Indigo</option>
                <option value="violet">Violet</option>
            </select>
            <button>Submit</button>
        </form>
    )
}



// BOX--------------------------------------------------------------------------------------

function Box(props) {
    const [on, setOn] = React.useState(props.on)
    
    const styles = {
        backgroundColor: on ? "#222222" : "transparent"
    }
    
    function toggle() {
        setOn(prevOn => !prevOn)
    }
    
    return (
        
        <div style={styles} className="box" onClick={toggle}></div>
        
        
    )
}


// LOGIN -------------------------------------------------------------------------------------


function Login() {
    

    const [formData, setFormData] = React.useState(
        {
            email:"",
            password:"",
            comfPassword:"",
            newsletter: false
        }
    )
    function handleChange() {
        const {name, value, type, checked} = event.target
        setFormData(prev => {
            return {
                ...prev,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }
    
    function handleSubmit(event) {
        if (formData.password != formData.comfPassword) throw "Passowrds don't match"
        
        if (formData.newsletter == true){
            console.log("Thank you for signing up to our newsletter!")
        }
        event.preventDefault()
    }
    
    return (
        <div className="form-container">
            <form className="form" onSubmit={handleSubmit}>
                <input 
                    type="email" 
                    placeholder="Email address"
                    className="form--input"
                    onChange={handleChange}
                    value={formData.email}
                    name="email"
                />
                <input 
                    type="password" 
                    placeholder="Password"
                    className="form--input"
                    onChange={handleChange}
                    value={formData.password}
                    name="password"
                />
                <input 
                    type="password" 
                    placeholder="Confirm password"
                    className="form--input"
                    onChange={handleChange}
                    value={formData.comfPassword}
                    name="comfPassword"
                />
                
                <div className="form--marketing">
                    <input
                        id="okayToEmail"
                        type="checkbox"
                        onChange={handleChange}
                        checked={formData.newsletter}
                        name="newsletter"                        
                    />
                    <label htmlFor="okayToEmail">I want to join the newsletter</label>
                </div>
                <button className="form--submit">
                    Sign up
                </button>
            </form>
        </div>
    )
}


// MEME GENERATOR -------------------------------------------------------------------------------

function Meme() {
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "https://hellogiggles.com/wp-content/uploads/sites/7/2017/12/25/kardashian-memes.png?resize=640%2C360&quality=82&strip=1" 
    })
    const [allMemes, setAllMemes] = React.useState([])
    
    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
    }, [])
    
    function getMemeImage() {
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        const url = allMemes[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
        
    }
    
    function handleChange(event) {
        const {name, value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }
    
    return (
        <main>
            <div className="formm">
                <input 
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                    name="topText"
                    value={meme.topText}
                    onChange={handleChange}
                />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={handleChange}
                />
                <button 
                    className="formm--button"
                    onClick={getMemeImage}
                >
                    Get a new meme image 🖼
                </button>
            </div>
            <div className="meme">
                <img src={meme.randomImage} className="meme--image" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}

// STAR WARS HERO GENERATOR---------------------------------------------------------

function StarWars() {

    const [starWarsData, setStarWarsData] = React.useState({})
    const [count, setCount] = React.useState(0)
    
    React.useEffect(function() {
        console.log("Effect ran")
        fetch("https://swapi.dev/api/people/" + count)
            .then(res => res.json())
            .then(data => setStarWarsData(data))
    }, [count])
    return (
        <div>
            <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Add</button>
            <h2>Click add to see next hero {count}</h2>
            
        </div>)
}


// Windows width counter -----------------------------------------------------

function WindowTracker() {

    const [wind, setWind] = React.useState(window.innerWidth)
    
    
    React.useEffect(() => {
        function watchWidth(){

            setWind(window.innerWidth)

    }
    window.addEventListener("resize", watchWidth)
    
        // Cleaning side Effects
        return function() {
            window.removeEventListener("resize", watchWidth)
        }
    }, [])
    
    return (
        <h1>Window width: {wind}</h1>
    )
}
