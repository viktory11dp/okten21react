export default  function Simpson(props) {
    console.log(props);
    console.log(props.item.name);
    console.log(props.item.surname);
    return(
        <div>
            <h2>{props.item.name}  {props.item.surname}  age - {props.item.age} </h2>
            <img src={props.item.photo} alt=""/>
            <div>{props.item.info}</div>
        </div>
    );
}