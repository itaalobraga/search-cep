const cep = document.getElementById('cep');
const district = document.getElementById('district');
const address = document.getElementById('address');
const city = document.getElementById('city');
const state = document.getElementById('state');

const erro = document.getElementById('error');


const checkCep = () => {
    if (cep.value === '') {
       return erro.innerHTML = 'Digite um CEP!';
    }

    searchCep()
}

const handleValues = (data) => {
    erro.innerHTML = ''
    address.value = data.logradouro;
    district.value = data.bairro;
    city.value = data.localidade;
    state.value = data.uf;
};

const searchCep = async () => {
    
    try {
        const url = `https://viacep.com.br/ws/${cep.value}/json/`;
        const response = await fetch(url);
        const data = await response.json();

        if (data.hasOwnProperty('erro')) {
            address.value = '';
            district.value = '';
            city.value = '';
            state.value = '';
            erro.innerHTML = 'CEP não encontrado!';
            console.log(data)
            return;
        }

        handleValues(data);
    } catch (error) {
        console.log(error);
    }
};
