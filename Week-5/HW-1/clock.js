// Sayfa yüklendiğinde kullanıcıdan isim al
window.onload = function () {
  let userName = prompt("Sayfa adınız nedir?");

  // Eğer kullanıcı bir isim girdiyse, ismi sayfada göster
  if (userName) {
    document.getElementById("myName").textContent = userName;
  } else {
    // Eğer kullanıcı boş bir isim girdiyse, "Ziyaretçi" olarak göster
    document.getElementById("myName").textContent = "Ziyaretçi";
  }

  // Saat ve tarih bilgisini göstermek için fonksiyon
  function showTime() {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const day = date.toLocaleString("tr-TR", { weekday: "long" }); // Türkçe hafta günü
    const month = date.toLocaleString("tr-TR", { month: "long" }); // Türkçe ay
    const dayOfMonth = date.getDate();
    const year = date.getFullYear();

    // Saat ve tarihi ekrana yazdır
    const timeString = `${hours}:${minutes < 10 ? "0" + minutes : minutes}:${
      seconds < 10 ? "0" + seconds : seconds
    }`;
    const fullDate = `${day}, ${dayOfMonth} ${month} ${year}`;

    // Saati ve tarihi sayfada göstermek
    document.getElementById(
      "myClock"
    ).innerHTML = `${timeString}<br>${fullDate}`;

    // Her saniye saati güncelle
    setTimeout(showTime, 1000);
  }

  // Sayfa yüklendikten sonra saati göster
  showTime();
};
