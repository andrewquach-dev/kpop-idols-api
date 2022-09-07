const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 8000;

app.use(cors());
app.use(express.static(__dirname + '/public'))

let idols = {
    "joy": {
        'stageName': "joy",
        'birthName': 'Park Soo Young',
        'position': ['Lead Rapper', 'Sub Vocalist'],
        'birthday': 'September 3, 1996',
        'mbti': 'INFP',
        image: 'https://kprofiles.com/wp-content/uploads/2016/04/0062dQFugy1h0zuy86qtpj32e3388x6q_auto_x2-593x800.png'
    },
    "wendy": {
        'stageName': 'wendy',
        'birthName': 'Son Seung Wan',
        'position': ['Main Vocalist'],
        'birthday': 'February 21, 1994',
        'mbti': 'ISFP',
        image: 'https://kprofiles.com/wp-content/uploads/2016/04/FQPHv91XEAYR2T9_auto_x2-900x648.jpg'
    },
    "irene": {
        'stageName': 'irene',
        'birthName': 'Bae Ju Hyun',
        'position': ['Leader', 'Main Rapper', 'Lead Dancer', 'Sub Vocalist', 'Visual', 'Center'],
        'birthday': 'March 29, 1991',
        'mbti': 'INFJ',
        image: 'https://kprofiles.com/wp-content/uploads/2016/04/FQMs40nVIAEpxYp_auto_x2-900x648.jpg'
    }
    ,
    "seulgi": {
        'stageName': 'seulgi',
        'birthName': 'PaKang Seul Girk',
        'position': ['Main Dancer', 'Lead Vocalist'],
        'birthday': 'February 10, 1994', 'mbti': 'ISFP',
        image: 'https://kprofiles.com/wp-content/uploads/2016/04/0062dQFugy1h0z6e03udpj32de37pe84-590x800.png'
    }
    ,
    "yeri": {
        'stageName': 'yeri',
        'birthName': 'Kim Ye Rim',
        'position': ['Sub Vocalist', 'Sub Rapper', 'Maknae'],
        'birthday': 'September 3, 1996',
        'mbti': 'INFP',
        image: 'https://kprofiles.com/wp-content/uploads/2016/04/IMG_6294_auto_x2-900x648.jpg'
    }
    , "jihyo": {
        'stageName': 'jihyo',
        'birthName': 'Park Ji Hyo',
        'position': ['Leader', 'Main Vocalist'],
        'birthday': 'February 1, 1997',
        'mbti': 'ISFP-T',
        image: 'https://kprofiles.com/wp-content/uploads/2016/05/Jihyo-900x601.jpg'
    }
    , "nayeon": {
        'stageName': 'nayeon',
        'birthName': 'Im Na Yeon',
        'position': ['Lead Vocalist', 'Lead Dancer', 'Center', 'Face of the Group'],
        'birthday': 'September 22, 1995',
        'mbti': 'ISTP-A',
        image:'https://kprofiles.com/wp-content/uploads/2016/05/Nayeon-900x600.jpg'
    }
    ,
    "park": {
        'stageName': 'park',
        'birthName': 'Park',
        'position': ['Trainee'],
        'birthday': 'September 3, 1996',
        'mbti': 'N/A',
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIIeNZ-NOv0PRSi8eRp5eeBsJKTpr5AMatrg&usqp=CAU'
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
});

app.get('/api/groups/:groupName', (request, response) => {
    const groupName = request.params.groupName.toLowerCase();
    console.log(groupName);
    if (groups[groupName]) {
        response.json(groups[groupName]);
    } else {
        response.json(groups['secret']);
    }
});

app.get('/api/randomIdol', (request, response) => {
    const keys = Object.keys(idols);
    const randomIdol = keys[Math.floor(Math.random() * keys.length)];
    console.log(idols[randomIdol]);
    response.json(idols[randomIdol]);
});

app.listen(process.env.PORT || PORT, () => {
    console.log(`Server running on port ${PORT}`);
});


