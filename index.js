// function calculate(value) {
//     return value < 2 ? value : calculate(value - 1) + calculate(value - 2);
// }

// console.log(calculate(3));

// parameter birthday dapat berupa miliseconds ataupun date string
const myAge = (birthday) => {
    const birtday = new Date(birthday);
    const today = Date.now(); // today menghasilkan nilai miliseconds saat ini

    const diff_ms = today - birtday.getTime(); // menghitung selisih nilai miliseconds hari ini dan tanggal lahir
    const diffDate = new Date(diff_ms);

    return diffDate.getFullYear() - 1970; // 1970 adalah representasi 0 dari miliseconds
};

console.log(myAge("2000-01-22")); // 21 tahun

function cekKode(kode) {
    if (ubahElementNomor() === 1) {
        if (kode === 0) {
            console.log("A");
            return `A`;
        } else {
            console.log("E");
            return `E`;
        }
    } else if (ubahElementNomor() === 2) {
        if (kode === 0) {
            console.log("B");
            return `B`;
        } else {
            console.log("D");
            return `D`;
        }
    } else if (ubahElementNomor() === 3) {
        if (kode === 0) {
            console.log("E");
            return `E`;
        } else {
            console.log("B");
            return `B`;
        }
    } else if (ubahElementNomor() === 4) {
        if (kode === 0) {
            console.log("D");
            return `D`;
        } else {
            console.log("E");
            return `E`;
        }
    } else if (ubahElementNomor() === 5) {
        if (kode === 0) {
            console.log("E");
            return `E`;
        } else {
            console.log("C");
            return `C`;
        }
    } else if (ubahElementNomor() === 6) {
        if (kode === 0) {
            console.log("B");
            return `B`;
        } else {
            console.log("E");
            return `E`;
        }
    } else if (ubahElementNomor() === 7) {
        if (kode === 0) {
            console.log("C");
            return `C`;
        } else {
            console.log("A");
            return `A`;
        }
    } else if (ubahElementNomor() === 8) {
        if (kode === 0) {
            console.log("E");
            return `E`;
        } else {
            console.log("A");
            return `A`;
        }
    } else if (ubahElementNomor() === 9) {
        if (kode === 0) {
            console.log("B");
            return `B`;
        } else {
            console.log("C");
            return `C`;
        }
    } else if (ubahElementNomor() === 10) {
        if (kode === 0) {
            console.log("A");
            return `A`;
        } else {
            console.log("D");
            return `D`;
        }
    } else if (ubahElementNomor() === 11) {
        if (kode === 0) {
            console.log("B");
            return `B`;
        } else {
            console.log("A");
            return `A`;
        }
    } else if (ubahElementNomor() === 12) {
        if (kode === 0) {
            console.log("D");
            return `D`;
        } else {
            console.log("E");
            return `E`;
        }
    } else if (ubahElementNomor() === 13) {
        if (kode === 0) {
            console.log("A");
            return `A`;
        } else {
            console.log("C");
            return `C`;
        }
    } else if (ubahElementNomor() === 14) {
        if (kode === 0) {
            console.log("B");
            return `B`;
        } else {
            console.log("E");
            return `E`;
        }
    } else if (ubahElementNomor() === 15) {
        if (kode === 0) {
            console.log("A");
            return `A`;
        } else {
            console.log("D");
            return `D`;
        }
    } else if (ubahElementNomor() === 16) {
        if (kode === 0) {
            console.log("E");
            return `E`;
        } else {
            console.log("B");
            return `B`;
        }
    } else if (ubahElementNomor() === 17) {
        if (kode === 0) {
            console.log("D");
            return `D`;
        } else {
            console.log("C");
            return `C`;
        }
    } else if (ubahElementNomor() === 18) {
        if (kode === 0) {
            console.log("A");
            return `A`;
        } else {
            console.log("B");
            return `B`;
        }
    } else if (ubahElementNomor() === 19) {
        if (kode === 0) {
            console.log("E");
            return `E`;
        } else {
            console.log("D");
            return `D`;
        }
    } else if (ubahElementNomor() === 20) {
        if (kode === 0) {
            console.log("D");
            return `D`;
        } else {
            console.log("C");
            return `C`;
        }
    } else if (ubahElementNomor() === 21) {
        if (kode === 0) {
            console.log("B");
            return `B`;
        } else {
            console.log("D");
            return `D`;
        }
    } else if (ubahElementNomor() === 22) {
        if (kode === 0) {
            console.log("C");
            return `C`;
        } else {
            console.log("A");
            return `A`;
        }
    } else if (ubahElementNomor() === 23) {
        if (kode === 0) {
            console.log("C");
            return `C`;
        } else {
            console.log("D");
            return `D`;
        }
    } else if (ubahElementNomor() === 24) {
        if (kode === 0) {
            console.log("B");
            return `B`;
        } else {
            console.log("C");
            return `C`;
        }
    } else if (ubahElementNomor() === 25) {
        if (kode === 0) {
            console.log("D");
            return `D`;
        } else {
            console.log("B");
            return `B`;
        }
    } else if (ubahElementNomor() === 26) {
        if (kode === 0) {
            console.log("E");
            return `E`;
        } else {
            console.log("C");
            return `C`;
        }
    } else if (ubahElementNomor() === 27) {
        if (kode === 0) {
            console.log("A");
            return `A`;
        } else {
            console.log("B");
            return `B`;
        }
    } else if (ubahElementNomor() === 28) {
        if (kode === 0) {
            console.log("C");
            return `C`;
        } else {
            console.log("E");
            return `E`;
        }
    } else if (ubahElementNomor() === 29) {
        if (kode === 0) {
            console.log("D");
            return `D`;
        } else {
            console.log("A");
            return `A`;
        }
    } else if (ubahElementNomor() === 30) {
        if (kode === 0) {
            console.log("E");
            return `E`;
        } else {
            console.log("A");
            return `A`;
        }
    }
}

