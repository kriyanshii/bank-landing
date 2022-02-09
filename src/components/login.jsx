
function login() {
  return (
    <div className="container">
        <form>
        <h1 class="login"><b>Login</b></h1>
        <div className="details">
        <label for="username">Enter your name:</label><br/>
        <input type="text" name="username" class="username" placeholder="Type your username"></input><br/><br/>
        </div>
        </form>
    </div>
  )
}

export default login
