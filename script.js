const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav");
const body = document.body;

if (burger && nav) {
  burger.addEventListener("click", () => {
    const opened = nav.classList.toggle("open");
    burger.setAttribute("aria-expanded", String(opened));
  });

  nav.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      nav.classList.remove("open");
      burger.setAttribute("aria-expanded", "false");
    }
  });
}

const reveals = document.querySelectorAll(".reveal");
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.16 }
);

reveals.forEach((element) => revealObserver.observe(element));

const parallaxItems = document.querySelectorAll(".parallax img");
const parallax = () => {
  const height = window.innerHeight;
  parallaxItems.forEach((image) => {
    const rect = image.parentElement.getBoundingClientRect();
    if (rect.bottom < 0 || rect.top > height) return;
    const progress = (rect.top - height / 2) / height;
    image.style.transform = `scale(1.08) translateY(${progress * -28}px)`;
  });
};

window.addEventListener("scroll", parallax, { passive: true });
window.addEventListener("resize", parallax);
parallax();

const menuRail = document.querySelector(".product-rail");

const escapeHtml = (value = "") =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");


const embeddedMenuItems = [
    {
        "category":  "coffee",
        "label":  "Кофе",
        "kind":  "coffee",
        "title":  "Эспрессо",
        "price":  "200",
        "image":  "assets/yandex/krasno-menu/krasno-menu-60c367c931.jpg",
        "desc":  "Классический эспрессо на зерне кофейни."
    },
    {
        "category":  "coffee",
        "label":  "Кофе",
        "kind":  "coffee",
        "title":  "Американо",
        "price":  "230",
        "image":  "assets/yandex/krasno-menu/krasno-menu-5630372326.jpg",
        "desc":  "Эспрессо и горячая вода, чистый кофейный вкус без молока."
    },
    {
        "category":  "coffee",
        "label":  "Кофе",
        "kind":  "coffee",
        "title":  "Фильтр 0.2",
        "price":  "230",
        "image":  "assets/yandex/krasno-menu/krasno-menu-a401a4eea8.jpg",
        "desc":  "Фильтр-кофе объёмом 200 мл."
    },
    {
        "category":  "coffee",
        "label":  "Кофе",
        "kind":  "coffee",
        "title":  "Фильтр 0.3",
        "price":  "260",
        "image":  "assets/yandex/krasno-menu/krasno-menu-0c609f3f5d.jpg",
        "desc":  "Фильтр-кофе объёмом 300 мл."
    },
    {
        "category":  "coffee",
        "label":  "Кофе",
        "kind":  "coffee",
        "title":  "v-60",
        "price":  "350",
        "image":  "assets/yandex/krasno-menu/krasno-menu-67e0f14cbe.jpg",
        "desc":  "Альтернативный способ заваривания для тех, кто выбирает вкус зерна."
    },
    {
        "category":  "coffee",
        "label":  "Кофе",
        "kind":  "coffee",
        "title":  "Флэт Уайт",
        "price":  "300",
        "image":  "assets/yandex/krasno-menu/krasno-menu-a392eed4ec.jpg",
        "desc":  "Более насыщенный молочный кофе на базе эспрессо."
    },
    {
        "category":  "coffee",
        "label":  "Кофе",
        "kind":  "coffee",
        "title":  "Капучино 0.2",
        "price":  "280",
        "image":  "assets/yandex/krasno-menu/krasno-menu-1b8dd00b0e.jpg",
        "desc":  "Капучино 200 мл: эспрессо и молоко."
    },
    {
        "category":  "coffee",
        "label":  "Кофе",
        "kind":  "coffee",
        "title":  "Капучино 0.3",
        "price":  "330",
        "image":  "assets/yandex/krasno-menu/krasno-menu-4bc4051428.jpg",
        "desc":  "Капучино 300 мл: эспрессо и молоко."
    },
    {
        "category":  "coffee",
        "label":  "Кофе",
        "kind":  "coffee",
        "title":  "Латте",
        "price":  "330",
        "image":  "assets/yandex/krasno-menu/krasno-menu-ca6b4e7eba.jpg",
        "desc":  "Мягкий молочный кофе."
    },
    {
        "category":  "coffee",
        "label":  "Кофе",
        "kind":  "coffee",
        "title":  "Раф",
        "price":  "370",
        "image":  "assets/yandex/krasno-menu/krasno-menu-f97acfe2a1.jpg",
        "desc":  "Сливочный кофейный напиток."
    },
    {
        "category":  "coffee",
        "label":  "Кофе",
        "kind":  "coffee",
        "title":  "Любимый напиток Щегла",
        "price":  "420",
        "image":  "assets/yandex/krasno-menu/krasno-menu-9ea28ea6d6.jpg",
        "desc":  "Фирменный напиток кофейни."
    },
    {
        "category":  "dessert",
        "label":  "Десерты",
        "kind":  "food",
        "title":  "Брауни",
        "price":  "290",
        "image":  "assets/yandex/nevsky-menu/nevsky-menu-0c35a5a8c6.jpg",
        "desc":  "Десерты из меню кофейни «Щегол»."
    },
    {
        "category":  "dessert",
        "label":  "Десерты",
        "kind":  "food",
        "title":  "Блонди",
        "price":  "220",
        "image":  "assets/yandex/nevsky-menu/nevsky-menu-dc2d2be1bf.jpg",
        "desc":  "Десерты из меню кофейни «Щегол»."
    },
    {
        "category":  "dessert",
        "label":  "Десерты",
        "kind":  "food",
        "title":  "Трюффель",
        "price":  "180",
        "image":  "assets/yandex/nevsky-menu/nevsky-menu-cca34722d8.jpg",
        "desc":  "Десерты из меню кофейни «Щегол»."
    },
    {
        "category":  "dessert",
        "label":  "Десерты",
        "kind":  "food",
        "title":  "Баноффи",
        "price":  "370",
        "image":  "assets/yandex/nevsky-gallery/nevsky-gallery-bbea8f8f25.jpg",
        "desc":  "Десерты из меню кофейни «Щегол»."
    },
    {
        "category":  "dessert",
        "label":  "Десерты",
        "kind":  "food",
        "title":  "Лимонный тарт",
        "price":  "350",
        "image":  "assets/yandex/nevsky-menu/nevsky-menu-0d91a88330.jpg",
        "desc":  "Десерты из меню кофейни «Щегол»."
    },
    {
        "category":  "dessert",
        "label":  "Десерты",
        "kind":  "food",
        "title":  "Вишневый пирог",
        "price":  "340",
        "image":  "assets/yandex/nevsky-menu/nevsky-menu-e8665c1187.jpg",
        "desc":  "Десерты из меню кофейни «Щегол»."
    },
    {
        "category":  "dessert",
        "label":  "Десерты",
        "kind":  "food",
        "title":  "Печенье с темным шоколадом и солью",
        "price":  "160",
        "image":  "assets/yandex/nevsky-menu/nevsky-menu-be840514ad.jpg",
        "desc":  "Десерты из меню кофейни «Щегол»."
    },
    {
        "category":  "dessert",
        "label":  "Десерты",
        "kind":  "food",
        "title":  "Печенье с белым шоколадом и клюквой",
        "price":  "160",
        "image":  "assets/yandex/krasno-menu/krasno-menu-aed2c80548.jpg",
        "desc":  "Десерты из меню кофейни «Щегол»."
    },
    {
        "category":  "dessert",
        "label":  "Десерты",
        "kind":  "food",
        "title":  "Канеле",
        "price":  "190",
        "image":  "assets/yandex/nevsky-menu/nevsky-menu-4ca70c41fe.jpg",
        "desc":  "Десерты из меню кофейни «Щегол»."
    },
    {
        "category":  "dessert",
        "label":  "Десерты",
        "kind":  "food",
        "title":  "Круассан",
        "price":  "130",
        "image":  "assets/yandex/nevsky-menu/nevsky-menu-0c4ca4e833.jpg",
        "desc":  "Десерты из меню кофейни «Щегол»."
    },
    {
        "category":  "dessert",
        "label":  "Десерты",
        "kind":  "food",
        "title":  "Лимонный кекс",
        "price":  "190",
        "image":  "assets/yandex/krasno-menu/krasno-menu-ec2a3fa299.jpg",
        "desc":  "Десерты из меню кофейни «Щегол»."
    },
    {
        "category":  "dessert",
        "label":  "Десерты",
        "kind":  "food",
        "title":  "Банановый хлеб",
        "price":  "190",
        "image":  "assets/yandex/nevsky-menu/nevsky-menu-a4162dfbdd.jpg",
        "desc":  "Десерты из меню кофейни «Щегол»."
    },
    {
        "category":  "dessert",
        "label":  "Десерты",
        "kind":  "food",
        "title":  "Баскский чизкейк с черникой",
        "price":  "400",
        "image":  "assets/yandex/nevsky-menu/nevsky-menu-9d8ac29234.jpg",
        "desc":  "Десерты из меню кофейни «Щегол»."
    },
    {
        "category":  "food",
        "label":  "Еда",
        "kind":  "food",
        "title":  "Сырники",
        "price":  "420",
        "image":  "assets/yandex/nevsky-gallery/nevsky-gallery-074d428384.jpg",
        "desc":  "Сырники из меню кофейни. На Красноармейской в меню указаны сырники с манго и сметаной."
    },
    {
        "category":  "food",
        "label":  "Еда",
        "kind":  "food",
        "title":  "Сэндвич с курицей",
        "price":  "350",
        "image":  "assets/yandex/nevsky-reviews/nevsky-reviews-1f69736783.jpg",
        "desc":  "Сэндвич с курицей из меню кофейни."
    },
    {
        "category":  "food",
        "label":  "Еда",
        "kind":  "food",
        "title":  "Сэндвич с тунцом",
        "price":  "350",
        "image":  "assets/yandex/nevsky-menu/nevsky-menu-ddb01e6c41.jpg",
        "desc":  "Сэндвич с тунцом из меню кофейни."
    },
    {
        "category":  "noncoffee",
        "label":  "Не кофе",
        "kind":  "coffee",
        "title":  "Какао",
        "price":  "350",
        "image":  "assets/yandex/krasno-menu/krasno-menu-bc50ca158a.jpg",
        "desc":  "Не кофе из меню кофейни «Щегол»."
    },
    {
        "category":  "noncoffee",
        "label":  "Не кофе",
        "kind":  "coffee",
        "title":  "Таро",
        "price":  "350",
        "image":  "assets/yandex/krasno-menu/krasno-menu-9a8496c2fa.jpg",
        "desc":  "Не кофе из меню кофейни «Щегол»."
    },
    {
        "category":  "noncoffee",
        "label":  "Не кофе",
        "kind":  "coffee",
        "title":  "Апельсиновый фреш",
        "price":  "380",
        "image":  "assets/yandex/krasno-menu/krasno-menu-48cff5ed8d.jpg",
        "desc":  "Не кофе из меню кофейни «Щегол»."
    },
    {
        "category":  "noncoffee",
        "label":  "Не кофе",
        "kind":  "coffee",
        "title":  "Маття",
        "price":  "370",
        "image":  "assets/yandex/krasno-menu/krasno-menu-e2a7ce952e.jpg",
        "desc":  "Не кофе из меню кофейни «Щегол»."
    },
    {
        "category":  "noncoffee",
        "label":  "Не кофе",
        "kind":  "coffee",
        "title":  "Чай",
        "price":  "300",
        "image":  "assets/yandex/krasno-menu/krasno-menu-3f2eb9f223.jpg",
        "desc":  "Не кофе из меню кофейни «Щегол»."
    },
    {
        "category":  "cold",
        "label":  "Холодные",
        "kind":  "coffee",
        "title":  "Айс-латте",
        "price":  "350",
        "image":  "assets/yandex/krasno-menu/krasno-menu-614327a368.jpg",
        "desc":  "Холодные из меню кофейни «Щегол»."
    },
    {
        "category":  "cold",
        "label":  "Холодные",
        "kind":  "coffee",
        "title":  "Айс маття",
        "price":  "370",
        "image":  "assets/yandex/krasno-menu/krasno-menu-a1f724c4d2.jpg",
        "desc":  "Холодные из меню кофейни «Щегол»."
    },
    {
        "category":  "cold",
        "label":  "Холодные",
        "kind":  "coffee",
        "title":  "Эспрессо-тоник",
        "price":  "370",
        "image":  "assets/yandex/krasno-menu/krasno-menu-f0243e5034.jpg",
        "desc":  "Холодные из меню кофейни «Щегол»."
    },
    {
        "category":  "cold",
        "label":  "Холодные",
        "kind":  "coffee",
        "title":  "Клюквенный эспрессо-тоник",
        "price":  "390",
        "image":  "assets/yandex/krasno-menu/krasno-menu-73a0fa1459.jpg",
        "desc":  "Холодные из меню кофейни «Щегол»."
    },
    {
        "category":  "cold",
        "label":  "Холодные",
        "kind":  "coffee",
        "title":  "Бамбл",
        "price":  "420",
        "image":  "assets/yandex/krasno-menu/krasno-menu-fe20a15540.jpg",
        "desc":  "Холодные из меню кофейни «Щегол»."
    },
    {
        "category":  "seasonal",
        "label":  "Сезонные",
        "kind":  "coffee",
        "title":  "Клубничный айс-латте",
        "price":  "390",
        "image":  "assets/yandex/nevsky-menu/nevsky-menu-b1af752d5c.jpg",
        "desc":  "Сезонные из меню кофейни «Щегол»."
    },
    {
        "category":  "seasonal",
        "label":  "Сезонные",
        "kind":  "coffee",
        "title":  "Жасминовая айс-матча",
        "price":  "420",
        "image":  "assets/yandex/krasno-menu/krasno-menu-6da9d141a2.jpg",
        "desc":  "Сезонные из меню кофейни «Щегол»."
    },
    {
        "category":  "seasonal",
        "label":  "Сезонные",
        "kind":  "coffee",
        "title":  "Гранатовый бамбл",
        "price":  "420",
        "image":  "assets/yandex/nevsky-menu/nevsky-menu-c50768d326.jpg",
        "desc":  "Сезонные из меню кофейни «Щегол»."
    },
    {
        "category":  "seasonal",
        "label":  "Сезонные",
        "kind":  "coffee",
        "title":  "Холодный чай груша-жасмин",
        "price":  "420",
        "image":  "assets/yandex/nevsky-menu/nevsky-menu-b3a096c9e4.jpg",
        "desc":  "Сезонные из меню кофейни «Щегол»."
    },
    {
        "category":  "seasonal",
        "label":  "Сезонные",
        "kind":  "coffee",
        "title":  "Лимонад таро-клюква",
        "price":  "390",
        "image":  "assets/yandex/nevsky-menu/nevsky-menu-7294b1b87f.jpg",
        "desc":  "Сезонные из меню кофейни «Щегол»."
    },
    {
        "category":  "seasonal",
        "label":  "Сезонные",
        "kind":  "coffee",
        "title":  "Лимонад клубника - ревень",
        "price":  "420",
        "image":  "assets/yandex/nevsky-menu/nevsky-menu-f8afce8f54.jpg",
        "desc":  "Сезонные из меню кофейни «Щегол»."
    }
]
;

