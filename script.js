const products = [
    { id: 1, productName: "El Castigador - Máquina de Guerra", category: "comics", description: "“Frank Castle: Máquina de Guerra”. En su guerra, El Castigador siempre ha estado limitado por el hecho de ser un único hombre. Pero ahora Frank tiene a su disposición las herramientas para hacer que su misión tenga carácter global. ¿Cómo va a negarse?", cost: "$350", imgUrl: "https://fedeclavijo13.github.io/proyecto-coderhouse/resources/el-castigador-maquina-de-guerra.jpg" },
    { id: 2, productName: "Spiderman vs Morbius", category: "comics", description: "Ante el salto a la gran pantalla de Morbius, te ofrecemos un volumen que recoge algunas de sus aventuras más destacadas, como antagonista de Spiderman. Desde su debut, en la legendaria saga de los brazos extra, hasta sus más recientes historias, pasando por la particular visión que de Michael Morbius diera Todd McFarlane.", cost: "$350", imgUrl: "https://fedeclavijo13.github.io/proyecto-coderhouse/resources/spiderman-vs-morbius.jpg"},
    { id: 3, productName: "Thor - El Carnicero de Dioses", category: "comics", description: "A lo largo de los siglos, los dioses han estado desapareciendo, lo que condena al caos a sus adoradores. Ahora, Thor sigue el rastro de sangre que amenaza con consumir su pasado, presente y futuro.", cost: "$350", imgUrl: "https://fedeclavijo13.github.io/proyecto-coderhouse/resources/thor-carnicero-de-dioses.jpg"},
    { id: 4, productName: "Caballero Luna - Cuenta atrás hacia la oscuridad", category: "comics", description: "Mercenario, cazador de hombres lobo, millonario, taxista… ¿fantasma? Descubre al Caballero Luna desde su debut y hasta meterse de lleno en la más recordada de las épocas que viviera jamás, en que se convirtió en una referencia indiscutible del cómic estadounidense.", cost: "$350", imgUrl: "https://fedeclavijo13.github.io/proyecto-coderhouse/resources/caballero-luna-cuenta-atras-hacia-oscuridad.jpg"},
    { id: 5, productName: "Ms. Marvel - Fuera de lo normal", category: "comics", description: "¡La edición completa de la obra maestra de Busiek y Ross! Un emocionante recorrido por los momentos que sirvieron para forjar el Universo Marvel bajo la visión única del fotógrafo Phil Sheldon. Desde los orígenes de los superhéroes a la trágica muerte de Gwen Stacy, de la llegada de Galactus a la Guerra Kree-Skrull, de la irrupción de los mutantes a la boda de Reed Richards y Sue Storm… ¡Los Prodigios están aquí!", cost: "$350", imgUrl: "https://fedeclavijo13.github.io/proyecto-coderhouse/resources/ms-marvel-fuera-de-lo-normal.jpg"},
    { id: 6, productName: "Daredevil - El hombre sin miedo", category: "comics", description: "¡El Hombre Sin Miedo consigue su primer Omnigold! Descubre las aventuras de Daredevil desde el principio, en un cuidado volumen que recoge los dos primeros años de su existencia, con la presentación de algunos de sus peores villanos.", cost: "$350", imgUrl: "https://fedeclavijo13.github.io/proyecto-coderhouse/resources/daredevil-el-hombre-sin-miedo.jpg"},
    { id: 7, productName: "Funko Pop! - Wandavision - Wanda Maximoff", category: "funkoPop", cost: "$790", imgUrl: "https://fedeclavijo13.github.io/proyecto-coderhouse/resources/funko-wanda.jpg"},
    { id: 8, productName: "Funko Pop! - Loki - Loki presidente", category: "funkoPop", cost: "$790", imgUrl: "https://fedeclavijo13.github.io/proyecto-coderhouse/resources/funko-loki.jpg"},
    { id: 9, productName: "Funko Pop! - Dr. Strange in the Multiverse of Madness - Spiderman", category: "funkoPop", cost: "$790", imgUrl: "https://fedeclavijo13.github.io/proyecto-coderhouse/resources/funko-spiderman.jpg"},
    { id: 10, productName: "Funko Pop! - Thor: Love and Thunder", category: "funkoPop", cost: "$790", imgUrl: "https://fedeclavijo13.github.io/proyecto-coderhouse/resources/funko-thor.jpg"},
    { id: 11, productName: "Estatuilla Diamond - Marvel: Endgame - Thanos", category: "statues", cost: "$2500", imgUrl: "https://fedeclavijo13.github.io/proyecto-coderhouse/resources/statue-thanos.jpg"},
    { id: 12, productName: "Estatuilla Diamond - Marvel: Endgame - Capitán America con Mjolnir", category: "statues", cost: "$2500", imgUrl: "https://fedeclavijo13.github.io/proyecto-coderhouse/resources/statue-cap-america.jpg"},
    { id: 13, productName: "Estatuilla Diamond - Clásicos - Daredevil", category: "statues", cost: "$1800", imgUrl: "https://fedeclavijo13.github.io/proyecto-coderhouse/resources/statue-daredevil.jpg"},
    { id: 14, productName: "Estatuilla Diamond - Clásicos - Ironman", category: "statues", cost: "$1800", imgUrl: "https://fedeclavijo13.github.io/proyecto-coderhouse/resources/statue-ironman.jpg"}
]

