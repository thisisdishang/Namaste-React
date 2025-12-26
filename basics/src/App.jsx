/*
First component should return "Namaste React!"
Component => Encapsulation of HTML, CSS and Behavior
*/
function Greeting() {
    return <h1>Namaste React!</h1>
}

function Footer() {
    return <h1>This is the end.</h1>
}

function App() {
    return <>
        <Greeting />
        <Footer />
    </>
}

// export the component
// default export
export default App;