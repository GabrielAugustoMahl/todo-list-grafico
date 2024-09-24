import './styles.css'
import Raposa from "./raposa.jpeg"

const Sobre = () => {
    return(
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <img src={Raposa} />
            <h1>Gabriel Augusto Mahl</h1>
            <h2>Q.A e Suporte</h2>
            <h2>Biografia:</h2>
            <p> Jovem entusiasta de tecnologia e empreendedorismo. Nascido e criado em São Paulo, desde pequeno mostrou interesse por computadores e programação. 
            <br/>Aos 15 anos, começou a estudar desenvolvimento de software por conta própria, criando pequenos projetos para amigos e familiares. 
            <br/>Aos 18 anos, João ingressou em uma faculdade de Ciências da Computação, onde rapidamente se destacou por suas habilidades técnicas e capacidade de liderança. 
            <br/>Paralelamente aos estudos, ele fundou uma startup com colegas de classe, focada em soluções de tecnologia para pequenos negócios.
            <br/>A empresa, que começou como um projeto universitário, cresceu e atraiu o interesse de investidores locais. (Vlw Gepeto)</p>
            <h3>https://github.com/GabrielAugustoMahl</h3>
        </div>
    )
}

export default Sobre;   