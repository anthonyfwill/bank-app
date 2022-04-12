function Form(props){
  console.log(props.customizeText);
  return (
    <div>
      {props.customizeUsername &&
        <p>Update username:
          <form onSubmit={props.changeUser}>
            <input type="text" name="user" />
            <button type="submit">Confirm</button>
          </form>
        </p>
      }

      {props.customizeBackgroundColor &&
        <p>Update background color:
          <form onSubmit={props.changeColorBackground}>
            <input type="text" name="backgroundColor" />
            <button type="submit">Confirm</button>
          </form>
        </p>
      }

      {props.customizeText &&
        <p>Update text color:
          <form onSubmit={props.changeTextColor}>
            <input type="text" name="textColor" />
            <button type="submit">Confirm</button>
          </form>
        </p>
      }
    </div>
  );
}

export default Form;