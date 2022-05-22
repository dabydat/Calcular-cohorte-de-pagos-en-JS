// Instanciamos MomentJS

var moment = require('moment')
const now = moment("2022-01-31");

// Creamos uan función que sume 31 días
// 31 días como estándar de cohorte de fechas

function sumarDias(initDate, days) {
    return initDate.set(
        initDate.get().add(days, 'days')
    )
}

// Validamos que la fecha sea correcta con el método ofrecido por
// momentjs llamado isValid()
// Es decir, si por alguna condición la fecha es 29 de febrero de una año 
// no bisiesto, este tomará la fecha dada y restará 1

function validarFecha(validDate) {
    fechaAumentada = sumarDias(validDate, 31)

    if (fechaAumentada.isValid()) {
        return fechaAumentada.set({
            'year': fechaAumentada.get('year'),
            'month': fechaAumentada.get('month'),
            'days': fechaAumentada.get('days'),
        });
    } else {
        return fechaMenosDia.get('date') - 1
    }
}

// finalmente se formatea la fecha para que siempre
// tome los últimos días de cada mes, y no se salte ninguno

function formateoFecha(fechaPorFormatear) {
    fechaFinal = validarFecha(fechaPorFormatear)
    mes = fechaFinal.month()
    dia = fechaFinal.date()

    if (mes > mes - 1 && dia === 1) {
        return fechaFinal.set({
            'year': fechaFinal.get('year'),
            'month': mes,
            'date': fechaFinal.date() - 1,
        });
    } else if (mes > mes - 1 && dia === 2) {
        return fechaFinal.set({
            'year': fechaFinal.get('year'),
            'month': mes,
            'date': fechaFinal.date() - 2,
        });
    } else if (mes > mes - 1 && dia === 3) {
        return fechaFinal.set({
            'year': fechaFinal.get('year'),
            'month': mes,
            'date': fechaFinal.date() - 3,
        });
    } else {
        return fechaFinal;
    }
}

// por ultimo se toma esa fecha, y se ejecuta un cohorte de pago
// cada cierto periodo, puede ser anual, semestral, trimestral, o mensual

function cuotaPorPeriodo(fecha, periodo, cuota = 0) {
    let cont = 0
    for (let i = -1; i < 36; i++) {
        if (cont == periodo) {
            cuota += 1
            console.log(`Cuota ${cuota}: ${formateoFecha(fecha).format().split("T")[0]}`);
            cont = 0
        }
        cont += 1
    }
}

console.log(cuotaPorPeriodo(now, 1));