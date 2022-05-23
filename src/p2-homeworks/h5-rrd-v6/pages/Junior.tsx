import React from 'react'
import HW10 from '../../h10/HW10'
import HW7 from '../../h7/HW7'
import HW8 from '../../h8/HW8'
import HW9 from '../../h9/HW9'


function PreJunior() {
    return (
        <div>
            <h1>Homeworks 7-11</h1>
            <HW7/>  {/*HW7 - универсальные SELECT и RADIO */}
            <HW8/>  {/*HW8 - простой reducer который сортирует и фильтрует список */}
            <HW9/> {/*HW9 - работа с интервалами и таймаутами */}
            <HW10/>  {/*HW10 - подключаем redux  */}
            {/*<HW11/>*/}


        </div>
    )
}

export default PreJunior

// сделайте по аналогии пустые страницы джун и джун+
// туда будут добавляться следующие дз