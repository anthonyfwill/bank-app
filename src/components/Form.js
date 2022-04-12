function Form(props){
  return (
    <div>
        <p>Update username:</p>
          <form onSubmit={props.changeUser}>
            <input type="text" name="user" />
            <button type="submit">Confirm</button>
          </form>

        <p>Update background color:</p>
          <form onSubmit={props.changeColorBackground}>
            <input type="text" name="backgroundColor" />
            <button type="submit">Confirm</button>
          </form>

        <p>Update text color:</p>
          <form onSubmit={props.changeTextColor}>
            <input type="text" name="textColor" />
            <button type="submit">Confirm</button>
          </form>
    </div>
  );
}

export default Form;