const embeddedGalleryItems = [
    {
        "image":  "assets/gallery-krasno-01.jpg",
        "caption":  "6-я Красноармейская · фасад"
    },
    {
        "image":  "assets/gallery-krasno-02.jpg",
        "caption":  "6-я Красноармейская · вход"
    },
    {
        "image":  "assets/gallery-krasno-03.jpg",
        "caption":  "6-я Красноармейская · фасад"
    },
    {
        "image":  "assets/gallery-krasno-04.jpg",
        "caption":  "6-я Красноармейская · интерьер"
    },
    {
        "image":  "assets/gallery-nevsky-01.jpg",
        "caption":  "Невский · бар"
    },
    {
        "image":  "assets/gallery-nevsky-02.jpg",
        "caption":  "Невский · зал"
    },
    {
        "image":  "assets/gallery-nevsky-03.jpg",
        "caption":  "Невский · интерьер"
    },
    {
        "image":  "assets/gallery-nevsky-04.jpg",
        "caption":  "Невский · атмосфера"
    },
    {
        "image":  "assets/yandex/krasno-gallery/krasno-gallery-194cdb3d0f.jpg",
        "caption":  "Красноармейская · галерея"
    },
    {
        "image":  "assets/yandex/krasno-gallery/krasno-gallery-3b2e7b3e9b.jpg",
        "caption":  "Красноармейская · галерея"
    },
    {
        "image":  "assets/yandex/krasno-gallery/krasno-gallery-55ee48be51.jpg",
        "caption":  "Красноармейская · галерея"
    },
    {
        "image":  "assets/yandex/krasno-gallery/krasno-gallery-7ed5faa8e1.jpg",
        "caption":  "Красноармейская · галерея"
    },
    {
        "image":  "assets/yandex/krasno-gallery/krasno-gallery-ae2933a3c4.jpg",
        "caption":  "Красноармейская · галерея"
    },
    {
        "image":  "assets/yandex/krasno-reviews/krasno-reviews-089ed3f27f.jpg",
        "caption":  "Красноармейская · фото из отзыва"
    },
    {
        "image":  "assets/yandex/krasno-reviews/krasno-reviews-0da95b7b89.jpg",
        "caption":  "Красноармейская · фото из отзыва"
    },
    {
        "image":  "assets/yandex/krasno-reviews/krasno-reviews-14b3953430.jpg",
        "caption":  "Красноармейская · фото из отзыва"
    },
    {
        "image":  "assets/yandex/krasno-reviews/krasno-reviews-1565efb64c.jpg",
        "caption":  "Красноармейская · фото из отзыва"
    },
    {
        "image":  "assets/yandex/krasno-reviews/krasno-reviews-186ff82e6b.jpg",
        "caption":  "Красноармейская · фото из отзыва"
    },
    {
        "image":  "assets/yandex/krasno-reviews/krasno-reviews-19197225cf.jpg",
        "caption":  "Красноармейская · фото из отзыва"
    },
    {
        "image":  "assets/yandex/krasno-reviews/krasno-reviews-1ea81b2564.jpg",
        "caption":  "Красноармейская · фото из отзыва"
    },
    {
        "image":  "assets/yandex/krasno-reviews/krasno-reviews-231e694a1f.jpg",
        "caption":  "Красноармейская · фото из отзыва"
    },
    {
        "image":  "assets/yandex/krasno-reviews/krasno-reviews-287ff3b1ca.jpg",
        "caption":  "Красноармейская · фото из отзыва"
    },
    {
        "image":  "assets/yandex/krasno-reviews/krasno-reviews-329223da71.jpg",
        "caption":  "Красноармейская · фото из отзыва"
    },
    {
        "image":  "assets/yandex/krasno-reviews/krasno-reviews-359f1b78ac.jpg",
        "caption":  "Красноармейская · фото из отзыва"
    },
    {
        "image":  "assets/yandex/krasno-reviews/krasno-reviews-35f8dfa430.jpg",
        "caption":  "Красноармейская · фото из отзыва"
    },
    {
        "image":  "assets/yandex/krasno-reviews/krasno-reviews-3d9b58fc40.jpg",
        "caption":  "Красноармейская · фото из отзыва"
    },
    {
        "image":  "assets/yandex/krasno-reviews/krasno-reviews-4d8ee0b0ae.jpg",
        "caption":  "Красноармейская · фото из отзыва"
    },
    {
        "image":  "assets/yandex/krasno-reviews/krasno-reviews-5a0def7f6b.jpg",
        "caption":  "Красноармейская · фото из отзыва"
    },
    {
        "image":  "assets/yandex/krasno-reviews/krasno-reviews-5d73179217.jpg",
        "caption":  "Красноармейская · фото из отзыва"
    },
    {
        "image":  "assets/yandex/krasno-reviews/krasno-reviews-5f693573cb.jpg",
        "caption":  "Красноармейская · фото из отзыва"
    },
    {
        "image":  "assets/yandex/krasno-reviews/krasno-reviews-6c5f46c3e5.jpg",
        "caption":  "Красноармейская · фото из отзыва"
    },
    {
        "image":  "assets/yandex/krasno-reviews/krasno-reviews-6c802e9096.jpg",
        "caption":  "Красноармейская · фото из отзыва"
    },
    {
        "image":  "assets/yandex/krasno-reviews/krasno-reviews-6cc8a22893.jpg",
        "caption":  "Красноармейская · фото из отзыва"
    },
    {
        "image":  "assets/yandex/krasno-reviews/krasno-reviews-71fe140980.jpg",
        "caption":  "Красноармейская · фото из отзыва"
    },
    {
        "image":  "assets/yandex/krasno-reviews/krasno-reviews-75dee26941.jpg",
        "caption":  "Красноармейская · фото из отзыва"
    },
    {
        "image":  "assets/yandex/krasno-reviews/krasno-reviews-7e0eb10c5e.jpg",
        "caption":  "Красноармейская · фото из отзыва"
    },
    {
        "image":  "assets/yandex/krasno-reviews/krasno-reviews-84b4ccdf82.jpg",
        "caption":  "Красноармейская · фото из отзыва"
    },
    {
        "image":  "assets/yandex/krasno-reviews/krasno-reviews-8aafd8997c.jpg",
        "caption":  "Красноармейская · фото из отзыва"
    },
    {
        "image":  "assets/yandex/krasno-reviews/krasno-reviews-90b7c58bfa.jpg",
        "caption":  "Красноармейская · фото из отзыва"
    },
    {
        "image":  "assets/yandex/krasno-reviews/krasno-reviews-95b4076d51.jpg",
        "caption":  "Красноармейская · фото из отзыва"
    },
    {
        "image":  "assets/yandex/nevsky-gallery/nevsky-gallery-074d428384.jpg",
        "caption":  "Невский · галерея"
    },
    {
        "image":  "assets/yandex/nevsky-gallery/nevsky-gallery-bbea8f8f25.jpg",
        "caption":  "Невский · галерея"
    },
    {
        "image":  "assets/radish-1.jpg",
        "caption":  "Радищева · фото из 2ГИС"
    },
    {
        "image":  "assets/radish-2.jpg",
        "caption":  "Радищева · фото из 2ГИС"
    },
    {
        "image":  "assets/radish-3.jpg",
        "caption":  "Радищева · фото из 2ГИС"
    }
]
;

