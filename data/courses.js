export const courses=[
 {id:'html',logo:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',title:'HTML & CSS',icon:'</>',tone:'cyan',description:'Bangun halaman web dari tag pertama sampai layout responsif dan accessibility.',modules:[
  {id:'basic-html',title:'Basic HTML',description:'Fondasi HTML: elemen, atribut, struktur dokumen, gambar, link, list, dan semantic dasar.',steps:[
   ['intro','lecture','Say Hello to HTML Elements','HTML adalah bahasa markup untuk menyusun struktur halaman. Elemen biasanya ditulis dengan tag pembuka dan penutup, misalnya <code>&lt;p&gt;Hello&lt;/p&gt;</code>.',''],
   ['doctype','coding','Buat Dokumen HTML Pertama','Buat dokumen HTML valid dengan doctype HTML5 dan elemen <code>html</code>.','<!DOCTYPE html>\n<html>\n</html>','html', ['doctype','html']],
   ['head','coding','Tambahkan Head','Tambahkan elemen <code>head</code> di dalam dokumen.','<!DOCTYPE html>\n<html>\n  <head></head>\n</html>','html',['head']],
   ['title','coding','Beri Judul Halaman','Masukkan <code>&lt;title&gt;Belajar HTML&lt;/title&gt;</code> di dalam head.','<!DOCTYPE html>\n<html>\n<head>\n</head>\n</html>','html',['title','Belajar HTML']],
   ['body','coding','Tambahkan Body','Tambahkan <code>body</code> sebagai tempat konten halaman.','<!DOCTYPE html>\n<html><head><title>Belajar HTML</title></head>\n</html>','html',['body']],
   ['h1','coding','Headline dengan h1','Buat tepat satu heading utama berisi <strong>Hello World!</strong>.','<body>\n</body>','html',['h1','Hello World!']],
   ['h2','quiz','Pilih Heading yang Tepat','Tag mana yang biasanya dipakai untuk subjudul di bawah h1?','',['h2','h3','p','strong'],'h2'],
   ['p','coding','Paragraph Element','Tambahkan paragraf yang berisi kalimat tentang dirimu.','<body>\n  <h1>Hello World!</h1>\n</body>','html',['p']],
   ['strong','coding','Teks Penting','Gunakan <code>strong</code> untuk menandai kata penting.','<p>Aku sedang belajar HTML.</p>','html',['strong']],
   ['em','coding','Teks Emphasis','Gunakan <code>em</code> untuk memberi penekanan pada satu kata.','<p>HTML itu menarik.</p>','html',['em']],
   ['br','coding','Line Break','Buat dua baris teks tanpa membuat paragraf baru menggunakan <code>br</code>.','<p>Baris pertama</p>','html',['br']],
   ['a','coding','Membuat Link','Buat link ke https://example.com dengan teks <strong>Kunjungi</strong>.','<p>Website:</p>','html',['a','https://example.com']],
   ['img','coding','Menampilkan Gambar','Buat elemen gambar dengan src dan alt.','<body>\n</body>','html',['img','alt']],
   ['ul','coding','Unordered List','Buat unordered list berisi HTML, CSS, JavaScript.','<body>\n</body>','html',['ul','li']],
   ['ol','coding','Ordered List','Buat ordered list berisi tiga langkah belajar coding.','<body>\n</body>','html',['ol','li']],
   ['div','coding','Mengelompokkan Konten','Kelompokkan sebuah heading dan paragraf dalam div.','<body>\n</body>','html',['div']],
   ['span','coding','Inline Text','Gunakan span untuk membungkus satu bagian teks di dalam paragraf.','<p>Aku suka coding.</p>','html',['span']],
   ['comment','coding','Komentar HTML','Tambahkan komentar HTML yang menjelaskan bagian heading.','<h1>Hello World!</h1>','html',['<!--']],
   ['class','coding','Class Attribute','Tambahkan class <code>hero</code> pada sebuah div.','<div>Hero</div>','html',['class="hero"']],
   ['id','coding','ID Attribute','Tambahkan id <code>main</code> pada elemen utama.','<div>Konten</div>','html',['id="main"']],
   ['button','coding','Button','Buat tombol dengan teks <strong>Mulai</strong>.','<body>\n</body>','html',['button','Mulai']],
   ['input','coding','Input','Buat input teks dengan placeholder <strong>Nama kamu</strong>.','<body>\n</body>','html',['input','placeholder']],
   ['label','coding','Label Input','Hubungkan label “Nama” dengan input menggunakan for/id.','<input id="name">','html',['label','for']],
   ['form','coding','Form Dasar','Buat form yang memiliki label, input, dan tombol submit.','<body>\n</body>','html',['form','submit']],
   ['table','coding','Tabel Sederhana','Buat tabel dengan satu header row dan dua data row.','<body>\n</body>','html',['table','tr','td']],
   ['semantic','lecture','Kenapa Semantic HTML?','Elemen semantic menjelaskan makna konten, seperti <code>header</code>, <code>nav</code>, <code>main</code>, <code>section</code>, dan <code>footer</code>.'],
   ['header','coding','Header Semantic','Ganti wrapper header biasa menjadi elemen <code>header</code>.','<div>\n  <h1>Websiteku</h1>\n</div>','html',['header']],
   ['nav','coding','Navigation','Buat navigation semantic yang memiliki minimal dua link.','<header>Websiteku</header>','html',['nav','a']],
   ['main','coding','Main Content','Gunakan <code>main</code> untuk konten utama halaman.','<div class="content">Isi</div>','html',['main']],
   ['section','coding','Section','Bungkus satu kelompok konten terkait menggunakan <code>section</code>.','<main>\n  <h2>Artikel</h2>\n</main>','html',['section']],
   ['footer','coding','Footer','Tambahkan footer dengan teks copyright sederhana.','<body>\n</body>','html',['footer']],
   ['figure','coding','Figure','Gunakan figure dan figcaption untuk sebuah gambar.','<body>\n</body>','html',['figure','figcaption']],
   ['audio','coding','Audio','Tambahkan audio dengan controls.','<body>\n</body>','html',['audio','controls']],
   ['video','coding','Video','Tambahkan video dengan controls dan width.','<body>\n</body>','html',['video','controls']],
   ['details','coding','Konten yang Bisa Dibuka','Buat details berisi summary “Info” dan paragraf.','<body>\n</body>','html',['details','summary']],
   ['entity','quiz','HTML Entities','Bagaimana menulis simbol < di HTML tanpa dianggap sebagai awal tag?','',['&lt;','&gt;','&amp;','&quot;'],'&lt;'],
   ['accessibility','lecture','Accessibility Dasar','Atribut alt pada gambar, label pada input, urutan heading, dan semantic HTML membantu pengguna dengan assistive technology.'],
   ['alt-quality','quiz','Alt Text yang Baik','Alt text seharusnya terutama…','',['menjelaskan tujuan/makna gambar','berisi nama file','selalu kosong','mengulang seluruh halaman'],'menjelaskan tujuan/makna gambar'],
   ['nesting','quiz','Nesting Element','Manakah struktur nesting yang benar?','',['<p><strong>Halo</strong></p>','<p><strong>Halo</p></strong>','<p><strong>Halo','</strong><p>'],'<p><strong>Halo</strong></p>'],
   ['review-1','review','Review HTML','Sebelum lanjut, pastikan kamu memahami struktur dokumen, heading, paragraph, link, image, list, form, dan semantic HTML.',''],
   ['project-profile','project','Mini Project: Profile Card','Buat halaman profile sederhana yang memiliki h1, gambar dengan alt, paragraf, link, list hobi, dan footer.','<!DOCTYPE html>\n<html>\n<body>\n  <!-- mulai dari sini -->\n</body>\n</html>','html',['h1','img','alt','p','a','ul','footer']],
  ]},
  {id:'css-foundations',title:'CSS Foundations',description:'Selector, warna, typography, box model, flexbox, grid, responsive design.',steps:[
   ['css-intro','lecture','Apa itu CSS?','CSS mengatur presentasi visual dokumen HTML: warna, ukuran, jarak, layout, dan responsivitas.'],
   ['selector','coding','Selector Element','Buat aturan CSS untuk mengubah warna teks semua paragraf.','<p>Hello CSS</p>','css',['p']],
   ['class-selector','coding','Class Selector','Target class <code>.card</code> dan beri padding.','<div class="card">Card</div>','css',['.card','padding']],
   ['box','lecture','Box Model','Setiap elemen dapat dipahami sebagai content, padding, border, dan margin.'],
   ['flex','coding','Flexbox','Jadikan container flex dan beri gap.','<div class="row"><span>A</span><span>B</span></div>','css',['display: flex','gap']],
   ['grid','coding','CSS Grid','Buat dua kolom dengan grid.','<div class="grid"><div>A</div><div>B</div></div>','css',['display: grid','grid-template-columns']],
   ['responsive','coding','Responsive Design','Tambahkan media query agar layout berubah pada layar kecil.','.grid{display:grid;}','css',['@media']],
   ['css-project','project','Mini Project: Landing Page','Buat landing page responsif dengan navbar, hero, cards, dan footer.','<main><h1>Belajar Coding</h1></main>','css',['display','padding','@media']]
  ]},
  {id:'web-mastery',title:'Advanced Web & Accessibility',description:'Arsitektur UI, accessibility, performance, responsive patterns, dan project.',steps:[
   ['aria','lecture','ARIA dan Semantic HTML','Gunakan semantic HTML terlebih dahulu; ARIA dipakai ketika native semantics tidak cukup.'],
   ['keyboard','quiz','Keyboard Accessibility','Kontrol interaktif harus dapat digunakan dengan keyboard.','',['Benar','Salah'],'Benar'],
   ['responsive-advanced','coding','Responsive Component','Buat komponen card yang tetap usable di mobile.','.card{display:flex;}','css',['@media','width']],
   ['performance','lecture','Performance Dasar','Kurangi asset berlebihan, gunakan ukuran gambar yang sesuai, dan hindari JavaScript yang tidak diperlukan.'],
   ['capstone','project','Capstone: Personal Site','Bangun website personal responsif dengan beberapa section dan navigasi yang usable.','<!DOCTYPE html>\n<html><body><h1>Portfolio</h1></body></html>','html',['h1','nav','main','footer']]
  ]}
 ]},
 {id:'javascript',logo:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',title:'JavaScript',icon:'JS',tone:'yellow',description:'Logika pemrograman, DOM, async, API, sampai project JavaScript.',modules:[
  {id:'js-basics',title:'JavaScript Basics',description:'Variable, data type, operator, condition, loop, function.',steps:[
   ['var','lecture','Variable','Gunakan const/let untuk menyimpan nilai dan hindari var kecuali memang dibutuhkan.'],
   ['const','coding','const','Buat const bernama <code>name</code> berisi “Anma”.','const name = "";','js',['const name']],
   ['types','quiz','Data Type','Mana yang merupakan boolean?','',['"true"','true','1','null'],'true'],
   ['if','coding','Condition','Buat if yang mencetak “Lulus” jika score >= 75.','const score=80;\n','js',['if','console.log']],
   ['loop','coding','Loop','Gunakan for untuk mencetak angka 1 sampai 5.','const output=[];\n','js',['for']],
   ['fn','coding','Function','Buat function bernama add yang menjumlahkan dua angka.','function add(a,b) {}','js',['function add','return']],
   ['array','coding','Array','Buat array berisi tiga bahasa pemrograman.','const languages=[];','js',['[',']']],
   ['object','coding','Object','Buat object user yang memiliki property name.','const user={};','js',['name:']],
   ['js-project','project','Mini Project: Counter','Buat counter yang bisa bertambah dan berkurang saat tombol diklik.','<button id="plus">+</button><span id="count">0</span>','js',['addEventListener']]
  ]},
  {id:'js-dom',title:'DOM & Browser',description:'Manipulasi DOM, event, form, storage, fetch.',steps:[
   ['dom','lecture','DOM','DOM adalah representasi dokumen yang dapat dimanipulasi JavaScript.'],
   ['query','coding','querySelector','Ambil elemen dengan id <code>title</code> menggunakan querySelector.','const title = null;','js',['querySelector']],
   ['event','coding','Event Listener','Tambahkan click listener ke tombol.','const button=document.querySelector("button");','js',['addEventListener','click']],
   ['storage','coding','localStorage','Simpan nama user ke localStorage.','const name="Anma";','js',['localStorage.setItem']],
   ['fetch','coding','Fetch API','Pahami request async dengan fetch.','async function load() {}','js',['fetch']],
   ['todo','project','Project: Todo App','Buat todo list yang dapat tambah, tandai selesai, dan hapus item.','<div id="app"></div>','js',['addEventListener','localStorage']]
  ]},
  {id:'js-advanced',title:'Advanced JavaScript',description:'Async patterns, modules, error handling, architecture, performance.',steps:[
   ['async','lecture','Async/Await','Async/await membuat alur asynchronous lebih mudah dibaca.'],
   ['promise','quiz','Promise','Promise merepresentasikan hasil asynchronous yang akan tersedia kemudian.','',['Benar','Salah'],'Benar'],
   ['error','coding','Error Handling','Gunakan try/catch untuk menangani error asynchronous.','async function run() {}','js',['try','catch']],
   ['modules','lecture','ES Modules','Pisahkan kode menggunakan export/import agar project tetap terorganisir.'],
   ['final-js','project','Capstone: Mini Dashboard','Bangun dashboard kecil yang mengambil data dari API dan menampilkan state loading/error/success.','<div id="app"></div>','js',['fetch','catch']]
  ]}
 ]},
 {id:'python',logo:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',title:'Python',icon:'PY',tone:'blue',description:'Belajar Python dari syntax dasar sampai automation, data, API, dan project.',modules:[
  {id:'py-foundation',title:'Python Foundations',description:'Syntax, variable, condition, loop, function, list, dict.',steps:[
   ['py-print','coding','Hello Python','Cetak “Hello, Python!” menggunakan print.','','python',['print','Hello, Python!']],
   ['py-var','coding','Variable','Buat variable name berisi “Anma”.','name = ""','python',['name =']],
   ['py-if','coding','Condition','Gunakan if untuk mengecek score >= 75.','score = 80\n','python',['if']],
   ['py-loop','coding','Loop','Gunakan for untuk mencetak angka 1 sampai 5.','for i in range(1, 6):\n    pass','python',['for','range']],
   ['py-fn','coding','Function','Buat function add(a,b) yang mengembalikan jumlah.','def add(a,b):\n    pass','python',['def add','return']],
   ['py-list','coding','List','Buat list berisi tiga bahasa.','languages = []','python',['[',']']],
   ['py-project','project','Project: Number Guess','Buat game tebak angka sederhana.','import random\nsecret = random.randint(1,10)','python',['random','input']]
  ]},
  {id:'py-advanced',title:'Python Advanced',description:'OOP, files, exceptions, modules, API, automation.',steps:[
   ['oop','lecture','OOP Python','Class dan object membantu memodelkan data dan behavior.'],
   ['class','coding','Class','Buat class User dengan attribute name.','class User:\n    pass','python',['class User']],
   ['except','coding','Exceptions','Tangani ValueError dengan try/except.','try:\n    int("x")\nexcept ValueError:\n    pass','python',['try','except']],
   ['api','lecture','API dengan Python','Python dapat memanggil API melalui library HTTP.'],
   ['py-capstone','project','Capstone: API CLI','Buat aplikasi CLI yang mengambil data API dan menampilkannya dengan error handling.','print("API project")','python',['try','except']]
  ]}
 ]},
 {id:'cpp',logo:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg',title:'C++',icon:'C+',tone:'orange',description:'Dasar C++ sampai OOP, STL, memory, dan project console.',modules:[
  {id:'cpp-foundation',title:'C++ Foundations',description:'Syntax, types, condition, loop, function, array, vector.',steps:[
   ['cpp-hello','coding','Hello C++','Cetak Hello, C++! menggunakan cout.','#include <iostream>\nint main(){return 0;}','cpp',['cout','Hello, C++!']],
   ['cpp-var','coding','Variable','Buat integer bernama score.','int main(){\n}\n','cpp',['int score']],
   ['cpp-if','coding','Condition','Gunakan if untuk mengecek score >= 75.','int score=80;','cpp',['if']],
   ['cpp-loop','coding','Loop','Gunakan for untuk mencetak 1 sampai 5.','int main(){\n}\n','cpp',['for']],
   ['cpp-fn','coding','Function','Buat function add untuk dua integer.','int main(){return 0;}','cpp',['add','return']],
   ['cpp-vector','coding','Vector','Gunakan vector untuk menyimpan beberapa angka.','#include <vector>','cpp',['vector']],
   ['cpp-project','project','Project: Calculator','Buat calculator console dengan operasi dasar.','#include <iostream>\nint main(){return 0;}','cpp',['switch','cin']]
  ]},
  {id:'cpp-advanced',title:'C++ Advanced',description:'OOP, references, pointers, STL, algorithms, architecture.',steps:[
   ['cpp-oop','lecture','OOP C++','Class, object, encapsulation, inheritance, dan polymorphism adalah fondasi OOP.'],
   ['cpp-class','coding','Class','Buat class Player dengan member name.','class Player {};','cpp',['class Player']],
   ['cpp-pointer','lecture','Pointer','Pointer menyimpan alamat memory; gunakan dengan hati-hati dan pahami lifetime.'],
   ['cpp-stl','lecture','STL','STL menyediakan container dan algorithm siap pakai.'],
   ['cpp-capstone','project','Capstone: Console Game','Bangun mini game console dengan state, function, dan input user.','#include <iostream>\nint main(){return 0;}','cpp',['cin','cout']]
  ]}
 ]},
 {id:'c',logo:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg',title:'C',icon:'C',tone:'green',description:'Fondasi C, memory, pointer, struct, file, sampai project.',modules:[
  {id:'c-foundation',title:'C Foundations',description:'Syntax, types, condition, loop, function, array.',steps:[
   ['c-hello','coding','Hello C','Cetak Hello, C! dengan printf.','#include <stdio.h>\nint main(){return 0;}','c',['printf','Hello, C!']],
   ['c-var','coding','Variable','Buat integer bernama score.','#include <stdio.h>\nint main(){return 0;}','c',['int score']],
   ['c-if','coding','Condition','Gunakan if untuk mengecek score >= 75.','int score=80;','c',['if']],
   ['c-loop','coding','Loop','Gunakan for untuk mencetak 1 sampai 5.','int main(){return 0;}','c',['for']],
   ['c-fn','coding','Function','Buat function add untuk dua integer.','int main(){return 0;}','c',['add','return']],
   ['c-array','coding','Array','Buat array integer berisi tiga nilai.','int main(){return 0;}','c',['int values[',']']],
   ['c-project','project','Project: CLI Menu','Buat menu console sederhana dengan beberapa pilihan.','#include <stdio.h>\nint main(){return 0;}','c',['switch','printf']]
  ]},
  {id:'c-advanced',title:'C Advanced',description:'Pointer, struct, memory, file I/O, data structures.',steps:[
   ['c-pointer','lecture','Pointer','Pahami address-of, dereference, pointer arithmetic, dan lifetime.'],
   ['c-struct','coding','Struct','Buat struct User dengan field name.','#include <stdio.h>','c',['struct User']],
   ['c-memory','lecture','Dynamic Memory','malloc/calloc/realloc/free membutuhkan pengelolaan memory yang disiplin.'],
   ['c-file','coding','File I/O','Buka file menggunakan fopen dan tutup dengan fclose.','#include <stdio.h>\nint main(){return 0;}','c',['fopen','fclose']],
   ['c-capstone','project','Capstone: Contact Manager','Bangun contact manager console menggunakan struct dan file storage.','#include <stdio.h>\nint main(){return 0;}','c',['struct','fopen']]
  ]}
 ]}
];

