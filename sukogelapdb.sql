-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Sep 03, 2024 at 03:33 AM
-- Server version: 8.0.30
-- PHP Version: 8.3.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `sukogelapdb`
--

-- --------------------------------------------------------

--
-- Table structure for table `role`
--

CREATE TABLE `role` (
  `id` int NOT NULL,
  `role` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` datetime(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `role`
--

INSERT INTO `role` (`id`, `role`, `createdAt`, `updatedAt`) VALUES
(1, 'Super Admin', '2024-08-28 13:21:12.000', '2024-08-28 13:21:12.000'),
(2, 'Admin', '2024-08-28 13:21:12.000', '2024-08-28 06:44:00.156');

-- --------------------------------------------------------

--
-- Table structure for table `schedule`
--

CREATE TABLE `schedule` (
  `id` int NOT NULL,
  `title` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `date` datetime(3) NOT NULL,
  `image` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `authorId` int NOT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` datetime(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `schedule`
--

INSERT INTO `schedule` (`id`, `title`, `description`, `date`, `image`, `authorId`, `createdAt`, `updatedAt`) VALUES
(16, 'Gotong Royong Bersih Desa', 'Kegiatan gotong royong bersih desa ini diadakan untuk mempererat tali silaturahmi antarwarga sekaligus menjaga kebersihan lingkungan desa. Seluruh warga diharapkan hadir untuk bersama-sama membersihkan area umum seperti balai desa, masjid, jalan utama, dan taman desa. Selain itu, kegiatan ini juga bertujuan untuk mengedukasi masyarakat tentang pentingnya menjaga kebersihan lingkungan dan pengelolaan sampah yang baik. Akan ada pembagian peran dan kelompok kerja, serta pembagian alat kebersihan. Panitia juga akan menyediakan makanan ringan dan minuman bagi seluruh peserta.', '2024-08-31 00:00:00.000', 'https://ik.imagekit.io/zqrsfwxm6/66d2c8fce375273f60a441fe_upacara-bersih-desa-2.jpg', 2, '2024-08-31 07:40:51.091', '2024-08-31 07:50:00.981'),
(17, 'Pameran Hasil Bumi dan Kerajinan Desa', 'Pameran ini menampilkan berbagai hasil bumi dan kerajinan tangan khas desa yang merupakan produk unggulan para warga. Pengunjung dapat menikmati beragam produk seperti buah-buahan segar, sayuran organik, serta aneka kerajinan tangan yang dibuat dengan teknik tradisional. Selain itu, acara ini juga akan dimeriahkan dengan pertunjukan seni tari dan musik tradisional, lomba memasak menggunakan bahan lokal, dan bazar kuliner khas desa. Acara ini bertujuan untuk meningkatkan perekonomian lokal dan memperkenalkan produk unggulan desa kepada masyarakat luas.', '2024-09-07 00:00:00.000', 'https://ik.imagekit.io/zqrsfwxm6/66d2c9e1e375273f60a7f4cd_IMG-20231108-WA0030.jpg', 2, '2024-08-31 07:44:40.513', '2024-08-31 07:44:40.513'),
(18, 'Seminar Pendidikan dan Pelatihan Keterampilan', 'Seminar ini akan diisi oleh beberapa narasumber berpengalaman yang akan membahas tentang pentingnya pendidikan di era modern serta berbagai keterampilan yang dibutuhkan untuk meningkatkan kualitas hidup. Peserta akan mendapatkan pelatihan dasar mengenai keterampilan praktis seperti penggunaan teknologi dalam usaha kecil, pengelolaan keuangan keluarga, serta pengembangan usaha mikro. Acara ini diadakan untuk memotivasi warga desa agar lebih semangat dalam menimba ilmu dan mengasah keterampilan yang dapat bermanfaat bagi kehidupan sehari-hari maupun untuk membuka peluang usaha.', '2024-09-11 00:00:00.000', 'https://ik.imagekit.io/zqrsfwxm6/66d2ca33e375273f60a9386a_DSC06002-930x620.jpg', 2, '2024-08-31 07:46:01.997', '2024-08-31 07:46:01.997'),
(19, 'Lomba Kuliner Tradisional Desa', 'Lomba kuliner tradisional desa ini diadakan untuk melestarikan resep-resep masakan khas desa yang telah diwariskan turun-temurun. Setiap peserta diharapkan untuk menyiapkan satu hidangan utama dan satu hidangan penutup dengan menggunakan bahan-bahan lokal yang mudah didapat di desa. Kegiatan ini bertujuan untuk memperkenalkan kekayaan kuliner desa kepada generasi muda serta mengapresiasi para ibu dan warga yang masih melestarikan kuliner tradisional. Hadiah menarik telah disiapkan untuk para pemenang, serta akan ada demo memasak oleh chef lokal yang terkenal.', '2024-09-26 00:00:00.000', 'https://ik.imagekit.io/zqrsfwxm6/66d2ca7ae375273f60a9e6df_25052023081558_0.jpeg', 2, '2024-08-31 07:47:13.666', '2024-08-31 07:47:13.666'),
(20, 'Festival Budaya dan Seni Desa', 'Festival ini merupakan ajang untuk menampilkan berbagai kesenian dan budaya lokal yang dimiliki oleh desa. Kegiatan akan diisi dengan pagelaran seni tari, musik tradisional, pameran lukisan dan kerajinan tangan, serta lomba permainan tradisional. Festival ini juga menjadi kesempatan bagi para seniman lokal untuk menunjukkan bakat mereka kepada masyarakat luas. Melalui kegiatan ini, desa berharap dapat meningkatkan rasa cinta dan bangga terhadap warisan budaya yang ada, serta mengedukasi generasi muda tentang pentingnya melestarikan seni dan budaya lokal.', '2024-10-17 00:00:00.000', 'https://ik.imagekit.io/zqrsfwxm6/66d2cac3e375273f60aaae78_20181024062843.jpg', 2, '2024-08-31 07:48:27.584', '2024-08-31 07:48:27.584');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `roleId` int NOT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` datetime(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `name`, `email`, `password`, `roleId`, `createdAt`, `updatedAt`) VALUES
(2, 'Super Admin', 'superadmin@sukogelap.id', '$2a$10$R0/zEJKGygpGGo/Il0id/eh3x.hzJnAsRN/2IsxNjffAelZhlZ4Ru', 1, '2024-08-28 06:21:20.525', '2024-09-02 15:37:51.967'),
(3, 'Admin', 'admin@sukogelap.id', '$2a$10$PDUox94do7p23ttfvLZVo..csKlzkffmtPhsyrASib7NGjlXnRuWa', 2, '2024-08-28 06:21:47.086', '2024-08-28 06:21:47.086');

-- --------------------------------------------------------

--
-- Table structure for table `_prisma_migrations`
--

CREATE TABLE `_prisma_migrations` (
  `id` varchar(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `checksum` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `finished_at` datetime(3) DEFAULT NULL,
  `migration_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `logs` text COLLATE utf8mb4_unicode_ci,
  `rolled_back_at` datetime(3) DEFAULT NULL,
  `started_at` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `applied_steps_count` int UNSIGNED NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `_prisma_migrations`
--

INSERT INTO `_prisma_migrations` (`id`, `checksum`, `finished_at`, `migration_name`, `logs`, `rolled_back_at`, `started_at`, `applied_steps_count`) VALUES
('3a4bafcc-75b2-41eb-9eae-46130cbc13fb', '422ef2675b11935793dd330683a9679120f6e274cf79e2a18e998036b3b1d439', '2024-09-02 14:29:25.843', '20240902142925_make_image_optional', NULL, NULL, '2024-09-02 14:29:25.786', 1),
('4faa68e0-cf9c-44b9-803a-9e03fd024f4a', '2a37deedfcc4d4d34779b5f6420433240af432935a961a5a058308c6546194c2', '2024-08-31 07:40:13.440', '20240831074013_update_description_column_type', NULL, NULL, '2024-08-31 07:40:13.388', 1),
('8a839f02-8bb3-451d-a9d4-d629bc7caf44', 'f29d7f35725f582de8f0e2c1105947318ff805b55918f4d3d801be8bdc209561', '2024-08-28 06:59:49.500', '20240828065949_add_schedule_model', NULL, NULL, '2024-08-28 06:59:49.442', 1),
('c7e995d4-d210-4fbf-ab51-58a2ec475425', '333a927fb33dece06e16693e39f3cef8a7635d94c6ef3b6146f190b0bd5257c8', '2024-08-28 06:03:09.283', '20240828060309_init', NULL, NULL, '2024-08-28 06:03:09.174', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `role`
--
ALTER TABLE `role`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `Role_role_key` (`role`);

--
-- Indexes for table `schedule`
--
ALTER TABLE `schedule`
  ADD PRIMARY KEY (`id`),
  ADD KEY `Schedule_authorId_fkey` (`authorId`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `User_email_key` (`email`),
  ADD KEY `User_roleId_fkey` (`roleId`);

--
-- Indexes for table `_prisma_migrations`
--
ALTER TABLE `_prisma_migrations`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `role`
--
ALTER TABLE `role`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `schedule`
--
ALTER TABLE `schedule`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `schedule`
--
ALTER TABLE `schedule`
  ADD CONSTRAINT `Schedule_authorId_fkey` FOREIGN KEY (`authorId`) REFERENCES `user` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

--
-- Constraints for table `user`
--
ALTER TABLE `user`
  ADD CONSTRAINT `User_roleId_fkey` FOREIGN KEY (`roleId`) REFERENCES `role` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
