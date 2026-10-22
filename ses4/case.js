const wives = [
    {
        "name" : "Siti Mirna",
        "phone" : "029292828112"
    },
    {
        "name" : "Bertania",
        "phone" : "092928281125"
    }
];
const students = [
    {
        "name" : "Anton Bareuh",
        "address": "Bandung"
    },
    {
        "name" : "Adi Hilap",
        "address": "Sukabumi"
    },
    {
        "name" : "Regith Nurmala",
        "address": [
            {
                "city" : "Sukabumi City",
                "province": "West Java"
            },
            {
                "city" : "Senayan",
                "Province": "DKI Jakarta"
            }
        ],
        "wives": wives
    }
]
let totalmarried = 0;
let totalsingle = 0;
for (let i in students ) {
    if (students[i].wives) { 
        console.log(students[i].name + " : is married");
        totalmarried++;
    } else {
        console.log(students[i].name + " is single");
        totalsingle++;
    }
}
console.log("Total Married : " + totalmarried);
console.log("Total Single : " + totalsingle);