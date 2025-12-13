# Express.js Tabanlı Mekan Yönetim API

Bu proje, mekanların (restoran, kafe vb.) listelenmesi, yönetilmesi ve kullanıcı yorumlarının işlenmesi amacıyla geliştirilmiş bir RESTful API servisidir. Node.js ve Express.js altyapısı kullanılarak oluşturulmuş ve MongoDB veritabanı ile entegre edilmiştir.

🔗 **Canlı Demo (Live URL):** [https://backend-odev-chi.vercel.app/](https://backend-odev-chi.vercel.app/)

---

## 🛠️ Kurulum ve Çalıştırma

Projeyi yerel makinenizde çalıştırmak için aşağıdaki adımları izleyebilirsiniz.

### Ön Koşullar
* **Node.js** (LTS sürümü önerilir)
* **MongoDB** (Yerel veya Atlas URI)

### Adımlar

1.  **Projeyi Klonlayın:**
    ```bash
    git clone [https://github.com/KULLANICI_ADINIZ/REPO_ADINIZ.git](https://github.com/KULLANICI_ADINIZ/REPO_ADINIZ.git)
    cd REPO_ADINIZ
    ```

2.  **Bağımlılıkları Yükleyin:**
    ```bash
    npm install
    # veya
    yarn install
    ```

3.  **Çevresel Değişkenleri (.env) Ayarlayın:**
    Proje kök dizininde `.env` adında bir dosya oluşturun ve aşağıdaki değişkenleri kendi bilgilerinizle doldurun:
    ```env
    PORT=3000
    MONGODB_URI=mongodb+srv://<kullanici>:<sifre>@cluster.mongodb.net/veritabani
    ```

4.  **Uygulamayı Başlatın:**
    ```bash
    npm start
    # veya geliştirme modu için (nodemon varsa)
    npm run dev
    ```

---

## 📡 API Dokümantasyonu

Uygulama aşağıdaki HTTP isteklerini desteklemektedir:

### 📍 Mekan İşlemleri (Venues)

| Metot | Uç Nokta (Endpoint) | Açıklama | Parametreler |
| :--- | :--- | :--- | :--- |
| **GET** | `/api/venues` | Yakındaki mekanları listeler | `?lat={enlem}&long={boylam}` |
| **POST** | `/api/venues` | Yeni bir mekan ekler | Body: `name`, `address`, `lat`, `long` vb. |
| **GET** | `/api/venues/:venueid` | Tek bir mekanı getirir | `venueid`: Mekan ID'si |
| **PUT** | `/api/venues/:venueid` | Mekan bilgilerini günceller | Body: Güncellenecek veriler |
| **DELETE**| `/api/venues/:venueid` | Mekanı siler | `venueid`: Mekan ID'si |

### 💬 Yorum İşlemleri (Comments)

| Metot | Uç Nokta (Endpoint) | Açıklama |
| :--- | :--- | :--- |
| **POST** | `/api/venues/:venueid/comments` | Mekana yeni yorum ekler |
| **GET** | `/api/venues/:venueid/comments/:commentid` | Tek bir yorumu getirir |
| **PUT** | `/api/venues/:venueid/comments/:commentid` | Yorumu günceller |
| **DELETE**| `/api/venues/:venueid/comments/:commentid` | Yorumu siler |

---

## 📸 Postman Test Ekran Görüntüleri

API'nin çalıştığını doğrulayan test sonuçları aşağıdadır:

### Mekan (Venue) Testleri

| İşlem | Ekran Görüntüsü |
| :--- | :--- |
| **Yakındaki Mekanları Listeleme** | ![ListByNearVenues](screenshots/ListByNearVenues.png) |
| **Mekan Ekleme** | ![AddVenue](screenshots/addVenue.png) |
| **Mekan Getirme** | ![GetVenue](screenshots/getVenue.png) |
| **Mekan Güncelleme** | ![UpdateVenue](screenshots/updateVenue.png) |
| **Mekan Silme** | ![DeleteVenue](screenshots/deleteVenue.png) |

### Yorum (Comment) Testleri

| İşlem | Ekran Görüntüsü |
| :--- | :--- |
| **Yorum Ekleme** | ![AddComment](screenshots/addComment.png) |
| **Yorum Getirme** | ![GetComment](screenshots/getComment.png) |
| **Yorum Güncelleme** | ![UpdateComment](screenshots/updateComment.png) |
| **Yorum Silme** | ![DeleteComment](screenshots/deleteComment.png) |

---
