interface TransferI {
    origin: string
    destination: string
    // starUp: boolean // encender el transporte
    // operate(): void // circular para los transportes terrestres y navegar para los
    // transporte marítimos
    // stop: () => void
    // alert: () => void // encender intermitentes para los transportes terrestres
    // y marítimos luces de navegacion y señales de sonido
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

    /* public startUp(): Boolean {
        return this.transfer().starUp
    } */
}

class MarineTransport extends Transport {
    public transfer(): TransferI {
        return {
            origin: 'Puerto de Veracruz',
            destination: 'Puerto de Manzanillo'
        }
    }
}

/* class LandTransport extends Transport {

} */