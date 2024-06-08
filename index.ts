
/**
 * La interfaz Producto declara las operaciones que todos los productos concretos deben
 * implementar.
 */
interface Product {
    operation(): string;
}

/**
 * La clase Creador declara el método fábrica que se supone debe devolver un
 * objeto de una interfaz tipo Product
 */
abstract class Creator {
    /**
     * Método fábrica que debe ser implementado por cada sublcase que extiende
     * de Creator. Nota el método factoryMethod tiene diferente funcionalidad en cada
     * subclase
     */
    public abstract factoryMethod(): Product;

    /**
     * Método concreto, este método es específico de la clase creator.
     * Las subclases que extienden de el, pueden usarlo o incluso modificar
     * este método
     */
    public someOperation(): string {
        // Llama al método fábrica para crear un objeto Producto.
        const product = this.factoryMethod();
        // Ahora, usa el producto.
        return `Creator: El mismo código del creador ha trabajado con ${product.operation()}`;
    }
}

/**
 * Los Creadores Concretos sobrescriben el método fábrica para cambiar el
 * tipo de producto resultante.
 */
class ConcreteCreator1 extends Creator {
    /**
     * Implementacion del meotdo abstracto factoryMethd
     * para la subClase Concreator1
     */
    public factoryMethod(): Product {
        return new ConcreteProduct1();
        /* return {
            operation: () => '{Resultado del ConcreteProduct1}'
        }; */
    }
}

class ConcreteCreator2 extends Creator {
    public factoryMethod(): Product {
        return new ConcreteProduct2();
    }
}

/**
 * Los Productos Concretos proporcionan diversas implementaciones de la interfaz Producto.
 */
class ConcreteProduct1 implements Product {
    public operation(): string {
        return '{Resultado del ConcreteProduct1}';
    }
}

class ConcreteProduct2 implements Product {
    public operation(): string {
        return '{Resultado del ConcreteProduct2}';
    }
}

/**
 * El código cliente trabaja con una instancia de un creador concreto, aunque sea a través
 * de su interfaz base. Mientras el cliente siga trabajando con el creador a través de la
 * interfaz base, se le puede pasar cualquier subclase del creador.
 */
function clientCode(creator: Creator) {
    // ...
    console.log('Cliente: No soy consciente de la clase del creador, pero aún así funciona.');
    console.log(creator.someOperation());
    // ...
}

/**
 * La Aplicación elige el tipo de creador dependiendo de la configuración o
 * el entorno.
 */
console.log('App: Lanzado con el ConcreteCreator1.');
clientCode(new ConcreteCreator1());
console.log('');

console.log('App: Lanzado con el ConcreteCreator2.');
clientCode(new ConcreteCreator2());