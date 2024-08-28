import React from "react";
import { Link } from "react-router-dom";
import { ReactTyped } from "react-typed";

function SejarahPage() {
  return (
    <div className='bg-[#f3f3f3]'>
      <div className='bg-primary px-4 py-20 md:px-16 lg:px-32 lg:py-40 flex items-center justify-center'>
        <div className='flex flex-col items-center justify-center'>
          <ReactTyped
            className='text-2xl md:text-4xl text-white font-bold'
            strings={["SEJARAH DESA SUKOGELAP"]}
            typeSpeed={50}
            backSpeed={40}
            loop
          />
          <p className='text-gray-300 mt-2 text-center'>
            Desa Sukogelap - Kecamatan Kemiri - Kabupaten Purworejo
          </p>
        </div>
      </div>
      <div className='flex items-center gap-2 px-4 md:px-8 lg:px-32 py-5'>
        <Link to='/' className='text-primary'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='20'
            height='20'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
            className='icon icon-tabler icons-tabler-outline icon-tabler-home'
          >
            <path stroke='none' d='M0 0h24v24H0z' fill='none' />
            <path d='M5 12l-2 0l9 -9l9 9l-2 0' />
            <path d='M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7' />
            <path d='M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6' />
          </svg>
        </Link>
        <p>/ Sejarah</p>
      </div>
      <div className='bg-white px-4 md:px-8 lg:px-32'>
        <div className='py-10'>
          <h1 className='text-2xl md:text-4xl font-bold text-center'>
            Sejarah Desa Sukogelap
          </h1>
          <p className='text-gray-400 text-center mt-2'>
            Desa Sukogelap - Kecamatan Kemiri - Kabupaten Purworejo
          </p>
          <div className='mt-8'>
            <p className='text-justify'>
              Desa Sukogelap diperkirakan sudah ada sebelum Indonesia merdeka,
              pada masa Kerajaan Mataram saat agama Islam mulai disebarkan.
              Sebelum bernama Sukogelap, daerah ini disebut dengan sebutan
              tengah, kidul, atau lor.
            </p>
            <p className='text-justify mt-2'>
              Dua leluhur pertama Desa Sukogelap adalah Raden Tumenggung Patra
              Yudha dan Raden Prajaya. Nama Sukogelap berasal dari bahasa Jawa,
              "soko" berarti tiang dan "gelap" berarti gelap. Dalam bahasa
              Sansekerta, "soko/suaka" artinya dilindungi dan "gelap" artinya
              petir. Konon, warga Sukogelap dari zaman dahulu hingga sekarang
              tidak pernah ada yang disambar petir.
            </p>
            <p className='text-justify mt-2'>
              Dahulu, Desa Sukogelap bukan desa melainkan kecamatan atau
              "seten", pusat pemerintahan kecamatan. Ada peninggalan berupa
              "belik setenan" (mata air kecil). Ndoro Seten atau Camat Sukogelap
              melantik Lurah Desa Loning, Kecamatan Kemiri.
            </p>
            <p className='text-justify mt-2'>
              Raden Tumenggung Patra Yudha membuka lahan (babat alas) dibantu
              asistennya, Raden Prajaya. Peninggalan Raden Prajaya berupa
              tongkat yang digunakan untuk berjalan. Raden Tumenggung Patra
              Yudha memelihara kuda, sedangkan Prajaya mencari rumput untuk
              makan kuda. Saat kesulitan air, Prajaya menggotong air menggunakan
              keranjang rumput tanpa bocor karena kesaktiannya. Tongkat Prajaya
              yang ditancapkan muncul pohon serut, namun Ketika terdapat seorang
              yang hendak mengambil tanaman tersebut, muncul seekor ular yang
              menjaga.
            </p>
            <p className='text-justify mt-2'>
              Saat akan membangun mushola di SD, ditemukan peninggalan berupa
              panci atau peralatan dapur. Listrik masuk pada tahun 1996,
              sedangkan instalasi air bersih baru masuk pada tahun 2015. Sebelum
              2015, warga kesulitan air yang harus diambil dari mata air
              berjarak 300 Meter - 1 KM. Jalan mulai di aspal pada tahun 2011
              secara bertahap, sebelumnya hanya tanah.
            </p>
            <p className='text-justify mt-2'>
              Pada masa penjajahan Belanda, daerah RT 1 RW 1 disebut Plimbungan
              karena Belanda kebingungan memasuki daerah Soko gelap yang gelap.
              Pada tahun 2022, Desa Sukogelap sudah masuk kategori desa maju.
            </p>
            <p className='text-justify mt-2'>Tradisi dan Kepercayaan</p>
            <p className='text-justify mt-2'>
              Raden Patra Yudha dimakamkan di Desa Sukogelap, makamnya disebut
              Punden. Setiap tahun baru Islam (bulan Suro), ada dua hajat yang
              dilakukan bersamaan:
            </p>
            <ol className='list-decimal ml-8'>
              <li>
                Doa bersama (selametan) di Punden dengan syarat tumpeng untuk
                bulan Suro.
              </li>
              <li>
                Gilig atau golong untuk tolak bala (menolak keburukan) dari nasi
                yang dikepal.
              </li>
            </ol>
            <p className='text-justify'>
              Kedua hajat dilakukan pada hari Jumat Kliwon atau Selasa Kliwon.
              Selain tumpeng dan gilig, juga harus menyembelih kambing gibas
              (gimbal) betina yang memiliki corak hitam di sekitar kedua
              matanya. Jika saat disembelih kambing tidak mengandung, maka ayam
              jantan (ingkung) akan bertelur.
            </p>
            <p className='text-justify mt-2'>
              Zaman dulu, daun tidak akan jatuh di sekitar Punden dan jikawarga
              memiliki keinginan, maka akan terkabul. Namun, kepercayaan ini
              mulai ditentang warga.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SejarahPage;
