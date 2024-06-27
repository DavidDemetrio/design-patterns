interface TransferI {
    origin: string
    destination: string
}

/**
 * @description En este archivo se hace un ejemplo del uso de Factory Method (pattern design)
 * para la solución de problemas al crear diferentes objectos de transporte
 * de una compañia en general.
 * @author David Demetrio López Paz
 * @dateCreation 08 de Junio del 2024
*/

abstract class Transport {
    private startUp: boolean = false
    /**
     * método abstraco que define cuando el transporte empieza a moverce del
     * punto A al punto B
    */
    public abstract transfer(): TransferI
}

class MarineTransport extends Transport {
    public transfer(): TransferI {
        return {
            origin: 'Puerto de Veracruz',
            destination: 'Puerto de Manzanillo'
        }
    }
}
class LandTransport extends Transport {
    public transfer(): TransferI {
        return {
            origin: 'Carretera México - Queretaro',
            destination: 'Buenavista'
        }
    }
}

// Implementación de Factory Method
const landTransport = new LandTransport()
const marineTransport = new MarineTransport()

/**
 * Este es un ejemplo muy simple, de cómo puede ser implementado
 * Factory method, en este caso, dependiendo si
 * es un transporte marítimo o terrestre, devulve un objeto
 * con una ruta terrestre o una ruta marítima.
 * 
 * Pero desde este punto se puede ver el grado de expanción
 * del código para hacerlo más reutilizable y óptimo,
 * optando por crear métodos que tengan una tarea en especifico
 * de acuerdo a la intancia que se crea de la clase, pero a la vez esta
 * clase depnde de otra, de mayor nivel.
*/
console.log("Origin and Destination land transport:", landTransport.transfer());
console.log("Origin and Destination marine transport:", marineTransport.transfer());