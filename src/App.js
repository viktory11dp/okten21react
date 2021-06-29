import './App.css';
import Simpson from "./components/simpson/Simpson";

let simpsons = [
    {name: 'Bart', surname: 'Simpson', age: 10 ,info: '10-летний сын Гомера и Мардж, старший ребёнок в семье. Любит кататься на скейте, читать комиксы. Является источником проблем для окружающих. Как и многие другие персонажи шоу, Барт — левша', photo:'https://upload.wikimedia.org/wikipedia/ru/2/29/Bart_Simpson.gif'},
    {name: 'Homer', surname: 'Simpson', age: 40,info: 'Глава семейства Симпсонов. Гомер необразован, но вовсе не глуп: его мозг составляет, как видно из сюжетных событий, достаточно красивые и сложные цепочки различных масштабов, и в принципе он способен к серьезной мысленной работе, другое дело, что он этим целенаправленно никогда не занимается. Работает инспектором по безопасности на Спрингфилдской атомной электростанции. ', photo:'https://upload.wikimedia.org/wikipedia/ru/b/bd/Homer_Simpson.png'},
    {name: 'Marge', surname: 'Simpson', age: 38 ,info: 'жена Гомера. Интеллигентная и утончённая натура, однако она вынуждена вписываться в образ обычной домохозяйки. Носит очень высокую прическу, чтобы казаться выше. Девичья фамилия — Бувье (это фамилия Жаклин Кеннеди). Мечтала стать журналистом. Служила в полиции. Художница-любитель.', photo:'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'},
    {name: 'Lisa', surname: 'Simpson', age: 9,info: ' Лиза — чрезмерно интеллектуальная девочка, с IQ равным 159, взрослыми манерами и восприятием. Любит джаз, регулярно играет на саксофоне, в поисках себя стала буддисткой и вегетарианкой.', photo:'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'},
    {name: 'Maggie', surname: 'Simpson', age: 1,info: 'годовалая дочь Гомера и Мардж, младший ребёнок в семье. Всегда ползает в «мешочке», поэтому не умеет ходить, во рту держит свой талисман — пустышку. Умеет стрелять из огнестрельного оружия.', photo:'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'},

]
function App() {
    return (
        <div>
            <Simpson/>

            {/*{*/}
            {/*    simpsons.map(value =>*/}
            {/*        <div>*/}
            {/*            <h2>{value.name} {value.surname} age - {value.age}</h2>*/}
            {/*            <img src={value.photo} alt=""/>*/}
            {/*            <div>{value.info}</div>*/}

            {/*        </div>)*/}
            {/*}*/}

        </div>
    );
}

export default App;