const embeddedReviewItems = [
  {
    "author": "Евгений Скоробогатов",
    "source": "2ГИС",
    "rating": "5",
    "date": "30.01.2026",
    "branch": "улица Радищева, 38",
    "photo": "assets/logo-yandex.png",
    "text": "Очень уютно и вкусно)"
  },
  {
    "author": "Городской житель",
    "source": "2ГИС",
    "rating": "5",
    "date": "28.03.2026",
    "branch": "Невский проспект",
    "photo": "assets/2gis/nevsky/nevsky-51972099.jpg",
    "text": "Очень приятное место и интересная задумка по поводу локации. Вкусные десерты ручной работы и необычные авторские напитки!"
  },
  {
    "author": "Маргарита",
    "source": "2ГИС",
    "rating": "5",
    "date": "28.02.2026",
    "branch": "6-я Красноармейская",
    "photo": "assets/facade-winter.jpg",
    "text": "Зашла с подружкой совершенно случайно, но явно вернёмся ещё не раз. Взяли матчу и бабушкин раф. Как приятное дополнение ко второму ещё шло небольшое печенье. Была очень вкусная пенка, кофе просто белиссимо...."
  },
  {
    "author": "Margarita Yermilova",
    "source": "Яндекс Карты",
    "rating": "5",
    "date": "28.02.2026",
    "branch": "6-я Красноармейская",
    "photo": "assets/yandex/krasno-reviews/krasno-reviews-35f8dfa430.jpg",
    "text": "Уже не первый раз хожу в эту кофейню, хочется отметить приятную атмосферу заведения. Десерты всегда свежие и вкусные. Рисунки на кофе это отдельный вид..."
  },
  {
    "author": "Алексей Киприянов",
    "source": "2ГИС",
    "rating": "5",
    "date": "27.04.2026",
    "branch": "Невский проспект",
    "photo": "assets/2gis/nevsky/nevsky-1.jpg",
    "text": "Шикарный фильтр кофе,и чай) \\ Вежливый и приветливый персонал,все рекомендую"
  },
  {
    "author": "Veni Vidi Vici",
    "source": "2ГИС",
    "rating": "5",
    "date": "24.10.2025",
    "branch": "Невский проспект",
    "photo": "assets/nevsky-bar-green.jpg",
    "text": "Отличное место для совмещения двух удовольствий: вкусного спешелти кофе и чтения в уютной обстановке. Бариста — профессионалы Обязательно загляните, если будете в магазине!"
  },
  {
    "author": "Тамила Дышекова",
    "source": "2ГИС",
    "rating": "5",
    "date": "22.11.2025",
    "branch": "6-я Красноармейская",
    "photo": "assets/facade-winter.jpg",
    "text": "Пришла по отзывам. Очень вкусный капучино и вишневый пирог."
  },
  {
    "author": "Дина",
    "source": "2ГИС",
    "rating": "5",
    "date": "22.03.2025",
    "branch": "Невский проспект",
    "photo": "assets/nevsky-bar-green.jpg",
    "text": "Тихо, спокойно, чудесный кофе, приятный дизайн. Всё как надо! Рекомендую однозначно."
  },
  {
    "author": "Алина Ольха",
    "source": "Яндекс Карты",
    "rating": "5",
    "date": "20.03.2026",
    "branch": "6-я Красноармейская",
    "photo": "assets/facade-winter.jpg",
    "text": "Давно эта кофейня была в списке на посещение. И вот звезды сошлись и мы оказались рядышком с Щеглом. На пробу с подругой взяли американо..."
  },
  {
    "author": "Olga Bjorn",
    "source": "2ГИС",
    "rating": "5",
    "date": "19.10.2025",
    "branch": "6-я Красноармейская",
    "photo": "assets/2gis/krasno/krasno-51972099.jpg",
    "text": "Вкусный фильтр"
  },
  {
    "author": "Николай Алексеев",
    "source": "2ГИС",
    "rating": "5",
    "date": "15.03.2026",
    "branch": "улица Радищева, 38",
    "photo": "assets/logo-yandex.png",
    "text": "Самое крутое кафе"
  },
  {
    "author": "Катя Кадышева",
    "source": "2ГИС",
    "rating": "5",
    "date": "13.10.2025",
    "branch": "улица Радищева, 38",
    "photo": "assets/logo-yandex.png",
    "text": "Хорошее место для завтрака. Уютное, вкусный кофе, бариста всегда внимательны к гостям!"
  },
  {
    "author": "Есфирь Саблина",
    "source": "2ГИС",
    "rating": "5",
    "date": "13.08.2025",
    "branch": "6-я Красноармейская",
    "photo": "assets/facade-winter.jpg",
    "text": "Заходила 13 августа примерно в 14:30. Бариста порадовал знанием меню и предложил много интересных вариантов для заказа. Он также был вежлив и приветлив. \\ \\ Помещение чистое, ухоженное. Складывается приятное ощущение от..."
  },
  {
    "author": "Ekaterina Leonova",
    "source": "2ГИС",
    "rating": "5",
    "date": "12.11.2025",
    "branch": "улица Радищева, 38",
    "photo": "assets/2gis/radish/radish-199355698.jpg",
    "text": "прихожу в Щегол, чтобы прийти в себя, если на работе оказался сложный день, всегда все чудесно, но сегодня - особенно. мне впервые жизни сделали что-то настолько красивое, спасибо огромное за старание и..."
  },
  {
    "author": "Apple User",
    "source": "2ГИС",
    "rating": "5",
    "date": "12.09.2025",
    "branch": "6-я Красноармейская",
    "photo": "assets/facade-winter.jpg",
    "text": "Бариста Даня вообще супер!!!хотя бы ради него стоит сюда прийти"
  },
  {
    "author": "Варвара Л",
    "source": "2ГИС",
    "rating": "5",
    "date": "11.06.2026",
    "branch": "улица Радищева, 38",
    "photo": "assets/logo-yandex.png",
    "text": "Любимое место в городе. Потрясные десерты и еда, приветливые ребята. Екатерина иногда добавляет спешл блюда и напитки, которые готовит сама, всегда очень вкусно!"
  },
  {
    "author": "Виктория .",
    "source": "2ГИС",
    "rating": "5",
    "date": "11.01.2026",
    "branch": "6-я Красноармейская",
    "photo": "assets/2gis/krasno/krasno-53885988.jpg",
    "text": "Зашла в «Щегол» на капучино и мандариновый чизкейк. Кофе вкусный, мягкий, чизкейк нежный с приятной цитрусовой ноткой. Очень уютная и спокойная атмосфера приятно посидеть, согреться и немного замедлиться. Осталась довольна, с радостью..."
  },
  {
    "author": "Evgeniya G",
    "source": "2ГИС",
    "rating": "5",
    "date": "11.01.2026",
    "branch": "Невский проспект",
    "photo": "assets/nevsky-bar-green.jpg",
    "text": "Всегда приходим из-за лимонного кекса, в этот раз попробовали рождественский. Вкусно как и всегда! 👍"
  },
  {
    "author": "Т Т",
    "source": "2ГИС",
    "rating": "5",
    "date": "10.06.2026",
    "branch": "улица Радищева, 38",
    "photo": "assets/2gis/radish/radish-249153991.jpg",
    "text": "Приятное место, вкусный фильтр кофе, ребятам нужно починить туалет, а также настроить батареи, так как не очень тепло в кофейне) Фильтр кофе вкусный 😋 И большой 260 рублей стоит. Рекомендую"
  },
  {
    "author": "Анастасия Дурасова",
    "source": "2ГИС",
    "rating": "5",
    "date": "09.01.2026",
    "branch": "6-я Красноармейская",
    "photo": "assets/facade-winter.jpg",
    "text": "Замечательное место, красивое и уютное. А бариста какой, нет слов!!!"
  },
  {
    "author": "Скиф Пухаев",
    "source": "2ГИС",
    "rating": "5",
    "date": "08.08.2025",
    "branch": "6-я Красноармейская",
    "photo": "assets/facade-winter.jpg",
    "text": "Очень вкусная кухня особенно классные Сырники"
  },
  {
    "author": "Скиф Пухаев",
    "source": "2ГИС",
    "rating": "5",
    "date": "08.08.2025",
    "branch": "Невский проспект",
    "photo": "assets/nevsky-bar-green.jpg",
    "text": "Очень вкусный кофе особенно хочу выразить благодарность персоналу кафе за широкий спектр ассортимента"
  },
  {
    "author": "Cherkess Traveler",
    "source": "2ГИС",
    "rating": "5",
    "date": "06.10.2025",
    "branch": "6-я Красноармейская",
    "photo": "assets/facade-winter.jpg",
    "text": "Щегол удивил! Отличный кофе и приятное обслуживание. Рекомендую 😉"
  },
  {
    "author": "Cherkess Traveler",
    "source": "2ГИС",
    "rating": "5",
    "date": "06.10.2025",
    "branch": "Невский проспект",
    "photo": "assets/nevsky-bar-green.jpg",
    "text": "Атмосферно и уютно. Сервис на высшем уровне🤝"
  },
  {
    "author": "Дмитрий Васильев",
    "source": "2ГИС",
    "rating": "5",
    "date": "06.06.2025",
    "branch": "Невский проспект",
    "photo": "assets/nevsky-bar-green.jpg",
    "text": "Хорошее место. Прихожу часто и приду ещё"
  },
  {
    "author": "Александра Бергер",
    "source": "Яндекс Карты",
    "rating": "5",
    "date": "05.01.2026",
    "branch": "6-я Красноармейская",
    "photo": "assets/facade-winter.jpg",
    "text": "иногда захожу поработать субботним утром или встретиться с подругой: минималистичная атмосфера, хороший спешлти кофе, вкусные десерты, ненавязчивая музыка. Мне нравится абсолютно все. Несмотря на..."
  },
  {
    "author": "Edo Sh",
    "source": "2ГИС",
    "rating": "5",
    "date": "03.07.2025",
    "branch": "Невский проспект",
    "photo": "assets/nevsky-bar-green.jpg",
    "text": "Вкусные десерты и хороший кофе"
  },
  {
    "author": "Александр",
    "source": "2ГИС",
    "rating": "5",
    "date": "02.08.2025",
    "branch": "6-я Красноармейская",
    "photo": "assets/2gis/krasno/krasno-51972099.jpg",
    "text": "Очень атмосферная кофейня с вкусными завтраками и красивым интерьером. Людей не очень много, сама улица тоже очень тихая"
  },
  {
    "author": "Виктория Полякова",
    "source": "Яндекс Карты",
    "rating": "5",
    "date": "02.01.2026",
    "branch": "6-я Красноармейская",
    "photo": "assets/facade-winter.jpg",
    "text": "Зашла в «Щегол» на капучино и мандариновый чизкейк. Кофе вкусный, мягкий, чизкейк нежный с приятной цитрусовой ноткой. Очень уютная и спокойная атмосфера приятно посидеть,..."
  },
  {
    "author": "Владислав Гневц",
    "source": "2ГИС",
    "rating": "5",
    "date": "01.02.2026",
    "branch": "Невский проспект",
    "photo": "assets/nevsky-bar-green.jpg",
    "text": "Хорошее кофе, хорошо интегрировано в книжный магазин, удобно что-то полистать здесь же и попить кофе, единственное настолько же насколько стулья дизайнерские и настолько же они неудобные"
  },
  {
    "author": "Арсений Яровиков",
    "source": "2ГИС",
    "rating": "4",
    "date": "27.07.2025",
    "branch": "улица Радищева, 38",
    "photo": "assets/logo-yandex.png",
    "text": "Еда, напитки, атмосфера норм. Но - при половинной посадке сэндвич готовится полчаса. Об этом не предупредили, узнал только по факту. Спросил, почему так долго - \\\\"
  },
  {
    "author": "Yulia Novikova",
    "source": "2ГИС",
    "rating": "4",
    "date": "26.09.2025",
    "branch": "улица Радищева, 38",
    "photo": "assets/2gis/radish/radish-189056320.jpg",
    "text": "Симпатичная кофейня с вкуснейшим чизкейком «Спешл». Банановый раф оказался необычным - вместо сиропа там натуральный банан, интересный получился вкус) Единственное, мне кажется, что бариста слишком усердно посвящала нас в ценности кофейни, мне..."
  },
  {
    "author": "Spirit.Of.Travel 🪂",
    "source": "2ГИС",
    "rating": "4",
    "date": "25.05.2026",
    "branch": "улица Радищева, 38",
    "photo": "assets/2gis/radish/radish-74818915.jpg",
    "text": "Хороший кофе, уютное кафе."
  },
  {
    "author": "Виктория Полякова",
    "source": "2ГИС",
    "rating": "4",
    "date": "19.12.2025",
    "branch": "6-я Красноармейская",
    "photo": "assets/facade-winter.jpg",
    "text": "Небольшой выбор"
  },
  {
    "author": "Ирина Мосина",
    "source": "2ГИС",
    "rating": "3",
    "date": "23.11.2025",
    "branch": "улица Радищева, 38",
    "photo": "assets/2gis/radish/radish-212652017.jpg",
    "text": "Интересная, спокойная кофейня с хорошим выбором кофе, так же есть цикорий, но нет декафа. Приличный выбор десертов, есть завтраки.\\ Заказала сырники с манго, они были очень хороши, симпатичная подача. Один не достаток..."
  },
  {
    "author": "Елена Анатольевна",
    "source": "2ГИС",
    "rating": "2",
    "date": "04.06.2026",
    "branch": "6-я Красноармейская",
    "photo": "assets/facade-winter.jpg",
    "text": "Очень мало место, нет обеденной террасы+не работает вотсап"
  },
  {
    "author": "Doe Deer",
    "source": "2ГИС",
    "rating": "1",
    "date": "25.10.2025",
    "branch": "улица Радищева, 38",
    "photo": "assets/logo-yandex.png",
    "text": "не рекомендую. персонал расстроил сильно. была около шести часов 17 октября. за кассой девушка стояла абсолютно непонимающая, но это ладно, рядом с ней была более опытная сотрудница, которая обслуживая меня и отвечая..."
  },
  {
    "author": "Поля Мешалкина",
    "source": "2ГИС",
    "rating": "1",
    "date": "21.10.2025",
    "branch": "улица Радищева, 38",
    "photo": "assets/logo-yandex.png",
    "text": "Местом разочарована. 29го августа была здесь во время какого-то мероприятия, играли на гитарах, было много людей. Хотела просто заказать капучино. Спросила у девушки за стойкой, какие есть сиропы, на что та закатила..."
  },
  {
    "author": "Данил Витрик",
    "source": "2ГИС",
    "rating": "1",
    "date": "12.02.2026",
    "branch": "Невский проспект",
    "photo": "assets/2gis/nevsky/nevsky-51972099.jpg",
    "text": "Стало очень плохо. Новые бариста готовят отвратительный кофе. Ужасно горчит, пить невозможно. Складывается ощущение будто во время перекура, они бычки в кофемашину выбрасывают"
  },
  {
    "author": "люблю хорошие места",
    "source": "2ГИС",
    "rating": "1",
    "date": "03.07.2025",
    "branch": "Невский проспект",
    "photo": "assets/nevsky-bar-green.jpg",
    "text": "Ситуация. Пришла в кофейню со своим напитком, хотела сделать заказ как только поговорю по телефону. Зал был пустой. Ко мне подошел бариста и с претензией высказал, что я не могу тут сидеть..."
  }
];

