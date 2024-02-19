const angklung = document.querySelectorAll('.klik')


angklung.forEach((items) => {
    items.addEventListener('click', (e) => {
        switch (items.id) {
            case 'a':
                a.play()
                break;
            case 'b':
                b.play()
                break;
            case 'c':
                c.play()
                break;
            case 'd':
                d.play()
                break;
            case 'e':
                E.play()
                break;
        }
    })
})

document.addEventListener('keydown', (e) => {
    switch (e.key) {
        case 'a':
            a.play()
            break;
        case 'b':
            b.play()
            break;
        case 'c':
            c.play()
            break;
        case 'd':
            d.play()
            break;
        case 'e':
            E.play()
            break;
    }
})

const a = new Audio('../../assets/sound/serdam/Do.mpeg')
const b = new Audio('../../assets/sound/serdam/Re.mpeg')
const c = new Audio('../../assets/sound/serdam/Mi.mpeg')
const d = new Audio('../../assets/sound/serdam/Sol.mpeg')
const E = new Audio('../../assets/sound/serdam/La.mpeg')