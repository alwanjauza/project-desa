import React from "react";
import Accordion from "../components/ui/Accordion";
import { Link } from "react-router-dom";
import { ReactTyped } from "react-typed";

function BudayaPage() {
  return (
    <div className='bg-[#f3f3f3]'>
      <div className='bg-primary px-4 py-20 md:px-16 lg:px-32 lg:py-40 flex items-center justify-center'>
        <div className='flex flex-col items-center justify-center'>
          <ReactTyped
            className='text-2xl md:text-4xl text-white font-bold'
            strings={["BUDAYA DESA SUKOGELAP"]}
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
        <p>/ Budaya</p>
      </div>
      <div className='bg-white px-4 md:px-8 lg:px-32'>
        <div className='py-10'>
          <h1 className='text-2xl md:text-4xl font-bold text-center'>
            Budaya Desa Sukogelap
          </h1>
          <p className='text-gray-400 text-center mt-2'>
            Desa Sukogelap - Kecamatan Kemiri - Kabupaten Purworejo
          </p>
          <div className='mt-8'>
            <Accordion title='Tahlilan Malam Jumat'>
              Merupakan kegiatan rutin yang diselenggarakan setiap malam jum'at.
              kegiatan tersebut dilaksanakan pada setiap mushola dan masjid di
              Desa Sukogelap, Kemiri, Purworejo. Tujuan kegiatan Tahlilan Malam
              Jum'at tersebut untuk mendo'akan sesepuh, orang tua, dll. Biasanya
              akan dipimpin oleh ustadz untuk memandu berjalannya tahlilan.
            </Accordion>
            <Accordion title='Syuran'>
              Budaya Keagamaan yang dilaksanakan pada setiap Bulan Syuro yang
              bertujuan untuk mendoakan orang-orang terdahulu sekaligus
              mengenang dan mengingat jasa-jasa para pendahulu.
            </Accordion>
            <Accordion title='Merti Desa/Sedekah Bumi/Nganyari.'>
              Budaya religius para warga setempat sebagai bentuk wujud rasa
              syukur kepada Allah yang telah memberikan limpahan hasil panen
              yang memuaskan bagi warga setempat. budaya ini dilaksanakan pada
              setiap tahun pada Bulan Besar Islam.
            </Accordion>
            <Accordion title='Jaran Kepang'>
              Budaya kesenian tradisional berupa tarian yang menampilkan
              sekelompok orang yang menunggangi kuda. Tarian Kuda Lumping atau
              dikenal dalam istilah Jaran Kepang menggunakan kuda tiruan yang
              terbuat dari bambu yang dihiasi. Budaya tradisional tersebut
              dilaksanakan pada setiap jum'at kliwon yang dilakukan oleh warga
              atau pemuda setempat. jaran kepang juga dilaksanakan pada bulan
              Suro dimakan para pendiri desa Sukogelap. Tujuan dari kegiatan
              tersebut untuk mengenang jasa-jasa pendahulu dalam mendirikan
              desa.
            </Accordion>
            <Accordion title='Hadroh'>
              Merupakan kesenian pertunjukan tradisional dalam budaya islam yang
              melibatkan music dan sholawat yang bersifat religious. Selain
              sebagai pujian yang penting bagi agama islam, hadroh juga sebagai
              sarana silaturahmi bagi umat islam. Hadroh telah menjadi budaya
              bagi warga Desa Sukogelap, Kemiri, Purworejo. Budaya tersebut
              seringkali diselenggarakan pada bulan Maulid dan Bulan Rajab.
              Namun setiap malam senin akan diselenggarakan sholawat di masjid
              Jami' An-Nashir.
            </Accordion>
            <Accordion title='Selapanan'>
              Pertemuan yang diselenggarakan sebagai upaya silaturahmi sekaligus
              perencanaan saat akan mengadakan agenda-agenda tertentu.
              Selapanan/rapat ini diadakan dalam skala satu desa dan dipimpin
              oleh Kepala Desa Sukogelap, Kemiri, Purworejo. Pada pertemuan
              tersebut para warga dapat menyampaikan pendapat-pendapatnya untuk
              keberlangsungan agenda yang akan dilaksanakan.
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BudayaPage;
