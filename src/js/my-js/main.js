window.addEventListener('load', () => {
    const quares = document.querySelectorAll('.container__quare-items__quare')
    const quaresWrap = document.querySelector('.container__quare-items')
    const circleWrap = document.querySelector('.container__circle-wrap')
    const circleItem = document.querySelector('.container__circle-wrap__item')

    const form = document.querySelector('.container__form')
    const formWrap = document.querySelector('.container__form__wrap')

    const formBtns = document.querySelectorAll('.container__form__wrap__select__btn')

    const mark = document.querySelector('.mark')
    const model = document.querySelector('.model')
    const year = document.querySelector('.year')

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
        circleItem.onclick = () => {
            form.classList.remove('dn')
            setTimeout(() => {
                formWrap.classList.add('active')
            }, 50)
        }
    }, 7000)

    formBtns.forEach(function(el) {
        const parent = el.parentElement
        el.onclick = () => {
            const wrap = parent.querySelector('.container__form__wrap__select__wrap')
            const items = wrap.querySelectorAll('.container__form__wrap__select__wrap__item')
            const btn = parent.querySelector('.container__form__wrap__select__btn')
            wrap.classList.toggle('dn')
            items.forEach((el) => {
                el.onclick = () => {
                    wrap.classList.add('dn')
                    btn.innerHTML = el.innerHTML
                    if (parent.classList.contains('mark')) {
                        model.classList.remove('disabled')
                        mark.classList.add('disabled')
                        fillListType('model', 'mark', data, el.innerHTML)
                    } else if (parent.classList.contains('model')) {
                        year.classList.remove('disabled')
                        model.classList.add('disabled')
                        fillListType('year', 'model', data, el.innerHTML)
                    } else if (!parent.classList.contains('model')) {
                        year.classList.add('disabled')
                    }
                }
            })
        }

    })

    function fillListType(type, filterType, data, filterText) {
        let tempData = JSON.stringify(data)
        tempData = JSON.parse(tempData)

        if (filterText == "init") {
            tempData = tempData.map((el) => {
                return el[filterType]
            })
        } else {
            tempData = tempData.filter((el) => {
                return el[filterType] == filterText
            }).map((el) => el[type])
        }

        tempData = Array.from(new Set(tempData))

        const category = document.querySelector(`.${type}`)
        const itemsWrap = category.querySelector('.container__form__wrap__select__wrap')
        itemsWrap.innerHTML = ''
        tempData.forEach(el => {
            const item = document.createElement('div')
            item.classList.add('container__form__wrap__select__wrap__item')
            item.innerText = el
            itemsWrap.appendChild(item)
        })
    }

    fillListType('mark', 'mark', data, 'init')
})