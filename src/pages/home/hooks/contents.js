import { useState } from "react";
const Contents = () => {
  const [categories, setCategories] = useState([
    {
      nameTR: "Yeni Ürünler",
      nameEN: "New Products",
      photoUrl: "images/category/category_newItem.jpeg",
    },
    {
      nameTR: "İndirimler",
      nameEN: "Special Offers",
      photoUrl: "images/category/category_discount.jpeg",
    },
    {
      nameTR: "Su & İçecek",
      nameEN: "Beverages",
      photoUrl: "images/category/category_waterAndDrinks.jpeg",
    },
    {
      nameTR: "Meyve & Sebze",
      nameEN: "Fruits & Veg",
      photoUrl: "images/category/category_fruitAndVegetables.jpeg",
    },
    {
      nameTR: "Fırından",
      nameEN: "Baked Goods",
      photoUrl: "images/category/category_fromOven.jpeg",
    },
    {
      nameTR: "Temel Gıda",
      nameEN: "Food",
      photoUrl: "images/category/category_primaryNutrition.jpeg",
    },
    {
      nameTR: "Atıştırmalık",
      nameEN: "Snacks",
      photoUrl: "images/category/category_snack.jpeg",
    },
    {
      nameTR: "Dondurma",
      nameEN: "Ice Cream",
      photoUrl: "images/category/category_iceCream.jpeg",
    },
    {
      nameTR: "Süt Ürünler",
      nameEN: "Milk & Dairy",
      photoUrl: "images/category/category_milk.jpeg",
    },
    {
      nameTR: "Kahvaltılık",
      nameEN: "Breakfast",
      photoUrl: "images/category/category_breakfast.jpeg",
    },
    {
      nameTR: "Yiyecek",
      nameEN: "Ready to Eat",
      photoUrl: "images/category/category_foods.jpeg",
    },
    {
      nameTR: "Fit & Form",
      nameEN: "Fit & Form",
      photoUrl: "images/category/category_fitAndForm.jpeg",
    },
    {
      nameTR: "Kişisel Bakım",
      nameEN: "Personal Care",
      photoUrl: "images/category/category_personalCare.jpeg",
    },
    {
      nameTR: "Ev Bakım",
      nameEN: "Home Care",
      photoUrl: "images/category/category_homeCare.jpeg",
    },
    {
      nameTR: "Ev & Yaşam",
      nameEN: "Home & Living",
      photoUrl: "images/category/category_homeAndLife.jpeg",
    },
    {
      nameTR: "Teknoloji",
      nameEN: "Tech",
      photoUrl: "images/category/category_tech.jpeg",
    },
    {
      nameTR: "Evcil Hayvan",
      nameEN: "Pet Food",
      photoUrl: "images/category/category_pet.jpeg",
    },
    {
      nameTR: "Bebek",
      nameEN: "Baby Care",
      photoUrl: "images/category/category_baby.jpeg",
    },
    {
      nameTR: "Cinsel Sağlık",
      nameEN: "Sex Health",
      photoUrl: "images/category/category_sexualHealth.jpeg",
    },
  ]);
  const [homeCard, setHomeCard] = useState([
    {
      titleTR: "Her siparişinize bir kampanya",
      titleEN: "Her siparişinize bir kampanya",
      contentTR:
        "Getir’de vereceğiniz her siparişe uygun bir kampanya bulabilirsiniz.",
      contentEN:
        "Getir’de vereceğiniz her siparişe uygun bir kampanya bulabilirsiniz.",
      url: "images/intro-in-minutes.svg",
    },
    {
      titleTR: "Dakikalar içinde kapınızda",
      titleEN: "Dakikalar içinde kapınızda",
      contentTR: "Getir’le siparişiniz dakikalar içinde kapınıza gelir.",
      contentEN: "Getir’le siparişiniz dakikalar içinde kapınıza gelir.",
      url: "images/intro-market-courier.svg",
    },

    {
      titleTR: "Binlerce çeşit mutluluk",
      titleEN: "Binlerce çeşit mutluluk",
      contentTR: "Getir’de binlerce çeşit arasından seçiminizi yapabilirsiniz.",
      contentEN: "Getir’de binlerce çeşit arasından seçiminizi yapabilirsiniz.",
      url: "images/intro-discount.svg",
    },
  ]);
  const [favorites, setFavorites] = useState([
    {
      nameTR: "Kuzeyden",
      nameEN: "",
      cost: "3,95",
      weight: "1,5L",
      photoUrl: "images/favorite/favorite_kuzeyden.jpeg",
    },
    {
      nameTR: "Kızılay Erzincan",
      nameEN: "",
      cost: "7,75",
      weight: "6 x 200 ml",
      photoUrl: "images/favorite/favorite_kizilay.jpeg",
    },
    {
      nameTR: "Ülker Napoliten",
      nameEN: "",
      cost: ["5,50", "4,40"],
      weight: "33 g",
      discount: true,
      photoUrl: "images/favorite/favorite_ulker.jpeg",
    },
    {
      nameTR: "Lay's Mevsim Yeşillikli",
      nameEN: "",
      cost: "8,95",
      weight: "96 g",
      photoUrl: "images/favorite/favorite_lays.jpeg",
    },
    {
      nameTR: "Kavrulmuş Siyah Ay Çekirdeği",
      nameEN: "",
      cost: "9,85",
      weight: "180 g",
      photoUrl: "images/favorite/favorite_tadim.jpeg",
    },
    {
      nameTR: "Magnum Badem",
      nameEN: "",
      cost: "11,50",
      weight: "100 ml",
      photoUrl: "images/favorite/favorite_magnum.jpeg",
    },
    {
      nameTR: "Uno Tost Ekmeği",
      nameEN: "",
      cost: "10,95",
      weight: "350 g",
      photoUrl: "images/favorite/favorite_unoBread.jpeg",
    },
    {
      nameTR: "içim %3 Yağlı Süt",
      nameEN: "",
      cost: "12,95",
      weight: "1 L",
      photoUrl: "images/favorite/favorite_icim.jpeg",
    },
    {
      nameTR: "Bahçıvan Süzme Peynir",
      nameEN: "",
      cost: "30,95",
      weight: "500 g",
      photoUrl: "images/favorite/favorite_cheese.jpeg",
    },
    {
      nameTR: "Hertane Kuru Sele Zeytin",
      nameEN: "",
      cost: "39,90",
      weight: "285 g",
      photoUrl: "images/favorite/favorite_hertane.jpeg",
    },
    {
      nameTR: "Nuh'un Ankara Spaghetti",
      nameEN: "",
      cost: "7,50",
      weight: "500 g",
      photoUrl: "images/favorite/favorite_spaghetti.jpeg",
    },
    {
      nameTR: "Colgate Optik White",
      nameEN: "",
      cost: "39,90",
      weight: "75 ml",
      photoUrl: "images/favorite/favorite_colgate.jpeg",
    },
    {
      nameTR: "Elidor Güçlü ve Parlak Şampuan",
      nameEN: "",
      cost: "37,50",
      weight: "650 ml",
      photoUrl: "images/favorite/favorite_elidor.jpeg",
    },
  ]);
  const [homeTitles, setHomeTitles] = useState({
    category: ["Kategoriler", "Categories"],
    favorite: ["Favoriler", "Favorites"],
    downloadCard: ["Getir'i indirin!", "Download Getir"],
    promotion: ["Kampanyalar", "Promotions"],
    authForm: {
      title: ["Giriş yap veya kayıt ol", "Login or register"],
      buttonText: [
        "Telefon numarası ile devam et",
        "Continue with phone number",
      ],
    },
  });
  const [downloadCardContent, setDownloadCardContent] = useState({
    contentTR: "İstediğiniz ürünleri dakikalar içinde kapınıza getirelim.",
    contentEN: "Let us deliver your order to your door in minutes.",
  });
  return { categories, homeCard, favorites, homeTitles, downloadCardContent };
};
export default Contents;
