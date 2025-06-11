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

## Requisitos

- [Docker](https://docs.docker.com/get-docker/)
- [Docker Compose](https://docs.docker.com/compose/)

## Instalación

1. Clonar el repositorio

```bash
git clone https://github.com/albbeltran/tasks-scheduling.git
cd tasks-scheduling
```

2. Iniciar los contenedores

```bash
docker compose up -d
```

3. Iniciar Prisma

Una vez que los contenedores estén corriendo, iniciar Prisma en el contenedor del frontend:
```bash
docker compose exec frontend sh
npx prisma db push
```

## Funcionamiento

El sistema funciona de la siguiente manera:

1. El usuario crea una tarea en el frontend, en la ruta '/', especificando `arrival_time` y `duration`.
2. La API recibe la tarea y la envía al consumidor a través de RabbitMQ.
3. El usuario debera cuantas tareas desee para conocer el orden de ejecución mas eficiente.
4. Una vez creadas las tareas, el usuario da clic en el boton 'Schedule Tasks' para obtener el orden de ejecución mas eficiente.
5. La API envia una peticion al consumidor para obtener el orden de ejecución mas eficiente.
6. El consumidor recibe la peticion y se conecta a RabbitMQ para obtener las tareas.
7. El consumidor procesa las tareas en orden de llegada y las envia a la base de datos.
8. El consumidor actualiza el estado de la tarea en la base de datos.
9. El usuario puede ver el orden de ejecución mas eficiente en la ruta '/scheduling'.

**NOTA:** El orden de ejecucion mas eficiente podria no reflejarse instantaneamente en la ruta '/scheduling' ya que el consumidor puede estar ocupado procesando tareas.
Si eso sucede, recargar la pagina '/scheduling'.

## Arquitectura

- Frontend: Permite crear tareas y mostrar el estado de las mismas.
- Backend: Recibe las tareas y las procesa en orden de llegada.
- RabbitMQ: Se encarga de la comunicación asíncrona entre el productor (API) y el consumidor.
- PostgreSQL: Almacena las tareas y su estado.

## Estructura del proyecto

.
├── src/              # Node.js backend (RabbitMQ consumer)
├── tasks-manager/       # Next.js frontend (RabbitMQ producer)
├── docker-compose.yml
└── README.md