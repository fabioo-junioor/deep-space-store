import { http, HttpResponse } from 'msw';

const handlers = [
    http.get('https://api.deepspacestore.com/offers/:offer_code', ({ params }) => {
        const { offer_code } = params;
        if(offer_code == '111'){
            return HttpResponse.json({
                offer_code: offer_code,
                name: 'Tênis',
                description: ' Lorem Ipsum é um texto modelo da indústria tipográfica e de impressão. O Lorem Ipsum tem vindo a ser o texto padrão usado por estas indústrias desde o ano de 1500, quando uma misturou os caracteres de um texto para criar um espécime de livro.',
                price: 400,
                img: 'https://images.vexels.com/content/262751/preview/sneakers-color-stroke-80s-482a17.png'
            })
        }
        if(offer_code == '222'){
            return HttpResponse.json({
                offer_code: offer_code,
                name: 'Chinelo',
                description: ' Lorem Ipsum é um texto modelo da indústria tipográfica e de impressão. O Lorem Ipsum tem vindo a ser o texto padrão usado por estas indústrias desde o ano de 1500, quando uma misturou os caracteres de um texto para criar um espécime de livro.',
                price: 30,
                img: 'https://cdn.b4c.inf.br/storage/fcwdistribuidora/1000/chinelo-havaianas-azul-naval-3940-1704828629.jpg'
            })
        }
        if(offer_code == '333'){
            return HttpResponse.json({
                offer_code: offer_code,
                name: 'Camiseta',
                description: ' Lorem Ipsum é um texto modelo da indústria tipográfica e de impressão. O Lorem Ipsum tem vindo a ser o texto padrão usado por estas indústrias desde o ano de 1500, quando uma misturou os caracteres de um texto para criar um espécime de livro.',
                price: 200,
                img: 'https://nerdstore.com.br/wp-content/uploads/2022/10/b2b12f0f778cc0a0b1356a8170006c90.jpg'
            })
        }

    }),
    http.post('https://api.deepspacestore.com/offers/:offer_code/create_order', ({ request, params }) => {
        const { offer_code } = params;
        const { dataUser } = request.body;
        return HttpResponse.json({
            offer_code: offer_code,
            data: dataUser
        })
    })
];

export {
    handlers
}