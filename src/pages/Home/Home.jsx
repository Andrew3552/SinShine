import HeroCard from "../../components/HeroCard/HeroCard";
import {
  SunIcon,
  ArrowUpIcon,
  LightningIcon,
} from "../../components/HeroCard/icons";
import "./Home.scss";

export default function Home() {
  return (
    <section className="home-hero">
      <div className="home-hero__container">
        {/* ЛЕВАЯ КОЛОНКА */}
        <div className="home-hero__left">
          <h2 className="home-hero__kicker">Про нас</h2>
          <p className="home-hero__lead">
            Ми — провідна українська компанія з багаторічним досвідом у
            загальнобудівельних роботах та промисловому сонячному
            електропостачанні. Виконуємо повний цикл: від проєктування до здачі
            «під ключ».
          </p>
        </div>

        {/* ПРАВАЯ КОЛОНКА */}
        <aside className="home-hero__right">
          <HeroCard
            icon={<SunIcon />}
            title="Наші напрямки:"
            items={[
              "Промислова сонячна енергетика",
              "Житлова, комерційна, промислова забудова",
              "Логістичні центри, торговельні комплекси, дороги",
            ]}
            to="/equipment"
          />

          <HeroCard
            icon={<ArrowUpIcon />}
            title="Наші проєкти:"
            items={[
              "500 кВт для агрохолдингу «Украгро»",
              "Логістичний комплекс 10 000 м² (Київ)",
              "12 км дорожньої реконструкції (Полтавська обл.)",
            ]}
            to="/projects"
          />

          <HeroCard
            icon={<LightningIcon />}
            title="Ключові кейси:"
            items={[
              "Монтаж сонячної станції на 500 кВт для агрохолдингу “Украгро”",
              "Будівництво логістичного комплексу 10 000 м² (Київ)",
              " Реконструкція дорожнього полотна протяжністю 12 км (Полтавська обл.) ",
            ]}
          >
          
          </HeroCard>
        </aside>
      </div>
    </section>
  );
}
{
  /* <h3 className="home__subtitle">Ключові кейси:</h3> <ul> <li>Монтаж сонячної станції на 500 кВт для агрохолдингу “Украгро”</li> <li>Будівництво логістичного комплексу 10 000 м² (Київ)</li> <li> Реконструкція дорожнього полотна протяжністю 12 км (Полтавська обл.) </li> </ul> */
}
