// HOC Function
export function configureButton(Component) {
    return (props) => {
        return <div>
            <h1>This is HOC</h1>
            <Component {...props}>Click me</Component>
        </div>
    }
}