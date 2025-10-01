function parseQuery(qs = window.location.search) {
  qs = qs.replace(/^\?/, '');
  if (!qs) return {};
  return qs.split('&').reduce((acc, pair) => {
    const [k, v = ''] = pair.split('=');
    acc[decodeURIComponent(k)] = decodeURIComponent(v.replace(/\+/g, ' '));
    return acc;
  }, {});
}

// usage
const params = parseQuery(); // { page: "2", sort: "asc" }

//dictionary and dataset
var l_id = [
    'ID - Indonesia',
    'EN - Inggris',
    'Ringkasan Profil',
    'Perkenalkan, nama saya Catur. Saya adalah seorang IT Consultant dengan pengalaman lebih dari 3 tahun dalam bidang pemrograman dan pengembangan aplikasi berbasis desktop maupun web. Terbiasa menganalisis kebutuhan bisnis, merancang solusi teknologi, serta membangun aplikasi yang efektif dan efisien untuk menyelesaikan permasalahan IT klien. Memiliki kemampuan dalam pengembangan software end-to-end, mulai dari desain sistem, implementasi, hingga optimasi kinerja.',
    'Informasi Pribadi',
    'Nama: Catur Ilham Muharam',
    'Kontak Profesional: @',
    'Lokasi: Jawa Tengah, Indonesia',
    'Linkedin: ',
    'Keahlian Utama',
    'Programming: C#, PHP, JavaScript (Node.js)',
    'Database: MySQL, PostgreSQL',
    'Soft Skills: Problem-Solving, Teamwork, Komunikasi',
    'Bahasa: Indonesia, Inggris',
    'Pengalaman Kerja / Proyek',
    'Freelancer: (Fiverr, Upwork) 2021 - 2022',
    'Guru (2022 - 2025)',
    'Freelancer: (Fiverr, Upwork) 2025 - Sekarang',
    'Pendidikan Terakhir',
    'S1 - Teknik Informatika',
    'Portofolio / Projek',
    'Aplikasi Kasir / Point of Sale (POS) => di github',
    'Mini ERP (Enterprise Resource Planning) => di github ',
    'Sistem E-Learning => di github',
    'Toko Online Sederhana => di github',
    'Dashboard Admin => di github',
    'Webservice => di github'
];

var l_en = [
    'ID - Indonesian',
    'EN - English',
    'Profile Summary',
    'Hello, my name is Catur. I am an IT Consultant with more than 3 years of experience in programming and application development for both desktop and web platforms. Skilled in analyzing business requirements, designing technology solutions, and building effective and efficient applications to address clients’ IT challenges. Experienced in end-to-end software development, from system design, implementation, to performance optimization.',
    'Personal Information',
    'Name: Catur Ilham Muharam',
    'Professional Contact: @',
    'Location: Central Java, Indonesia',
    'Linkedin: ',
    'Key Skills',
    'Programming: C#, PHP, JavaScript (Node.js)',
    'Database: MySQL, PostgreSQL',
    'Soft Skills: Problem-Solving, Teamwork, Communication',
    'Languages: Indonesian, English',
    'Work Experience / Projects',
    'Freelancer: (Fiverr, Upwork) 2021 - 2022',
    'Teacher (2022 - 2025)',
    'Freelancer: (Fiverr, Upwork) 2025 - Present',
    'Education',
    'Bachelor’s Degree - Informatics Engineering',
    'Portfolio / Projects',
    'Point of Sale (POS) Application => on GitHub',
    'Mini ERP (Enterprise Resource Planning) => on GitHub',
    'E-Learning System => on GitHub',
    'Simple Online Store => on GitHub',
    'Admin Dashboard => on GitHub',
    'Web Service => on GitHub'
];


var langSwitcher = document.querySelectorAll(".lang-switcher");
var dict = l_id;
if(params.lang == 'en'){
	dict = l_en;
	langSwitcher[1].style.backgroundColor = "#000";
}
else{
	langSwitcher[0].style.backgroundColor = "#000";
}

for(var i = 0; i < langSwitcher.length; i++){
	langSwitcher[i].textContent = dict[i] || '-';
}