window.addEventListener('load', () => {
    const openXxtz = document.querySelector('#openXxtz span');
    if (openXxtz && openXxtz.textContent == '0') {
        openXxtz.style.display = 'none';
        console.log(openXxtz.textContent);
    }

    // const classTable = document.querySelector('#dataView');
    // if(classTable) {
    //     const thead = classTable.querySelector('thead tr');
    //     if(thead) {
    //         const th = document.createElement('th');
    //         th.textContent = '优选班级<br />(OUC-JWGL-Plus)';
    //         // th.style.width = '100px';
    //         // <th class="sorting_disabled" tabindex="0" rowspan="1" colspan="1">上课教师</th>
    //         th.className = 'sorting_disabled';
    //         th.setAttribute('tabindex', '0');
    //         th.setAttribute('rowspan', '1');
    //         th.setAttribute('colspan', '1');
    //         th.style.width = '100px';
    //         thead.appendChild(th);

    //         const tbodyTr = classTable.querySelectorAll('tbody tr');
    //         tbodyTr.forEach(tr => {
    //             const td = document.createElement('td');
    //             td.className = 'sorting_disabled';

    //             tr.appendChild(td);
    //         });
    //     }
    // }


})


