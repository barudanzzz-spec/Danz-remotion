# DANZ HONDA MOTION — Honda Scoopy Tips

Proyek Remotion vertikal 9:16 untuk video edukasi singkat Honda Scoopy.

## Isi proyek
- Source code Remotion di `src/`
- Voice-over Bahasa Indonesia pria (sintesis lokal eSpeak) di `public/audio/voiceover.wav`
- Naskah voice-over di `voiceover.txt`
- Subtitle contoh di `subtitles.srt`
- Output dirender akan masuk ke `out/scoopy-tips.mp4`

## Spesifikasi
- 1080 × 1920 (portrait)
- 30 FPS
- 39,2 detik
- Motion graphics warna ungu gelap, lilac, kuning; teks animasi dan progress bar

## Jalankan dari laptop/PC
Perlu Node.js 18+ dan koneksi internet saat pertama memasang package.

```bash
npm install
npm run start
```

Untuk render MP4:

```bash
mkdir -p out
npm run render
```

## Jalankan dari Android
Cara paling nyaman adalah memakai GitHub Codespaces dari browser HP:
1. Upload seluruh isi folder proyek ini ke repository GitHub baru.
2. Buka repository → `Code` → `Codespaces` → `Create codespace`.
3. Di terminal Codespaces jalankan `npm install`.
4. Jalankan `npm run render`.
5. Setelah selesai, buka folder `out` dan unduh `scoopy-tips.mp4`.

Bisa juga menjalankan `npm run start` untuk membuka Remotion Studio di browser Codespaces.

## Ubah konten
- Naskah suara: edit `voiceover.txt` dan ganti `public/audio/voiceover.wav` dengan audio hasil TTS/rekaman baru.
- Teks dan urutan scene: edit `src/video.tsx`.
- Durasi dan resolusi: edit `src/root.tsx`.
- Jika mengganti audio dengan durasi berbeda, sesuaikan `durationInFrames` pada `src/root.tsx` dan durasi `Sequence` di `src/video.tsx` (30 frame = 1 detik).

## Catatan audio
Audio yang disertakan adalah voice-over sintetis Bahasa Indonesia dari eSpeak, suara pria. Pelafalan dan intonasinya terdengar sintetis/robotik; ini bukan rekaman talent studio. Untuk hasil iklan yang lebih natural, ganti file WAV dengan voice-over pria yang lebih natural, tanpa mengubah nama file.

## Catatan materi promosi
Video ini tidak mencantumkan nominal DP, cicilan, tenor, atau klaim promo tertentu karena nilainya perlu dikonfirmasi ke dealer/leasing sebelum dipublikasikan. Tampilan skuter di bagian penutup berupa tipografi, bukan foto produk resmi.
