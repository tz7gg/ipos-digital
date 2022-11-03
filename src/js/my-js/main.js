window.addEventListener('load', () => {
    const quares = document.querySelectorAll('.container__quare-items__quare')
    const quaresWrap = document.querySelector('.container__quare-items')
    const circleWrap = document.querySelector('.container__circle-wrap')
    const circleItem = document.querySelector('.container__circle-wrap__item')
    const btn = document.querySelector('.container__circle-wrap__item__text')

    quares.forEach(el => {
        setTimeout(() => {
            el.classList.add('animate-position')
        }, 1000)
    })

    setTimeout(() => {
        circleWrap.classList.remove('dn')
    }, 2500)

    setTimeout(() => {
        quaresWrap.classList.add('dn')
        circleItem.classList.add('animate')
    }, 3000)

    setTimeout(() => {
        circleItem.classList.add('rotate')
    }, 6000)

    setTimeout(() => {
        btn.onclick = () => {
            console.log('dada');
        }
    }, 7000)

})