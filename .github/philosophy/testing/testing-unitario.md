# Testing Unitario

Los tests unitarios validan **una unidad de lógica aislada**.

## Definición de unidad

Por norma general, una unidad es:
- Una función
- Un método de clase
- Un componente (en ciertos contextos)
- Un módulo
- Cualquier bloque de código con responsabilidad clara y delimitada

## Objetivo de los tests unitarios

El objetivo principal es asegurar que **cada unidad de código funciona correctamente de forma aislada**.

Esto implica:
- Validar entradas y salidas
- Comportamiento ante casos límite
- Manejo de errores

## Buenas prácticas

Los tests unitarios deben ser:
- Independientes: Debemos aprovechar el uso de mocks y stubs para aislar la unidad. Cualquier fallo que puede ser provocado por alguna dependencia externa debe ser simulado.

> Un ejemplo de esto puede ser el uso de librerías de lectura / escritura de ficheros. En vez de leer o escribir ficheros reales, se deben usar mocks que simulen ese comportamiento.

- Rápidos: Deben ejecutarse rápidamente para facilitar ciclos de desarrollo ágiles.
- Deterministas: Deben producir los mismos resultados en cada ejecución con las mismas condiciones.
- Claros: El propósito del test debe ser evidente. Nombres descriptivos y estructura clara son esenciales.

> Para esto, usamos `describe`, `it`/`test`, y `beforeEach`/`afterEach` para organizar y preparar los tests.

- Para los `describe`, usamos un patrón: `[NombreDeLaUnidad] Test Suite`, de esta manera, es fácil identificar qué unidad se está testeando.
- Para los `it`/`test`, usamos un patrón: `should [comportamiento esperado] when [condición]`, de esta manera, es fácil entender qué comportamiento se está validando y bajo qué condiciones.
- Puedes usar comentarios tipo `Given`, `When`, `Then` para estructurar los tests.

## Herramientas recomendadas

Desde Coding Flavour recomendamos usar `Vitest` para tests unitarios en proyectos JavaScript/TypeScript.

Esta librería tiene mucha facilidad para integrarse con ESM y TS, y ofrece un rendimiento excelente.

## Configuración básica de Vitest

Si tu proyecto no dispone de `Vitest` o necesitas migrar desde otra herramienta, aquí tienes una configuración básica para empezar:

1. Genera en raíz de tu proyecto un fichero `vitest.config.ts` con el siguiente contenido:

```typescript
import { defineConfig } from 'vitest/config';

export default defineConfig({
    test: {
        globals: true,
        environment: 'node',
    },
});
```

2. Para tu `tsconfig.json`, asegúrate de tener las siguientes opciones o similares, pero esta configuración sabemos que funciona bien con Vitest:

```json
{
  "compilerOptions": {
    "target": "esnext",
    "module": "esnext",
    "moduleResolution": "bundler",
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "skipLibCheck": true,
    "types": ["vitest/globals", "node"],
    "resolveJsonModule": true
  }
}
```

3. Dispon en tu `package.json` un script para ejecutar los tests:

```json
{
  "scripts": {
    "test": "vitest run",
    "test:watch": "vitest", // Opcional: para modo de vigilancia de ficheros
    "test:coverage": "vitest run --coverage" // Requerido: para generar reportes de cobertura
  }
}
```

## Cobertura de tests

Es importante medir la cobertura de los tests unitarios para asegurar que las partes críticas del código están siendo validadas.

Desde Coding Flavour, recomendamos una cobertura mínima del 80% para la mayoría de los proyectos, en todos los archivos fuente.

### Ejemplo de mock con Vitest

Si necesitáis mockear tus dependencias, Vitest ofrece una funcionalidad sencilla para hacerlo. Aquí tienes un ejemplo básico:

```typescript
import { describe, it, expect, vi } from 'vitest';

// Supongamos que tenemos un módulo 'math.ts' con una función 'add'
import { add } from './math';

// Mockeamos el módulo 'math.ts'
vi.mock('./math', () => ({
    add: vi.fn(),
}));

describe('add Test Suite', () => {
    it('should return mocked value when add is called', () => {
        // Configuramos el mock para que devuelva un valor específico
        (add as vi.Mock).mockReturnValue(10);

        const result = add(2, 3);

        expect(result).toBe(10);
        expect(add).toHaveBeenCalledWith(2, 3);
    });
});
```

### Ejemplo de Spy con Vitest

Para espiar métodos o funciones, Vitest proporciona la función `vi.spyOn`. 

De esta manera, podemos monitorizar que llamadas y cuantas veces se ha llamado a una función sin necesidad de mockearla completamente.

Aquí tienes un ejemplo, combinado con un mock, donde espiamos el `console.log` para verificar que nuestro logger funciona correctamente, sin que estos molesten en la salida de la consola durante los tests:

```typescript
import { vi } from 'vitest';

const EMPTY_FN = () => {};
const consoleSpy = vi.spyOn(console, "log").mockImplementation(EMPTY_FN);

describe("Logger Test Suite", () => {
  afterEach(() => {
    consoleSpy.mockClear(); // Despues de cada test, limpiamos el spy
    const logger = Logger("", { resetColors: true });
    logger.resetTabulation();
  });
  it("should log a message", () => {
    // Given
    const logger = Logger();
    const message = "Simple log message";
    const correctMessage = decorate("+ Simple log message");
    // When
    logger.log(message);
    // Then
    expect(consoleSpy).toHaveBeenCalledWith(correctMessage); // De esta manera, verificamos que se ha llamado al console.log con el mensaje correcto
  });
});
```
