import React from "react";
import FeatureItem from "./components/FeatureItem/FeatureItem";
import style from "./FeatureList.module.scss"

const FeatureList = () => {
    const featureProps = [
        {
            name: "daxak",
            text: "You wanna make an omelet, you gotta break some eggs.",
            image: "https://ps.w.org/tomparisde-twitchtv-widget/assets/icon-256x256.png",
            link: "twitch.tv/dota2mc_ru"
        },
        {
            name: "dota2mc_ru",
            text: "Охотимся за  рэмпейджами и транслируем турниры.",
            image: "https://ps.w.org/tomparisde-twitchtv-widget/assets/icon-256x256.png",
            link: "twitch.tv/dota2mc_ru"
        },
    ]

    const featureList = featureProps.map(item => <FeatureItem key={item.name} props = {item}/>);
    return(
        <div className={style.featureList}>
            {featureList}
        </div>
    )
}

export default FeatureList;
