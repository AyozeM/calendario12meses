(function(){
    let year = document.getElementById("year").value;
    const daysName = ["L","M","X","J","V","S","D"];
    
    let monthIterator = 1;
    const firstDaycell = 8; 
    let getBeforeMonthDays = (actualMonth)=> actualMonth-1==-1?monthList[11].days:monthList[actualMonth-1].days;
    let monthList = [
        {
            name:"enero",
            days:31
        },
        {
            name:"febrero",
            days:28
        },
        {
            name:"marzo",
            days:31
        },
        {
            name:"abril",
            days:30
        },
        {
            name:"mayo",
            days:31
        },
        {
            name:"junio",
            days:30
        },
        {
            name:"julio",
            days:31
        },
        {
            name:"agosto",
            days:31
        },
        {
            name:"septiembre",
            days:30
        },
        {
            name:"octubre",
            days:31
        },
        {
            name:"noviembre",
            days:30
        },
        {
            name:"diciembre",
            days:31
        }
    ];

    let completeMonth = function(month){
        /** 
        * Se encarga de la cabecera
        */
        let date = new Date(monthIterator+"-1-"+year);
        month.firstElementChild.textContent = monthList[monthIterator-1].name;
        for (let i = 0; i < daysName.length; i++) {
            const day = daysName[i];
            month.children[i+1].textContent = daysName[i];   
        }
        /**
         * Se encarga de los dias del propio mes
         */
        let firtMonthDay = (date.getDate()==1?7:date.getDate())-1;
        let dayIterator = 1;
        for (let i = firstDaycell+firtMonthDay; i < firstDaycell+firtMonthDay+monthList[monthIterator-1].days; i++) {
            month.children[i].textContent = dayIterator;
            dayIterator++;
        }
        /**
         * Se encarga de los dias del mes anterior
         */
        dayIterator = getBeforeMonthDays(monthIterator);
        for (let i = firstDaycell+firtMonthDay-1; i >= firstDaycell; i--) {
            month.children[i].textContent = dayIterator;
            dayIterator--;
            
        }
        /**
         * Se encarga de los dias del mes posterior
         */
        dayIterator=1;
        for (let i = firstDaycell+firtMonthDay+monthList[monthIterator-1].days; i < month.children.length; i++) {
            month.children[i].textContent = dayIterator;
            dayIterator++;
        }
        monthIterator++;
    }

    document.getElementById("search").addEventListener("click",function(){
        let months = [].slice.call(document.querySelectorAll(".mes"));
        months.forEach(element => {
            completeMonth(element);
        });
    },false);
})(this);