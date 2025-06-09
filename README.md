# Sistema de Gestión y Planificación de Tareas Distribuido

## Características principales

- **Registro de tareas:** Se pueden crear tareas definiendo `arrival_time` y `duration`.
- **Algoritmo SJF:** El consumidor utiliza Shortest Job First para decidir el orden de ejecución.
- **Procesamiento distribuido:** Se emplea RabbitMQ para la comunicación asíncrona entre el productor (API) y el consumidor.
- **Persistencia:** Las tareas se almacenan y gestionan en una base de datos PostgreSQL utilizando Prisma como ORM.
- **Contenerización:** Todos los servicios (API, consumidor, base de datos, RabbitMQ) se ejecutan en contenedores Docker orquestados con Docker Compose.
- **Apagado controlado:** El sistema cierra correctamente las conexiones y recursos al detenerse.
- **Endpoint de salud:** Se puede exponer un endpoint para verificar el estado del consumidor y la base de datos.

## Tecnologías utilizadas

- **Backend:** Node.js, Express.js
- **Base de datos:** PostgreSQL
- **ORM:** Prisma
- **Mensajería:** RabbitMQ (amqplib)
- **Contenerización:** Docker, Docker Compose
- **Lenguaje:** TypeScript