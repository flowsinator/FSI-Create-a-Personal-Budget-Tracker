let weeklyExpenses = 0
let monthlyExpenses = 0
let annualExpenses = 0

// Your Code Here
window.alert(`You are about to be asked questions about your weekly expenses`)

for(let i = 0; i < weeklyExpenseQuestions.length; i++){
    let answer = parseFloat(window.prompt(weeklyExpenseQuestions[i]))
    weeklyExpenses = weeklyExpenses + answer
}

window.alert(`Thank you for that`)
window.alert(`Now, you are about to be asked questions about your monthly expenses`)

for(let i = 0; i < monthlyExpenseQuestions.length; i++){
    let answer = parseFloat(window.prompt(monthlyExpenseQuestions[i]))
    monthlyExpenses = monthlyExpenses + answer
}

window.alert(`Thank you for that`)
window.alert(`Finally, you are about to be asked questions about your annual expenses`)

for(let i = 0; i < annualExpenseQuestions.length; i++){
    let answer = parseFloat(window.prompt(annualExpenseQuestions[i]))
    annualExpenses = annualExpenses + answer
}

window.alert(`Thank you for that, now review your budget below! Have a great day`)
window.alert(`I LOVE YOU JESSICA FLOREZ`)
