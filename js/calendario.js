(function(){
    const daysName = ["L","M","X","J","V","S","D"];
    let firstTime = true;
    document.querySelector(".calendario").style.visibility = "hidden";
    let monthIterator;
    const firstDaycell = 8;
    let getBeforeMonthDays = (actualMonth)=> actualMonth-1==-1?monthList[11].days:monthList[actualMonth-1].days;
    let monthList = [
        {
            name:"Enero",
            days:31
        },
        {
            name:"Febrero",
            days:28
        },
        {
            name:"Marzo",
            days:31
        },
        {
            name:"Abril",
            days:30
        },
        {
            name:"Mayo",
            days:31
        },
        {
            name:"Junio",
            days:30
        },
        {
            name:"Julio",
            days:31
        },
        {
            name:"Agosto",
            days:31
        },
        {
            name:"Septiembre",
            days:30
        },
        {
            name:"Octubre",
            days:31
        },
        {
            name:"Noviembre",
            days:30
        },
        {
            name:"Diciembre",
            days:31
        }
    ];
    let actualDay={
        day:new Date().getDate(),
        month:new Date().getMonth(),
        year:new Date().getFullYear()
    }
    let esBisiesto = anio =>((anio % 4 == 0) && ((anio % 100 != 0) || (anio % 400 == 0)))?true:false;
    let completeMonth = function(month,year){
        /**
        * Se encarga de la cabecera
        */
        monthList[1].days = esBisiesto(parseInt(year))?29:28;
        let date = new Date(monthIterator+"/1/"+year);
        month.firstElementChild.textContent = monthList[monthIterator-1].name;
        for (let i = 0; i < daysName.length; i++) {
            const day = daysName[i];
            month.children[i+1].textContent = daysName[i];
        }
        /**
         * Se encarga de los dias del propio mes
         */
        let firstMonthDay = (date.getDay()==0?7:date.getDay())-1;
        let dayIterator = 1;
        for (let i = firstDaycell+firstMonthDay; i < firstDaycell+firstMonthDay+monthList[monthIterator-1].days; i++) {
            month.children[i].textContent = dayIterator;
            dayIterator++;
        }
        /**
         * Se encarga de los dias del mes anterior
         */
        dayIterator = getBeforeMonthDays(monthIterator-1);
        for (let i = firstDaycell+firstMonthDay-1; i >= firstDaycell; i--) {
            month.children[i].textContent = dayIterator;
            month.children[i].classList.add("noDiasMes");
            dayIterator--;

        }
        /**
         * Se encarga de los dias del mes posterior
         */
        dayIterator=1;
        for (let i = firstDaycell+firstMonthDay+monthList[monthIterator-1].days; i < month.children.length; i++) {
            month.children[i].textContent = dayIterator;
            month.children[i].classList.add("noDiasMes");
            dayIterator++;
        }
    }
    /**
     * Limpia los estilos de la consulta anterior
     */
    let clearStyles = function(){
        if(document.querySelector(".diaActual")){
            document.querySelector(".diaActual").classList.remove("diaActual");
        }
        [].slice.call(document.querySelectorAll(".noDiasMes")).map(e=>e.classList.remove("noDiasMes"));
    }
    document.getElementById("search").addEventListener("click",function(){
        if(!firstTime){
            clearStyles();
        }
        if(firstTime){document.querySelector(".calendario").style.visibility = "visible";}
        monthIterator = 1;
        let year = document.getElementById("year").value;
        let months = [].slice.call(document.querySelectorAll(".mes"));
        months.forEach(element => {
            completeMonth(element,year);
            monthIterator++;
        });
        if(parseInt(year) == actualDay.year){
            months[actualDay.month].children[actualDay.day+firstDaycell+1].classList.add("diaActual");
        }
        firstTime = false;
    },false);
})(this);
