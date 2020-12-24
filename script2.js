let newCar = [];
let cars = [];

// CREATE
function Cars(image, brand, model, color, year, cost, id){
    this.image = image;
    this.brand = brand;
    this.model = model;
    this.color = color;
    this.year = year;
    this.cost = cost;
    this.id = id;
}

// READ
function addCar() {
    const inputImage = document.getElementById('image').value;
    const inputBrand = document.getElementById('brand').value;
    const inputModel = document.getElementById('model').value;
    const inputColor = document.getElementById('color').value;
    const inputYear = document.getElementById('year').value;
    const inputCost = document.getElementById('cost').value;
    let inputId = cars.length + 1;
    
    if(cars.length != 0){
        inputId = cars[cars.length -1].id + 1;
    }

    newCar = new Cars(inputImage, inputBrand, inputModel, inputColor, inputYear, inputCost, inputId);
    
    cars.push(newCar);

    printCar();

    document.getElementById('form-car').reset();
}

//UPDATE

function editCar(){
    const index = cars.findIndex((car) => cars.id == id);

    document.getElementById('image').value = index.image;
    document.getElementById('brand').value = index.brand;
    document.getElementById('model').value = index.model;
    document.getElementById('color').value = index.color;
    document.getElementById('year').value = index.year;
    document.getElementById('cost').value = index.cost;

    //aparece boton "actualizar"
    /**
     * id='update'
     */
    //replace
    /**
     * cuando se de click en el boton "actualizar", colocar los nuevos valores del form
     * index.image.replace(index.image, document.getElementById('image').value);
     * index.brand.replace(index.brand, document.getElementById('brand').value);
     * index.model.replace(index.model, document.getElementById('model').value);
     * index.color.replace(index.color, document.getElementById('color').value);
     * index.year.replace(index.year, document.getElementById('year').value);
     * index.cost.replace(index.cost, document.getElementById('cost').value);
     */
    //regresa todo a la normalidad
    //printCar();
}

//DELETE

function deleteCar(id) {
    const index = cars.findIndex((car) => car.id == id );
    cars.splice(index, 1);

    printCar();
}

/**Show information in the table */
function printCar(){    
    const container = document.getElementById('container-cars');
    let html = '';
    cars.forEach((car) => {
        html += `<tr>
            <td><img src=${car.image}></td>
            <td>${car.brand}</td>
            <td>${car.model}</td>
            <td>${car.color}</td>
            <td>${car.year}</td>
            <td>${car.cost}</td>
            <td>
                <button onclick="editCar(${car.id})">
                    Edit
                </button>
                <button onclick="deleteCar(${car.id})">
                    Delete
                </button>
            </td>
        </tr>`;
    });

    container.innerHTML = html;
}

/**validar que la informacion no llegue vacia */
/**cambiar el input "year" a un input de rango*/
/**validar si la informacion que se ingresa ya existe, si es cierto este NO se agrega, se lo contrario esete se agrega */
/**realizar de forma correcta la parte de agregar imagenes */
/**realizar la forma correcta de la funcion edit */
/**agregar boton cancelar */