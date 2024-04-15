const portfolioData = {
        0: {
            'title': 'Game Dev Projects',
            'links': {
                0: {
                    'name': 'Google Drive Link',
                    'link': 'https://drive.google.com/drive/folders/1T-IrNP1YWW_PCWvIdMJDVKOAGj0iaIBb?usp=drive_link',
                    'icons': 'bi-box-arrow-up-right',
                },
            },
            'body' : `Here are a couple of projects I've worked on as assignments for Game Development.`,
            'img': `/assets/unity_logo.png`,
        },
        1: {
            'title': 'Flutter Projects',
            'links': {
                0: {
                    'name': 'Functional Flutter Application',
                    'link': 'https://github.com/EvacionSaraak/ITElective5Exam',
                    'icons': 'bi-box-arrow-up-right',
                },
            },
            'body' : `It was a bit of a struggle to create this file, but as a result, I'm immensely familiar with Flutter as a tool.`,
            'img': `https://web-strapi.mrmilu.com/uploads/flutter_logo_470e9f7491.png`,
        },
        2: {
            'title': 'My Magnum Opus',
            'links': {
                0: {
                    'name': 'My Finest Work',
                    'link': 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
                    'icons': 'bi-box-arrow-up-right',
                },
            },
            'body' : `I've spent a long time on this portfolio`,
            'img': `./assets/chaldea_logo.png`,
        },
    }

const aboutData = {
        0: {
            'title': 'Github Accounts',
            'links': {
                0: {
                    'name': 'Primary',
                    'link': 'https://github.com/EvacionSaraak',
                    'icons': 'bi-box-arrow-up-right',
                },
                1: {
                    'name': 'Secondary',
                    'link': 'https://github.com/Evacion',
                    'icons': 'bi-box-arrow-up-right',
                },
            },
            'body' : 'Contains information pertaining to Github Activities and Contributions.',
            'img': 'https://avatars.githubusercontent.com/u/54382521?v=4',
        },
        1: {
            'title': 'LinkedIn Account',
            'links': {
                0: {
                    'name': 'LinkedIn',
                    'link': 'https://www.linkedin.com/in/ray-james-amer-gonzales-3a6215136/',
                    'icons': 'bi-box-arrow-up-right',
                },
            },
            'body' : 'Here is a look into my work history, albeit somewhat limited in scope.',
            'img': 'https://media.licdn.com/dms/image/C5603AQGM0w67eOwpug/profile-displayphoto-shrink_800_800/0/1661020223486?e=1714608000&v=beta&t=XdIMZDqSCUH_E0zvswXtoY4LiLuPe6qRHZxiyoMNqjw',
        },
        2: {
            'title': 'Business Email',
            'links': {
                0: {
                    'name': 'Email',
                    'link': 'rayjamesg2000@gmail.com',
                    'icons': 'bi-clipboard',
                },
            },
            'body' : 'My contact email for all professional inquiries and future transactions',
            'img': 'https://lh3.googleusercontent.com/a/ACg8ocJkQjIvwuT56KdTrYCcnTQb6jz7HVcF700KlSfDN5xzeQ=s288-c-no',
        },
        3: {
            'title': 'Discord',
            'links': {
                0: {
                    'name': 'Discord',
                    'link': 'EvacionSaraak#8823',
                    'icons': 'bi-clipboard',
                },
            },
            'body' : 'If you cannot reach me via LinkedIn or Email, then Discord is always a viable option.',
            'img': 'https://cdn.discordapp.com/avatars/377759061812183040/18a5b0fc5c2c0201287414830326afe2.webp?size=128',
        },
        4: {
            'title': 'Yugioh?',
            'links': {
                0: {
                    'name': 'Top 16',
                    'link': 'https://media.discordapp.net/attachments/1140352616736489634/1140359549472215151/LCS_Week_11_Top_16.png?ex=65ee0397&is=65db8e97&hm=e48e06ccd666ed731d73779e1bed82484b528253b6a8f7110749e5e97e55fb0d&=&format=webp&quality=lossless&width=630&height=472',
                    'icons': 'bi-box-arrow-up-right',
                },
            },
            'body' : `Ran out of things to put, so here's an image of when I made top 16 in a tournament using World Chalice.`,
            'img': 'https://media.discordapp.net/attachments/1140352616736489634/1140359549472215151/LCS_Week_11_Top_16.png?ex=65ee0397&is=65db8e97&hm=e48e06ccd666ed731d73779e1bed82484b528253b6a8f7110749e5e97e55fb0d&=&format=webp&quality=lossless&width=630&height=472',
        },
        5: {
            'title': 'Yugioh Again?',
            'links': {
                0: {
                    'name': 'Tops 8',
                    'link': 'https://media.discordapp.net/attachments/1140352616736489634/1188229065317036082/LCS_Week_16_Top_16.png?ex=65ecd20d&is=65da5d0d&hm=2abd12b49ffc94d51997ad8f9cef11e4205171ef7d7e51cdb766dade26b667cf&=&format=webp&quality=lossless&width=466&height=350',
                    'icons': 'bi-box-arrow-up-right',
                },
            },
            'body' : `And uh... I guess here's another Top I got, using Penguins, after trying for several events.`,
            'img': 'https://media.discordapp.net/attachments/1140352616736489634/1188229065317036082/LCS_Week_16_Top_16.png?ex=65ecd20d&is=65da5d0d&hm=2abd12b49ffc94d51997ad8f9cef11e4205171ef7d7e51cdb766dade26b667cf&=&format=webp&quality=lossless&width=466&height=350',
        },
        6: {
            'title': 'Yugioh a Third Time!',
            'links': {
                0: {
                    'name': 'Top 16',
                    'link': 'https://media.discordapp.net/attachments/1140352616736489634/1195820900965163199/LCS_Week_17_Top_16.png?ex=65ecc100&is=65da4c00&hm=eda24566fa3b1efe3684e50d784d56824cc844cf2a068c638145ab213a126275&=&format=webp&quality=lossless&width=630&height=472',
                    'icons': 'bi-box-arrow-up-right',
                },
            },
            'body' : `And Another One. Because Yeah I Like Yugioh. This one directly after the previous one, using Pend Counter Fairies`,
            'img': 'https://media.discordapp.net/attachments/1140352616736489634/1195820900965163199/LCS_Week_17_Top_16.png?ex=65ecc100&is=65da4c00&hm=eda24566fa3b1efe3684e50d784d56824cc844cf2a068c638145ab213a126275&=&format=webp&quality=lossless&width=630&height=472',
        },
        
    }

module.exports = {aboutData, portfolioData}