const buildProductCard = (item) => {
  const title = escapeHtml(item.title);
  const branch = item.branch === "nevsky" ? "Невский" : item.branch === "radish" ? "Радищева" : item.branch === "krasno" ? "Красноармейская" : "";
  const description = escapeHtml(item.desc || `${item.label} из открытого меню филиала «${branch}». Состав можно уточнить у бариста.`);
  return `
    <article class="menu-card product-card" data-category="${item.category}" data-kind="${item.kind}" data-title="${title}" data-price="${item.price}" data-image="${item.image}" data-detail="${description}" data-branch="${branch || "Щегол"}">
      <img src="${item.image}" alt="${title} из меню кофейни Щегол" loading="lazy" />
      <span>${escapeHtml(item.label)}${branch ? ` · ${branch}` : ""}</span>
      <h3>${title}</h3>
      <p>${description}</p>
      <b>${escapeHtml(item.price)} ₽</b>
    </article>
  `;
};

const loadFullMenu = async () => {
  if (!menuRail) return;
  try {
    const items = embeddedMenuItems;
    const html = items
      .map(buildProductCard)
      .join("");
    menuRail.innerHTML = html;
  } catch (error) {
    console.warn("Не удалось загрузить полное меню", error);
  }
};

loadFullMenu();

const galleryTrack = document.querySelector(".gallery-track");
const reviewTrack = document.querySelector(".review-track");

