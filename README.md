# Actividad-clases-29-08-2025
# INFORME SOBRE TYPESCRIPT Y PROGRAMACIÓN ORIENTADA A OBJETOS (POO) 

## 1. ¿Qué es TypeScript y en qué se diferencia de JavaScript?
Es como una versión mejorada de JavaScript pero con la diferencia que este tiene una serie de reglas para que el programa no tenga errores , En palabras más técnicas es un superconjunto tipado de JavaScript pero con la diferencia de que este añade características adicionales, principalmente tipado estático y soporte para características avanzadas de programación.

### Diferencias principales:
- Tipado estático: TypeScript permite definir tipos para variables, parámetros y funciones, lo que ayuda a detectar errores en tiempo de compilación.
- Compilación: TypeScript se compila a JavaScript estándar que puede ejecutarse en cualquier navegador o entorno.
- Características avanzadas: Soporta interfaces, enumeraciones, decoradores, genéricos, y otras características que no están en JavaScript puro.
- Mejor soporte para IDE: Gracias al tipado, los editores pueden ofrecer autocompletado, refactorización y detección temprana de errores.

## 2. ¿Qué ventajas ofrece TypeScript para trabajar con Programación Orientada a Objetos (POO)?
Las ventajas principales que este ofrece es :
- Clases con tipado fuerte: Puedes definir clases con tipos para propiedades y métodos.
- Interfaces: Permiten definir contratos que las clases deben cumplir.
- Modificadores de acceso: Controlan la visibilidad de propiedades y métodos (public, private, protected).
- Herencia y polimorfismo: Soporta herencia clásica y métodos abstractos.
- Constructores con parámetros tipados: Facilita la inicialización segura de objetos.
- Readonly y propiedades opcionales: Para mayor control sobre la mutabilidad y la estructura de objetos.

## 3. ¿Qué son los modificadores de acceso (public, private, protected)?
- public: (por defecto) accesible desde cualquier lugar.
- private: accesible solo dentro de la clase donde se define.
- protected: accesible dentro de la clase y sus subclases (herencia).

![alt text](image-1.png)

## 4. ¿Qué es un ´ readonly ´ y para qué se usa?
Es un modificador que indica que una propiedad solo puede ser asignada una vez, generalmente en la declaración o en el constructor y no puede ser modificada después. Se usa para proteger propiedades que deben ser inmutables después de la inicialización.

## 5. ¿Cómo se definen clases y objetos en TypeScript?
En TypeScript, una clase se define utilizando la palabra clave class. Dentro de la clase se pueden declarar atributos y funciones, para crear un objeto, que es una instancia de la clase, se utiliza la palabra clave new, seguida del nombre de la clase y si corresponde, los parámetros definidos en el constructor.

## 6. ¿Qué son los constructores y para qué sirven?
El constructor es un método que va dentro de una clase que se ejecuta de manera automática al crear un objeto. Su función principal es inicializar las propiedades del objeto, para tambien recibir parámetros para asignar valores iniciales personaliza

## 7. ¿Qué es la herencia en TypeScript y cómo se implementa (extends / super)?
La herencia en TypeScript permite que una clase nueva “clase hija” se base en otra ya existente ”clase padre”, heredando sus propiedades y métodos. Para implementarla se utiliza la palabra clave extends, que indica que una clase deriva de otra. En caso de que la clase hija tenga un constructor, debe invocar al constructor de la clase padre mediante super(), pasando los parámetros necesarios para su correcta inicialización.

## 8. Qué significa polimorfismo en el contexto de TypeScript?
El polimorfismo es para los objetos y permite que diferentes clases relacionadas por herencia definan métodos con el mismo nombre, pero con comportamientos distintos y una referencia de tipo clase base puede apuntar a objetos de clases derivadas, ejecutando automáticamente la implementación correspondiente a cada clase.

## 9. ¿QUÉ SON LAS CLASES ABSTRACTAS Y QUÉ DIFERENCIA TIENEN CON UNA CLASE NORMAL?
Las clases abstractas son clases que no se pueden instanciar directamente. Se usan como plantillas para que otras clases las hereden. Se declaran con la palabra clave 'abstract'. Sirven para definir una base común y obligar a las subclases a implementar ciertos métodos.

Ejemplo en TypeScript:
```ts
abstract class Animal { abstract hacerSonido(): void; }
class Perro extends Animal { hacerSonido() { console.log('Guau!'); } }
```
Diferencia con una clase normal:
- Una clase normal sí se puede instanciar.
- Una clase abstracta solo se hereda y no se puede usar directamente.

## 10. ¿QUÉ ES UNA INTERFACE EN TS Y EN QUÉ SE DIFERENCIA DE UNA CLASE ABSTRACTA?
Una interface en TypeScript es un contrato que define qué propiedades o métodos debe tener una clase u objeto. Se usa con la palabra clave 'interface' y se implementa con 'implements'. Sirve para asegurar estructura sin importar la implementación.

Ejemplo en TypeScript:
```ts
interface Volador { volar(): void; }
class Pajaro implements Volador { volar() { console.log('Volando'); } }
```
Diferencia con una clase abstracta:
- Una interface solo define qué debe tener (no código).
- Una clase abstracta puede definir qué y cómo (métodos abstractos y métodos normales).

## 11. EJEMPLO MÍNIMO DE CADA PILAR DE POO EN TYPESCRIPT
1. Encapsulación (proteger datos):  
```ts
private nombre: string;
```
2. Herencia (reutilizar código):  
```ts
class Perro extends Animal {}
```
3. Polimorfismo (diferentes formas de un mismo método):  
```ts
animal.hacerSonido(); // Puede ser Perro o Gato
```
4. Abstracción (definir lo esencial, ocultar detalles):  
```ts
abstract class Figura { abstract area(): number; }
```

## 12. CONFIGURACIÓN DE TYPESCRIPT CON NODE.JS Y VS CODE
### Para qué sirve?
- Reducir errores con tipos estrictos.
- Facilitar la programación con clases, interfaces y POO.
- Mejor integración con VS Code (autocompletado, debugging, refactorización).

### Pasos de instalación
```bash
# 1. Inicializar proyecto
npm init -y

# 2. Instalar TypeScript y herramientas
npm install typescript ts-node @types/node --save-dev

# 3. Crear configuración de TypeScript
npx tsc --init

# 4. Crear carpeta de código fuente
mkdir src

# 5. Crear archivo inicial
echo "console.log('Hola TypeScript');" > src/index.ts

# 6. Ejecutar el código
npx ts-node src/index.ts
