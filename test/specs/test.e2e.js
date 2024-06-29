import { browser, $ } from '@wdio/globals';
import assert from 'assert';

describe('Product buy flow', () => {
    it('must complete the buy flow', async () => {
        await browser.url('http://localhost:5173');
        await $("button=Comprar").click();
        await browser.pause(3000);

        await $('#fullName').setValue('Fabio junior');
        await $('#email').setValue('fabio@inf.com');
        await $('#phone').setValue('55999955566');
        await $('#btnConfirmDataPersonal').click();
        await browser.pause(3000);
        
        await $('#cep').setValue('97200000');
        await $('#number').setValue('1212a');
        await browser.pause(1000);
        await $('#street').setValue('rua maria');
        await $('#district').setValue('centro');
        await $('#btnConfirmDataDelivery').click();
        await browser.pause(3000);
        
        await $('#pix').click();
        await $('#cpf').setValue('11111111111');
        await $('#btnConfirmDataPaymentOthes').click();
        await browser.pause(3000);
        
        assert.strictEqual(await $('h2').getText(), 'Parabéns pela compra!')
        await browser.pause(3000);
       
        
    })
})

