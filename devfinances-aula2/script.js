const Modal = {
    open(){
        document.querySelector('.modal-overlay').classList.add('active');
    },
    close(){
        document.querySelector('.modal-overlay').classList.remove('active');
    }
}
document.getElementById('newtransaction').addEventListener('click', Modal.open);
document.getElementById('cancelbutton').addEventListener('click', Modal.close);