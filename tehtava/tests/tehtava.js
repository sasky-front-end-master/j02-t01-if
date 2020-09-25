import { Selector } from 'testcafe';

fixture `ehtorakenne`
    .page `../tehtava.html`;

test('Luku kymmenkertaistuu', async t => {
   const kentta = Selector("#kentta");
   const nappi = Selector("#nappi");
   const syote = Selector("#syote");
   const tulos = Selector("#tulos");
   const luku = Math.floor(Math.random()*100);
   const syoteluku = luku.toString();
   const tulosluku = (luku * 10).toString();

   await t
     .typeText('#kentta', syoteluku)
     .click(nappi)
     .expect(syote.textContent).eql(syoteluku)
     .expect(tulos.textContent).eql(tulosluku);
});

test('Luku tuplaantuu', async t => {
   const kentta = Selector("#kentta");
   const nappi = Selector("#nappi");
   const syote = Selector("#syote");
   const tulos = Selector("#tulos");
   const luku = Math.floor(Math.random()*100) + 100;
   const syoteluku = luku.toString();
   const tulosluku = (luku * 2).toString();

   await t
     .typeText('#kentta', syoteluku)
     .click(nappi)
     .expect(syote.textContent).eql(syoteluku)
     .expect(tulos.textContent).eql(tulosluku);
});