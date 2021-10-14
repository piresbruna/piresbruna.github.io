const Modal = {
    open(){
        document.querySelector('.modal-overlay').classList.add('active');
    },
    close(){
        document.querySelector('.modal-overlay').classList.remove('active');
    }
}

const Storage = {
    get(){
        return JSON.parse(localStorage.getItem("dev.finances:transactions")) || [];
    },
    set(transactions){
        localStorage.setItem("dev.finances:transactions", JSON.stringify(transactions));
    }
}

const Transaction = {
    all: Storage.get(),

    add(transaction){
        Transaction.all.push(transaction);

        App.reload();
    },

    remove(index){
        Transaction.all.splice(index,1);
        App.reload();
    },

    incomes(){
        let income = 0;
        this.all.forEach(transaction =>{
            if(transaction.amount > 0){
                income += transaction.amount;
            }
        })
        return income;
    },

    expenses(){
        let expense = 0;
        this.all.forEach(transaction =>{
            if(transaction.amount < 0){
                expense += transaction.amount;
            }
        })
        return expense;
    },

    total(){
        return Transaction.incomes() + Transaction.expenses();
    }
}

const DOM = {
    transactionsContainer: document.querySelector('#data-table tbody'),
    
    addTransaction(transaction, index){
        const tr = document.createElement('tr');
        tr.innerHTML = DOM.innerHTMLTransaction(transaction, index);
        tr.dataset.index = index;
        DOM.transactionsContainer.appendChild(tr);
    },

    innerHTMLTransaction(transaction, index){
        const cssClass = transaction.amount > 0 ? "income" : "expense";
        
        const html = `
                        <td class="description">${transaction.description}</td>
                        <td class="${cssClass}">${Utils.formatCurrency(transaction.amount)}</td>
                        <td class="date">${transaction.date}</td>
                        <td><img onclick="Transaction.remove(${index})" src="./assets/minus.svg" alt=""></td>`

        return html;
    },

    updateBalance(){
        document.getElementById('incomeDisplay').innerHTML = Utils.formatCurrency(Transaction.incomes());

        document.getElementById('expenseDisplay').innerHTML = Utils.formatCurrency(Transaction.expenses());

        document.getElementById('totalDisplay').innerHTML = Utils.formatCurrency(Transaction.total());
    },

    clearTransactions(){
        DOM.transactionsContainer.innerHTML = "";
    }
}

const Utils = {
    formatAmount(value){
        value = Number(value) * 100;

        return Math.round(value);
    },

    formatDate(date){
        const splittedDate = date.split("-");
        return `${splittedDate[2]}/${splittedDate[1]}/${splittedDate[0]}`;
    },

    formatCurrency(value){
        value = Number(value) / 100;

        value = value.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL"
        });

        return value;
    }
}

const Form = {
    description: document.querySelector('input#description'),
    amount: document.querySelector('input#amount'),
    date: document.querySelector('input#date'),

    validateFields(){
        const inDescription = Form.description.value;
        const inAmount = Form.amount.value;
        const inDate = Form.date.value;

        if(inDescription.trim() === "" || inAmount.trim() === "" || inDate.trim() === ""){
            
            throw new Error("Por favor, preencha todos os campos!");
        }
    },

    formatValues(){
        let description = Form.description.value;
        let amount = Form.amount.value;
        let date = Form.date.value;

        amount = Utils.formatAmount(amount);
        
        date = Utils.formatDate(date);

        return {
            description,
            amount,
            date
        };
    },

    saveTransaction(transaction){
        Transaction.add(transaction);
    },

    clearFields(){
        Form.description.value = "";
        Form.amount.value = "";
        Form.date.value = "";
    },

    submit(event){
        event.preventDefault();

        try {
            Form.validateFields();
            const transaction = Form.formatValues();
            Form.saveTransaction(transaction);
            Form.clearFields();
            Modal.close();

        } catch (error) {
            alert(error.message);
        }
        
    }
}

const App = {
    init(){
        Transaction.all.forEach((transaction, index) => {
            DOM.addTransaction(transaction, index);
        });
        DOM.updateBalance();
        Storage.set(Transaction.all);
    },
    reload(){
        DOM.clearTransactions();
        App.init();
    },
}

App.init();