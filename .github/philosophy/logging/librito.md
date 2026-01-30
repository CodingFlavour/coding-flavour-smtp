# 📝 Logging en Coding Flavour

## Propósito

En Coding Flavour, el logging no es opcional ni se hace con `console.log` directamente.

**Todo proyecto debe usar `@coding-flavour/logger`** como herramienta estándar de logging.

---

## ¿Por qué @coding-flavour/logger?

El logger de Coding Flavour proporciona:

- **Tabulación automática**: Los logs se indentan según el flujo de ejecución, facilitando la lectura
- **Niveles de severidad**: Diferencia clara entre `log`, `warn`, `error` y `debug`
- **Modo debug**: Logs condicionales que solo aparecen cuando se activa el modo
- **Prefijos identificables**: Cada componente o proceso puede tener su propio prefijo
- **Metadatos estructurados**: Información adicional sin contaminar el mensaje
- **Volcado a ficheros**: Opción de enviar logs a archivos específicos
- **Control del tiempo**: Medición automática del tiempo transcurrido
- **Boards**: Mensajes destacados en formato pizarra
- **Singleton**: Mantiene el estado en toda la aplicación

---

## Instalación

En todo proyecto TypeScript/JavaScript de Coding Flavour:

```bash
npm install @coding-flavour/logger
```

---

## Uso básico

### Inicialización

```typescript
import Logger from '@coding-flavour/logger';

const logger = Logger('MiApp');
```

La instancia es **singleton**, por lo que el estado se mantiene en toda la aplicación.

### Logging simple

```typescript
logger.log('Iniciando proceso');
logger.warn('Advertencia detectada');
logger.error('Error crítico');
```

### Control de tabulación

```typescript
logger.log('Proceso principal');
logger.log('Subproceso 1', { keepLevel: true });  // Mantiene nivel
logger.log('Subproceso 2', { keepLevel: true });
logger.log('Subproceso 3', { subtractLevel: true });  // Reduce nivel
logger.log('Fin del proceso');
```

### Metadatos

```typescript
const config = { host: 'localhost', port: 3000 };
logger.log('Conectando a servidor', { config });
```

### Modo debug

```typescript
logger.setDebugMode();  // Activa/desactiva modo debug
logger.debug('Este mensaje solo aparece en modo debug');
```

### Boards

```typescript
logger.board(
  'Proceso iniciado',
  'Configuración cargada',
  'Servidor escuchando en puerto 3000'
);
```

### Control de tiempo

```typescript
const logger = Logger('MiApp');
// ... código ejecutado ...
const elapsed = logger.getTimeElapsed();
logger.log('Proceso completado', { elapsed });

logger.resetStartTime();  // Reinicia contador
```

### Volcado a ficheros

```typescript
logger.setLogFile('./logs/app.log');
logger.log('Este mensaje va al archivo y a stdout');
logger.resetLogFile();  // Vuelve solo a stdout
```

---

## Métodos disponibles

### `log(message, options)`
Mensaje estándar con tabulación automática.

**Opciones:**
- `keepLevel`: Mantiene la tabulación actual
- `subtractLevel`: Reduce la tabulación después del log
- Cualquier otra propiedad se imprime como metadatos

### `warn(message, options)`
Mensaje de advertencia. Usa las mismas opciones que `log`.

### `error(message, options)`
Mensaje de error. Usa las mismas opciones que `log`.

### `debug(message, options)`
Mensaje solo visible en modo debug. Usa las mismas opciones que `log`.

### `ln()`
Imprime una línea en blanco.

### `board(...messages)`
Imprime una pizarra con los mensajes proporcionados.

### `setLoggerPrefix(prefix)`
Cambia el prefijo del logger activo.

### `resetTabulation()`
Reinicia la tabulación a nivel 0.

### `setDebugMode()`
Activa/desactiva el modo debug.

### `resetStartTime()`
Reinicia el contador de tiempo.

### `getTimeElapsed()`
Devuelve el tiempo transcurrido desde el inicio o último reset.

### `setLogFile(path)`
Establece un archivo para volcado de logs.

### `resetLogFile()`
Desactiva el volcado a archivo.

---

## Reglas obligatorias

### ❌ No usar console.log directamente

Nunca hagas esto:
```typescript
console.log('Starting process...');
console.error('Error occurred');
```

### ✅ Usar siempre el logger

Haz esto:
```typescript
const logger = Logger('MiComponente');
logger.log('Starting process...');
logger.error('Error occurred');
```

### ❌ No crear múltiples instancias intencionalmente diferentes

El logger es singleton. No intentes romper este patrón.

### ✅ Usar prefijos para diferenciar contextos

```typescript
const loggerAPI = Logger('API');
const loggerDB = Logger('Database');

loggerAPI.log('Request received');
loggerDB.log('Connection established');
```

### ❌ No loguear información sensible

```typescript
// MAL
logger.log('User credentials', { password: '123456' });
```

### ✅ Sanitizar información antes de loguear

```typescript
// BIEN
logger.log('User authenticated', { userId: user.id });
```

---

## Ejemplo completo

```typescript
import Logger from '@coding-flavour/logger';

const logger = Logger('FileProcessor');

logger.board('File Processing Started');

logger.log('Reading configuration file');
const config = { timeout: 5000, retries: 3 };
logger.log('Configuration loaded', { config, keepLevel: true });

logger.log('Connecting to database');
try {
  // ... conexión
  logger.log('Database connected', { keepLevel: true });
  
  logger.log('Processing files');
  logger.debug('Checking file permissions', { keepLevel: true });
  
  logger.log('File processed successfully', { subtractLevel: true });
} catch (error) {
  logger.error('Database connection failed', { 
    error: error.message, 
    subtractLevel: true 
  });
}

logger.log('Process completed');
const elapsed = logger.getTimeElapsed();
logger.log('Total time', { elapsed });
```

---

## Integración con el Companion

Cuando **Coding Flavour Companion** genera código que requiere logging:

- **SIEMPRE** debe usar `@coding-flavour/logger`
- **NUNCA** debe usar `console.log`, `console.warn`, o `console.error` directamente
- Debe importar y configurar el logger apropiadamente
- Debe usar prefijos descriptivos según el contexto
- Debe respetar la tabulación semántica del flujo

---

## Criterio final

Antes de hacer logging en código Coding Flavour, pregúntate:

> "¿Estoy usando @coding-flavour/logger o console.log?"

Si usas `console.*`, estás violando el estándar.

---

## Referencias

- [Librito de la Programación](../librito.md)
- [Repositorio @coding-flavour/logger](https://github.com/CodingFlavour/coding-flavour-logger)
