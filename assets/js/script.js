function menuShow(){
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
    } else {
        menuMobile.classList.add('open');
    }

}

    // Botão ver mais projetos

    function verMais() {
        let retrair = document.getElementById('retrair');
        let mais = document.getElementById('my-projetos-retraido');
        let btnVerMais = document.getElementById('btnVerMais');

        if(retrair.style.display === 'none'){
            mais.style.display = 'none';
            retrair.style.display = 'flex';
            btnVerMais.innerHTML = 'Ver Mais';

        }else {
            mais.style.display = 'flex';
            retrair.style.display = 'none';
            btnVerMais.innerHTML = 'Ver Menos';

        }
    }