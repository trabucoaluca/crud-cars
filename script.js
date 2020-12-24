const cars = [
    {
        id: 1,
        brand: 'bmw',
        model: 'gtd-24',
        color: 'brown',
        year: 2017,
        cost: 3000000
    },
    {
        id: 2,
        brand: 'jaguar',
        model: 'raden-h',
        color: 'palta',
        year: 2018,
        cost: 1000000
    },
    {
        id: 3,
        brand: 'slam',
        model: '201',
        color: 'yellow',
        year: 2011,
        cost: 5000000
    },
];

function printCars() {
    const container = document.getElementById('container-cars');
    let html = '';
    cars.forEach((car) => {
        html += `<tr>
        <td>${car.brand}</td>
        <td>${car.model}</td>
        <td>${car.color}</td>
        <td>${car.year}</td>
        <td>${car.cost}</td>
        <td>
            <button onclick="deleteCar(${car.id})">
                Delete
            </button>
        </td>
        </tr>`;
    });

    container.innerHTML = html;
}

function deleteCar(id) {
    const index = cars.findIndex((car) => car.id == id );
    cars.splice(index, 1);

    printCars();
}

function addCar() {
    const brand = document.getElementById('brand').value;
    const model = document.getElementById('model').value;
    const color = document.getElementById('color').value;
    const year = document.getElementById('year').value;
    const cost = document.getElementById('cost').value;
    const id = cars[cars.length -1].id + 1;

    const newCar = {
        id,
        brand,
        model,
        color,
        year,
        cost
    }
    cars.push(newCar);
    printCars();

    // limpiamos el formulario
    document.getElementById('form-user').reset();
}


printCars();

//abelgalvangonza@gmail.com
//Electrico.1
//05/08/1936
//5558511335