let actionByUser = parseInt(prompt("¡Bienvenid@ al simulador! \n¿Qué acción desea realizar?\n - Buscar un producto aleatorio - Ingrese '1'\n - Filtrar los productos según su categoría - Ingrese '2'"))

while(actionByUser > 2 || actionByUser <= 0 || isNaN(actionByUser)){
    alert('El valor ingresado no es válido.')
    actionByUser = parseInt(prompt("Vuelva a ingresar la acción a realizar:\n - Buscar un producto aleatorio - Ingrese '1'\n - Filtrar los productos según su categoría - Ingrese '2'"))
}

function findAndShowProduct(){
    let chosenProductId = parseInt(prompt("Elige un número del 1 al 14. ¡Qué la suerte te acompañe!"))

    while(chosenProductId > 14 || chosenProductId <= 0){
        chosenProductId = parseInt(prompt("El número ingresado no es correcto. Debe ingresar un número del 1 al 14"))
    }

    let foundProduct = products.find(product => product.id === chosenProductId)
    console.log(foundProduct)
}

function filterAndShowInConsole(){
    let selectedCategory = parseInt(prompt("Ingrese el número de la categoría que desea ver: \n 1. Categoría Comics \n 2. Categoría Coleccionables - Funko Pop! \n 3. Categoría Coleccionables - Estatuillas"))
    let filteredProductList = ""
    let chosenCategory = ""
    
    while(selectedCategory > 3 || selectedCategory <= 0 || isNaN(selectedCategory)){
        let correctEntry = parseInt(prompt("El número seleccionado no es correcto. \nIngrese el número de la categoría que desea ver: \n 1. Categoría Comics \n 2. Categoría Coleccionables - Funko Pop! \n 3. Categoría Coleccionables - Estatuillas"))
        selectedCategory = correctEntry 
    }
    
    function filterList() {
        if (selectedCategory == 1){
            chosenCategory = "comics"
        } else if(selectedCategory == 2){
            chosenCategory = "funkoPop"
        } else if(selectedCategory == 3) {
            chosenCategory = "statues"
        }
    
        filteredProductList = products.filter(product => product.category == chosenCategory)
    }
    
    filterList()

    function showInConsole(){
        let categoryToDisplay = ""
        if (chosenCategory == "comics"){
            categoryToDisplay = "Comics"
        } else if(chosenCategory == "funkoPop"){
            categoryToDisplay = "Coleccionables - Funko Pop!"
        } else if(chosenCategory == "statues") {
            categoryToDisplay = "Coleccionables - Estatuillas"
        }
    
        console.log("El listado de productos de la categoría " + categoryToDisplay + " es:")
        console.log(filteredProductList)
    }

    showInConsole()
}

function performAction(){
    if (actionByUser == 1){
        findAndShowProduct()
    } else{
        filterAndShowInConsole()
    }
}

performAction()

