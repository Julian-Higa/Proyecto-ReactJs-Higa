import './category.scss'

const Categoria = ({categoria}) =>{
    if (categoria == "lol"){
        return "League of Legends"
    }
    else if (categoria == "valorant"){
        return "Valorant"
    }
    else if (categoria == "csgo"){
        return "CaounterStrike:Global Offensive"
    }
}

export default Categoria