## 🧪 Testing en Coding Flavour

En Coding Flavour, el testing no es una obligación burocrática ni una métrica de calidad artificial.

Los tests existen para **proteger comportamiento**, **reducir miedo al cambio** y **dar confianza al equipo**.

No buscamos “muchos tests”.
Buscamos **tests que importen**.

### Tests unitarios

Los tests unitarios validan **una unidad de lógica aislada**.

En Coding Flavour, un test unitario debe:

- Tener una responsabilidad clara
- Validar inputs y outputs
- Ser rápido de ejecutar
- No depender de infraestructura externa

Los tests unitarios son útiles cuando:
- Existe lógica de negocio clara
- Hay transformaciones de datos
- Un fallo puede pasar desapercibido sin test

No priorizamos tests unitarios que:
- Replican exactamente la implementación
- Validan detalles internos irrelevantes
- Rompen constantemente al refactorizar

### Tests funcionales

Los tests funcionales validan **comportamiento observable e integración** del sistema.

En Coding Flavour, estos tests son especialmente importantes para:
- Endpoints
- APIs
- Flujos de negocio
- Contratos con otros sistemas

Un test funcional debe responder a:
- “Dado este input, ¿qué respuesta espera un consumidor?”

Son obligatorios cuando:
- Se modifica un endpoint
- Se cambia el formato de una respuesta
- Se introduce lógica que afecta a terceros

### Tests End-to-End (E2E)

Los tests E2E validan flujos completos desde la perspectiva del usuario o consumidor.

En Coding Flavour:
- Usamos E2E con moderación
- Los reservamos para flujos críticos
- Preferimos pocos tests E2E bien pensados

Un E2E es útil cuando:
- Un fallo rompe una experiencia completa
- Varias capas interactúan (frontend, backend, auth, etc.)

No usamos E2E para:
- Validar lógica simple
- Sustituir tests unitarios o funcionales

## Tecnologías de testing

Las herramientas pueden evolucionar.  
Los principios, no.

En Coding Flavour utilizamos, según el contexto del proyecto:

- Frameworks de testing unitario apropiados al lenguaje
- Herramientas de testing funcional para APIs
- Soluciones E2E cuando el flujo lo justifica

La elección de tecnología debe priorizar:
- Claridad
- Mantenibilidad
- Adopción por el equipo

No se introducen herramientas de testing complejas sin una justificación clara.

## Ejemplos prácticos

### Ejemplo 1: Cambio en un endpoint

Si se añade un campo nuevo a la respuesta de un endpoint:

- Se debe añadir un test funcional que valide el nuevo shape
- Se debe verificar que no se rompe compatibilidad
- El test debe reflejar el punto de vista del consumidor

### Ejemplo 2: Refactor interno

Si se refactoriza código sin cambiar comportamiento observable:

- No es obligatorio añadir tests nuevos
- Los tests existentes deben seguir pasando
- El refactor no debe introducir ruido innecesario

### Ejemplo 3: Feature visible para usuarios

Si una feature introduce un nuevo flujo de usuario:

- Al menos un test funcional o E2E debe cubrir el flujo principal
- No es necesario cubrir todos los casos extremos en E2E
