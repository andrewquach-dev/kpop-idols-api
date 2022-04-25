const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 8000;

app.use(cors());

let idols = {
    'joy': {
        'birthName': 'Park Soo Young',
        'position': ['Lead Rapper', 'Sub Vocalist'],
        'birthday': 'September 3, 1996',
        'mbti': 'INFP'
    },
    'wendy': {
        'birthName': 'Son Seung Wan',
        'position': ['Main Vocalist'],
        'birthday': 'February 21, 1994',
        'mbti': 'ISFP'
    },
    'irene': {
        'birthName': 'Bae Ju Hyun',
        'position': ['Leader', 'Main Rapper', 'Lead Dancer', 'Sub Vocalist', 'Visual', 'Center'],
        'birthday': 'March 29, 1991',
        'mbti': 'INFJ'
    }
    ,

    'seulgi': {
        'birthName': 'PaKang Seul Girk',
        'position': ['Main Dancer', 'Lead Vocalist'],
        'birthday': 'February 10, 1994', 'mbti': 'ISFP'
    }
    ,

    'yeri': {
        'birthName': 'Kim Ye Rim',
        'position': ['Sub Vocalist', 'Sub Rapper', 'Maknae'],
        'birthday': 'September 3, 1996',
        'mbti': 'INFP'
    }
    , 'jihyo': {
        'birthName': 'Park Ji Hyo',
        'position': ['Leader', 'Main Vocalist'],
        'birthday': 'February 1, 1997',
        'mbti': 'ISFP-T'
    }
    ,

    'nayeon': {
        'birthName': 'Im Na Yeon',
        'position': ['Lead Vocalist', 'Lead Dancer', 'Center', 'Face of the Group'],
        'birthday': 'September 22, 1995',
        'mbti': 'ISTP-A'
    }
    ,

    'park': {
        'birthName': 'Park',
        'position': ['Trainee'],
        'birthday': 'September 3, 1996',
        'mbti': 'N/A'
    }
}
let groups = {
    'red velvet': {
        'membersCount': 5,
        'company': 'SM',
        'fandomName': 'ReVeluv'
    },
    'twice': {
        'membersCount': 9,
        'company': 'YG',
        'fandomName': 'Once'
    },
    'secret': {
        'membersCount': 1,
        'company': 'YG',
        'fandomName': 'N/A'
    }
}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html');
});


app.get('/api/idols/:idolName', (request, response) => {
    const idolName = request.params.idolName.toLowerCase();
    console.log(idolName);
    if (idols[idolName]) {
        response.json(idols[idolName]);
    } else {
        response.json(idols['park']);
    }
})
app.get('/api/groups/:groupName', (request, response) => {
    const groupName = request.params.groupName.toLowerCase();
    console.log(groupName);
    if (groups[groupName]) {
        response.json(groups[groupName]);
    } else {
        response.json(groups['secret']);
    }
})
app.listen(process.env.PORT || PORT, () => {
    console.log(`Server running on port ${PORT}`);
});


