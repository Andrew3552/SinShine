import React from "react";
import HeroCard from "../../components/HeroCard/HeroCard";
import "./SunEnergy.scss";

function SunEnergy() {
  return (
    <section className="sun-energy">
      <div className="sun-energy__container">
        <h2 className="sun-energy__title">Cонячні електростанції «під ключ»</h2>
        <p className="sun-energy__intro">
          ТОВ «АКВА-СТРОЙ» спеціалізується на будівництві сонячних домашніх та комерційних СЕС.
        </p>

        {/* две колонки как на макете */}
        <div className="sun-energy__two">
          <HeroCard
            className="sun-card"
            title="Послуги:"
            items={[
              "Встановлення сонячних електростанцій",
              "Підключення до мережі",
              "Післягарантійне обслуговування",
              "Супровід документів, дозвільна підтримка",
              "Післягарантійне обслуговування, моніторинг",
            ]}
          />

          <HeroCard
            className="sun-card"
            title="Переваги:"
            items={[
              "Зниження витрат на електроенергію до 70%",
              "Екологічно чиста енергія — дбаємо про майбутнє",
              "Гарантія 25 років на фотоелементи, 5 років на монтаж",
              "Прозорість — щомісячні звіти продуктивності",
            ]}
          />
        </div>

        <div className="sun-energy__cases">
          <HeroCard
            className="sun-card"
            title="Кейси:"
            items={[
              "СЕС 1 МВт у Запорізькій обл. — окуплюваність 4 роки",
              "СЕС 300 кВт для фабрики виробництва харчових продуктів",
            ]}
          />
        </div>

        <div className="sun-energy__cta">
          <div className="sun-energy__cta-kicker">Заклик:</div>
          <p>
            Хочете знизити витрати і отримати надприбутковий інвестиційний проєкт?
            <br /> Замовте проєктування СЕС!
          </p>
        </div>
      </div>
    </section>
  );
}

export default SunEnergy;
