window.addEventListener('load', function() {

    //console.log(document.getElementById('demo').innerHTML);

    let vardas = 'Rokas ';
    let pavarde = 'Lomsargis ';
    let kursas = 4 ;
    let kurMokosi = 'KTU ';
    let pazymiai = [7,4,5,];

    console.log(vardas + pavarde + " mokosi " + kurMokosi + kursas + " kurse " + " jo pazymiai: " + pazymiai);

    console.log("vardas yra " + typeof vardas + "\n" +
        "pavarde yra " + typeof pavarde + "\n" +
        "kursas yra " + typeof kursas + "\n" +
        "kurMokosi yra " + typeof kurMokosi + "\n" +
        "pazymiai yra " + typeof pazymiai);

    var studentas = {
        name: vardas,
        lastName: pavarde,
        schoolYear: kursas,
        school: kurMokosi,
        grades: pazymiai
    };

    var studentas2 = {
        name: "VardAntrasStud",
        lastName: "PavAntrasStud",
        schoolYear: 1,
        school: "KTU",
        grades: [1,9,2]};

        var studentas3 = {
            name: "VardTreciasStud",
            lastName: "PavTreciasStud",
            schoolYear: 2,
            school: "VGTU",
            grades: [5,4,5]};

        var studentas4 = {
            name: "VardKetvirtasStud",
            lastName: "PavKetvirtasStud",
            schoolYear: 2,
            school: "VDU",
            grades: [2,3,2]};

        var studentas5 = {
            name: "VardPenktasStud",
            lastName: "PavPenktasStud",
            schoolYear: 1,
            school: "RTU",
            grades: [5,7,3]};

    var studentai = [studentas, studentas2, studentas3, studentas4, studentas5,
        {name: "VardPenktasStud",
        lastName: "PavPenktasStud",
        schoolYear: 1,
        school: "RTU",
        grades: [5,7,3]}];

    console.log(studentai[5]);

    function spausdintiStudenta(studentas){
        console.log(studentas.firstName + studentas.lastName + " mokosi " + studentas.school + studentas.schoolYear + " kurse " + " jo pazymiai: " + studentas.grades)
    }

    // 8 uzduotis
    //for

    let A = [1,3,6,5,7,2,2,4,4,8];

    function sudeti(masyvas, tipas){
        let masyvoIlgis = masyvas.length;

        if (masyvoIlgis < 1 ){
            return 'Per mazai duomenu masyve'
        }

        if (tipas === 'even'){
            for (let i = 0; masyvoIlgis < i; ++i){
                let pazymys = masyvas[i];
                if (pazymys % 2 === 0){
                    suma += pazymys;
                }
            }
        }

        if (tipas === 'odd'){

        }

        return 'nenurodete tipo (even ar odd)'
    }





});