function tipeBahasaCinta() {
    let tipe = [
        {
            "Quality Time (Kualitas Waktu Bersama)": "Dia akan merasa dicintai saat pasangan meluangkan waktunya untuknya.",
            "How to communicate": "Untuk mereka yang butuh perhatian penuh, pasangan wajib menghabiskan waktu tanpa distraksi seperti gadget, televisi atau lainnya.",
            "Actions to take": "Menghabiskan waktu bersama atau melakukan kegiatan berdua. Planning liburan bersama, nonton, makan malam berdua, atau sekedar leyeh-leyeh sambil mengobrol berjam-jam.",
            "Things to Avoid": "Main hp saat dia berbicara, terdistraksi dengan hal-hal yang tidak penting, terlalu sibuk dan tidak sempat meluangkan waktu untuknya.",
        },
        {
            "Receiving Gifts (Hadiah)": "Mereka akan senang ketika mendapat hadiah dari pasangannya. Apapun bentuknya, besar atau kecil, murah atau mahal, banyak atau sedikit.",
            "How to communicate": "Mereka akan merasa dimengerti, diperhatikan, dan dihargai lebih dari segala pengorbanan yang diusahakan olehmu untuk memberikan hadiah tersebut kepadanya.",
            "Actions to take": "Cari tau sesuatu yang dia suka, sering-sering kasih dia surprise kecil, gaperlu nunggu momen, tiba-tiba kasih bunga aja udah bikin dia seneng, atau bawakan dia oleh-oleh saat kamu pulang dari suatu tempat.",
            "Things to Avoid": "Lupa momen-momen penting saat ultah atau anniversary. Tidak antusias atau tidak mengapresiasi ketika dia memberikan hadiah.",
        },
        {
            "Act of Service (Pelayanan)": "Mereka akan merasa dicintai ketika pasangannya melakukan sesuatu untuk membantu meringankan beban mereka.",
            "How to communicate": "Rajin-rajinlah membantu dia, dari hal-hal kecil sekalipun, pasti akan sangat diapresiasi.",
            "Action to take": "Membuatkan bekal/masak untuknya, tawarkan diri untuk membantu pekerjaannya. Mereka akan senang bila melihat pasangannya mengeluarkan usaha untuk membahagiakannya.",
            "Things to avoid": "Malas-malasan, menunda-nunda pekerjaan, tidak bersedia membantu pasangan.",
        },
        {
            "Physical Touch (Sentuhan Fisik)": "Tidak selamanya berkaitan dengan aktivitas seksual. Orang dengan bahasa cinta ini merasa sangat disayang kalau kepalanya diusap, bahunya dipijat atau dipeluk.",
            "How to communicate": "Mereka akan merasa dicintai dengan ungkapan non-verbal seperti body language atau sentuhan dari pasangannya.",
            "Action to take": "Memegang tangannya dengan lembut, memeluk dari belakang, membelai rambutnya, dan lain sebagainya",
            "Things to avoid": "Cuek dan tidak mesra, bersikap kasar, bahkan sampai memukulnya.",
        },
        {
            "Words of Affirmation (Pujian atau Kalimat-Kalimat Membangun)": "Mereka akan merasa sangat dicintai pasangannya ketika memberikan pujian atau mengatakan bahwa kita mencintainya.",
            "How to communicate": "Menggunakan bahasa cinta lewat ungkapan kata-kata paling senang mendengar ekspresi verbal seperti “i love you” atau ”i’m proud of you”.",
            "Action to take": "Puji dia, apresiasi setiap hal yang dia lakukan untukmu, katakan bahwa kamu mencintainya. Send unexpected note/texts. As simple as “Thank you” & “I Love You” aja udah bikin mereka senang.",
            "Things to avoid": "Berbicara kasar, tidak mengapresiasi usahanya, jarang memuji, jarang berterimakasih baik hal kecil maupun hal besar.",
        },
    ];
    return tipe;
}
