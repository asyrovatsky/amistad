import Test from "./components/test.jsx";

class Main extends React.Component {
  render(){
    return (
    	<Test />
    )
  }
}

let documentReady = () => {
	ReactDOM.render(
		<Main />, document.getElementById('react')
		)
}

document.addEventListener("DOMContentLoaded", documentReady);
