export default  function Simpson(props) {

    // let {item} = props;
    // let {name, surname, age, photo, info} = item;
    //две закоменченные строчки заменяем на
    // let {item:{name, surname, age, photo, info}} = props;
    //тем самым еще сокращая код

    let {item:{name, surname, age, photo, info}} = props;

    return(
        <div>
            <h2>{name}  {surname}  age - {age} </h2>
            <img src={photo} alt=""/>
            <div>{info}</div>
        </div>
    );
}