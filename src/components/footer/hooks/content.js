import { useState } from "react";
const Contents = () => {
  const [titles, setTitles] = useState([
    { title: ["Getir'i indirin!", "Download Getir!"] },
    ["Getir'i keşfedin", "Discover Getir"],
    ["Yardıma mı ihtiyacınız var?", "Need help?"],
    ["İş Ortağımız Olun", "Become Our Business Partner"],
  ]);
  const exploreLinks = [
    { nameTR: "Hakkımızda", nameEN: "About us", url: "" },
    { nameTR: "Kariyer", nameEN: "Careers", url: "" },
    { nameTR: "Teknoloji Kariyerleri", nameEN: "Technology Careers", url: "" },
    { nameTR: "İletişim", nameEN: "Contact us", url: "" },
    { nameTR: "COVID-19 Duyuru", nameEN: "COVID-19 Announcement", url: "" },
    {
      nameTR: "Sosyal Sorumluluk Projeleri",
      nameEN: "Social Responsibility Projects",
      url: "",
    },
  ];
  const helpLinks = [
    { nameTR: "Sıkça Sorulan Sorular", nameEN: "FAQ", url: "" },
    {
      nameTR: "Kişisel Verilerin Korunması",
      nameEN: "Protecting Private Information",
      url: "",
    },
    { nameTR: "Gizlilik Politikası", nameEN: "Privacy Policy", url: "" },
    { nameTR: "Kullanım Koşulları", nameEN: "Terms & Conditions", url: "" },
    { nameTR: "Çerez Politikası", nameEN: "Cookie Policy", url: "" },
  ];
  const partnerLinks = [
    { nameTR: "Bayimiz Olun", nameEN: "Becone a Franchisee", url: "" },
    { nameTR: "Deponuzu Kiralayın", nameEN: "Rent Your Warehouse", url: "" },
    {
      nameTR: "GetirYemek Restoranı Olun",
      nameEN: "Become a GetirFood Restaurant",
      url: "",
    },
    {
      nameTR: "GetirÇarşı İşletmesi Olun",
      nameEN: "Become a GetirLocals Business",
      url: "",
    },
  ];
  return { exploreLinks, helpLinks, partnerLinks, titles };
};
export default Contents;