const loadGalleryItems = async () => {
  if (!galleryTrack) return;
  try {
    const items = embeddedGalleryItems;
    const existing = new Set([...galleryTrack.querySelectorAll(".gallery-item")].map((item) => item.dataset.full));
    const html = items
      .filter((item) => !existing.has(item.image))
      .map(
        (item) => `
          <button class="gallery-item" type="button" data-full="${item.image}" data-caption="${escapeHtml(item.caption)}">
            <img src="${item.image}" alt="${escapeHtml(item.caption)}" loading="lazy" />
            <span>${escapeHtml(item.caption)}</span>
          </button>
        `
      )
      .join("");
    galleryTrack.insertAdjacentHTML("beforeend", html);
  } catch (error) {
    console.warn("Не удалось загрузить фото", error);
  }
};

const loadReviewItems = async () => {
  if (!reviewTrack) return;
  try {
    const reviews = embeddedReviewItems;
    const html = reviews
      .map((review) => {
        const hasPhoto = /^assets\/(2gis\/|yandex\/.*-reviews\/)/.test(review.photo || "");
        return `
          <article class="review-card${hasPhoto ? "" : " no-photo"}" tabindex="0" data-author="${escapeHtml(review.author)}" data-source="${escapeHtml(review.source)}" data-rating="${escapeHtml(review.rating)}" data-date="${escapeHtml(review.date)}" data-branch="${escapeHtml(review.branch)}" data-photo="${hasPhoto ? review.photo : ""}" data-review="${escapeHtml(review.text)}">
            ${hasPhoto ? `<img class="review-card-photo" src="${review.photo}" alt="Фото к отзыву: ${escapeHtml(review.branch)}" loading="lazy" />` : ""}
            <span>${escapeHtml(review.source)} · ${escapeHtml(review.branch)}</span>
            <b>${escapeHtml(review.rating)}</b>
            <strong>${escapeHtml(review.author)}</strong>
            <p>${escapeHtml(review.text)}</p>
            <small>${escapeHtml(review.date)}</small>
          </article>
        `;
      })
      .join("");
    reviewTrack.innerHTML = html;
  } catch (error) {
    console.warn("Не удалось загрузить отзывы", error);
  }
};

