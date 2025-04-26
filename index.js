


const membros = [
    {
        id: 1,
        nome: "João KKKKKKK",
        desc:'Aleatório, burro kkkk toca punhheta, pescador',
        imagem: 'batata.jpg',
        
    
    },
    {
        id: 2,
        nome: "Douguito",
        desc:'Bebado alemão kkkkk coiznheiro',
        imagem: 'batata.jpg',

    },
    {
        id: 3,
        nome: "Babis",
        desc:'Cantorinha kkkkk',
        imagem: 'batata.jpg',

    },
    {
        id: 4,
        nome: "Wanderwall",
        desc:'Votou no bozonaro, gosta de bagrekkkkk',
        imagem: 'wander.jpg',

    } 
    
]

console.log(membros)


function quemEuSou() {
    
    const num = Math.floor(Math.random() * membros.length)
    const membro = membros[num]
    const nome = document.querySelector('.nome')
    const desc = document.querySelector('.desc')
    const imagem = document.querySelector('#imagemMembro')
    imagem.style.display = 'block'
    imagem.src = 'images/' + membro.imagem
    nome.innerHTML = membro.nome
    desc.innerHTML = membro.desc
    // document.getElementById('imagemMembro').src = 'images/' + membro.imagem;

    console.log(membro)
    return membro
}