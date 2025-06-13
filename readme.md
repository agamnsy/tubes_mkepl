# Aplikasi Registrasi dan Login Electron Sederhana

Aplikasi desktop sederhana ini dibangun menggunakan framework Electron, menyediakan fungsionalitas dasar untuk registrasi pengguna baru dan login. Untuk tujuan demonstrasi dan kesederhanaan, data pengguna disimpan secara lokal dalam format file JSON.

## Fitur

**Registrasi Pengguna**: Memungkinkan pengguna untuk membuat akun baru dengan menyediakan username dan password yang memenuhi kriteria keamanan tertentu.

**Login Pengguna**: Memungkinkan pengguna yang sudah terdaftar untuk masuk ke aplikasi menggunakan kredensial mereka.

**Validasi Keamanan Input**: Username dan password divalidasi terhadap serangkaian aturan keamanan (panjang, karakter khusus, dll.) sebelum diproses lebih lanjut.

**Hashing Password**: Password pengguna di-hash menggunakan algoritma SHA256 bersama dengan salt yang unik untuk setiap pengguna, demi meningkatkan keamanan penyimpanan data.

## Struktur Proyek

Berikut adalah gambaran umum struktur direktori utama proyek ini:

```
.
├── data/                  # Direktori untuk menyimpan data pengguna (users.json)
├── login.html             # Halaman antarmuka pengguna (UI) untuk proses Login
├── login.js               # Logika frontend JavaScript untuk halaman Login
├── main.js                # Proses utama (main process) Electron yang mengelola logika backend dan komunikasi antar proses (IPC)
├── package.json           # Metadata proyek dan daftar dependensi
├── package-lock.json      # Catatan detail dependensi proyek
├── preload.js             # Skrip preload Electron untuk jembatan komunikasi yang aman antara proses renderer dan main
├── register.html          # Halaman antarmuka pengguna (UI) untuk proses Registrasi
├── register.js            # Logika frontend JavaScript untuk halaman Registrasi
└── src/
    └── utils/
        └── security.js    # Modul JavaScript yang berisi fungsi-fungsi terkait keamanan seperti validasi, hashing, dan pembuatan salt.
```

## Persyaratan Sistem

Untuk menjalankan atau mengembangkan aplikasi ini, Anda memerlukan:

- **Node.js**: Direkomendasikan versi 20.x atau yang lebih baru.
- **npm**: Node Package Manager (biasanya sudah termasuk dengan instalasi Node.js).

## Cara Menjalankan Aplikasi

Ikuti langkah-langkah di bawah ini untuk menginstal dependensi dan menjalankan aplikasi di lingkungan pengembangan Anda:

### 1. Clone Repositori

Jika Anda belum mengkloning repositori proyek ini, lakukan dengan perintah berikut:

```bash
git clone https://github.com/agamnsy/tubes_mkepl.git
cd tubes_mkepl
```

### 2. Instal Dependensi

Pastikan semua dependensi yang diperlukan terinstal. Jalankan perintah ini di direktori root proyek:

```bash
npm install
```

Pastikan `electron` dan `electron-builder` terdaftar sebagai `devDependencies` dalam `package.json` Anda.

### 3. Jalankan Aplikasi

Setelah dependensi terinstal, Anda dapat menjalankan aplikasi Electron:

```bash
npm start
```

Aplikasi akan terbuka, menampilkan halaman registrasi sebagai default.

## Validasi Keamanan

Modul `src/utils/security.js` menerapkan aturan validasi untuk username dan password guna meningkatkan keamanan:

### Username

- Panjang minimal 4 karakter.
- Panjang maksimal 20 karakter.
- Hanya boleh berisi karakter alfabet ASCII (A-Z, a-z).

### Password

- Panjang minimal 8 karakter.
- Panjang maksimal 20 karakter.
- Harus mengandung setidaknya satu angka.
- Harus mengandung setidaknya satu karakter spesial (misalnya, `!@#$%^&*()`).
- Harus mengandung setidaknya satu huruf (baik huruf besar maupun kecil).
- Tidak boleh mengandung username (tidak peka huruf besar/kecil).

Password yang disimpan telah di-hash menggunakan SHA256 dengan salt unik untuk setiap pengguna, memastikan bahwa password mentah tidak disimpan secara langsung.

## Pengembangan

### Build Aplikasi

Untuk membangun paket distributable aplikasi Anda (misalnya, `.exe` untuk Windows, `.dmg` untuk macOS, `.AppImage` untuk Linux), Anda dapat menggunakan `electron-builder`.

1. Pastikan `electron-builder` terinstal sebagai `devDependency`:

   ```bash
   npm install electron-builder --save-dev
   ```

2. Tambahkan skrip build di `package.json` Anda, misalnya:

   ```json
   "scripts": {
     "start": "electron .",
     "build": "electron-builder --dir"
   },
   "build": {
     "appId": "com.yourcompany.yourappname",
     "directories": {
       "output": "dist"
     }
     // Tambahkan konfigurasi target platform (win, mac, linux) sesuai kebutuhan
   }
   ```

3. Jalankan perintah build:
   ```bash
   npm run build
   ```

### Linting Kode

Proyek ini menggunakan ESLint untuk menjaga kualitas dan konsistensi kode melalui analisis statis.

1. Instal ESLint dan dependensi terkait:

   ```bash
   npm install eslint @eslint/js globals --save-dev
   ```

2. Pastikan ada file konfigurasi `eslint.config.js` di root proyek Anda dengan aturan yang sesuai.

3. Jalankan linting dari terminal:
   ```bash
   npx eslint . --ext .js
   ```

### Pengujian (Testing)

Saat ini, belum ada kerangka kerja pengujian unit yang terdefinisi secara eksplisit atau skrip pengujian (`npm test`) dalam `package.json` Anda. Sangat disarankan untuk menambahkan pengujian unit untuk logika inti aplikasi Anda (misalnya, fungsi validasi di `src/utils/security.js`, atau fungsi IPC di `main.js`).

Jika Anda mengimplementasikan pengujian, Anda dapat menjalankan:

```bash
npm test
```

_(Anda perlu menambahkan skrip `test` ke `package.json` yang menjalankan pengujian Anda, misalnya dengan Jest atau Mocha.)_

## Kontribusi

Kontribusi dalam bentuk apapun sangat dihargai! Jika Anda ingin berkontribusi pada proyek ini, silakan ikuti langkah-langkah umum di GitHub:

1. Fork repositori ini.
2. Buat branch baru untuk fitur atau perbaikan Anda (`git checkout -b feature/nama-fitur-anda`).
3. Lakukan perubahan Anda dan commit (`git commit -m 'Tambahkan fitur baru'`).
4. Push ke branch Anda (`git push origin feature/nama-fitur-anda`).
5. Buat Pull Request ke repositori utama.

## Lisensi

Proyek ini dilisensikan di bawah Lisensi ISC.
