import './Simpson.css' //привязали css, import ctrl+пробел

export default  function Simpson({item:{name, surname, age, photo, info}}) {

    // let {item} = props;
    // let {name, surname, age, photo, info} = item;
    //две закоменченные строчки заменяем на
    // let {item:{name, surname, age, photo, info}} = props;
    //тем самым еще сокращая код


    //переносим єту часть {item:{name, surname, age, photo, info}} в первую строку вместо props
    //let {item:{name, surname, age, photo, info}} = props;
    let c1 = 'target';
    let c2 =  'point';
    let clsList = [c1,c2]

    return(
        <div className={clsList.join(' ')}>
            {/*<div className={c1 + ' ' + c2}> можно сделать так, только убрать переменную let clsList = [c1,c2]*/}
            <h2>{name}  {surname}  age - {age} </h2>
            <img src={photo} alt=""/>
            <div>{info}</div>
        </div>
    );
}