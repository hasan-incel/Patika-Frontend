// DOM elemanlarını seç
const taskInput = document.getElementById("task");
const addButton = document.getElementById("liveToastBtn");
const taskList = document.getElementById("list");

// Toast mesajlarını seç
const successToast = document.getElementById("liveToast"); // Success toast
const errorToast = document.getElementById("liveToast"); // Error toast

// Task ekleme fonksiyonu
function newElement() {
  const taskText = taskInput.value.trim();

  // Eğer input boşsa, hata mesajı göster
  if (taskText === "") {
    showToast("error");
    return;
  }

  // Yeni liste öğesi oluştur
  const li = document.createElement("li");
  li.textContent = taskText;

  // Silme butonu ekle
  const closeBtn = document.createElement("span");
  closeBtn.textContent = "×";
  closeBtn.classList.add("close");
  li.appendChild(closeBtn);

  // Yapıldı işareti ekleme işlemi
  li.addEventListener("click", () => {
    li.classList.toggle("checked");
  });

  // Silme işlemi
  closeBtn.addEventListener("click", (e) => {
    e.stopPropagation(); // Click event'in li'yi tetiklemesini engelle
    li.remove();
    saveTasksToLocalStorage(); // Silme sonrası Local Storage güncelle
  });

  // Listeye öğeyi ekle
  taskList.appendChild(li);

  // Success toast göster
  showToast("success");

  // Inputu temizle
  taskInput.value = "";

  // Local Storage'a kaydet
  saveTasksToLocalStorage();
}

// Toast gösterme fonksiyonu
function showToast(type) {
  if (type === "success") {
    successToast.classList.remove("hide");
    errorToast.classList.add("hide");
  } else {
    errorToast.classList.remove("hide");
    successToast.classList.add("hide");
  }

  // Toast mesajını kapatma
  setTimeout(() => {
    successToast.classList.add("hide");
    errorToast.classList.add("hide");
  }, 4000); // 4 saniye sonra toast kaybolacak
}

// Local Storage'a kaydetme fonksiyonu
function saveTasksToLocalStorage() {
  const tasks = [];
  const listItems = document.querySelectorAll("#list li");

  listItems.forEach((item) => {
    tasks.push({
      text: item.textContent.replace("×", "").trim(),
      completed: item.classList.contains("checked"),
    });
  });

  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Local Storage'dan verileri yükleme
function loadTasksFromLocalStorage() {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  tasks.forEach((task) => {
    const li = document.createElement("li");
    li.textContent = task.text;

    // Yapıldı işaretini kontrol et
    if (task.completed) {
      li.classList.add("checked");
    }

    // Silme butonu ekle
    const closeBtn = document.createElement("span");
    closeBtn.textContent = "×";
    closeBtn.classList.add("close");
    li.appendChild(closeBtn);

    // Yapıldı işaretini tıklanabilir hale getir
    li.addEventListener("click", () => {
      li.classList.toggle("checked");
      saveTasksToLocalStorage(); // Değişiklik sonrası Local Storage güncelle
    });

    // Silme butonunun işlevselliği
    closeBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      li.remove();
      saveTasksToLocalStorage(); // Silme sonrası Local Storage güncelle
    });

    taskList.appendChild(li);
  });
}

// Sayfa yüklendiğinde Local Storage'dan görevleri yükle
window.onload = loadTasksFromLocalStorage;

// Ekle butonuna tıklama olayını bağla
addButton.addEventListener("click", newElement);

// Enter tuşuna basıldığında da görev ekleme işlevi
taskInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    newElement();
  }
});
