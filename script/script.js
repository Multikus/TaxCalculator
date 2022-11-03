const navigationLinks = document.querySelectorAll('.navigation__link')
const calcEl = document.querySelectorAll('.calc')
const ausn = document.querySelector('.ausn')
const selfEmployed = document.querySelector('.self-employment')
const formSelfEmployed = selfEmployed.querySelector('.calc__form')

const formAusn = ausn.querySelector('.calc__form')
const resultTaxTotal = document.querySelector('.result__tax_total')
const calcLabelExpenses = ausn.querySelector('.calc_label_expenses')
const selfResultTotal = document.querySelector('.self__result_tax')

//переключатель форм
for(let i = 0; i < navigationLinks.length; i++){
    navigationLinks[i].addEventListener('click', (e)=> {
        e.preventDefault();
        for(let j = 0; j < calcEl.length; j++) {
            if(navigationLinks[i].dataset.tax === calcEl[j].dataset.tax) {
                calcEl[j].classList.add('calc_active')
                navigationLinks[j].classList.add('navigation__link_active')
            } else { 
                calcEl[j].classList.remove('calc_active')
                navigationLinks[j].classList.remove('navigation__link_active')
            }
        }
    })
    
}

calcLabelExpenses.style.display = 'none';

//рассчет АУСН
formAusn.addEventListener('input', () => {
    if(formAusn.type.value === 'income'){
        calcLabelExpenses.style.display = 'none';
        resultTaxTotal.textContent = formAusn.income.value * 0.08
    }

    if(formAusn.type.value === 'expenses'){
        calcLabelExpenses.style.display = 'block';
        resultTaxTotal.textContent = (formAusn.income.value - formAusn.expenses.value) * 0.2
    }
});

//рассчет самозанятых
formSelfEmployed.addEventListener('input', () => {
    if(formSelfEmployed.indIncome.name === 'indIncome'){
        selfResultTotal.textContent = ((formSelfEmployed.indIncome.value * 0.04) + (formSelfEmployed.legalPersonsIncome.value * 0.06)).toFixed(2)
        console.log(formSelfEmployed.indIncome.value);
    } 

    if (formSelfEmployed.legalPersonsIncome.name === 'legalPersonsIncome') {
        selfResultTotal.textContent = ((formSelfEmployed.indIncome.value * 0.04) + (formSelfEmployed.legalPersonsIncome.value * 0.06)).toFixed(2)
    }
})