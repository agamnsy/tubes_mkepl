// eslint.config.js
import globals from "globals";
import eslint from "@eslint/js";

export default [
  eslint.configs.recommended, // Memulai dengan aturan rekomendasi ESLint

  {
    languageOptions: {
      ecmaVersion: 2021, // Mendukung fitur JavaScript terbaru (ES2021)
      sourceType: "module", // Memungkinkan penggunaan import/export
      globals: {
        ...globals.browser, // Lingkungan browser (untuk file seperti register.js, login.js, dan HTML)
        ...globals.node,   // Lingkungan Node.js (untuk file seperti main.js, src/utils/security.js)
      },
    },
    rules: {
      // --- Aturan Umum ---
      "indent": ["error", 2, { "SwitchCase": 1 }], // Wajibkan indentasi 2 spasi, dan 1 spasi untuk SwitchCase
      // "linebreak-style": ["error", "unix"], // Wajibkan line endings Unix (LF)
      "quotes": ["error", "double"], // Wajibkan penggunaan kutip ganda untuk string
      "semi": ["error", "always"], // Wajibkan penggunaan titik koma di akhir setiap statement

      // --- Aturan Pencegah Kesalahan Potensial ---
      "no-unused-vars": ["warn", { "args": "none" }], // Beri peringatan untuk variabel yang tidak digunakan (kecuali argumen fungsi)
      // "no-console": ["warn", { "allow": ["warn", "error"] }], // Beri peringatan untuk console.log, tetapi izinkan console.warn dan console.error
      "no-extra-semi": "error", // Larang titik koma berlebihan
      "no-debugger": "error", // Larang penggunaan debugger
      "no-trailing-spaces": "error", // Larang spasi di akhir baris
      "no-multiple-empty-lines": ["error", { "max": 1, "maxEOF": 0 }], // Batasi baris kosong berturut-turut
      "no-constant-condition": ["error", { "checkLoops": false }], // Larang kondisi konstan di if/while kecuali untuk loop (misal: while(true))
      "no-unsafe-finally": "error", // Larang return, throw, break, atau continue dalam blok finally
      "no-dupe-args": "error", // Larang nama argumen duplikat dalam deklarasi fungsi
      "no-dupe-keys": "error", // Larang kunci objek duplikat
      "no-unreachable": "error", // Larang kode yang tidak dapat dijangkau setelah return, throw, continue, atau break

      // --- Aturan Gaya & Keterbacaan ---
      "curly": "error", // Wajibkan curly braces untuk semua kontrol flow (if, for, while, etc.)
      "eqeqeq": ["error", "always"], // Wajibkan penggunaan === dan !== (strict equality)
      "brace-style": ["error", "1tbs", { "allowSingleLine": true }], // Gaya kurung buka/tutup
      // "comma-dangle": ["error", "always-multiline"], // Wajibkan trailing commas untuk multiple-line
      "space-before-function-paren": ["error", {
        "anonymous": "always",
        "named": "never",
        "asyncArrow": "always"
      }], // Spasi sebelum tanda kurung fungsi

      // Aturan untuk mencegah masalah terkait dengan require di preload.js atau main.js
      // Jika Anda menggunakan CommonJS di main.js/preload.js dan ESM di tempat lain,
      // ini bisa membantu memastikan require hanya digunakan di mana seharusnya.
      // Namun, karena Anda menggunakan `sourceType: "module"`, pastikan semua file Anda
      // konsisten menggunakan ESM (import/export). Jika tidak, Anda mungkin perlu
      // konfigurasi yang lebih kompleks atau file konfigurasi terpisah untuk file CommonJS.
    },
  },
];