// Normalize compact tuples into objects.
for (const course of courses) for (const mod of course.modules) mod.steps=mod.steps.map((s,i)=>({id:`${course.id}.${mod.id}.${s[0]}`,type:s[1],title:s[2],content:s[3]||'',starter:s[4]||'',language:s[5]||null,tests:s[6]||null,options:s[5] instanceof Array?s[5]:null,answer:s[6]}));

// Quiz pages: 5 questions per page. Answers are stored by question id.
const quizBanks={
 'html.basic-html.h2':[
  ['h2-1','Tag mana yang biasanya dipakai untuk subjudul di bawah h1?',['h2','h3','p','strong'],'h2'],
  ['h2-2','Heading yang paling utama dalam HTML adalah…',['h1','h2','h6','header'],'h1'],
  ['h2-3','Urutan heading yang paling tepat setelah h1 adalah…',['h2','h4','p','title'],'h2'],
  ['h2-4','Tag p digunakan untuk…',['Membuat paragraf','Membuat gambar','Membuat link','Membuat heading utama'],'Membuat paragraf'],
  ['h2-5','Manakah yang merupakan heading HTML?',['<h3>Judul</h3>','<p>Judul</p>','<a>Judul</a>','<img>Judul</img>'],'<h3>Judul</h3>']
 ],
 'html.basic-html.entity':[
  ['entity-1','Bagaimana menulis simbol < di HTML tanpa dianggap sebagai awal tag?',['&lt;','&gt;','&amp;','&quot;'],'&lt;'],
  ['entity-2','Entity HTML untuk simbol > adalah…',['&gt;','&lt;','&amp;','&quot;'],'&gt;'],
  ['entity-3','Entity HTML untuk karakter & adalah…',['&amp;','&lt;','&gt;','&quot;'],'&amp;'],
  ['entity-4','Entity digunakan terutama untuk…',['Menulis karakter khusus dengan aman','Mengubah warna teks','Membuat gambar','Menjalankan JavaScript'],'Menulis karakter khusus dengan aman'],
  ['entity-5','Manakah contoh entity HTML yang benar?',['&copy;','copy;','<copy>','/copy'],'&copy;']
 ],
 'html.basic-html.alt-quality':[
  ['alt-1','Alt text seharusnya terutama…',['menjelaskan tujuan/makna gambar','berisi nama file','selalu kosong','mengulang seluruh halaman'],'menjelaskan tujuan/makna gambar'],
  ['alt-2','Atribut alt berada pada elemen…',['img','p','h1','a'],'img'],
  ['alt-3','Alt text penting karena…',['membantu pengguna memahami gambar saat tidak dapat melihatnya','membuat gambar lebih besar','mengubah format gambar','menjalankan CSS'],'membantu pengguna memahami gambar saat tidak dapat melihatnya'],
  ['alt-4','Untuk gambar dekoratif yang tidak memberi informasi, alt biasanya…',['kosong','berisi nama file','berisi seluruh deskripsi halaman','dihapus dari img'],'kosong'],
  ['alt-5','Manakah alt text yang paling baik untuk foto kucing bernama Mimi?',['Kucing putih duduk di sofa','IMG_1234.jpg','gambar','foto'],'Kucing putih duduk di sofa']
 ],
 'html.basic-html.nesting':[
  ['nest-1','Manakah struktur nesting yang benar?',['<p><strong>Halo</strong></p>','<p><strong>Halo</p></strong>','<p><strong>Halo','</strong><p>'],'<p><strong>Halo</strong></p>'],
  ['nest-2','Jika strong berada di dalam p, maka strong adalah…',['child/elemen di dalam p','parent p','atribut p','doctype'],'child/elemen di dalam p'],
  ['nest-3','Tag yang dibuka terakhir biasanya ditutup…',['terlebih dahulu','paling akhir','tidak perlu ditutup','sebelum dibuka'],'terlebih dahulu'],
  ['nest-4','Manakah nesting yang valid?',['<div><p>Halo</p></div>','<div><p>Halo</div></p>','<div><p>Halo','</p><div>'],'<div><p>Halo</p></div>'],
  ['nest-5','Nesting yang rapi membantu…',['struktur dokumen tetap benar dan mudah dipahami','mengubah warna otomatis','menambah internet','menghapus CSS'],'struktur dokumen tetap benar dan mudah dipahami']
 ],
 'javascript.js-basics.types':[
  ['types-1','Mana yang merupakan boolean?',['"true"','true','1','null'],'true'],
  ['types-2','Tipe data dari 42 dalam JavaScript adalah…',['number','string','boolean','object'],'number'],
  ['types-3','Tipe data dari "Anma" adalah…',['string','number','boolean','null'],'string'],
  ['types-4','Nilai boolean hanya memiliki…',['true dan false','0 dan 1','yes dan no','null dan undefined'],'true dan false'],
  ['types-5','Manakah nilai yang bukan string?',['25','"25"','"hello"','"true"'],'25']
 ],
 'javascript.js-advanced.promise':[
  ['promise-1','Promise merepresentasikan hasil asynchronous yang akan tersedia kemudian.',['Benar','Salah'],'Benar'],
  ['promise-2','Promise memiliki keadaan seperti pending, fulfilled, dan…',['rejected','looped','compiled','paused'],'rejected'],
  ['promise-3','then() biasanya digunakan untuk…',['menangani hasil sukses Promise','membuat CSS','menghapus HTML','membuat database'],'menangani hasil sukses Promise'],
  ['promise-4','catch() biasanya digunakan untuk…',['menangani error/rejection','membuat array','mengubah warna','membuat tag HTML'],'menangani error/rejection'],
  ['promise-5','async function mengembalikan…',['Promise','string selalu','HTML','CSS'],'Promise']
 ],
 'html.web-mastery.keyboard':[
  ['keyboard-1','Kontrol interaktif harus dapat digunakan dengan keyboard.',['Benar','Salah'],'Benar'],
  ['keyboard-2','Tombol HTML native dapat menerima fokus keyboard secara default.',['Benar','Salah'],'Benar'],
  ['keyboard-3','Accessibility keyboard membantu pengguna yang…',['mengandalkan keyboard atau teknologi bantu','hanya memakai mouse','hanya memakai layar besar','tidak memakai browser'],'mengandalkan keyboard atau teknologi bantu'],
  ['keyboard-4','Elemen native yang tepat biasanya lebih baik daripada membuat kontrol dari div karena…',['semantics dan interaksi keyboard sudah tersedia','div selalu lebih cepat','div tidak bisa diberi CSS','native element tidak bisa diklik'],'semantics dan interaksi keyboard sudah tersedia'],
  ['keyboard-5','Manakah kontrol yang tepat untuk aksi tombol?',['<button>Simpan</button>','<div>Simpan</div>','<span>Simpan</span>','<p>Simpan</p>'],'<button>Simpan</button>']
 ]
};
for (const course of courses) for (const mod of course.modules) for (const step of mod.steps) {
  if(step.type==='quiz'){
    const key=`${course.id}.${mod.id}.${step.id.split('.').pop()}`;
    const bank=quizBanks[key];
    step.questions=(bank||[[step.id,step.content,step.options||[],step.answer]]).map(([id,prompt,options,answer])=>({id,prompt,options,answer}));
  }
}