loadGalleryItems();
loadReviewItems();

const filters = document.querySelectorAll(".filter");

filters.forEach((filter) => {
  filter.addEventListener("click", () => {
    const category = filter.dataset.filter;
    filters.forEach((item) => item.classList.toggle("active", item === filter));
    document.querySelectorAll(".menu-card").forEach((card) => {
      const visible = category === "all" || card.dataset.category === category;
      card.classList.toggle("is-hidden", !visible);
    });
  });
});

const scrollByCard = (track, direction) => {
  const first = track.querySelector(":scope > *");
  const amount = first ? first.getBoundingClientRect().width + 16 : 360;
  track.scrollBy({ left: amount * direction, behavior: "smooth" });
};

const setupCarousel = (trackSelector, prevSelector, nextSelector, intervalMs) => {
  const track = document.querySelector(trackSelector);
  const prev = document.querySelector(prevSelector);
  const next = document.querySelector(nextSelector);
  if (!track) return;

  let timer = window.setInterval(() => {
    const nearEnd = track.scrollLeft + track.clientWidth >= track.scrollWidth - 30;
    track.scrollTo({ left: nearEnd ? 0 : track.scrollLeft + track.clientWidth * 0.82, behavior: "smooth" });
  }, intervalMs);

  const restart = () => {
    window.clearInterval(timer);
    timer = window.setInterval(() => {
      const nearEnd = track.scrollLeft + track.clientWidth >= track.scrollWidth - 30;
      track.scrollTo({ left: nearEnd ? 0 : track.scrollLeft + track.clientWidth * 0.82, behavior: "smooth" });
    }, intervalMs);
  };

  prev?.addEventListener("click", () => {
    scrollByCard(track, -1);
    restart();
  });
  next?.addEventListener("click", () => {
    scrollByCard(track, 1);
    restart();
  });
  track.addEventListener("pointerdown", restart);
};

