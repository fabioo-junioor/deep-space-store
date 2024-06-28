import { http, HttpResponse } from 'msw';

const handlers = [
    http.get('https://api.deepspacestore.com/offers/:offer_code', ({ params }) => {
        const { offer_code } = params;
        if(offer_code == '111'){
            return HttpResponse.json({
                offer_code: offer_code,
                name: 'Tênis',
                description: 'Lorem Ipsum é um texto modelo da indústria tipográfica e de impressão.',
                price: 400,
                img: 'https://images.vexels.com/content/262751/preview/sneakers-color-stroke-80s-482a17.png',
                paymentMethods: ['boleto', 'pix', 'cartao'],
                numberInstallments: 2
            }, {status: 200})
        }
        if(offer_code == '222'){
            return HttpResponse.json({
                offer_code: offer_code,
                name: 'Chinelo',
                description: 'Lorem Ipsum é um texto modelo da indústria tipográfica e de impressão.',
                price: 30,
                img: 'https://cdn.b4c.inf.br/storage/fcwdistribuidora/1000/chinelo-havaianas-azul-naval-3940-1704828629.jpg',
                paymentMethods: ['boleto', 'pix'],
                numberInstallments: 4
            }, {status: 200})
        }
        if(offer_code == '333'){
            return HttpResponse.json({
                offer_code: offer_code,
                name: 'Camiseta',
                description: 'Lorem Ipsum é um texto modelo da indústria tipográfica e de impressão.',
                price: 200,
                img: 'https://nerdstore.com.br/wp-content/uploads/2022/10/b2b12f0f778cc0a0b1356a8170006c90.jpg',
                paymentMethods: ['boleto'],
                numberInstallments: 10

            }, {status: 200})
        }
        return HttpResponse.json({
            messageError: 'Produto não encontrado'

        }, {status: 400})

    }),
    http.post('https://api.deepspacestore.com/offers/:offer_code/create_order', async ({ request, params }) => {
        const { offer_code } = params;
        const dataBuy = await request.json();
        if(verifyCpf(dataBuy.dataPayment.cpf)){
            return HttpResponse.json({
                offer_code: offer_code,
                codeBuy: '5X33S',
                dataPersonal: {
                    name: dataBuy.dataPersonal.name,
                    fone: dataBuy.dataPersonal.fone

                },
                dataDelivery: {
                    zipCode: dataBuy.dataDelivery.zipCode,
                    street: dataBuy.dataDelivery.street

                },
                dataPayment: {
                    typePayment: dataBuy.dataPayment.typePayment,
                    cpf: dataBuy.dataPayment.cpf,
                    numberInstallments: dataBuy.dataPayment.numberInstallments

                }
            }, {status: 201})
        }
        return HttpResponse.json({
            messageError: 'CPF invalido'

        }, {status: 400})

    })
];

const verifyCpf = (cpf) => {
    if(cpf == ('000.000.000-00' || '00000000000')){
        return false;
    }
    return true;
}

export {
    handlers,
    verifyCpf
}