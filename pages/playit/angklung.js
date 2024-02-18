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
            case 'f':
                f.play()
                break;
            case 'g':
                g.play()
                break;
            case 'h':
                h.play()
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
        case 'f':
            f.play()
            break;
        case 'g':
            g.play()
            break;
        case 'h':
            h.play()
            break;
    
    }
})

const a = new Audio('../../assets/sound/angklung/DO-.mpeg')
const b = new Audio('../../assets/sound/angklung/RE.mpeg')
const c = new Audio('../../assets/sound/angklung/MI.mpeg')
const d = new Audio('../../assets/sound/angklung/FA.mpeg')
const E = new Audio('../../assets/sound/angklung/SO.mpeg')
const f = new Audio('../../assets/sound/angklung/LA.mpeg')
const g = new Audio('../../assets/sound/angklung/SI.mpeg')
const h = new Audio('../../assets/sound/angklung/DO_.mpeg')