setupCarousel(".gallery-track", "[data-gallery-prev]", "[data-gallery-next]", 4200);
setupCarousel(".review-track", "[data-review-prev]", "[data-review-next]", 5200);

const imageModal = document.querySelector("#imageModal");
const imageModalImg = imageModal?.querySelector("img");
const imageModalCaption = imageModal?.querySelector("p");

document.addEventListener("click", (event) => {
  const item = event.target.closest(".gallery-item");
  if (item) {
    if (!imageModal || !imageModalImg || !imageModalCaption) return;
    imageModalImg.src = item.dataset.full;
    imageModalImg.alt = item.dataset.caption || "Фото кофейни Щегол";
    imageModalCaption.textContent = item.dataset.caption || "";
    openModal(imageModal);
  }
});

const textModal = document.querySelector("#textModal");
const textTitle = textModal?.querySelector("h2");
const textBody = textModal?.querySelector(".modal-body");
const reviewModal = document.querySelector("#reviewModal");
const reviewModalSource = reviewModal?.querySelector(".review-expanded-copy span");
const reviewModalTitle = reviewModal?.querySelector(".review-expanded-copy h2");
const reviewModalAuthor = reviewModal?.querySelector(".review-expanded-copy strong");
const reviewModalText = reviewModal?.querySelector(".review-expanded-copy p");
const reviewModalMeta = reviewModal?.querySelector(".review-expanded-copy small");
const reviewModalImage = reviewModal?.querySelector("img");

const legalText = {
  privacy: {
    title: "Политика конфиденциальности",
    body: [
      "Настоящий раздел подготовлен как базовая заготовка для будущего официального сайта кофейни «Щегол». Перед публикацией текст нужно проверить и адаптировать под юридическое лицо владельца.",
      "Сайт может собирать технические данные браузера, данные о посещении страниц и информацию, которую пользователь добровольно передаёт через формы, если такие формы будут добавлены.",
      "Данные используются для связи с гостем, обработки обращений, улучшения работы сайта и выполнения требований законодательства РФ.",
      "Пользователь может запросить уточнение, блокирование или удаление персональных данных по контактам, указанным на сайте."
    ]
  },
  personal: {
    title: "Согласие на обработку персональных данных",
    body: [
      "Нажимая кнопку отправки формы на будущем сайте, пользователь сможет подтвердить согласие на обработку персональных данных.",
      "К персональным данным могут относиться имя, телефон, электронная почта, текст сообщения и иные данные, добровольно переданные пользователем.",
      "Цель обработки: обратная связь, бронирование, ответы на вопросы, информирование о работе кофейни и выполнение требований законодательства РФ.",
      "Согласие может быть отозвано пользователем через обращение по контактам, указанным на сайте."
    ]
  },
  terms: {
    title: "Пользовательское соглашение",
    body: [
      "Этот сайт является демонстрационным концептом и не является официальным сайтом кофейни «Щегол» до подтверждения владельцем.",
      "Информация о меню, ценах, режиме работы и адресах взята из открытых источников и требует финальной проверки перед публикацией.",
      "Материалы сайта нельзя использовать как публичную оферту. Актуальные условия обслуживания, цены и наличие позиций уточняются в кофейне.",
      "Фотографии и тексты должны использоваться только после подтверждения прав владельцем или правообладателями."
    ]
  }
};

document.querySelectorAll("[data-legal]").forEach((button) => {
  button.addEventListener("click", () => {
    const content = legalText[button.dataset.legal];
    if (!content || !textModal || !textTitle || !textBody) return;
    textTitle.textContent = content.title;
    textBody.innerHTML = content.body.map((paragraph) => `<p>${paragraph}</p>`).join("");
    openModal(textModal);
  });
});

document.addEventListener("click", (event) => {
  const card = event.target.closest(".product-card");
  if (card) {
    if (!textModal || !textTitle || !textBody) return;
    const title = card.dataset.title || card.querySelector("h3")?.textContent || "Позиция меню";
    const basePrice = Number(card.dataset.price || 0);
    const price = card.querySelector("b")?.textContent || "уточнить";
    const category = card.querySelector("span")?.textContent || "Меню";
    const detail = card.dataset.detail || card.querySelector("p")?.textContent || "";
    const image = card.dataset.image || card.querySelector("img")?.getAttribute("src") || "";
    const isCoffee = card.dataset.kind === "coffee";
    textTitle.textContent = title;
    textBody.innerHTML = `
      <div class="product-modal">
        ${image ? `<img class="product-modal-image" src="${image}" alt="${title}" />` : ""}
        <p><strong>${category}</strong></p>
        <p>${detail}</p>
        ${
          isCoffee
            ? `
              <div class="option-grid" data-option-root data-base-price="${basePrice || 0}">
                <fieldset>
                  <legend>Объём</legend>
                  <label><input type="radio" name="volume" value="0" checked /> 200 мл</label>
                  <label><input type="radio" name="volume" value="50" /> 300 мл</label>
                  <label><input type="radio" name="volume" value="90" /> 400 мл</label>
                </fieldset>
                <fieldset>
                  <legend>Молоко</legend>
                  <label><input type="radio" name="milk" value="0" checked /> цельное</label>
                  <label><input type="radio" name="milk" value="0" /> безлактозное</label>
                  <label><input type="radio" name="milk" value="80" /> овсяное</label>
                  <label><input type="radio" name="milk" value="80" /> кокосовое</label>
                  <label><input type="radio" name="milk" value="80" /> банановое</label>
                </fieldset>
                <fieldset>
                  <legend>Добавки</legend>
                  <label><input type="checkbox" name="extra" value="50" /> ванильный сироп</label>
                  <label><input type="checkbox" name="extra" value="50" /> карамельный сироп</label>
                  <label><input type="checkbox" name="extra" value="50" /> ореховый сироп</label>
                  <label><input type="checkbox" name="extra" value="90" /> ещё один эспрессо</label>
                  <label><input type="checkbox" name="extra" value="0" /> сахар</label>
                  <label><input type="checkbox" name="extra" value="0" /> без сахара</label>
                </fieldset>
              </div>
              <p class="modal-price"><strong>Итого:</strong> <span data-live-price>${basePrice || price}</span> ₽</p>
            `
            : `<p class="modal-price"><strong>Цена:</strong> ${price}</p>`
        }
      </div>
    `;
    const optionRoot = textBody.querySelector("[data-option-root]");
    const livePrice = textBody.querySelector("[data-live-price]");
    const updatePrice = () => {
      if (!optionRoot || !livePrice) return;
      const optionValues = [...optionRoot.querySelectorAll("input:checked")].reduce((sum, input) => sum + Number(input.value || 0), 0);
      livePrice.textContent = String(Number(optionRoot.dataset.basePrice || 0) + optionValues);
    };
    optionRoot?.addEventListener("change", updatePrice);
    updatePrice();
    openModal(textModal);
  }
});

