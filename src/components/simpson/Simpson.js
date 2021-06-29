export default  function Simpson(props) {
    let {item} = props;

    return(
        <div>
            <h2>{item.name}  {item.surname}  age - {item.age} </h2>
            <img src={item.photo} alt=""/>
            <div>{item.info}</div>
        </div>
    );
}