document.addEventListener("click", (event) => {
  const card = event.target.closest(".review-card");
  if (card) openReview(card);
});

document.addEventListener("keydown", (event) => {
  const card = event.target.closest?.(".review-card");
  if (card && (event.key === "Enter" || event.key === " ")) {
    event.preventDefault();
    openReview(card);
  }
});

const openReview = (card) => {
  if (!reviewModal || !reviewModalSource || !reviewModalTitle || !reviewModalAuthor || !reviewModalText || !reviewModalMeta || !reviewModalImage) return;
  reviewModalSource.textContent = `${card.dataset.source || "Источник"} · ${card.dataset.branch || "Щегол"}`;
  reviewModalTitle.textContent = `Оценка ${card.dataset.rating || card.querySelector("b")?.textContent || ""}`;
  reviewModalAuthor.textContent = card.dataset.author || "Гость";
  reviewModalText.textContent = card.dataset.review || card.textContent.trim();
  reviewModalMeta.textContent = card.dataset.date || "";
  if (card.dataset.photo) {
    reviewModalImage.hidden = false;
    reviewModalImage.src = card.dataset.photo;
    reviewModalImage.alt = `Фото к отзыву: ${card.dataset.branch || "Щегол"}`;
  } else {
    reviewModalImage.hidden = true;
    reviewModalImage.removeAttribute("src");
    reviewModalImage.alt = "";
  }
  openModal(reviewModal);
};

const openModal = (modal) => {
  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  body.classList.add("modal-open");
};

const closeModals = () => {
  document.querySelectorAll(".modal.is-open").forEach((modal) => {
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
  });
  body.classList.remove("modal-open");
};

document.querySelectorAll("[data-close-modal]").forEach((button) => button.addEventListener("click", closeModals));
window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeModals();
});

const mapSources = {
  all:
    "https://yandex.ru/map-widget/v1/?text=%D0%A9%D0%B5%D0%B3%D0%BE%D0%BB%20%D0%BA%D0%BE%D1%84%D0%B5%D0%B9%D0%BD%D1%8F%20%D0%A1%D0%B0%D0%BD%D0%BA%D1%82-%D0%9F%D0%B5%D1%82%D0%B5%D1%80%D0%B1%D1%83%D1%80%D0%B3&z=12",
  krasno:
    "https://yandex.ru/map-widget/v1/?text=%D0%A9%D0%B5%D0%B3%D0%BE%D0%BB%206-%D1%8F%20%D0%9A%D1%80%D0%B0%D1%81%D0%BD%D0%BE%D0%B0%D1%80%D0%BC%D0%B5%D0%B9%D1%81%D0%BA%D0%B0%D1%8F%201%20%D0%A1%D0%9F%D0%B1&z=16",
  nevsky:
    "https://yandex.ru/map-widget/v1/?text=%D0%A9%D0%B5%D0%B3%D0%BE%D0%BB%20%D0%9D%D0%B5%D0%B2%D1%81%D0%BA%D0%B8%D0%B9%2046%202%20%D1%8D%D1%82%D0%B0%D0%B6%20%D0%A1%D0%9F%D0%B1&z=16"
  ,
  radish:
    "https://yandex.ru/map-widget/v1/?text=%D0%A9%D0%B5%D0%B3%D0%BE%D0%BB%20%D0%A0%D0%B0%D0%B4%D0%B8%D1%89%D0%B5%D0%B2%D0%B0%2038%20%D0%A1%D0%9F%D0%B1&z=16"
};

const mapFrame = document.querySelector(".map-frame iframe");
document.querySelectorAll(".map-tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".map-tab").forEach((item) => item.classList.toggle("active", item === tab));
    if (mapFrame && mapSources[tab.dataset.map]) {
      mapFrame.src = mapSources[tab.dataset.map];
    }
  });
});

document.querySelectorAll("[data-map-target]").forEach((card) => {
  card.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) return;
    const target = card.dataset.mapTarget;
    const tab = document.querySelector(`.map-tab[data-map="${target}"]`);
    tab?.click();
    document.querySelector("#contacts")?.scrollIntoView({ behavior: "smooth" });
  });
});

const tgWidget = document.querySelector("[data-tg-widget]");
const tgPanel = document.querySelector("[data-tg-panel]");
const tgToggle = document.querySelector("[data-tg-toggle]");
const tgClose = document.querySelector("[data-tg-close]");
const tgAnswer = document.querySelector("[data-tg-answer]");

const tgReplies = {
  menu: "В Telegram-боте можно открыть меню по категориям: кофе, десерты, еда, сезонное, холодные напитки и не кофе.",
  order: "Для предзаказа бот предложит выбрать филиал, позицию, параметры напитка и время самовывоза.",
  branches: "В разделе филиалов есть адреса, режим работы и быстрые ссылки на Яндекс Карты и 2ГИС.",
  loyalty: "Карта гостя показывает прогресс: копите напитки и получайте каждый 8-й кофе в подарок.",
};

const setTgWidgetOpen = (isOpen) => {
  if (!tgWidget || !tgPanel || !tgToggle) return;
  tgWidget.classList.toggle("is-open", isOpen);
  tgPanel.setAttribute("aria-hidden", String(!isOpen));
  tgToggle.setAttribute("aria-expanded", String(isOpen));
};

tgToggle?.addEventListener("click", () => {
  setTgWidgetOpen(!tgWidget?.classList.contains("is-open"));
});

tgClose?.addEventListener("click", () => setTgWidgetOpen(false));

document.querySelectorAll("[data-tg-reply]").forEach((button) => {
  button.addEventListener("click", () => {
    const reply = tgReplies[button.dataset.tgReply];
    if (tgAnswer && reply) tgAnswer.textContent = reply;
  });
});

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") setTgWidgetOpen(false);
});


