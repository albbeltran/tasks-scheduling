
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model priorities
 * 
 */
export type priorities = $Result.DefaultSelection<Prisma.$prioritiesPayload>
/**
 * Model processes
 * 
 */
export type processes = $Result.DefaultSelection<Prisma.$processesPayload>
/**
 * Model scheduling_runs
 * 
 */
export type scheduling_runs = $Result.DefaultSelection<Prisma.$scheduling_runsPayload>
/**
 * Model task_status_history
 * 
 */
export type task_status_history = $Result.DefaultSelection<Prisma.$task_status_historyPayload>
/**
 * Model tasks
 * 
 */
export type tasks = $Result.DefaultSelection<Prisma.$tasksPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const task_status: {
  pending: 'pending',
  running: 'running',
  completed: 'completed',
  failed: 'failed'
};

export type task_status = (typeof task_status)[keyof typeof task_status]

}

export type task_status = $Enums.task_status

export const task_status: typeof $Enums.task_status

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Priorities
 * const priorities = await prisma.priorities.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Priorities
   * const priorities = await prisma.priorities.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.priorities`: Exposes CRUD operations for the **priorities** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Priorities
    * const priorities = await prisma.priorities.findMany()
    * ```
    */
  get priorities(): Prisma.prioritiesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.processes`: Exposes CRUD operations for the **processes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Processes
    * const processes = await prisma.processes.findMany()
    * ```
    */
  get processes(): Prisma.processesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.scheduling_runs`: Exposes CRUD operations for the **scheduling_runs** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Scheduling_runs
    * const scheduling_runs = await prisma.scheduling_runs.findMany()
    * ```
    */
  get scheduling_runs(): Prisma.scheduling_runsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.task_status_history`: Exposes CRUD operations for the **task_status_history** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Task_status_histories
    * const task_status_histories = await prisma.task_status_history.findMany()
    * ```
    */
  get task_status_history(): Prisma.task_status_historyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tasks`: Exposes CRUD operations for the **tasks** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tasks
    * const tasks = await prisma.tasks.findMany()
    * ```
    */
  get tasks(): Prisma.tasksDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.9.0
   * Query Engine version: 81e4af48011447c3cc503a190e86995b66d2a28e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    priorities: 'priorities',
    processes: 'processes',
    scheduling_runs: 'scheduling_runs',
    task_status_history: 'task_status_history',
    tasks: 'tasks'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "priorities" | "processes" | "scheduling_runs" | "task_status_history" | "tasks"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      priorities: {
        payload: Prisma.$prioritiesPayload<ExtArgs>
        fields: Prisma.prioritiesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.prioritiesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$prioritiesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.prioritiesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$prioritiesPayload>
          }
          findFirst: {
            args: Prisma.prioritiesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$prioritiesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.prioritiesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$prioritiesPayload>
          }
          findMany: {
            args: Prisma.prioritiesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$prioritiesPayload>[]
          }
          create: {
            args: Prisma.prioritiesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$prioritiesPayload>
          }
          createMany: {
            args: Prisma.prioritiesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.prioritiesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$prioritiesPayload>[]
          }
          delete: {
            args: Prisma.prioritiesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$prioritiesPayload>
          }
          update: {
            args: Prisma.prioritiesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$prioritiesPayload>
          }
          deleteMany: {
            args: Prisma.prioritiesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.prioritiesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.prioritiesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$prioritiesPayload>[]
          }
          upsert: {
            args: Prisma.prioritiesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$prioritiesPayload>
          }
          aggregate: {
            args: Prisma.PrioritiesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePriorities>
          }
          groupBy: {
            args: Prisma.prioritiesGroupByArgs<ExtArgs>
            result: $Utils.Optional<PrioritiesGroupByOutputType>[]
          }
          count: {
            args: Prisma.prioritiesCountArgs<ExtArgs>
            result: $Utils.Optional<PrioritiesCountAggregateOutputType> | number
          }
        }
      }
      processes: {
        payload: Prisma.$processesPayload<ExtArgs>
        fields: Prisma.processesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.processesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$processesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.processesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$processesPayload>
          }
          findFirst: {
            args: Prisma.processesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$processesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.processesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$processesPayload>
          }
          findMany: {
            args: Prisma.processesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$processesPayload>[]
          }
          create: {
            args: Prisma.processesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$processesPayload>
          }
          createMany: {
            args: Prisma.processesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.processesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$processesPayload>[]
          }
          delete: {
            args: Prisma.processesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$processesPayload>
          }
          update: {
            args: Prisma.processesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$processesPayload>
          }
          deleteMany: {
            args: Prisma.processesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.processesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.processesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$processesPayload>[]
          }
          upsert: {
            args: Prisma.processesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$processesPayload>
          }
          aggregate: {
            args: Prisma.ProcessesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProcesses>
          }
          groupBy: {
            args: Prisma.processesGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProcessesGroupByOutputType>[]
          }
          count: {
            args: Prisma.processesCountArgs<ExtArgs>
            result: $Utils.Optional<ProcessesCountAggregateOutputType> | number
          }
        }
      }
      scheduling_runs: {
        payload: Prisma.$scheduling_runsPayload<ExtArgs>
        fields: Prisma.scheduling_runsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.scheduling_runsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$scheduling_runsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.scheduling_runsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$scheduling_runsPayload>
          }
          findFirst: {
            args: Prisma.scheduling_runsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$scheduling_runsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.scheduling_runsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$scheduling_runsPayload>
          }
          findMany: {
            args: Prisma.scheduling_runsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$scheduling_runsPayload>[]
          }
          create: {
            args: Prisma.scheduling_runsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$scheduling_runsPayload>
          }
          createMany: {
            args: Prisma.scheduling_runsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.scheduling_runsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$scheduling_runsPayload>[]
          }
          delete: {
            args: Prisma.scheduling_runsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$scheduling_runsPayload>
          }
          update: {
            args: Prisma.scheduling_runsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$scheduling_runsPayload>
          }
          deleteMany: {
            args: Prisma.scheduling_runsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.scheduling_runsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.scheduling_runsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$scheduling_runsPayload>[]
          }
          upsert: {
            args: Prisma.scheduling_runsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$scheduling_runsPayload>
          }
          aggregate: {
            args: Prisma.Scheduling_runsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateScheduling_runs>
          }
          groupBy: {
            args: Prisma.scheduling_runsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Scheduling_runsGroupByOutputType>[]
          }
          count: {
            args: Prisma.scheduling_runsCountArgs<ExtArgs>
            result: $Utils.Optional<Scheduling_runsCountAggregateOutputType> | number
          }
        }
      }
      task_status_history: {
        payload: Prisma.$task_status_historyPayload<ExtArgs>
        fields: Prisma.task_status_historyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.task_status_historyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$task_status_historyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.task_status_historyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$task_status_historyPayload>
          }
          findFirst: {
            args: Prisma.task_status_historyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$task_status_historyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.task_status_historyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$task_status_historyPayload>
          }
          findMany: {
            args: Prisma.task_status_historyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$task_status_historyPayload>[]
          }
          create: {
            args: Prisma.task_status_historyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$task_status_historyPayload>
          }
          createMany: {
            args: Prisma.task_status_historyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.task_status_historyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$task_status_historyPayload>[]
          }
          delete: {
            args: Prisma.task_status_historyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$task_status_historyPayload>
          }
          update: {
            args: Prisma.task_status_historyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$task_status_historyPayload>
          }
          deleteMany: {
            args: Prisma.task_status_historyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.task_status_historyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.task_status_historyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$task_status_historyPayload>[]
          }
          upsert: {
            args: Prisma.task_status_historyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$task_status_historyPayload>
          }
          aggregate: {
            args: Prisma.Task_status_historyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTask_status_history>
          }
          groupBy: {
            args: Prisma.task_status_historyGroupByArgs<ExtArgs>
            result: $Utils.Optional<Task_status_historyGroupByOutputType>[]
          }
          count: {
            args: Prisma.task_status_historyCountArgs<ExtArgs>
            result: $Utils.Optional<Task_status_historyCountAggregateOutputType> | number
          }
        }
      }
      tasks: {
        payload: Prisma.$tasksPayload<ExtArgs>
        fields: Prisma.tasksFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tasksFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tasksPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tasksFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tasksPayload>
          }
          findFirst: {
            args: Prisma.tasksFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tasksPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tasksFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tasksPayload>
          }
          findMany: {
            args: Prisma.tasksFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tasksPayload>[]
          }
          create: {
            args: Prisma.tasksCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tasksPayload>
          }
          createMany: {
            args: Prisma.tasksCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.tasksCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tasksPayload>[]
          }
          delete: {
            args: Prisma.tasksDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tasksPayload>
          }
          update: {
            args: Prisma.tasksUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tasksPayload>
          }
          deleteMany: {
            args: Prisma.tasksDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tasksUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.tasksUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tasksPayload>[]
          }
          upsert: {
            args: Prisma.tasksUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tasksPayload>
          }
          aggregate: {
            args: Prisma.TasksAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTasks>
          }
          groupBy: {
            args: Prisma.tasksGroupByArgs<ExtArgs>
            result: $Utils.Optional<TasksGroupByOutputType>[]
          }
          count: {
            args: Prisma.tasksCountArgs<ExtArgs>
            result: $Utils.Optional<TasksCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    priorities?: prioritiesOmit
    processes?: processesOmit
    scheduling_runs?: scheduling_runsOmit
    task_status_history?: task_status_historyOmit
    tasks?: tasksOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type PrioritiesCountOutputType
   */

  export type PrioritiesCountOutputType = {
    tasks: number
  }

  export type PrioritiesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tasks?: boolean | PrioritiesCountOutputTypeCountTasksArgs
  }

  // Custom InputTypes
  /**
   * PrioritiesCountOutputType without action
   */
  export type PrioritiesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrioritiesCountOutputType
     */
    select?: PrioritiesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PrioritiesCountOutputType without action
   */
  export type PrioritiesCountOutputTypeCountTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tasksWhereInput
  }


  /**
   * Count Type Scheduling_runsCountOutputType
   */

  export type Scheduling_runsCountOutputType = {
    processes: number
  }

  export type Scheduling_runsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    processes?: boolean | Scheduling_runsCountOutputTypeCountProcessesArgs
  }

  // Custom InputTypes
  /**
   * Scheduling_runsCountOutputType without action
   */
  export type Scheduling_runsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scheduling_runsCountOutputType
     */
    select?: Scheduling_runsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Scheduling_runsCountOutputType without action
   */
  export type Scheduling_runsCountOutputTypeCountProcessesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: processesWhereInput
  }


  /**
   * Count Type TasksCountOutputType
   */

  export type TasksCountOutputType = {
    processes: number
    task_status_history: number
  }

  export type TasksCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    processes?: boolean | TasksCountOutputTypeCountProcessesArgs
    task_status_history?: boolean | TasksCountOutputTypeCountTask_status_historyArgs
  }

  // Custom InputTypes
  /**
   * TasksCountOutputType without action
   */
  export type TasksCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TasksCountOutputType
     */
    select?: TasksCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TasksCountOutputType without action
   */
  export type TasksCountOutputTypeCountProcessesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: processesWhereInput
  }

  /**
   * TasksCountOutputType without action
   */
  export type TasksCountOutputTypeCountTask_status_historyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: task_status_historyWhereInput
  }


  /**
   * Models
   */

  /**
   * Model priorities
   */

  export type AggregatePriorities = {
    _count: PrioritiesCountAggregateOutputType | null
    _avg: PrioritiesAvgAggregateOutputType | null
    _sum: PrioritiesSumAggregateOutputType | null
    _min: PrioritiesMinAggregateOutputType | null
    _max: PrioritiesMaxAggregateOutputType | null
  }

  export type PrioritiesAvgAggregateOutputType = {
    id: number | null
  }

  export type PrioritiesSumAggregateOutputType = {
    id: number | null
  }

  export type PrioritiesMinAggregateOutputType = {
    id: number | null
    description: string | null
  }

  export type PrioritiesMaxAggregateOutputType = {
    id: number | null
    description: string | null
  }

  export type PrioritiesCountAggregateOutputType = {
    id: number
    description: number
    _all: number
  }


  export type PrioritiesAvgAggregateInputType = {
    id?: true
  }

  export type PrioritiesSumAggregateInputType = {
    id?: true
  }

  export type PrioritiesMinAggregateInputType = {
    id?: true
    description?: true
  }

  export type PrioritiesMaxAggregateInputType = {
    id?: true
    description?: true
  }

  export type PrioritiesCountAggregateInputType = {
    id?: true
    description?: true
    _all?: true
  }

  export type PrioritiesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which priorities to aggregate.
     */
    where?: prioritiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of priorities to fetch.
     */
    orderBy?: prioritiesOrderByWithRelationInput | prioritiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: prioritiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` priorities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` priorities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned priorities
    **/
    _count?: true | PrioritiesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PrioritiesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PrioritiesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PrioritiesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PrioritiesMaxAggregateInputType
  }

  export type GetPrioritiesAggregateType<T extends PrioritiesAggregateArgs> = {
        [P in keyof T & keyof AggregatePriorities]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePriorities[P]>
      : GetScalarType<T[P], AggregatePriorities[P]>
  }




  export type prioritiesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: prioritiesWhereInput
    orderBy?: prioritiesOrderByWithAggregationInput | prioritiesOrderByWithAggregationInput[]
    by: PrioritiesScalarFieldEnum[] | PrioritiesScalarFieldEnum
    having?: prioritiesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PrioritiesCountAggregateInputType | true
    _avg?: PrioritiesAvgAggregateInputType
    _sum?: PrioritiesSumAggregateInputType
    _min?: PrioritiesMinAggregateInputType
    _max?: PrioritiesMaxAggregateInputType
  }

  export type PrioritiesGroupByOutputType = {
    id: number
    description: string
    _count: PrioritiesCountAggregateOutputType | null
    _avg: PrioritiesAvgAggregateOutputType | null
    _sum: PrioritiesSumAggregateOutputType | null
    _min: PrioritiesMinAggregateOutputType | null
    _max: PrioritiesMaxAggregateOutputType | null
  }

  type GetPrioritiesGroupByPayload<T extends prioritiesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PrioritiesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PrioritiesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PrioritiesGroupByOutputType[P]>
            : GetScalarType<T[P], PrioritiesGroupByOutputType[P]>
        }
      >
    >


  export type prioritiesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    description?: boolean
    tasks?: boolean | priorities$tasksArgs<ExtArgs>
    _count?: boolean | PrioritiesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["priorities"]>

  export type prioritiesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    description?: boolean
  }, ExtArgs["result"]["priorities"]>

  export type prioritiesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    description?: boolean
  }, ExtArgs["result"]["priorities"]>

  export type prioritiesSelectScalar = {
    id?: boolean
    description?: boolean
  }

  export type prioritiesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "description", ExtArgs["result"]["priorities"]>
  export type prioritiesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tasks?: boolean | priorities$tasksArgs<ExtArgs>
    _count?: boolean | PrioritiesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type prioritiesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type prioritiesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $prioritiesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "priorities"
    objects: {
      tasks: Prisma.$tasksPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      description: string
    }, ExtArgs["result"]["priorities"]>
    composites: {}
  }

  type prioritiesGetPayload<S extends boolean | null | undefined | prioritiesDefaultArgs> = $Result.GetResult<Prisma.$prioritiesPayload, S>

  type prioritiesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<prioritiesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PrioritiesCountAggregateInputType | true
    }

  export interface prioritiesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['priorities'], meta: { name: 'priorities' } }
    /**
     * Find zero or one Priorities that matches the filter.
     * @param {prioritiesFindUniqueArgs} args - Arguments to find a Priorities
     * @example
     * // Get one Priorities
     * const priorities = await prisma.priorities.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends prioritiesFindUniqueArgs>(args: SelectSubset<T, prioritiesFindUniqueArgs<ExtArgs>>): Prisma__prioritiesClient<$Result.GetResult<Prisma.$prioritiesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Priorities that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {prioritiesFindUniqueOrThrowArgs} args - Arguments to find a Priorities
     * @example
     * // Get one Priorities
     * const priorities = await prisma.priorities.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends prioritiesFindUniqueOrThrowArgs>(args: SelectSubset<T, prioritiesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__prioritiesClient<$Result.GetResult<Prisma.$prioritiesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Priorities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {prioritiesFindFirstArgs} args - Arguments to find a Priorities
     * @example
     * // Get one Priorities
     * const priorities = await prisma.priorities.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends prioritiesFindFirstArgs>(args?: SelectSubset<T, prioritiesFindFirstArgs<ExtArgs>>): Prisma__prioritiesClient<$Result.GetResult<Prisma.$prioritiesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Priorities that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {prioritiesFindFirstOrThrowArgs} args - Arguments to find a Priorities
     * @example
     * // Get one Priorities
     * const priorities = await prisma.priorities.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends prioritiesFindFirstOrThrowArgs>(args?: SelectSubset<T, prioritiesFindFirstOrThrowArgs<ExtArgs>>): Prisma__prioritiesClient<$Result.GetResult<Prisma.$prioritiesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Priorities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {prioritiesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Priorities
     * const priorities = await prisma.priorities.findMany()
     * 
     * // Get first 10 Priorities
     * const priorities = await prisma.priorities.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const prioritiesWithIdOnly = await prisma.priorities.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends prioritiesFindManyArgs>(args?: SelectSubset<T, prioritiesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$prioritiesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Priorities.
     * @param {prioritiesCreateArgs} args - Arguments to create a Priorities.
     * @example
     * // Create one Priorities
     * const Priorities = await prisma.priorities.create({
     *   data: {
     *     // ... data to create a Priorities
     *   }
     * })
     * 
     */
    create<T extends prioritiesCreateArgs>(args: SelectSubset<T, prioritiesCreateArgs<ExtArgs>>): Prisma__prioritiesClient<$Result.GetResult<Prisma.$prioritiesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Priorities.
     * @param {prioritiesCreateManyArgs} args - Arguments to create many Priorities.
     * @example
     * // Create many Priorities
     * const priorities = await prisma.priorities.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends prioritiesCreateManyArgs>(args?: SelectSubset<T, prioritiesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Priorities and returns the data saved in the database.
     * @param {prioritiesCreateManyAndReturnArgs} args - Arguments to create many Priorities.
     * @example
     * // Create many Priorities
     * const priorities = await prisma.priorities.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Priorities and only return the `id`
     * const prioritiesWithIdOnly = await prisma.priorities.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends prioritiesCreateManyAndReturnArgs>(args?: SelectSubset<T, prioritiesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$prioritiesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Priorities.
     * @param {prioritiesDeleteArgs} args - Arguments to delete one Priorities.
     * @example
     * // Delete one Priorities
     * const Priorities = await prisma.priorities.delete({
     *   where: {
     *     // ... filter to delete one Priorities
     *   }
     * })
     * 
     */
    delete<T extends prioritiesDeleteArgs>(args: SelectSubset<T, prioritiesDeleteArgs<ExtArgs>>): Prisma__prioritiesClient<$Result.GetResult<Prisma.$prioritiesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Priorities.
     * @param {prioritiesUpdateArgs} args - Arguments to update one Priorities.
     * @example
     * // Update one Priorities
     * const priorities = await prisma.priorities.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends prioritiesUpdateArgs>(args: SelectSubset<T, prioritiesUpdateArgs<ExtArgs>>): Prisma__prioritiesClient<$Result.GetResult<Prisma.$prioritiesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Priorities.
     * @param {prioritiesDeleteManyArgs} args - Arguments to filter Priorities to delete.
     * @example
     * // Delete a few Priorities
     * const { count } = await prisma.priorities.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends prioritiesDeleteManyArgs>(args?: SelectSubset<T, prioritiesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Priorities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {prioritiesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Priorities
     * const priorities = await prisma.priorities.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends prioritiesUpdateManyArgs>(args: SelectSubset<T, prioritiesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Priorities and returns the data updated in the database.
     * @param {prioritiesUpdateManyAndReturnArgs} args - Arguments to update many Priorities.
     * @example
     * // Update many Priorities
     * const priorities = await prisma.priorities.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Priorities and only return the `id`
     * const prioritiesWithIdOnly = await prisma.priorities.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends prioritiesUpdateManyAndReturnArgs>(args: SelectSubset<T, prioritiesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$prioritiesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Priorities.
     * @param {prioritiesUpsertArgs} args - Arguments to update or create a Priorities.
     * @example
     * // Update or create a Priorities
     * const priorities = await prisma.priorities.upsert({
     *   create: {
     *     // ... data to create a Priorities
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Priorities we want to update
     *   }
     * })
     */
    upsert<T extends prioritiesUpsertArgs>(args: SelectSubset<T, prioritiesUpsertArgs<ExtArgs>>): Prisma__prioritiesClient<$Result.GetResult<Prisma.$prioritiesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Priorities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {prioritiesCountArgs} args - Arguments to filter Priorities to count.
     * @example
     * // Count the number of Priorities
     * const count = await prisma.priorities.count({
     *   where: {
     *     // ... the filter for the Priorities we want to count
     *   }
     * })
    **/
    count<T extends prioritiesCountArgs>(
      args?: Subset<T, prioritiesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PrioritiesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Priorities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrioritiesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PrioritiesAggregateArgs>(args: Subset<T, PrioritiesAggregateArgs>): Prisma.PrismaPromise<GetPrioritiesAggregateType<T>>

    /**
     * Group by Priorities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {prioritiesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends prioritiesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: prioritiesGroupByArgs['orderBy'] }
        : { orderBy?: prioritiesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, prioritiesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPrioritiesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the priorities model
   */
  readonly fields: prioritiesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for priorities.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__prioritiesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tasks<T extends priorities$tasksArgs<ExtArgs> = {}>(args?: Subset<T, priorities$tasksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tasksPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the priorities model
   */
  interface prioritiesFieldRefs {
    readonly id: FieldRef<"priorities", 'Int'>
    readonly description: FieldRef<"priorities", 'String'>
  }
    

  // Custom InputTypes
  /**
   * priorities findUnique
   */
  export type prioritiesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the priorities
     */
    select?: prioritiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the priorities
     */
    omit?: prioritiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prioritiesInclude<ExtArgs> | null
    /**
     * Filter, which priorities to fetch.
     */
    where: prioritiesWhereUniqueInput
  }

  /**
   * priorities findUniqueOrThrow
   */
  export type prioritiesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the priorities
     */
    select?: prioritiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the priorities
     */
    omit?: prioritiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prioritiesInclude<ExtArgs> | null
    /**
     * Filter, which priorities to fetch.
     */
    where: prioritiesWhereUniqueInput
  }

  /**
   * priorities findFirst
   */
  export type prioritiesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the priorities
     */
    select?: prioritiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the priorities
     */
    omit?: prioritiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prioritiesInclude<ExtArgs> | null
    /**
     * Filter, which priorities to fetch.
     */
    where?: prioritiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of priorities to fetch.
     */
    orderBy?: prioritiesOrderByWithRelationInput | prioritiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for priorities.
     */
    cursor?: prioritiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` priorities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` priorities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of priorities.
     */
    distinct?: PrioritiesScalarFieldEnum | PrioritiesScalarFieldEnum[]
  }

  /**
   * priorities findFirstOrThrow
   */
  export type prioritiesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the priorities
     */
    select?: prioritiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the priorities
     */
    omit?: prioritiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prioritiesInclude<ExtArgs> | null
    /**
     * Filter, which priorities to fetch.
     */
    where?: prioritiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of priorities to fetch.
     */
    orderBy?: prioritiesOrderByWithRelationInput | prioritiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for priorities.
     */
    cursor?: prioritiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` priorities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` priorities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of priorities.
     */
    distinct?: PrioritiesScalarFieldEnum | PrioritiesScalarFieldEnum[]
  }

  /**
   * priorities findMany
   */
  export type prioritiesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the priorities
     */
    select?: prioritiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the priorities
     */
    omit?: prioritiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prioritiesInclude<ExtArgs> | null
    /**
     * Filter, which priorities to fetch.
     */
    where?: prioritiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of priorities to fetch.
     */
    orderBy?: prioritiesOrderByWithRelationInput | prioritiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing priorities.
     */
    cursor?: prioritiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` priorities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` priorities.
     */
    skip?: number
    distinct?: PrioritiesScalarFieldEnum | PrioritiesScalarFieldEnum[]
  }

  /**
   * priorities create
   */
  export type prioritiesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the priorities
     */
    select?: prioritiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the priorities
     */
    omit?: prioritiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prioritiesInclude<ExtArgs> | null
    /**
     * The data needed to create a priorities.
     */
    data: XOR<prioritiesCreateInput, prioritiesUncheckedCreateInput>
  }

  /**
   * priorities createMany
   */
  export type prioritiesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many priorities.
     */
    data: prioritiesCreateManyInput | prioritiesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * priorities createManyAndReturn
   */
  export type prioritiesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the priorities
     */
    select?: prioritiesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the priorities
     */
    omit?: prioritiesOmit<ExtArgs> | null
    /**
     * The data used to create many priorities.
     */
    data: prioritiesCreateManyInput | prioritiesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * priorities update
   */
  export type prioritiesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the priorities
     */
    select?: prioritiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the priorities
     */
    omit?: prioritiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prioritiesInclude<ExtArgs> | null
    /**
     * The data needed to update a priorities.
     */
    data: XOR<prioritiesUpdateInput, prioritiesUncheckedUpdateInput>
    /**
     * Choose, which priorities to update.
     */
    where: prioritiesWhereUniqueInput
  }

  /**
   * priorities updateMany
   */
  export type prioritiesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update priorities.
     */
    data: XOR<prioritiesUpdateManyMutationInput, prioritiesUncheckedUpdateManyInput>
    /**
     * Filter which priorities to update
     */
    where?: prioritiesWhereInput
    /**
     * Limit how many priorities to update.
     */
    limit?: number
  }

  /**
   * priorities updateManyAndReturn
   */
  export type prioritiesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the priorities
     */
    select?: prioritiesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the priorities
     */
    omit?: prioritiesOmit<ExtArgs> | null
    /**
     * The data used to update priorities.
     */
    data: XOR<prioritiesUpdateManyMutationInput, prioritiesUncheckedUpdateManyInput>
    /**
     * Filter which priorities to update
     */
    where?: prioritiesWhereInput
    /**
     * Limit how many priorities to update.
     */
    limit?: number
  }

  /**
   * priorities upsert
   */
  export type prioritiesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the priorities
     */
    select?: prioritiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the priorities
     */
    omit?: prioritiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prioritiesInclude<ExtArgs> | null
    /**
     * The filter to search for the priorities to update in case it exists.
     */
    where: prioritiesWhereUniqueInput
    /**
     * In case the priorities found by the `where` argument doesn't exist, create a new priorities with this data.
     */
    create: XOR<prioritiesCreateInput, prioritiesUncheckedCreateInput>
    /**
     * In case the priorities was found with the provided `where` argument, update it with this data.
     */
    update: XOR<prioritiesUpdateInput, prioritiesUncheckedUpdateInput>
  }

  /**
   * priorities delete
   */
  export type prioritiesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the priorities
     */
    select?: prioritiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the priorities
     */
    omit?: prioritiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prioritiesInclude<ExtArgs> | null
    /**
     * Filter which priorities to delete.
     */
    where: prioritiesWhereUniqueInput
  }

  /**
   * priorities deleteMany
   */
  export type prioritiesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which priorities to delete
     */
    where?: prioritiesWhereInput
    /**
     * Limit how many priorities to delete.
     */
    limit?: number
  }

  /**
   * priorities.tasks
   */
  export type priorities$tasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tasks
     */
    select?: tasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tasks
     */
    omit?: tasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tasksInclude<ExtArgs> | null
    where?: tasksWhereInput
    orderBy?: tasksOrderByWithRelationInput | tasksOrderByWithRelationInput[]
    cursor?: tasksWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TasksScalarFieldEnum | TasksScalarFieldEnum[]
  }

  /**
   * priorities without action
   */
  export type prioritiesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the priorities
     */
    select?: prioritiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the priorities
     */
    omit?: prioritiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prioritiesInclude<ExtArgs> | null
  }


  /**
   * Model processes
   */

  export type AggregateProcesses = {
    _count: ProcessesCountAggregateOutputType | null
    _avg: ProcessesAvgAggregateOutputType | null
    _sum: ProcessesSumAggregateOutputType | null
    _min: ProcessesMinAggregateOutputType | null
    _max: ProcessesMaxAggregateOutputType | null
  }

  export type ProcessesAvgAggregateOutputType = {
    id: number | null
    scheduling_run_id: number | null
    task_id: number | null
    execution_order: number | null
  }

  export type ProcessesSumAggregateOutputType = {
    id: number | null
    scheduling_run_id: number | null
    task_id: number | null
    execution_order: number | null
  }

  export type ProcessesMinAggregateOutputType = {
    id: number | null
    scheduling_run_id: number | null
    task_id: number | null
    started_at: Date | null
    ended_at: Date | null
    execution_order: number | null
  }

  export type ProcessesMaxAggregateOutputType = {
    id: number | null
    scheduling_run_id: number | null
    task_id: number | null
    started_at: Date | null
    ended_at: Date | null
    execution_order: number | null
  }

  export type ProcessesCountAggregateOutputType = {
    id: number
    scheduling_run_id: number
    task_id: number
    started_at: number
    ended_at: number
    execution_order: number
    _all: number
  }


  export type ProcessesAvgAggregateInputType = {
    id?: true
    scheduling_run_id?: true
    task_id?: true
    execution_order?: true
  }

  export type ProcessesSumAggregateInputType = {
    id?: true
    scheduling_run_id?: true
    task_id?: true
    execution_order?: true
  }

  export type ProcessesMinAggregateInputType = {
    id?: true
    scheduling_run_id?: true
    task_id?: true
    started_at?: true
    ended_at?: true
    execution_order?: true
  }

  export type ProcessesMaxAggregateInputType = {
    id?: true
    scheduling_run_id?: true
    task_id?: true
    started_at?: true
    ended_at?: true
    execution_order?: true
  }

  export type ProcessesCountAggregateInputType = {
    id?: true
    scheduling_run_id?: true
    task_id?: true
    started_at?: true
    ended_at?: true
    execution_order?: true
    _all?: true
  }

  export type ProcessesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which processes to aggregate.
     */
    where?: processesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of processes to fetch.
     */
    orderBy?: processesOrderByWithRelationInput | processesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: processesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` processes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` processes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned processes
    **/
    _count?: true | ProcessesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProcessesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProcessesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProcessesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProcessesMaxAggregateInputType
  }

  export type GetProcessesAggregateType<T extends ProcessesAggregateArgs> = {
        [P in keyof T & keyof AggregateProcesses]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProcesses[P]>
      : GetScalarType<T[P], AggregateProcesses[P]>
  }




  export type processesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: processesWhereInput
    orderBy?: processesOrderByWithAggregationInput | processesOrderByWithAggregationInput[]
    by: ProcessesScalarFieldEnum[] | ProcessesScalarFieldEnum
    having?: processesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProcessesCountAggregateInputType | true
    _avg?: ProcessesAvgAggregateInputType
    _sum?: ProcessesSumAggregateInputType
    _min?: ProcessesMinAggregateInputType
    _max?: ProcessesMaxAggregateInputType
  }

  export type ProcessesGroupByOutputType = {
    id: number
    scheduling_run_id: number
    task_id: number
    started_at: Date | null
    ended_at: Date | null
    execution_order: number
    _count: ProcessesCountAggregateOutputType | null
    _avg: ProcessesAvgAggregateOutputType | null
    _sum: ProcessesSumAggregateOutputType | null
    _min: ProcessesMinAggregateOutputType | null
    _max: ProcessesMaxAggregateOutputType | null
  }

  type GetProcessesGroupByPayload<T extends processesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProcessesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProcessesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProcessesGroupByOutputType[P]>
            : GetScalarType<T[P], ProcessesGroupByOutputType[P]>
        }
      >
    >


  export type processesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    scheduling_run_id?: boolean
    task_id?: boolean
    started_at?: boolean
    ended_at?: boolean
    execution_order?: boolean
    scheduling_runs?: boolean | scheduling_runsDefaultArgs<ExtArgs>
    tasks?: boolean | tasksDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["processes"]>

  export type processesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    scheduling_run_id?: boolean
    task_id?: boolean
    started_at?: boolean
    ended_at?: boolean
    execution_order?: boolean
    scheduling_runs?: boolean | scheduling_runsDefaultArgs<ExtArgs>
    tasks?: boolean | tasksDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["processes"]>

  export type processesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    scheduling_run_id?: boolean
    task_id?: boolean
    started_at?: boolean
    ended_at?: boolean
    execution_order?: boolean
    scheduling_runs?: boolean | scheduling_runsDefaultArgs<ExtArgs>
    tasks?: boolean | tasksDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["processes"]>

  export type processesSelectScalar = {
    id?: boolean
    scheduling_run_id?: boolean
    task_id?: boolean
    started_at?: boolean
    ended_at?: boolean
    execution_order?: boolean
  }

  export type processesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "scheduling_run_id" | "task_id" | "started_at" | "ended_at" | "execution_order", ExtArgs["result"]["processes"]>
  export type processesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    scheduling_runs?: boolean | scheduling_runsDefaultArgs<ExtArgs>
    tasks?: boolean | tasksDefaultArgs<ExtArgs>
  }
  export type processesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    scheduling_runs?: boolean | scheduling_runsDefaultArgs<ExtArgs>
    tasks?: boolean | tasksDefaultArgs<ExtArgs>
  }
  export type processesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    scheduling_runs?: boolean | scheduling_runsDefaultArgs<ExtArgs>
    tasks?: boolean | tasksDefaultArgs<ExtArgs>
  }

  export type $processesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "processes"
    objects: {
      scheduling_runs: Prisma.$scheduling_runsPayload<ExtArgs>
      tasks: Prisma.$tasksPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      scheduling_run_id: number
      task_id: number
      started_at: Date | null
      ended_at: Date | null
      execution_order: number
    }, ExtArgs["result"]["processes"]>
    composites: {}
  }

  type processesGetPayload<S extends boolean | null | undefined | processesDefaultArgs> = $Result.GetResult<Prisma.$processesPayload, S>

  type processesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<processesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProcessesCountAggregateInputType | true
    }

  export interface processesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['processes'], meta: { name: 'processes' } }
    /**
     * Find zero or one Processes that matches the filter.
     * @param {processesFindUniqueArgs} args - Arguments to find a Processes
     * @example
     * // Get one Processes
     * const processes = await prisma.processes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends processesFindUniqueArgs>(args: SelectSubset<T, processesFindUniqueArgs<ExtArgs>>): Prisma__processesClient<$Result.GetResult<Prisma.$processesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Processes that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {processesFindUniqueOrThrowArgs} args - Arguments to find a Processes
     * @example
     * // Get one Processes
     * const processes = await prisma.processes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends processesFindUniqueOrThrowArgs>(args: SelectSubset<T, processesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__processesClient<$Result.GetResult<Prisma.$processesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Processes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {processesFindFirstArgs} args - Arguments to find a Processes
     * @example
     * // Get one Processes
     * const processes = await prisma.processes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends processesFindFirstArgs>(args?: SelectSubset<T, processesFindFirstArgs<ExtArgs>>): Prisma__processesClient<$Result.GetResult<Prisma.$processesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Processes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {processesFindFirstOrThrowArgs} args - Arguments to find a Processes
     * @example
     * // Get one Processes
     * const processes = await prisma.processes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends processesFindFirstOrThrowArgs>(args?: SelectSubset<T, processesFindFirstOrThrowArgs<ExtArgs>>): Prisma__processesClient<$Result.GetResult<Prisma.$processesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Processes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {processesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Processes
     * const processes = await prisma.processes.findMany()
     * 
     * // Get first 10 Processes
     * const processes = await prisma.processes.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const processesWithIdOnly = await prisma.processes.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends processesFindManyArgs>(args?: SelectSubset<T, processesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$processesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Processes.
     * @param {processesCreateArgs} args - Arguments to create a Processes.
     * @example
     * // Create one Processes
     * const Processes = await prisma.processes.create({
     *   data: {
     *     // ... data to create a Processes
     *   }
     * })
     * 
     */
    create<T extends processesCreateArgs>(args: SelectSubset<T, processesCreateArgs<ExtArgs>>): Prisma__processesClient<$Result.GetResult<Prisma.$processesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Processes.
     * @param {processesCreateManyArgs} args - Arguments to create many Processes.
     * @example
     * // Create many Processes
     * const processes = await prisma.processes.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends processesCreateManyArgs>(args?: SelectSubset<T, processesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Processes and returns the data saved in the database.
     * @param {processesCreateManyAndReturnArgs} args - Arguments to create many Processes.
     * @example
     * // Create many Processes
     * const processes = await prisma.processes.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Processes and only return the `id`
     * const processesWithIdOnly = await prisma.processes.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends processesCreateManyAndReturnArgs>(args?: SelectSubset<T, processesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$processesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Processes.
     * @param {processesDeleteArgs} args - Arguments to delete one Processes.
     * @example
     * // Delete one Processes
     * const Processes = await prisma.processes.delete({
     *   where: {
     *     // ... filter to delete one Processes
     *   }
     * })
     * 
     */
    delete<T extends processesDeleteArgs>(args: SelectSubset<T, processesDeleteArgs<ExtArgs>>): Prisma__processesClient<$Result.GetResult<Prisma.$processesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Processes.
     * @param {processesUpdateArgs} args - Arguments to update one Processes.
     * @example
     * // Update one Processes
     * const processes = await prisma.processes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends processesUpdateArgs>(args: SelectSubset<T, processesUpdateArgs<ExtArgs>>): Prisma__processesClient<$Result.GetResult<Prisma.$processesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Processes.
     * @param {processesDeleteManyArgs} args - Arguments to filter Processes to delete.
     * @example
     * // Delete a few Processes
     * const { count } = await prisma.processes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends processesDeleteManyArgs>(args?: SelectSubset<T, processesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Processes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {processesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Processes
     * const processes = await prisma.processes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends processesUpdateManyArgs>(args: SelectSubset<T, processesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Processes and returns the data updated in the database.
     * @param {processesUpdateManyAndReturnArgs} args - Arguments to update many Processes.
     * @example
     * // Update many Processes
     * const processes = await prisma.processes.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Processes and only return the `id`
     * const processesWithIdOnly = await prisma.processes.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends processesUpdateManyAndReturnArgs>(args: SelectSubset<T, processesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$processesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Processes.
     * @param {processesUpsertArgs} args - Arguments to update or create a Processes.
     * @example
     * // Update or create a Processes
     * const processes = await prisma.processes.upsert({
     *   create: {
     *     // ... data to create a Processes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Processes we want to update
     *   }
     * })
     */
    upsert<T extends processesUpsertArgs>(args: SelectSubset<T, processesUpsertArgs<ExtArgs>>): Prisma__processesClient<$Result.GetResult<Prisma.$processesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Processes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {processesCountArgs} args - Arguments to filter Processes to count.
     * @example
     * // Count the number of Processes
     * const count = await prisma.processes.count({
     *   where: {
     *     // ... the filter for the Processes we want to count
     *   }
     * })
    **/
    count<T extends processesCountArgs>(
      args?: Subset<T, processesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProcessesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Processes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProcessesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProcessesAggregateArgs>(args: Subset<T, ProcessesAggregateArgs>): Prisma.PrismaPromise<GetProcessesAggregateType<T>>

    /**
     * Group by Processes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {processesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends processesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: processesGroupByArgs['orderBy'] }
        : { orderBy?: processesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, processesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProcessesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the processes model
   */
  readonly fields: processesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for processes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__processesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    scheduling_runs<T extends scheduling_runsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, scheduling_runsDefaultArgs<ExtArgs>>): Prisma__scheduling_runsClient<$Result.GetResult<Prisma.$scheduling_runsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tasks<T extends tasksDefaultArgs<ExtArgs> = {}>(args?: Subset<T, tasksDefaultArgs<ExtArgs>>): Prisma__tasksClient<$Result.GetResult<Prisma.$tasksPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the processes model
   */
  interface processesFieldRefs {
    readonly id: FieldRef<"processes", 'Int'>
    readonly scheduling_run_id: FieldRef<"processes", 'Int'>
    readonly task_id: FieldRef<"processes", 'Int'>
    readonly started_at: FieldRef<"processes", 'DateTime'>
    readonly ended_at: FieldRef<"processes", 'DateTime'>
    readonly execution_order: FieldRef<"processes", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * processes findUnique
   */
  export type processesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the processes
     */
    select?: processesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the processes
     */
    omit?: processesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: processesInclude<ExtArgs> | null
    /**
     * Filter, which processes to fetch.
     */
    where: processesWhereUniqueInput
  }

  /**
   * processes findUniqueOrThrow
   */
  export type processesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the processes
     */
    select?: processesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the processes
     */
    omit?: processesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: processesInclude<ExtArgs> | null
    /**
     * Filter, which processes to fetch.
     */
    where: processesWhereUniqueInput
  }

  /**
   * processes findFirst
   */
  export type processesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the processes
     */
    select?: processesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the processes
     */
    omit?: processesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: processesInclude<ExtArgs> | null
    /**
     * Filter, which processes to fetch.
     */
    where?: processesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of processes to fetch.
     */
    orderBy?: processesOrderByWithRelationInput | processesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for processes.
     */
    cursor?: processesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` processes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` processes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of processes.
     */
    distinct?: ProcessesScalarFieldEnum | ProcessesScalarFieldEnum[]
  }

  /**
   * processes findFirstOrThrow
   */
  export type processesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the processes
     */
    select?: processesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the processes
     */
    omit?: processesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: processesInclude<ExtArgs> | null
    /**
     * Filter, which processes to fetch.
     */
    where?: processesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of processes to fetch.
     */
    orderBy?: processesOrderByWithRelationInput | processesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for processes.
     */
    cursor?: processesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` processes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` processes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of processes.
     */
    distinct?: ProcessesScalarFieldEnum | ProcessesScalarFieldEnum[]
  }

  /**
   * processes findMany
   */
  export type processesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the processes
     */
    select?: processesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the processes
     */
    omit?: processesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: processesInclude<ExtArgs> | null
    /**
     * Filter, which processes to fetch.
     */
    where?: processesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of processes to fetch.
     */
    orderBy?: processesOrderByWithRelationInput | processesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing processes.
     */
    cursor?: processesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` processes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` processes.
     */
    skip?: number
    distinct?: ProcessesScalarFieldEnum | ProcessesScalarFieldEnum[]
  }

  /**
   * processes create
   */
  export type processesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the processes
     */
    select?: processesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the processes
     */
    omit?: processesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: processesInclude<ExtArgs> | null
    /**
     * The data needed to create a processes.
     */
    data: XOR<processesCreateInput, processesUncheckedCreateInput>
  }

  /**
   * processes createMany
   */
  export type processesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many processes.
     */
    data: processesCreateManyInput | processesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * processes createManyAndReturn
   */
  export type processesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the processes
     */
    select?: processesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the processes
     */
    omit?: processesOmit<ExtArgs> | null
    /**
     * The data used to create many processes.
     */
    data: processesCreateManyInput | processesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: processesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * processes update
   */
  export type processesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the processes
     */
    select?: processesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the processes
     */
    omit?: processesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: processesInclude<ExtArgs> | null
    /**
     * The data needed to update a processes.
     */
    data: XOR<processesUpdateInput, processesUncheckedUpdateInput>
    /**
     * Choose, which processes to update.
     */
    where: processesWhereUniqueInput
  }

  /**
   * processes updateMany
   */
  export type processesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update processes.
     */
    data: XOR<processesUpdateManyMutationInput, processesUncheckedUpdateManyInput>
    /**
     * Filter which processes to update
     */
    where?: processesWhereInput
    /**
     * Limit how many processes to update.
     */
    limit?: number
  }

  /**
   * processes updateManyAndReturn
   */
  export type processesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the processes
     */
    select?: processesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the processes
     */
    omit?: processesOmit<ExtArgs> | null
    /**
     * The data used to update processes.
     */
    data: XOR<processesUpdateManyMutationInput, processesUncheckedUpdateManyInput>
    /**
     * Filter which processes to update
     */
    where?: processesWhereInput
    /**
     * Limit how many processes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: processesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * processes upsert
   */
  export type processesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the processes
     */
    select?: processesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the processes
     */
    omit?: processesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: processesInclude<ExtArgs> | null
    /**
     * The filter to search for the processes to update in case it exists.
     */
    where: processesWhereUniqueInput
    /**
     * In case the processes found by the `where` argument doesn't exist, create a new processes with this data.
     */
    create: XOR<processesCreateInput, processesUncheckedCreateInput>
    /**
     * In case the processes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<processesUpdateInput, processesUncheckedUpdateInput>
  }

  /**
   * processes delete
   */
  export type processesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the processes
     */
    select?: processesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the processes
     */
    omit?: processesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: processesInclude<ExtArgs> | null
    /**
     * Filter which processes to delete.
     */
    where: processesWhereUniqueInput
  }

  /**
   * processes deleteMany
   */
  export type processesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which processes to delete
     */
    where?: processesWhereInput
    /**
     * Limit how many processes to delete.
     */
    limit?: number
  }

  /**
   * processes without action
   */
  export type processesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the processes
     */
    select?: processesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the processes
     */
    omit?: processesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: processesInclude<ExtArgs> | null
  }


  /**
   * Model scheduling_runs
   */

  export type AggregateScheduling_runs = {
    _count: Scheduling_runsCountAggregateOutputType | null
    _avg: Scheduling_runsAvgAggregateOutputType | null
    _sum: Scheduling_runsSumAggregateOutputType | null
    _min: Scheduling_runsMinAggregateOutputType | null
    _max: Scheduling_runsMaxAggregateOutputType | null
  }

  export type Scheduling_runsAvgAggregateOutputType = {
    id: number | null
  }

  export type Scheduling_runsSumAggregateOutputType = {
    id: number | null
  }

  export type Scheduling_runsMinAggregateOutputType = {
    id: number | null
    run_at: Date | null
    description: string | null
  }

  export type Scheduling_runsMaxAggregateOutputType = {
    id: number | null
    run_at: Date | null
    description: string | null
  }

  export type Scheduling_runsCountAggregateOutputType = {
    id: number
    run_at: number
    description: number
    _all: number
  }


  export type Scheduling_runsAvgAggregateInputType = {
    id?: true
  }

  export type Scheduling_runsSumAggregateInputType = {
    id?: true
  }

  export type Scheduling_runsMinAggregateInputType = {
    id?: true
    run_at?: true
    description?: true
  }

  export type Scheduling_runsMaxAggregateInputType = {
    id?: true
    run_at?: true
    description?: true
  }

  export type Scheduling_runsCountAggregateInputType = {
    id?: true
    run_at?: true
    description?: true
    _all?: true
  }

  export type Scheduling_runsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which scheduling_runs to aggregate.
     */
    where?: scheduling_runsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of scheduling_runs to fetch.
     */
    orderBy?: scheduling_runsOrderByWithRelationInput | scheduling_runsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: scheduling_runsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` scheduling_runs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` scheduling_runs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned scheduling_runs
    **/
    _count?: true | Scheduling_runsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Scheduling_runsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Scheduling_runsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Scheduling_runsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Scheduling_runsMaxAggregateInputType
  }

  export type GetScheduling_runsAggregateType<T extends Scheduling_runsAggregateArgs> = {
        [P in keyof T & keyof AggregateScheduling_runs]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateScheduling_runs[P]>
      : GetScalarType<T[P], AggregateScheduling_runs[P]>
  }




  export type scheduling_runsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: scheduling_runsWhereInput
    orderBy?: scheduling_runsOrderByWithAggregationInput | scheduling_runsOrderByWithAggregationInput[]
    by: Scheduling_runsScalarFieldEnum[] | Scheduling_runsScalarFieldEnum
    having?: scheduling_runsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Scheduling_runsCountAggregateInputType | true
    _avg?: Scheduling_runsAvgAggregateInputType
    _sum?: Scheduling_runsSumAggregateInputType
    _min?: Scheduling_runsMinAggregateInputType
    _max?: Scheduling_runsMaxAggregateInputType
  }

  export type Scheduling_runsGroupByOutputType = {
    id: number
    run_at: Date | null
    description: string | null
    _count: Scheduling_runsCountAggregateOutputType | null
    _avg: Scheduling_runsAvgAggregateOutputType | null
    _sum: Scheduling_runsSumAggregateOutputType | null
    _min: Scheduling_runsMinAggregateOutputType | null
    _max: Scheduling_runsMaxAggregateOutputType | null
  }

  type GetScheduling_runsGroupByPayload<T extends scheduling_runsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Scheduling_runsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Scheduling_runsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Scheduling_runsGroupByOutputType[P]>
            : GetScalarType<T[P], Scheduling_runsGroupByOutputType[P]>
        }
      >
    >


  export type scheduling_runsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    run_at?: boolean
    description?: boolean
    processes?: boolean | scheduling_runs$processesArgs<ExtArgs>
    _count?: boolean | Scheduling_runsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["scheduling_runs"]>

  export type scheduling_runsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    run_at?: boolean
    description?: boolean
  }, ExtArgs["result"]["scheduling_runs"]>

  export type scheduling_runsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    run_at?: boolean
    description?: boolean
  }, ExtArgs["result"]["scheduling_runs"]>

  export type scheduling_runsSelectScalar = {
    id?: boolean
    run_at?: boolean
    description?: boolean
  }

  export type scheduling_runsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "run_at" | "description", ExtArgs["result"]["scheduling_runs"]>
  export type scheduling_runsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    processes?: boolean | scheduling_runs$processesArgs<ExtArgs>
    _count?: boolean | Scheduling_runsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type scheduling_runsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type scheduling_runsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $scheduling_runsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "scheduling_runs"
    objects: {
      processes: Prisma.$processesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      run_at: Date | null
      description: string | null
    }, ExtArgs["result"]["scheduling_runs"]>
    composites: {}
  }

  type scheduling_runsGetPayload<S extends boolean | null | undefined | scheduling_runsDefaultArgs> = $Result.GetResult<Prisma.$scheduling_runsPayload, S>

  type scheduling_runsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<scheduling_runsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Scheduling_runsCountAggregateInputType | true
    }

  export interface scheduling_runsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['scheduling_runs'], meta: { name: 'scheduling_runs' } }
    /**
     * Find zero or one Scheduling_runs that matches the filter.
     * @param {scheduling_runsFindUniqueArgs} args - Arguments to find a Scheduling_runs
     * @example
     * // Get one Scheduling_runs
     * const scheduling_runs = await prisma.scheduling_runs.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends scheduling_runsFindUniqueArgs>(args: SelectSubset<T, scheduling_runsFindUniqueArgs<ExtArgs>>): Prisma__scheduling_runsClient<$Result.GetResult<Prisma.$scheduling_runsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Scheduling_runs that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {scheduling_runsFindUniqueOrThrowArgs} args - Arguments to find a Scheduling_runs
     * @example
     * // Get one Scheduling_runs
     * const scheduling_runs = await prisma.scheduling_runs.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends scheduling_runsFindUniqueOrThrowArgs>(args: SelectSubset<T, scheduling_runsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__scheduling_runsClient<$Result.GetResult<Prisma.$scheduling_runsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Scheduling_runs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {scheduling_runsFindFirstArgs} args - Arguments to find a Scheduling_runs
     * @example
     * // Get one Scheduling_runs
     * const scheduling_runs = await prisma.scheduling_runs.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends scheduling_runsFindFirstArgs>(args?: SelectSubset<T, scheduling_runsFindFirstArgs<ExtArgs>>): Prisma__scheduling_runsClient<$Result.GetResult<Prisma.$scheduling_runsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Scheduling_runs that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {scheduling_runsFindFirstOrThrowArgs} args - Arguments to find a Scheduling_runs
     * @example
     * // Get one Scheduling_runs
     * const scheduling_runs = await prisma.scheduling_runs.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends scheduling_runsFindFirstOrThrowArgs>(args?: SelectSubset<T, scheduling_runsFindFirstOrThrowArgs<ExtArgs>>): Prisma__scheduling_runsClient<$Result.GetResult<Prisma.$scheduling_runsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Scheduling_runs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {scheduling_runsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Scheduling_runs
     * const scheduling_runs = await prisma.scheduling_runs.findMany()
     * 
     * // Get first 10 Scheduling_runs
     * const scheduling_runs = await prisma.scheduling_runs.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const scheduling_runsWithIdOnly = await prisma.scheduling_runs.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends scheduling_runsFindManyArgs>(args?: SelectSubset<T, scheduling_runsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$scheduling_runsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Scheduling_runs.
     * @param {scheduling_runsCreateArgs} args - Arguments to create a Scheduling_runs.
     * @example
     * // Create one Scheduling_runs
     * const Scheduling_runs = await prisma.scheduling_runs.create({
     *   data: {
     *     // ... data to create a Scheduling_runs
     *   }
     * })
     * 
     */
    create<T extends scheduling_runsCreateArgs>(args: SelectSubset<T, scheduling_runsCreateArgs<ExtArgs>>): Prisma__scheduling_runsClient<$Result.GetResult<Prisma.$scheduling_runsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Scheduling_runs.
     * @param {scheduling_runsCreateManyArgs} args - Arguments to create many Scheduling_runs.
     * @example
     * // Create many Scheduling_runs
     * const scheduling_runs = await prisma.scheduling_runs.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends scheduling_runsCreateManyArgs>(args?: SelectSubset<T, scheduling_runsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Scheduling_runs and returns the data saved in the database.
     * @param {scheduling_runsCreateManyAndReturnArgs} args - Arguments to create many Scheduling_runs.
     * @example
     * // Create many Scheduling_runs
     * const scheduling_runs = await prisma.scheduling_runs.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Scheduling_runs and only return the `id`
     * const scheduling_runsWithIdOnly = await prisma.scheduling_runs.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends scheduling_runsCreateManyAndReturnArgs>(args?: SelectSubset<T, scheduling_runsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$scheduling_runsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Scheduling_runs.
     * @param {scheduling_runsDeleteArgs} args - Arguments to delete one Scheduling_runs.
     * @example
     * // Delete one Scheduling_runs
     * const Scheduling_runs = await prisma.scheduling_runs.delete({
     *   where: {
     *     // ... filter to delete one Scheduling_runs
     *   }
     * })
     * 
     */
    delete<T extends scheduling_runsDeleteArgs>(args: SelectSubset<T, scheduling_runsDeleteArgs<ExtArgs>>): Prisma__scheduling_runsClient<$Result.GetResult<Prisma.$scheduling_runsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Scheduling_runs.
     * @param {scheduling_runsUpdateArgs} args - Arguments to update one Scheduling_runs.
     * @example
     * // Update one Scheduling_runs
     * const scheduling_runs = await prisma.scheduling_runs.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends scheduling_runsUpdateArgs>(args: SelectSubset<T, scheduling_runsUpdateArgs<ExtArgs>>): Prisma__scheduling_runsClient<$Result.GetResult<Prisma.$scheduling_runsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Scheduling_runs.
     * @param {scheduling_runsDeleteManyArgs} args - Arguments to filter Scheduling_runs to delete.
     * @example
     * // Delete a few Scheduling_runs
     * const { count } = await prisma.scheduling_runs.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends scheduling_runsDeleteManyArgs>(args?: SelectSubset<T, scheduling_runsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Scheduling_runs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {scheduling_runsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Scheduling_runs
     * const scheduling_runs = await prisma.scheduling_runs.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends scheduling_runsUpdateManyArgs>(args: SelectSubset<T, scheduling_runsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Scheduling_runs and returns the data updated in the database.
     * @param {scheduling_runsUpdateManyAndReturnArgs} args - Arguments to update many Scheduling_runs.
     * @example
     * // Update many Scheduling_runs
     * const scheduling_runs = await prisma.scheduling_runs.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Scheduling_runs and only return the `id`
     * const scheduling_runsWithIdOnly = await prisma.scheduling_runs.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends scheduling_runsUpdateManyAndReturnArgs>(args: SelectSubset<T, scheduling_runsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$scheduling_runsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Scheduling_runs.
     * @param {scheduling_runsUpsertArgs} args - Arguments to update or create a Scheduling_runs.
     * @example
     * // Update or create a Scheduling_runs
     * const scheduling_runs = await prisma.scheduling_runs.upsert({
     *   create: {
     *     // ... data to create a Scheduling_runs
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Scheduling_runs we want to update
     *   }
     * })
     */
    upsert<T extends scheduling_runsUpsertArgs>(args: SelectSubset<T, scheduling_runsUpsertArgs<ExtArgs>>): Prisma__scheduling_runsClient<$Result.GetResult<Prisma.$scheduling_runsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Scheduling_runs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {scheduling_runsCountArgs} args - Arguments to filter Scheduling_runs to count.
     * @example
     * // Count the number of Scheduling_runs
     * const count = await prisma.scheduling_runs.count({
     *   where: {
     *     // ... the filter for the Scheduling_runs we want to count
     *   }
     * })
    **/
    count<T extends scheduling_runsCountArgs>(
      args?: Subset<T, scheduling_runsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Scheduling_runsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Scheduling_runs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Scheduling_runsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Scheduling_runsAggregateArgs>(args: Subset<T, Scheduling_runsAggregateArgs>): Prisma.PrismaPromise<GetScheduling_runsAggregateType<T>>

    /**
     * Group by Scheduling_runs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {scheduling_runsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends scheduling_runsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: scheduling_runsGroupByArgs['orderBy'] }
        : { orderBy?: scheduling_runsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, scheduling_runsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetScheduling_runsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the scheduling_runs model
   */
  readonly fields: scheduling_runsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for scheduling_runs.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__scheduling_runsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    processes<T extends scheduling_runs$processesArgs<ExtArgs> = {}>(args?: Subset<T, scheduling_runs$processesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$processesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the scheduling_runs model
   */
  interface scheduling_runsFieldRefs {
    readonly id: FieldRef<"scheduling_runs", 'Int'>
    readonly run_at: FieldRef<"scheduling_runs", 'DateTime'>
    readonly description: FieldRef<"scheduling_runs", 'String'>
  }
    

  // Custom InputTypes
  /**
   * scheduling_runs findUnique
   */
  export type scheduling_runsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the scheduling_runs
     */
    select?: scheduling_runsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the scheduling_runs
     */
    omit?: scheduling_runsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: scheduling_runsInclude<ExtArgs> | null
    /**
     * Filter, which scheduling_runs to fetch.
     */
    where: scheduling_runsWhereUniqueInput
  }

  /**
   * scheduling_runs findUniqueOrThrow
   */
  export type scheduling_runsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the scheduling_runs
     */
    select?: scheduling_runsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the scheduling_runs
     */
    omit?: scheduling_runsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: scheduling_runsInclude<ExtArgs> | null
    /**
     * Filter, which scheduling_runs to fetch.
     */
    where: scheduling_runsWhereUniqueInput
  }

  /**
   * scheduling_runs findFirst
   */
  export type scheduling_runsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the scheduling_runs
     */
    select?: scheduling_runsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the scheduling_runs
     */
    omit?: scheduling_runsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: scheduling_runsInclude<ExtArgs> | null
    /**
     * Filter, which scheduling_runs to fetch.
     */
    where?: scheduling_runsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of scheduling_runs to fetch.
     */
    orderBy?: scheduling_runsOrderByWithRelationInput | scheduling_runsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for scheduling_runs.
     */
    cursor?: scheduling_runsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` scheduling_runs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` scheduling_runs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of scheduling_runs.
     */
    distinct?: Scheduling_runsScalarFieldEnum | Scheduling_runsScalarFieldEnum[]
  }

  /**
   * scheduling_runs findFirstOrThrow
   */
  export type scheduling_runsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the scheduling_runs
     */
    select?: scheduling_runsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the scheduling_runs
     */
    omit?: scheduling_runsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: scheduling_runsInclude<ExtArgs> | null
    /**
     * Filter, which scheduling_runs to fetch.
     */
    where?: scheduling_runsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of scheduling_runs to fetch.
     */
    orderBy?: scheduling_runsOrderByWithRelationInput | scheduling_runsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for scheduling_runs.
     */
    cursor?: scheduling_runsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` scheduling_runs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` scheduling_runs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of scheduling_runs.
     */
    distinct?: Scheduling_runsScalarFieldEnum | Scheduling_runsScalarFieldEnum[]
  }

  /**
   * scheduling_runs findMany
   */
  export type scheduling_runsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the scheduling_runs
     */
    select?: scheduling_runsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the scheduling_runs
     */
    omit?: scheduling_runsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: scheduling_runsInclude<ExtArgs> | null
    /**
     * Filter, which scheduling_runs to fetch.
     */
    where?: scheduling_runsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of scheduling_runs to fetch.
     */
    orderBy?: scheduling_runsOrderByWithRelationInput | scheduling_runsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing scheduling_runs.
     */
    cursor?: scheduling_runsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` scheduling_runs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` scheduling_runs.
     */
    skip?: number
    distinct?: Scheduling_runsScalarFieldEnum | Scheduling_runsScalarFieldEnum[]
  }

  /**
   * scheduling_runs create
   */
  export type scheduling_runsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the scheduling_runs
     */
    select?: scheduling_runsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the scheduling_runs
     */
    omit?: scheduling_runsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: scheduling_runsInclude<ExtArgs> | null
    /**
     * The data needed to create a scheduling_runs.
     */
    data?: XOR<scheduling_runsCreateInput, scheduling_runsUncheckedCreateInput>
  }

  /**
   * scheduling_runs createMany
   */
  export type scheduling_runsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many scheduling_runs.
     */
    data: scheduling_runsCreateManyInput | scheduling_runsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * scheduling_runs createManyAndReturn
   */
  export type scheduling_runsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the scheduling_runs
     */
    select?: scheduling_runsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the scheduling_runs
     */
    omit?: scheduling_runsOmit<ExtArgs> | null
    /**
     * The data used to create many scheduling_runs.
     */
    data: scheduling_runsCreateManyInput | scheduling_runsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * scheduling_runs update
   */
  export type scheduling_runsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the scheduling_runs
     */
    select?: scheduling_runsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the scheduling_runs
     */
    omit?: scheduling_runsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: scheduling_runsInclude<ExtArgs> | null
    /**
     * The data needed to update a scheduling_runs.
     */
    data: XOR<scheduling_runsUpdateInput, scheduling_runsUncheckedUpdateInput>
    /**
     * Choose, which scheduling_runs to update.
     */
    where: scheduling_runsWhereUniqueInput
  }

  /**
   * scheduling_runs updateMany
   */
  export type scheduling_runsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update scheduling_runs.
     */
    data: XOR<scheduling_runsUpdateManyMutationInput, scheduling_runsUncheckedUpdateManyInput>
    /**
     * Filter which scheduling_runs to update
     */
    where?: scheduling_runsWhereInput
    /**
     * Limit how many scheduling_runs to update.
     */
    limit?: number
  }

  /**
   * scheduling_runs updateManyAndReturn
   */
  export type scheduling_runsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the scheduling_runs
     */
    select?: scheduling_runsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the scheduling_runs
     */
    omit?: scheduling_runsOmit<ExtArgs> | null
    /**
     * The data used to update scheduling_runs.
     */
    data: XOR<scheduling_runsUpdateManyMutationInput, scheduling_runsUncheckedUpdateManyInput>
    /**
     * Filter which scheduling_runs to update
     */
    where?: scheduling_runsWhereInput
    /**
     * Limit how many scheduling_runs to update.
     */
    limit?: number
  }

  /**
   * scheduling_runs upsert
   */
  export type scheduling_runsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the scheduling_runs
     */
    select?: scheduling_runsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the scheduling_runs
     */
    omit?: scheduling_runsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: scheduling_runsInclude<ExtArgs> | null
    /**
     * The filter to search for the scheduling_runs to update in case it exists.
     */
    where: scheduling_runsWhereUniqueInput
    /**
     * In case the scheduling_runs found by the `where` argument doesn't exist, create a new scheduling_runs with this data.
     */
    create: XOR<scheduling_runsCreateInput, scheduling_runsUncheckedCreateInput>
    /**
     * In case the scheduling_runs was found with the provided `where` argument, update it with this data.
     */
    update: XOR<scheduling_runsUpdateInput, scheduling_runsUncheckedUpdateInput>
  }

  /**
   * scheduling_runs delete
   */
  export type scheduling_runsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the scheduling_runs
     */
    select?: scheduling_runsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the scheduling_runs
     */
    omit?: scheduling_runsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: scheduling_runsInclude<ExtArgs> | null
    /**
     * Filter which scheduling_runs to delete.
     */
    where: scheduling_runsWhereUniqueInput
  }

  /**
   * scheduling_runs deleteMany
   */
  export type scheduling_runsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which scheduling_runs to delete
     */
    where?: scheduling_runsWhereInput
    /**
     * Limit how many scheduling_runs to delete.
     */
    limit?: number
  }

  /**
   * scheduling_runs.processes
   */
  export type scheduling_runs$processesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the processes
     */
    select?: processesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the processes
     */
    omit?: processesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: processesInclude<ExtArgs> | null
    where?: processesWhereInput
    orderBy?: processesOrderByWithRelationInput | processesOrderByWithRelationInput[]
    cursor?: processesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProcessesScalarFieldEnum | ProcessesScalarFieldEnum[]
  }

  /**
   * scheduling_runs without action
   */
  export type scheduling_runsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the scheduling_runs
     */
    select?: scheduling_runsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the scheduling_runs
     */
    omit?: scheduling_runsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: scheduling_runsInclude<ExtArgs> | null
  }


  /**
   * Model task_status_history
   */

  export type AggregateTask_status_history = {
    _count: Task_status_historyCountAggregateOutputType | null
    _avg: Task_status_historyAvgAggregateOutputType | null
    _sum: Task_status_historySumAggregateOutputType | null
    _min: Task_status_historyMinAggregateOutputType | null
    _max: Task_status_historyMaxAggregateOutputType | null
  }

  export type Task_status_historyAvgAggregateOutputType = {
    id: number | null
    task_id: number | null
  }

  export type Task_status_historySumAggregateOutputType = {
    id: number | null
    task_id: number | null
  }

  export type Task_status_historyMinAggregateOutputType = {
    id: number | null
    task_id: number | null
    status: $Enums.task_status | null
    changed_at: Date | null
  }

  export type Task_status_historyMaxAggregateOutputType = {
    id: number | null
    task_id: number | null
    status: $Enums.task_status | null
    changed_at: Date | null
  }

  export type Task_status_historyCountAggregateOutputType = {
    id: number
    task_id: number
    status: number
    changed_at: number
    _all: number
  }


  export type Task_status_historyAvgAggregateInputType = {
    id?: true
    task_id?: true
  }

  export type Task_status_historySumAggregateInputType = {
    id?: true
    task_id?: true
  }

  export type Task_status_historyMinAggregateInputType = {
    id?: true
    task_id?: true
    status?: true
    changed_at?: true
  }

  export type Task_status_historyMaxAggregateInputType = {
    id?: true
    task_id?: true
    status?: true
    changed_at?: true
  }

  export type Task_status_historyCountAggregateInputType = {
    id?: true
    task_id?: true
    status?: true
    changed_at?: true
    _all?: true
  }

  export type Task_status_historyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which task_status_history to aggregate.
     */
    where?: task_status_historyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of task_status_histories to fetch.
     */
    orderBy?: task_status_historyOrderByWithRelationInput | task_status_historyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: task_status_historyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` task_status_histories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` task_status_histories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned task_status_histories
    **/
    _count?: true | Task_status_historyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Task_status_historyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Task_status_historySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Task_status_historyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Task_status_historyMaxAggregateInputType
  }

  export type GetTask_status_historyAggregateType<T extends Task_status_historyAggregateArgs> = {
        [P in keyof T & keyof AggregateTask_status_history]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTask_status_history[P]>
      : GetScalarType<T[P], AggregateTask_status_history[P]>
  }




  export type task_status_historyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: task_status_historyWhereInput
    orderBy?: task_status_historyOrderByWithAggregationInput | task_status_historyOrderByWithAggregationInput[]
    by: Task_status_historyScalarFieldEnum[] | Task_status_historyScalarFieldEnum
    having?: task_status_historyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Task_status_historyCountAggregateInputType | true
    _avg?: Task_status_historyAvgAggregateInputType
    _sum?: Task_status_historySumAggregateInputType
    _min?: Task_status_historyMinAggregateInputType
    _max?: Task_status_historyMaxAggregateInputType
  }

  export type Task_status_historyGroupByOutputType = {
    id: number
    task_id: number
    status: $Enums.task_status
    changed_at: Date | null
    _count: Task_status_historyCountAggregateOutputType | null
    _avg: Task_status_historyAvgAggregateOutputType | null
    _sum: Task_status_historySumAggregateOutputType | null
    _min: Task_status_historyMinAggregateOutputType | null
    _max: Task_status_historyMaxAggregateOutputType | null
  }

  type GetTask_status_historyGroupByPayload<T extends task_status_historyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Task_status_historyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Task_status_historyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Task_status_historyGroupByOutputType[P]>
            : GetScalarType<T[P], Task_status_historyGroupByOutputType[P]>
        }
      >
    >


  export type task_status_historySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    task_id?: boolean
    status?: boolean
    changed_at?: boolean
    tasks?: boolean | tasksDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["task_status_history"]>

  export type task_status_historySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    task_id?: boolean
    status?: boolean
    changed_at?: boolean
    tasks?: boolean | tasksDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["task_status_history"]>

  export type task_status_historySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    task_id?: boolean
    status?: boolean
    changed_at?: boolean
    tasks?: boolean | tasksDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["task_status_history"]>

  export type task_status_historySelectScalar = {
    id?: boolean
    task_id?: boolean
    status?: boolean
    changed_at?: boolean
  }

  export type task_status_historyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "task_id" | "status" | "changed_at", ExtArgs["result"]["task_status_history"]>
  export type task_status_historyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tasks?: boolean | tasksDefaultArgs<ExtArgs>
  }
  export type task_status_historyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tasks?: boolean | tasksDefaultArgs<ExtArgs>
  }
  export type task_status_historyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tasks?: boolean | tasksDefaultArgs<ExtArgs>
  }

  export type $task_status_historyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "task_status_history"
    objects: {
      tasks: Prisma.$tasksPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      task_id: number
      status: $Enums.task_status
      changed_at: Date | null
    }, ExtArgs["result"]["task_status_history"]>
    composites: {}
  }

  type task_status_historyGetPayload<S extends boolean | null | undefined | task_status_historyDefaultArgs> = $Result.GetResult<Prisma.$task_status_historyPayload, S>

  type task_status_historyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<task_status_historyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Task_status_historyCountAggregateInputType | true
    }

  export interface task_status_historyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['task_status_history'], meta: { name: 'task_status_history' } }
    /**
     * Find zero or one Task_status_history that matches the filter.
     * @param {task_status_historyFindUniqueArgs} args - Arguments to find a Task_status_history
     * @example
     * // Get one Task_status_history
     * const task_status_history = await prisma.task_status_history.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends task_status_historyFindUniqueArgs>(args: SelectSubset<T, task_status_historyFindUniqueArgs<ExtArgs>>): Prisma__task_status_historyClient<$Result.GetResult<Prisma.$task_status_historyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Task_status_history that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {task_status_historyFindUniqueOrThrowArgs} args - Arguments to find a Task_status_history
     * @example
     * // Get one Task_status_history
     * const task_status_history = await prisma.task_status_history.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends task_status_historyFindUniqueOrThrowArgs>(args: SelectSubset<T, task_status_historyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__task_status_historyClient<$Result.GetResult<Prisma.$task_status_historyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Task_status_history that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {task_status_historyFindFirstArgs} args - Arguments to find a Task_status_history
     * @example
     * // Get one Task_status_history
     * const task_status_history = await prisma.task_status_history.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends task_status_historyFindFirstArgs>(args?: SelectSubset<T, task_status_historyFindFirstArgs<ExtArgs>>): Prisma__task_status_historyClient<$Result.GetResult<Prisma.$task_status_historyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Task_status_history that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {task_status_historyFindFirstOrThrowArgs} args - Arguments to find a Task_status_history
     * @example
     * // Get one Task_status_history
     * const task_status_history = await prisma.task_status_history.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends task_status_historyFindFirstOrThrowArgs>(args?: SelectSubset<T, task_status_historyFindFirstOrThrowArgs<ExtArgs>>): Prisma__task_status_historyClient<$Result.GetResult<Prisma.$task_status_historyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Task_status_histories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {task_status_historyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Task_status_histories
     * const task_status_histories = await prisma.task_status_history.findMany()
     * 
     * // Get first 10 Task_status_histories
     * const task_status_histories = await prisma.task_status_history.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const task_status_historyWithIdOnly = await prisma.task_status_history.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends task_status_historyFindManyArgs>(args?: SelectSubset<T, task_status_historyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$task_status_historyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Task_status_history.
     * @param {task_status_historyCreateArgs} args - Arguments to create a Task_status_history.
     * @example
     * // Create one Task_status_history
     * const Task_status_history = await prisma.task_status_history.create({
     *   data: {
     *     // ... data to create a Task_status_history
     *   }
     * })
     * 
     */
    create<T extends task_status_historyCreateArgs>(args: SelectSubset<T, task_status_historyCreateArgs<ExtArgs>>): Prisma__task_status_historyClient<$Result.GetResult<Prisma.$task_status_historyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Task_status_histories.
     * @param {task_status_historyCreateManyArgs} args - Arguments to create many Task_status_histories.
     * @example
     * // Create many Task_status_histories
     * const task_status_history = await prisma.task_status_history.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends task_status_historyCreateManyArgs>(args?: SelectSubset<T, task_status_historyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Task_status_histories and returns the data saved in the database.
     * @param {task_status_historyCreateManyAndReturnArgs} args - Arguments to create many Task_status_histories.
     * @example
     * // Create many Task_status_histories
     * const task_status_history = await prisma.task_status_history.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Task_status_histories and only return the `id`
     * const task_status_historyWithIdOnly = await prisma.task_status_history.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends task_status_historyCreateManyAndReturnArgs>(args?: SelectSubset<T, task_status_historyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$task_status_historyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Task_status_history.
     * @param {task_status_historyDeleteArgs} args - Arguments to delete one Task_status_history.
     * @example
     * // Delete one Task_status_history
     * const Task_status_history = await prisma.task_status_history.delete({
     *   where: {
     *     // ... filter to delete one Task_status_history
     *   }
     * })
     * 
     */
    delete<T extends task_status_historyDeleteArgs>(args: SelectSubset<T, task_status_historyDeleteArgs<ExtArgs>>): Prisma__task_status_historyClient<$Result.GetResult<Prisma.$task_status_historyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Task_status_history.
     * @param {task_status_historyUpdateArgs} args - Arguments to update one Task_status_history.
     * @example
     * // Update one Task_status_history
     * const task_status_history = await prisma.task_status_history.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends task_status_historyUpdateArgs>(args: SelectSubset<T, task_status_historyUpdateArgs<ExtArgs>>): Prisma__task_status_historyClient<$Result.GetResult<Prisma.$task_status_historyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Task_status_histories.
     * @param {task_status_historyDeleteManyArgs} args - Arguments to filter Task_status_histories to delete.
     * @example
     * // Delete a few Task_status_histories
     * const { count } = await prisma.task_status_history.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends task_status_historyDeleteManyArgs>(args?: SelectSubset<T, task_status_historyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Task_status_histories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {task_status_historyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Task_status_histories
     * const task_status_history = await prisma.task_status_history.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends task_status_historyUpdateManyArgs>(args: SelectSubset<T, task_status_historyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Task_status_histories and returns the data updated in the database.
     * @param {task_status_historyUpdateManyAndReturnArgs} args - Arguments to update many Task_status_histories.
     * @example
     * // Update many Task_status_histories
     * const task_status_history = await prisma.task_status_history.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Task_status_histories and only return the `id`
     * const task_status_historyWithIdOnly = await prisma.task_status_history.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends task_status_historyUpdateManyAndReturnArgs>(args: SelectSubset<T, task_status_historyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$task_status_historyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Task_status_history.
     * @param {task_status_historyUpsertArgs} args - Arguments to update or create a Task_status_history.
     * @example
     * // Update or create a Task_status_history
     * const task_status_history = await prisma.task_status_history.upsert({
     *   create: {
     *     // ... data to create a Task_status_history
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Task_status_history we want to update
     *   }
     * })
     */
    upsert<T extends task_status_historyUpsertArgs>(args: SelectSubset<T, task_status_historyUpsertArgs<ExtArgs>>): Prisma__task_status_historyClient<$Result.GetResult<Prisma.$task_status_historyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Task_status_histories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {task_status_historyCountArgs} args - Arguments to filter Task_status_histories to count.
     * @example
     * // Count the number of Task_status_histories
     * const count = await prisma.task_status_history.count({
     *   where: {
     *     // ... the filter for the Task_status_histories we want to count
     *   }
     * })
    **/
    count<T extends task_status_historyCountArgs>(
      args?: Subset<T, task_status_historyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Task_status_historyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Task_status_history.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Task_status_historyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Task_status_historyAggregateArgs>(args: Subset<T, Task_status_historyAggregateArgs>): Prisma.PrismaPromise<GetTask_status_historyAggregateType<T>>

    /**
     * Group by Task_status_history.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {task_status_historyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends task_status_historyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: task_status_historyGroupByArgs['orderBy'] }
        : { orderBy?: task_status_historyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, task_status_historyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTask_status_historyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the task_status_history model
   */
  readonly fields: task_status_historyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for task_status_history.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__task_status_historyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tasks<T extends tasksDefaultArgs<ExtArgs> = {}>(args?: Subset<T, tasksDefaultArgs<ExtArgs>>): Prisma__tasksClient<$Result.GetResult<Prisma.$tasksPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the task_status_history model
   */
  interface task_status_historyFieldRefs {
    readonly id: FieldRef<"task_status_history", 'Int'>
    readonly task_id: FieldRef<"task_status_history", 'Int'>
    readonly status: FieldRef<"task_status_history", 'task_status'>
    readonly changed_at: FieldRef<"task_status_history", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * task_status_history findUnique
   */
  export type task_status_historyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task_status_history
     */
    select?: task_status_historySelect<ExtArgs> | null
    /**
     * Omit specific fields from the task_status_history
     */
    omit?: task_status_historyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: task_status_historyInclude<ExtArgs> | null
    /**
     * Filter, which task_status_history to fetch.
     */
    where: task_status_historyWhereUniqueInput
  }

  /**
   * task_status_history findUniqueOrThrow
   */
  export type task_status_historyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task_status_history
     */
    select?: task_status_historySelect<ExtArgs> | null
    /**
     * Omit specific fields from the task_status_history
     */
    omit?: task_status_historyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: task_status_historyInclude<ExtArgs> | null
    /**
     * Filter, which task_status_history to fetch.
     */
    where: task_status_historyWhereUniqueInput
  }

  /**
   * task_status_history findFirst
   */
  export type task_status_historyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task_status_history
     */
    select?: task_status_historySelect<ExtArgs> | null
    /**
     * Omit specific fields from the task_status_history
     */
    omit?: task_status_historyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: task_status_historyInclude<ExtArgs> | null
    /**
     * Filter, which task_status_history to fetch.
     */
    where?: task_status_historyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of task_status_histories to fetch.
     */
    orderBy?: task_status_historyOrderByWithRelationInput | task_status_historyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for task_status_histories.
     */
    cursor?: task_status_historyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` task_status_histories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` task_status_histories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of task_status_histories.
     */
    distinct?: Task_status_historyScalarFieldEnum | Task_status_historyScalarFieldEnum[]
  }

  /**
   * task_status_history findFirstOrThrow
   */
  export type task_status_historyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task_status_history
     */
    select?: task_status_historySelect<ExtArgs> | null
    /**
     * Omit specific fields from the task_status_history
     */
    omit?: task_status_historyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: task_status_historyInclude<ExtArgs> | null
    /**
     * Filter, which task_status_history to fetch.
     */
    where?: task_status_historyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of task_status_histories to fetch.
     */
    orderBy?: task_status_historyOrderByWithRelationInput | task_status_historyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for task_status_histories.
     */
    cursor?: task_status_historyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` task_status_histories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` task_status_histories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of task_status_histories.
     */
    distinct?: Task_status_historyScalarFieldEnum | Task_status_historyScalarFieldEnum[]
  }

  /**
   * task_status_history findMany
   */
  export type task_status_historyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task_status_history
     */
    select?: task_status_historySelect<ExtArgs> | null
    /**
     * Omit specific fields from the task_status_history
     */
    omit?: task_status_historyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: task_status_historyInclude<ExtArgs> | null
    /**
     * Filter, which task_status_histories to fetch.
     */
    where?: task_status_historyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of task_status_histories to fetch.
     */
    orderBy?: task_status_historyOrderByWithRelationInput | task_status_historyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing task_status_histories.
     */
    cursor?: task_status_historyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` task_status_histories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` task_status_histories.
     */
    skip?: number
    distinct?: Task_status_historyScalarFieldEnum | Task_status_historyScalarFieldEnum[]
  }

  /**
   * task_status_history create
   */
  export type task_status_historyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task_status_history
     */
    select?: task_status_historySelect<ExtArgs> | null
    /**
     * Omit specific fields from the task_status_history
     */
    omit?: task_status_historyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: task_status_historyInclude<ExtArgs> | null
    /**
     * The data needed to create a task_status_history.
     */
    data: XOR<task_status_historyCreateInput, task_status_historyUncheckedCreateInput>
  }

  /**
   * task_status_history createMany
   */
  export type task_status_historyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many task_status_histories.
     */
    data: task_status_historyCreateManyInput | task_status_historyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * task_status_history createManyAndReturn
   */
  export type task_status_historyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task_status_history
     */
    select?: task_status_historySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the task_status_history
     */
    omit?: task_status_historyOmit<ExtArgs> | null
    /**
     * The data used to create many task_status_histories.
     */
    data: task_status_historyCreateManyInput | task_status_historyCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: task_status_historyIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * task_status_history update
   */
  export type task_status_historyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task_status_history
     */
    select?: task_status_historySelect<ExtArgs> | null
    /**
     * Omit specific fields from the task_status_history
     */
    omit?: task_status_historyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: task_status_historyInclude<ExtArgs> | null
    /**
     * The data needed to update a task_status_history.
     */
    data: XOR<task_status_historyUpdateInput, task_status_historyUncheckedUpdateInput>
    /**
     * Choose, which task_status_history to update.
     */
    where: task_status_historyWhereUniqueInput
  }

  /**
   * task_status_history updateMany
   */
  export type task_status_historyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update task_status_histories.
     */
    data: XOR<task_status_historyUpdateManyMutationInput, task_status_historyUncheckedUpdateManyInput>
    /**
     * Filter which task_status_histories to update
     */
    where?: task_status_historyWhereInput
    /**
     * Limit how many task_status_histories to update.
     */
    limit?: number
  }

  /**
   * task_status_history updateManyAndReturn
   */
  export type task_status_historyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task_status_history
     */
    select?: task_status_historySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the task_status_history
     */
    omit?: task_status_historyOmit<ExtArgs> | null
    /**
     * The data used to update task_status_histories.
     */
    data: XOR<task_status_historyUpdateManyMutationInput, task_status_historyUncheckedUpdateManyInput>
    /**
     * Filter which task_status_histories to update
     */
    where?: task_status_historyWhereInput
    /**
     * Limit how many task_status_histories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: task_status_historyIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * task_status_history upsert
   */
  export type task_status_historyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task_status_history
     */
    select?: task_status_historySelect<ExtArgs> | null
    /**
     * Omit specific fields from the task_status_history
     */
    omit?: task_status_historyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: task_status_historyInclude<ExtArgs> | null
    /**
     * The filter to search for the task_status_history to update in case it exists.
     */
    where: task_status_historyWhereUniqueInput
    /**
     * In case the task_status_history found by the `where` argument doesn't exist, create a new task_status_history with this data.
     */
    create: XOR<task_status_historyCreateInput, task_status_historyUncheckedCreateInput>
    /**
     * In case the task_status_history was found with the provided `where` argument, update it with this data.
     */
    update: XOR<task_status_historyUpdateInput, task_status_historyUncheckedUpdateInput>
  }

  /**
   * task_status_history delete
   */
  export type task_status_historyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task_status_history
     */
    select?: task_status_historySelect<ExtArgs> | null
    /**
     * Omit specific fields from the task_status_history
     */
    omit?: task_status_historyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: task_status_historyInclude<ExtArgs> | null
    /**
     * Filter which task_status_history to delete.
     */
    where: task_status_historyWhereUniqueInput
  }

  /**
   * task_status_history deleteMany
   */
  export type task_status_historyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which task_status_histories to delete
     */
    where?: task_status_historyWhereInput
    /**
     * Limit how many task_status_histories to delete.
     */
    limit?: number
  }

  /**
   * task_status_history without action
   */
  export type task_status_historyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task_status_history
     */
    select?: task_status_historySelect<ExtArgs> | null
    /**
     * Omit specific fields from the task_status_history
     */
    omit?: task_status_historyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: task_status_historyInclude<ExtArgs> | null
  }


  /**
   * Model tasks
   */

  export type AggregateTasks = {
    _count: TasksCountAggregateOutputType | null
    _avg: TasksAvgAggregateOutputType | null
    _sum: TasksSumAggregateOutputType | null
    _min: TasksMinAggregateOutputType | null
    _max: TasksMaxAggregateOutputType | null
  }

  export type TasksAvgAggregateOutputType = {
    id: number | null
    duration: number | null
    priority_id: number | null
  }

  export type TasksSumAggregateOutputType = {
    id: number | null
    duration: number | null
    priority_id: number | null
  }

  export type TasksMinAggregateOutputType = {
    id: number | null
    name: string | null
    arrival_time: Date | null
    duration: number | null
    status: $Enums.task_status | null
    priority_id: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type TasksMaxAggregateOutputType = {
    id: number | null
    name: string | null
    arrival_time: Date | null
    duration: number | null
    status: $Enums.task_status | null
    priority_id: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type TasksCountAggregateOutputType = {
    id: number
    name: number
    arrival_time: number
    duration: number
    status: number
    priority_id: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type TasksAvgAggregateInputType = {
    id?: true
    duration?: true
    priority_id?: true
  }

  export type TasksSumAggregateInputType = {
    id?: true
    duration?: true
    priority_id?: true
  }

  export type TasksMinAggregateInputType = {
    id?: true
    name?: true
    arrival_time?: true
    duration?: true
    status?: true
    priority_id?: true
    created_at?: true
    updated_at?: true
  }

  export type TasksMaxAggregateInputType = {
    id?: true
    name?: true
    arrival_time?: true
    duration?: true
    status?: true
    priority_id?: true
    created_at?: true
    updated_at?: true
  }

  export type TasksCountAggregateInputType = {
    id?: true
    name?: true
    arrival_time?: true
    duration?: true
    status?: true
    priority_id?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type TasksAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tasks to aggregate.
     */
    where?: tasksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tasks to fetch.
     */
    orderBy?: tasksOrderByWithRelationInput | tasksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tasksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tasks
    **/
    _count?: true | TasksCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TasksAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TasksSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TasksMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TasksMaxAggregateInputType
  }

  export type GetTasksAggregateType<T extends TasksAggregateArgs> = {
        [P in keyof T & keyof AggregateTasks]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTasks[P]>
      : GetScalarType<T[P], AggregateTasks[P]>
  }




  export type tasksGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tasksWhereInput
    orderBy?: tasksOrderByWithAggregationInput | tasksOrderByWithAggregationInput[]
    by: TasksScalarFieldEnum[] | TasksScalarFieldEnum
    having?: tasksScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TasksCountAggregateInputType | true
    _avg?: TasksAvgAggregateInputType
    _sum?: TasksSumAggregateInputType
    _min?: TasksMinAggregateInputType
    _max?: TasksMaxAggregateInputType
  }

  export type TasksGroupByOutputType = {
    id: number
    name: string
    arrival_time: Date
    duration: number
    status: $Enums.task_status
    priority_id: number | null
    created_at: Date | null
    updated_at: Date | null
    _count: TasksCountAggregateOutputType | null
    _avg: TasksAvgAggregateOutputType | null
    _sum: TasksSumAggregateOutputType | null
    _min: TasksMinAggregateOutputType | null
    _max: TasksMaxAggregateOutputType | null
  }

  type GetTasksGroupByPayload<T extends tasksGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TasksGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TasksGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TasksGroupByOutputType[P]>
            : GetScalarType<T[P], TasksGroupByOutputType[P]>
        }
      >
    >


  export type tasksSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    arrival_time?: boolean
    duration?: boolean
    status?: boolean
    priority_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    processes?: boolean | tasks$processesArgs<ExtArgs>
    task_status_history?: boolean | tasks$task_status_historyArgs<ExtArgs>
    priorities?: boolean | tasks$prioritiesArgs<ExtArgs>
    _count?: boolean | TasksCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tasks"]>

  export type tasksSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    arrival_time?: boolean
    duration?: boolean
    status?: boolean
    priority_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    priorities?: boolean | tasks$prioritiesArgs<ExtArgs>
  }, ExtArgs["result"]["tasks"]>

  export type tasksSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    arrival_time?: boolean
    duration?: boolean
    status?: boolean
    priority_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    priorities?: boolean | tasks$prioritiesArgs<ExtArgs>
  }, ExtArgs["result"]["tasks"]>

  export type tasksSelectScalar = {
    id?: boolean
    name?: boolean
    arrival_time?: boolean
    duration?: boolean
    status?: boolean
    priority_id?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type tasksOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "arrival_time" | "duration" | "status" | "priority_id" | "created_at" | "updated_at", ExtArgs["result"]["tasks"]>
  export type tasksInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    processes?: boolean | tasks$processesArgs<ExtArgs>
    task_status_history?: boolean | tasks$task_status_historyArgs<ExtArgs>
    priorities?: boolean | tasks$prioritiesArgs<ExtArgs>
    _count?: boolean | TasksCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type tasksIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    priorities?: boolean | tasks$prioritiesArgs<ExtArgs>
  }
  export type tasksIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    priorities?: boolean | tasks$prioritiesArgs<ExtArgs>
  }

  export type $tasksPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tasks"
    objects: {
      processes: Prisma.$processesPayload<ExtArgs>[]
      task_status_history: Prisma.$task_status_historyPayload<ExtArgs>[]
      priorities: Prisma.$prioritiesPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      arrival_time: Date
      duration: number
      status: $Enums.task_status
      priority_id: number | null
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["tasks"]>
    composites: {}
  }

  type tasksGetPayload<S extends boolean | null | undefined | tasksDefaultArgs> = $Result.GetResult<Prisma.$tasksPayload, S>

  type tasksCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<tasksFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TasksCountAggregateInputType | true
    }

  export interface tasksDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tasks'], meta: { name: 'tasks' } }
    /**
     * Find zero or one Tasks that matches the filter.
     * @param {tasksFindUniqueArgs} args - Arguments to find a Tasks
     * @example
     * // Get one Tasks
     * const tasks = await prisma.tasks.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tasksFindUniqueArgs>(args: SelectSubset<T, tasksFindUniqueArgs<ExtArgs>>): Prisma__tasksClient<$Result.GetResult<Prisma.$tasksPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tasks that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {tasksFindUniqueOrThrowArgs} args - Arguments to find a Tasks
     * @example
     * // Get one Tasks
     * const tasks = await prisma.tasks.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tasksFindUniqueOrThrowArgs>(args: SelectSubset<T, tasksFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tasksClient<$Result.GetResult<Prisma.$tasksPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tasks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tasksFindFirstArgs} args - Arguments to find a Tasks
     * @example
     * // Get one Tasks
     * const tasks = await prisma.tasks.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tasksFindFirstArgs>(args?: SelectSubset<T, tasksFindFirstArgs<ExtArgs>>): Prisma__tasksClient<$Result.GetResult<Prisma.$tasksPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tasks that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tasksFindFirstOrThrowArgs} args - Arguments to find a Tasks
     * @example
     * // Get one Tasks
     * const tasks = await prisma.tasks.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tasksFindFirstOrThrowArgs>(args?: SelectSubset<T, tasksFindFirstOrThrowArgs<ExtArgs>>): Prisma__tasksClient<$Result.GetResult<Prisma.$tasksPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tasks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tasksFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tasks
     * const tasks = await prisma.tasks.findMany()
     * 
     * // Get first 10 Tasks
     * const tasks = await prisma.tasks.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tasksWithIdOnly = await prisma.tasks.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends tasksFindManyArgs>(args?: SelectSubset<T, tasksFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tasksPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tasks.
     * @param {tasksCreateArgs} args - Arguments to create a Tasks.
     * @example
     * // Create one Tasks
     * const Tasks = await prisma.tasks.create({
     *   data: {
     *     // ... data to create a Tasks
     *   }
     * })
     * 
     */
    create<T extends tasksCreateArgs>(args: SelectSubset<T, tasksCreateArgs<ExtArgs>>): Prisma__tasksClient<$Result.GetResult<Prisma.$tasksPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tasks.
     * @param {tasksCreateManyArgs} args - Arguments to create many Tasks.
     * @example
     * // Create many Tasks
     * const tasks = await prisma.tasks.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tasksCreateManyArgs>(args?: SelectSubset<T, tasksCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tasks and returns the data saved in the database.
     * @param {tasksCreateManyAndReturnArgs} args - Arguments to create many Tasks.
     * @example
     * // Create many Tasks
     * const tasks = await prisma.tasks.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tasks and only return the `id`
     * const tasksWithIdOnly = await prisma.tasks.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends tasksCreateManyAndReturnArgs>(args?: SelectSubset<T, tasksCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tasksPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tasks.
     * @param {tasksDeleteArgs} args - Arguments to delete one Tasks.
     * @example
     * // Delete one Tasks
     * const Tasks = await prisma.tasks.delete({
     *   where: {
     *     // ... filter to delete one Tasks
     *   }
     * })
     * 
     */
    delete<T extends tasksDeleteArgs>(args: SelectSubset<T, tasksDeleteArgs<ExtArgs>>): Prisma__tasksClient<$Result.GetResult<Prisma.$tasksPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tasks.
     * @param {tasksUpdateArgs} args - Arguments to update one Tasks.
     * @example
     * // Update one Tasks
     * const tasks = await prisma.tasks.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tasksUpdateArgs>(args: SelectSubset<T, tasksUpdateArgs<ExtArgs>>): Prisma__tasksClient<$Result.GetResult<Prisma.$tasksPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tasks.
     * @param {tasksDeleteManyArgs} args - Arguments to filter Tasks to delete.
     * @example
     * // Delete a few Tasks
     * const { count } = await prisma.tasks.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tasksDeleteManyArgs>(args?: SelectSubset<T, tasksDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tasksUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tasks
     * const tasks = await prisma.tasks.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tasksUpdateManyArgs>(args: SelectSubset<T, tasksUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tasks and returns the data updated in the database.
     * @param {tasksUpdateManyAndReturnArgs} args - Arguments to update many Tasks.
     * @example
     * // Update many Tasks
     * const tasks = await prisma.tasks.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tasks and only return the `id`
     * const tasksWithIdOnly = await prisma.tasks.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends tasksUpdateManyAndReturnArgs>(args: SelectSubset<T, tasksUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tasksPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tasks.
     * @param {tasksUpsertArgs} args - Arguments to update or create a Tasks.
     * @example
     * // Update or create a Tasks
     * const tasks = await prisma.tasks.upsert({
     *   create: {
     *     // ... data to create a Tasks
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tasks we want to update
     *   }
     * })
     */
    upsert<T extends tasksUpsertArgs>(args: SelectSubset<T, tasksUpsertArgs<ExtArgs>>): Prisma__tasksClient<$Result.GetResult<Prisma.$tasksPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tasksCountArgs} args - Arguments to filter Tasks to count.
     * @example
     * // Count the number of Tasks
     * const count = await prisma.tasks.count({
     *   where: {
     *     // ... the filter for the Tasks we want to count
     *   }
     * })
    **/
    count<T extends tasksCountArgs>(
      args?: Subset<T, tasksCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TasksCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TasksAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TasksAggregateArgs>(args: Subset<T, TasksAggregateArgs>): Prisma.PrismaPromise<GetTasksAggregateType<T>>

    /**
     * Group by Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tasksGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends tasksGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tasksGroupByArgs['orderBy'] }
        : { orderBy?: tasksGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, tasksGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTasksGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tasks model
   */
  readonly fields: tasksFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tasks.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tasksClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    processes<T extends tasks$processesArgs<ExtArgs> = {}>(args?: Subset<T, tasks$processesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$processesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    task_status_history<T extends tasks$task_status_historyArgs<ExtArgs> = {}>(args?: Subset<T, tasks$task_status_historyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$task_status_historyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    priorities<T extends tasks$prioritiesArgs<ExtArgs> = {}>(args?: Subset<T, tasks$prioritiesArgs<ExtArgs>>): Prisma__prioritiesClient<$Result.GetResult<Prisma.$prioritiesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the tasks model
   */
  interface tasksFieldRefs {
    readonly id: FieldRef<"tasks", 'Int'>
    readonly name: FieldRef<"tasks", 'String'>
    readonly arrival_time: FieldRef<"tasks", 'DateTime'>
    readonly duration: FieldRef<"tasks", 'Int'>
    readonly status: FieldRef<"tasks", 'task_status'>
    readonly priority_id: FieldRef<"tasks", 'Int'>
    readonly created_at: FieldRef<"tasks", 'DateTime'>
    readonly updated_at: FieldRef<"tasks", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * tasks findUnique
   */
  export type tasksFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tasks
     */
    select?: tasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tasks
     */
    omit?: tasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tasksInclude<ExtArgs> | null
    /**
     * Filter, which tasks to fetch.
     */
    where: tasksWhereUniqueInput
  }

  /**
   * tasks findUniqueOrThrow
   */
  export type tasksFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tasks
     */
    select?: tasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tasks
     */
    omit?: tasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tasksInclude<ExtArgs> | null
    /**
     * Filter, which tasks to fetch.
     */
    where: tasksWhereUniqueInput
  }

  /**
   * tasks findFirst
   */
  export type tasksFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tasks
     */
    select?: tasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tasks
     */
    omit?: tasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tasksInclude<ExtArgs> | null
    /**
     * Filter, which tasks to fetch.
     */
    where?: tasksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tasks to fetch.
     */
    orderBy?: tasksOrderByWithRelationInput | tasksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tasks.
     */
    cursor?: tasksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tasks.
     */
    distinct?: TasksScalarFieldEnum | TasksScalarFieldEnum[]
  }

  /**
   * tasks findFirstOrThrow
   */
  export type tasksFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tasks
     */
    select?: tasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tasks
     */
    omit?: tasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tasksInclude<ExtArgs> | null
    /**
     * Filter, which tasks to fetch.
     */
    where?: tasksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tasks to fetch.
     */
    orderBy?: tasksOrderByWithRelationInput | tasksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tasks.
     */
    cursor?: tasksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tasks.
     */
    distinct?: TasksScalarFieldEnum | TasksScalarFieldEnum[]
  }

  /**
   * tasks findMany
   */
  export type tasksFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tasks
     */
    select?: tasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tasks
     */
    omit?: tasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tasksInclude<ExtArgs> | null
    /**
     * Filter, which tasks to fetch.
     */
    where?: tasksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tasks to fetch.
     */
    orderBy?: tasksOrderByWithRelationInput | tasksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tasks.
     */
    cursor?: tasksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tasks.
     */
    skip?: number
    distinct?: TasksScalarFieldEnum | TasksScalarFieldEnum[]
  }

  /**
   * tasks create
   */
  export type tasksCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tasks
     */
    select?: tasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tasks
     */
    omit?: tasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tasksInclude<ExtArgs> | null
    /**
     * The data needed to create a tasks.
     */
    data: XOR<tasksCreateInput, tasksUncheckedCreateInput>
  }

  /**
   * tasks createMany
   */
  export type tasksCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tasks.
     */
    data: tasksCreateManyInput | tasksCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tasks createManyAndReturn
   */
  export type tasksCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tasks
     */
    select?: tasksSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the tasks
     */
    omit?: tasksOmit<ExtArgs> | null
    /**
     * The data used to create many tasks.
     */
    data: tasksCreateManyInput | tasksCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tasksIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * tasks update
   */
  export type tasksUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tasks
     */
    select?: tasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tasks
     */
    omit?: tasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tasksInclude<ExtArgs> | null
    /**
     * The data needed to update a tasks.
     */
    data: XOR<tasksUpdateInput, tasksUncheckedUpdateInput>
    /**
     * Choose, which tasks to update.
     */
    where: tasksWhereUniqueInput
  }

  /**
   * tasks updateMany
   */
  export type tasksUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tasks.
     */
    data: XOR<tasksUpdateManyMutationInput, tasksUncheckedUpdateManyInput>
    /**
     * Filter which tasks to update
     */
    where?: tasksWhereInput
    /**
     * Limit how many tasks to update.
     */
    limit?: number
  }

  /**
   * tasks updateManyAndReturn
   */
  export type tasksUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tasks
     */
    select?: tasksSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the tasks
     */
    omit?: tasksOmit<ExtArgs> | null
    /**
     * The data used to update tasks.
     */
    data: XOR<tasksUpdateManyMutationInput, tasksUncheckedUpdateManyInput>
    /**
     * Filter which tasks to update
     */
    where?: tasksWhereInput
    /**
     * Limit how many tasks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tasksIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * tasks upsert
   */
  export type tasksUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tasks
     */
    select?: tasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tasks
     */
    omit?: tasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tasksInclude<ExtArgs> | null
    /**
     * The filter to search for the tasks to update in case it exists.
     */
    where: tasksWhereUniqueInput
    /**
     * In case the tasks found by the `where` argument doesn't exist, create a new tasks with this data.
     */
    create: XOR<tasksCreateInput, tasksUncheckedCreateInput>
    /**
     * In case the tasks was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tasksUpdateInput, tasksUncheckedUpdateInput>
  }

  /**
   * tasks delete
   */
  export type tasksDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tasks
     */
    select?: tasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tasks
     */
    omit?: tasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tasksInclude<ExtArgs> | null
    /**
     * Filter which tasks to delete.
     */
    where: tasksWhereUniqueInput
  }

  /**
   * tasks deleteMany
   */
  export type tasksDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tasks to delete
     */
    where?: tasksWhereInput
    /**
     * Limit how many tasks to delete.
     */
    limit?: number
  }

  /**
   * tasks.processes
   */
  export type tasks$processesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the processes
     */
    select?: processesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the processes
     */
    omit?: processesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: processesInclude<ExtArgs> | null
    where?: processesWhereInput
    orderBy?: processesOrderByWithRelationInput | processesOrderByWithRelationInput[]
    cursor?: processesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProcessesScalarFieldEnum | ProcessesScalarFieldEnum[]
  }

  /**
   * tasks.task_status_history
   */
  export type tasks$task_status_historyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task_status_history
     */
    select?: task_status_historySelect<ExtArgs> | null
    /**
     * Omit specific fields from the task_status_history
     */
    omit?: task_status_historyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: task_status_historyInclude<ExtArgs> | null
    where?: task_status_historyWhereInput
    orderBy?: task_status_historyOrderByWithRelationInput | task_status_historyOrderByWithRelationInput[]
    cursor?: task_status_historyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Task_status_historyScalarFieldEnum | Task_status_historyScalarFieldEnum[]
  }

  /**
   * tasks.priorities
   */
  export type tasks$prioritiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the priorities
     */
    select?: prioritiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the priorities
     */
    omit?: prioritiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prioritiesInclude<ExtArgs> | null
    where?: prioritiesWhereInput
  }

  /**
   * tasks without action
   */
  export type tasksDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tasks
     */
    select?: tasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tasks
     */
    omit?: tasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tasksInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const PrioritiesScalarFieldEnum: {
    id: 'id',
    description: 'description'
  };

  export type PrioritiesScalarFieldEnum = (typeof PrioritiesScalarFieldEnum)[keyof typeof PrioritiesScalarFieldEnum]


  export const ProcessesScalarFieldEnum: {
    id: 'id',
    scheduling_run_id: 'scheduling_run_id',
    task_id: 'task_id',
    started_at: 'started_at',
    ended_at: 'ended_at',
    execution_order: 'execution_order'
  };

  export type ProcessesScalarFieldEnum = (typeof ProcessesScalarFieldEnum)[keyof typeof ProcessesScalarFieldEnum]


  export const Scheduling_runsScalarFieldEnum: {
    id: 'id',
    run_at: 'run_at',
    description: 'description'
  };

  export type Scheduling_runsScalarFieldEnum = (typeof Scheduling_runsScalarFieldEnum)[keyof typeof Scheduling_runsScalarFieldEnum]


  export const Task_status_historyScalarFieldEnum: {
    id: 'id',
    task_id: 'task_id',
    status: 'status',
    changed_at: 'changed_at'
  };

  export type Task_status_historyScalarFieldEnum = (typeof Task_status_historyScalarFieldEnum)[keyof typeof Task_status_historyScalarFieldEnum]


  export const TasksScalarFieldEnum: {
    id: 'id',
    name: 'name',
    arrival_time: 'arrival_time',
    duration: 'duration',
    status: 'status',
    priority_id: 'priority_id',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type TasksScalarFieldEnum = (typeof TasksScalarFieldEnum)[keyof typeof TasksScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'task_status'
   */
  export type Enumtask_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'task_status'>
    


  /**
   * Reference to a field of type 'task_status[]'
   */
  export type ListEnumtask_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'task_status[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type prioritiesWhereInput = {
    AND?: prioritiesWhereInput | prioritiesWhereInput[]
    OR?: prioritiesWhereInput[]
    NOT?: prioritiesWhereInput | prioritiesWhereInput[]
    id?: IntFilter<"priorities"> | number
    description?: StringFilter<"priorities"> | string
    tasks?: TasksListRelationFilter
  }

  export type prioritiesOrderByWithRelationInput = {
    id?: SortOrder
    description?: SortOrder
    tasks?: tasksOrderByRelationAggregateInput
  }

  export type prioritiesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    description?: string
    AND?: prioritiesWhereInput | prioritiesWhereInput[]
    OR?: prioritiesWhereInput[]
    NOT?: prioritiesWhereInput | prioritiesWhereInput[]
    tasks?: TasksListRelationFilter
  }, "id" | "description">

  export type prioritiesOrderByWithAggregationInput = {
    id?: SortOrder
    description?: SortOrder
    _count?: prioritiesCountOrderByAggregateInput
    _avg?: prioritiesAvgOrderByAggregateInput
    _max?: prioritiesMaxOrderByAggregateInput
    _min?: prioritiesMinOrderByAggregateInput
    _sum?: prioritiesSumOrderByAggregateInput
  }

  export type prioritiesScalarWhereWithAggregatesInput = {
    AND?: prioritiesScalarWhereWithAggregatesInput | prioritiesScalarWhereWithAggregatesInput[]
    OR?: prioritiesScalarWhereWithAggregatesInput[]
    NOT?: prioritiesScalarWhereWithAggregatesInput | prioritiesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"priorities"> | number
    description?: StringWithAggregatesFilter<"priorities"> | string
  }

  export type processesWhereInput = {
    AND?: processesWhereInput | processesWhereInput[]
    OR?: processesWhereInput[]
    NOT?: processesWhereInput | processesWhereInput[]
    id?: IntFilter<"processes"> | number
    scheduling_run_id?: IntFilter<"processes"> | number
    task_id?: IntFilter<"processes"> | number
    started_at?: DateTimeNullableFilter<"processes"> | Date | string | null
    ended_at?: DateTimeNullableFilter<"processes"> | Date | string | null
    execution_order?: IntFilter<"processes"> | number
    scheduling_runs?: XOR<Scheduling_runsScalarRelationFilter, scheduling_runsWhereInput>
    tasks?: XOR<TasksScalarRelationFilter, tasksWhereInput>
  }

  export type processesOrderByWithRelationInput = {
    id?: SortOrder
    scheduling_run_id?: SortOrder
    task_id?: SortOrder
    started_at?: SortOrderInput | SortOrder
    ended_at?: SortOrderInput | SortOrder
    execution_order?: SortOrder
    scheduling_runs?: scheduling_runsOrderByWithRelationInput
    tasks?: tasksOrderByWithRelationInput
  }

  export type processesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: processesWhereInput | processesWhereInput[]
    OR?: processesWhereInput[]
    NOT?: processesWhereInput | processesWhereInput[]
    scheduling_run_id?: IntFilter<"processes"> | number
    task_id?: IntFilter<"processes"> | number
    started_at?: DateTimeNullableFilter<"processes"> | Date | string | null
    ended_at?: DateTimeNullableFilter<"processes"> | Date | string | null
    execution_order?: IntFilter<"processes"> | number
    scheduling_runs?: XOR<Scheduling_runsScalarRelationFilter, scheduling_runsWhereInput>
    tasks?: XOR<TasksScalarRelationFilter, tasksWhereInput>
  }, "id">

  export type processesOrderByWithAggregationInput = {
    id?: SortOrder
    scheduling_run_id?: SortOrder
    task_id?: SortOrder
    started_at?: SortOrderInput | SortOrder
    ended_at?: SortOrderInput | SortOrder
    execution_order?: SortOrder
    _count?: processesCountOrderByAggregateInput
    _avg?: processesAvgOrderByAggregateInput
    _max?: processesMaxOrderByAggregateInput
    _min?: processesMinOrderByAggregateInput
    _sum?: processesSumOrderByAggregateInput
  }

  export type processesScalarWhereWithAggregatesInput = {
    AND?: processesScalarWhereWithAggregatesInput | processesScalarWhereWithAggregatesInput[]
    OR?: processesScalarWhereWithAggregatesInput[]
    NOT?: processesScalarWhereWithAggregatesInput | processesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"processes"> | number
    scheduling_run_id?: IntWithAggregatesFilter<"processes"> | number
    task_id?: IntWithAggregatesFilter<"processes"> | number
    started_at?: DateTimeNullableWithAggregatesFilter<"processes"> | Date | string | null
    ended_at?: DateTimeNullableWithAggregatesFilter<"processes"> | Date | string | null
    execution_order?: IntWithAggregatesFilter<"processes"> | number
  }

  export type scheduling_runsWhereInput = {
    AND?: scheduling_runsWhereInput | scheduling_runsWhereInput[]
    OR?: scheduling_runsWhereInput[]
    NOT?: scheduling_runsWhereInput | scheduling_runsWhereInput[]
    id?: IntFilter<"scheduling_runs"> | number
    run_at?: DateTimeNullableFilter<"scheduling_runs"> | Date | string | null
    description?: StringNullableFilter<"scheduling_runs"> | string | null
    processes?: ProcessesListRelationFilter
  }

  export type scheduling_runsOrderByWithRelationInput = {
    id?: SortOrder
    run_at?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    processes?: processesOrderByRelationAggregateInput
  }

  export type scheduling_runsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: scheduling_runsWhereInput | scheduling_runsWhereInput[]
    OR?: scheduling_runsWhereInput[]
    NOT?: scheduling_runsWhereInput | scheduling_runsWhereInput[]
    run_at?: DateTimeNullableFilter<"scheduling_runs"> | Date | string | null
    description?: StringNullableFilter<"scheduling_runs"> | string | null
    processes?: ProcessesListRelationFilter
  }, "id">

  export type scheduling_runsOrderByWithAggregationInput = {
    id?: SortOrder
    run_at?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    _count?: scheduling_runsCountOrderByAggregateInput
    _avg?: scheduling_runsAvgOrderByAggregateInput
    _max?: scheduling_runsMaxOrderByAggregateInput
    _min?: scheduling_runsMinOrderByAggregateInput
    _sum?: scheduling_runsSumOrderByAggregateInput
  }

  export type scheduling_runsScalarWhereWithAggregatesInput = {
    AND?: scheduling_runsScalarWhereWithAggregatesInput | scheduling_runsScalarWhereWithAggregatesInput[]
    OR?: scheduling_runsScalarWhereWithAggregatesInput[]
    NOT?: scheduling_runsScalarWhereWithAggregatesInput | scheduling_runsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"scheduling_runs"> | number
    run_at?: DateTimeNullableWithAggregatesFilter<"scheduling_runs"> | Date | string | null
    description?: StringNullableWithAggregatesFilter<"scheduling_runs"> | string | null
  }

  export type task_status_historyWhereInput = {
    AND?: task_status_historyWhereInput | task_status_historyWhereInput[]
    OR?: task_status_historyWhereInput[]
    NOT?: task_status_historyWhereInput | task_status_historyWhereInput[]
    id?: IntFilter<"task_status_history"> | number
    task_id?: IntFilter<"task_status_history"> | number
    status?: Enumtask_statusFilter<"task_status_history"> | $Enums.task_status
    changed_at?: DateTimeNullableFilter<"task_status_history"> | Date | string | null
    tasks?: XOR<TasksScalarRelationFilter, tasksWhereInput>
  }

  export type task_status_historyOrderByWithRelationInput = {
    id?: SortOrder
    task_id?: SortOrder
    status?: SortOrder
    changed_at?: SortOrderInput | SortOrder
    tasks?: tasksOrderByWithRelationInput
  }

  export type task_status_historyWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: task_status_historyWhereInput | task_status_historyWhereInput[]
    OR?: task_status_historyWhereInput[]
    NOT?: task_status_historyWhereInput | task_status_historyWhereInput[]
    task_id?: IntFilter<"task_status_history"> | number
    status?: Enumtask_statusFilter<"task_status_history"> | $Enums.task_status
    changed_at?: DateTimeNullableFilter<"task_status_history"> | Date | string | null
    tasks?: XOR<TasksScalarRelationFilter, tasksWhereInput>
  }, "id">

  export type task_status_historyOrderByWithAggregationInput = {
    id?: SortOrder
    task_id?: SortOrder
    status?: SortOrder
    changed_at?: SortOrderInput | SortOrder
    _count?: task_status_historyCountOrderByAggregateInput
    _avg?: task_status_historyAvgOrderByAggregateInput
    _max?: task_status_historyMaxOrderByAggregateInput
    _min?: task_status_historyMinOrderByAggregateInput
    _sum?: task_status_historySumOrderByAggregateInput
  }

  export type task_status_historyScalarWhereWithAggregatesInput = {
    AND?: task_status_historyScalarWhereWithAggregatesInput | task_status_historyScalarWhereWithAggregatesInput[]
    OR?: task_status_historyScalarWhereWithAggregatesInput[]
    NOT?: task_status_historyScalarWhereWithAggregatesInput | task_status_historyScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"task_status_history"> | number
    task_id?: IntWithAggregatesFilter<"task_status_history"> | number
    status?: Enumtask_statusWithAggregatesFilter<"task_status_history"> | $Enums.task_status
    changed_at?: DateTimeNullableWithAggregatesFilter<"task_status_history"> | Date | string | null
  }

  export type tasksWhereInput = {
    AND?: tasksWhereInput | tasksWhereInput[]
    OR?: tasksWhereInput[]
    NOT?: tasksWhereInput | tasksWhereInput[]
    id?: IntFilter<"tasks"> | number
    name?: StringFilter<"tasks"> | string
    arrival_time?: DateTimeFilter<"tasks"> | Date | string
    duration?: IntFilter<"tasks"> | number
    status?: Enumtask_statusFilter<"tasks"> | $Enums.task_status
    priority_id?: IntNullableFilter<"tasks"> | number | null
    created_at?: DateTimeNullableFilter<"tasks"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"tasks"> | Date | string | null
    processes?: ProcessesListRelationFilter
    task_status_history?: Task_status_historyListRelationFilter
    priorities?: XOR<PrioritiesNullableScalarRelationFilter, prioritiesWhereInput> | null
  }

  export type tasksOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    arrival_time?: SortOrder
    duration?: SortOrder
    status?: SortOrder
    priority_id?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    processes?: processesOrderByRelationAggregateInput
    task_status_history?: task_status_historyOrderByRelationAggregateInput
    priorities?: prioritiesOrderByWithRelationInput
  }

  export type tasksWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: tasksWhereInput | tasksWhereInput[]
    OR?: tasksWhereInput[]
    NOT?: tasksWhereInput | tasksWhereInput[]
    arrival_time?: DateTimeFilter<"tasks"> | Date | string
    duration?: IntFilter<"tasks"> | number
    status?: Enumtask_statusFilter<"tasks"> | $Enums.task_status
    priority_id?: IntNullableFilter<"tasks"> | number | null
    created_at?: DateTimeNullableFilter<"tasks"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"tasks"> | Date | string | null
    processes?: ProcessesListRelationFilter
    task_status_history?: Task_status_historyListRelationFilter
    priorities?: XOR<PrioritiesNullableScalarRelationFilter, prioritiesWhereInput> | null
  }, "id" | "name">

  export type tasksOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    arrival_time?: SortOrder
    duration?: SortOrder
    status?: SortOrder
    priority_id?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: tasksCountOrderByAggregateInput
    _avg?: tasksAvgOrderByAggregateInput
    _max?: tasksMaxOrderByAggregateInput
    _min?: tasksMinOrderByAggregateInput
    _sum?: tasksSumOrderByAggregateInput
  }

  export type tasksScalarWhereWithAggregatesInput = {
    AND?: tasksScalarWhereWithAggregatesInput | tasksScalarWhereWithAggregatesInput[]
    OR?: tasksScalarWhereWithAggregatesInput[]
    NOT?: tasksScalarWhereWithAggregatesInput | tasksScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"tasks"> | number
    name?: StringWithAggregatesFilter<"tasks"> | string
    arrival_time?: DateTimeWithAggregatesFilter<"tasks"> | Date | string
    duration?: IntWithAggregatesFilter<"tasks"> | number
    status?: Enumtask_statusWithAggregatesFilter<"tasks"> | $Enums.task_status
    priority_id?: IntNullableWithAggregatesFilter<"tasks"> | number | null
    created_at?: DateTimeNullableWithAggregatesFilter<"tasks"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"tasks"> | Date | string | null
  }

  export type prioritiesCreateInput = {
    description: string
    tasks?: tasksCreateNestedManyWithoutPrioritiesInput
  }

  export type prioritiesUncheckedCreateInput = {
    id?: number
    description: string
    tasks?: tasksUncheckedCreateNestedManyWithoutPrioritiesInput
  }

  export type prioritiesUpdateInput = {
    description?: StringFieldUpdateOperationsInput | string
    tasks?: tasksUpdateManyWithoutPrioritiesNestedInput
  }

  export type prioritiesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    tasks?: tasksUncheckedUpdateManyWithoutPrioritiesNestedInput
  }

  export type prioritiesCreateManyInput = {
    id?: number
    description: string
  }

  export type prioritiesUpdateManyMutationInput = {
    description?: StringFieldUpdateOperationsInput | string
  }

  export type prioritiesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
  }

  export type processesCreateInput = {
    started_at?: Date | string | null
    ended_at?: Date | string | null
    execution_order: number
    scheduling_runs: scheduling_runsCreateNestedOneWithoutProcessesInput
    tasks: tasksCreateNestedOneWithoutProcessesInput
  }

  export type processesUncheckedCreateInput = {
    id?: number
    scheduling_run_id: number
    task_id: number
    started_at?: Date | string | null
    ended_at?: Date | string | null
    execution_order: number
  }

  export type processesUpdateInput = {
    started_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ended_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    execution_order?: IntFieldUpdateOperationsInput | number
    scheduling_runs?: scheduling_runsUpdateOneRequiredWithoutProcessesNestedInput
    tasks?: tasksUpdateOneRequiredWithoutProcessesNestedInput
  }

  export type processesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    scheduling_run_id?: IntFieldUpdateOperationsInput | number
    task_id?: IntFieldUpdateOperationsInput | number
    started_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ended_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    execution_order?: IntFieldUpdateOperationsInput | number
  }

  export type processesCreateManyInput = {
    id?: number
    scheduling_run_id: number
    task_id: number
    started_at?: Date | string | null
    ended_at?: Date | string | null
    execution_order: number
  }

  export type processesUpdateManyMutationInput = {
    started_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ended_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    execution_order?: IntFieldUpdateOperationsInput | number
  }

  export type processesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    scheduling_run_id?: IntFieldUpdateOperationsInput | number
    task_id?: IntFieldUpdateOperationsInput | number
    started_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ended_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    execution_order?: IntFieldUpdateOperationsInput | number
  }

  export type scheduling_runsCreateInput = {
    run_at?: Date | string | null
    description?: string | null
    processes?: processesCreateNestedManyWithoutScheduling_runsInput
  }

  export type scheduling_runsUncheckedCreateInput = {
    id?: number
    run_at?: Date | string | null
    description?: string | null
    processes?: processesUncheckedCreateNestedManyWithoutScheduling_runsInput
  }

  export type scheduling_runsUpdateInput = {
    run_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    processes?: processesUpdateManyWithoutScheduling_runsNestedInput
  }

  export type scheduling_runsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    run_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    processes?: processesUncheckedUpdateManyWithoutScheduling_runsNestedInput
  }

  export type scheduling_runsCreateManyInput = {
    id?: number
    run_at?: Date | string | null
    description?: string | null
  }

  export type scheduling_runsUpdateManyMutationInput = {
    run_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type scheduling_runsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    run_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type task_status_historyCreateInput = {
    status: $Enums.task_status
    changed_at?: Date | string | null
    tasks: tasksCreateNestedOneWithoutTask_status_historyInput
  }

  export type task_status_historyUncheckedCreateInput = {
    id?: number
    task_id: number
    status: $Enums.task_status
    changed_at?: Date | string | null
  }

  export type task_status_historyUpdateInput = {
    status?: Enumtask_statusFieldUpdateOperationsInput | $Enums.task_status
    changed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tasks?: tasksUpdateOneRequiredWithoutTask_status_historyNestedInput
  }

  export type task_status_historyUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    task_id?: IntFieldUpdateOperationsInput | number
    status?: Enumtask_statusFieldUpdateOperationsInput | $Enums.task_status
    changed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type task_status_historyCreateManyInput = {
    id?: number
    task_id: number
    status: $Enums.task_status
    changed_at?: Date | string | null
  }

  export type task_status_historyUpdateManyMutationInput = {
    status?: Enumtask_statusFieldUpdateOperationsInput | $Enums.task_status
    changed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type task_status_historyUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    task_id?: IntFieldUpdateOperationsInput | number
    status?: Enumtask_statusFieldUpdateOperationsInput | $Enums.task_status
    changed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type tasksCreateInput = {
    name: string
    arrival_time: Date | string
    duration: number
    status?: $Enums.task_status
    created_at?: Date | string | null
    updated_at?: Date | string | null
    processes?: processesCreateNestedManyWithoutTasksInput
    task_status_history?: task_status_historyCreateNestedManyWithoutTasksInput
    priorities?: prioritiesCreateNestedOneWithoutTasksInput
  }

  export type tasksUncheckedCreateInput = {
    id?: number
    name: string
    arrival_time: Date | string
    duration: number
    status?: $Enums.task_status
    priority_id?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    processes?: processesUncheckedCreateNestedManyWithoutTasksInput
    task_status_history?: task_status_historyUncheckedCreateNestedManyWithoutTasksInput
  }

  export type tasksUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    arrival_time?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: IntFieldUpdateOperationsInput | number
    status?: Enumtask_statusFieldUpdateOperationsInput | $Enums.task_status
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    processes?: processesUpdateManyWithoutTasksNestedInput
    task_status_history?: task_status_historyUpdateManyWithoutTasksNestedInput
    priorities?: prioritiesUpdateOneWithoutTasksNestedInput
  }

  export type tasksUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    arrival_time?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: IntFieldUpdateOperationsInput | number
    status?: Enumtask_statusFieldUpdateOperationsInput | $Enums.task_status
    priority_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    processes?: processesUncheckedUpdateManyWithoutTasksNestedInput
    task_status_history?: task_status_historyUncheckedUpdateManyWithoutTasksNestedInput
  }

  export type tasksCreateManyInput = {
    id?: number
    name: string
    arrival_time: Date | string
    duration: number
    status?: $Enums.task_status
    priority_id?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type tasksUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    arrival_time?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: IntFieldUpdateOperationsInput | number
    status?: Enumtask_statusFieldUpdateOperationsInput | $Enums.task_status
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type tasksUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    arrival_time?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: IntFieldUpdateOperationsInput | number
    status?: Enumtask_statusFieldUpdateOperationsInput | $Enums.task_status
    priority_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type TasksListRelationFilter = {
    every?: tasksWhereInput
    some?: tasksWhereInput
    none?: tasksWhereInput
  }

  export type tasksOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type prioritiesCountOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
  }

  export type prioritiesAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type prioritiesMaxOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
  }

  export type prioritiesMinOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
  }

  export type prioritiesSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type Scheduling_runsScalarRelationFilter = {
    is?: scheduling_runsWhereInput
    isNot?: scheduling_runsWhereInput
  }

  export type TasksScalarRelationFilter = {
    is?: tasksWhereInput
    isNot?: tasksWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type processesCountOrderByAggregateInput = {
    id?: SortOrder
    scheduling_run_id?: SortOrder
    task_id?: SortOrder
    started_at?: SortOrder
    ended_at?: SortOrder
    execution_order?: SortOrder
  }

  export type processesAvgOrderByAggregateInput = {
    id?: SortOrder
    scheduling_run_id?: SortOrder
    task_id?: SortOrder
    execution_order?: SortOrder
  }

  export type processesMaxOrderByAggregateInput = {
    id?: SortOrder
    scheduling_run_id?: SortOrder
    task_id?: SortOrder
    started_at?: SortOrder
    ended_at?: SortOrder
    execution_order?: SortOrder
  }

  export type processesMinOrderByAggregateInput = {
    id?: SortOrder
    scheduling_run_id?: SortOrder
    task_id?: SortOrder
    started_at?: SortOrder
    ended_at?: SortOrder
    execution_order?: SortOrder
  }

  export type processesSumOrderByAggregateInput = {
    id?: SortOrder
    scheduling_run_id?: SortOrder
    task_id?: SortOrder
    execution_order?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type ProcessesListRelationFilter = {
    every?: processesWhereInput
    some?: processesWhereInput
    none?: processesWhereInput
  }

  export type processesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type scheduling_runsCountOrderByAggregateInput = {
    id?: SortOrder
    run_at?: SortOrder
    description?: SortOrder
  }

  export type scheduling_runsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type scheduling_runsMaxOrderByAggregateInput = {
    id?: SortOrder
    run_at?: SortOrder
    description?: SortOrder
  }

  export type scheduling_runsMinOrderByAggregateInput = {
    id?: SortOrder
    run_at?: SortOrder
    description?: SortOrder
  }

  export type scheduling_runsSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type Enumtask_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.task_status | Enumtask_statusFieldRefInput<$PrismaModel>
    in?: $Enums.task_status[] | ListEnumtask_statusFieldRefInput<$PrismaModel>
    notIn?: $Enums.task_status[] | ListEnumtask_statusFieldRefInput<$PrismaModel>
    not?: NestedEnumtask_statusFilter<$PrismaModel> | $Enums.task_status
  }

  export type task_status_historyCountOrderByAggregateInput = {
    id?: SortOrder
    task_id?: SortOrder
    status?: SortOrder
    changed_at?: SortOrder
  }

  export type task_status_historyAvgOrderByAggregateInput = {
    id?: SortOrder
    task_id?: SortOrder
  }

  export type task_status_historyMaxOrderByAggregateInput = {
    id?: SortOrder
    task_id?: SortOrder
    status?: SortOrder
    changed_at?: SortOrder
  }

  export type task_status_historyMinOrderByAggregateInput = {
    id?: SortOrder
    task_id?: SortOrder
    status?: SortOrder
    changed_at?: SortOrder
  }

  export type task_status_historySumOrderByAggregateInput = {
    id?: SortOrder
    task_id?: SortOrder
  }

  export type Enumtask_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.task_status | Enumtask_statusFieldRefInput<$PrismaModel>
    in?: $Enums.task_status[] | ListEnumtask_statusFieldRefInput<$PrismaModel>
    notIn?: $Enums.task_status[] | ListEnumtask_statusFieldRefInput<$PrismaModel>
    not?: NestedEnumtask_statusWithAggregatesFilter<$PrismaModel> | $Enums.task_status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumtask_statusFilter<$PrismaModel>
    _max?: NestedEnumtask_statusFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type Task_status_historyListRelationFilter = {
    every?: task_status_historyWhereInput
    some?: task_status_historyWhereInput
    none?: task_status_historyWhereInput
  }

  export type PrioritiesNullableScalarRelationFilter = {
    is?: prioritiesWhereInput | null
    isNot?: prioritiesWhereInput | null
  }

  export type task_status_historyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type tasksCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    arrival_time?: SortOrder
    duration?: SortOrder
    status?: SortOrder
    priority_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type tasksAvgOrderByAggregateInput = {
    id?: SortOrder
    duration?: SortOrder
    priority_id?: SortOrder
  }

  export type tasksMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    arrival_time?: SortOrder
    duration?: SortOrder
    status?: SortOrder
    priority_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type tasksMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    arrival_time?: SortOrder
    duration?: SortOrder
    status?: SortOrder
    priority_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type tasksSumOrderByAggregateInput = {
    id?: SortOrder
    duration?: SortOrder
    priority_id?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type tasksCreateNestedManyWithoutPrioritiesInput = {
    create?: XOR<tasksCreateWithoutPrioritiesInput, tasksUncheckedCreateWithoutPrioritiesInput> | tasksCreateWithoutPrioritiesInput[] | tasksUncheckedCreateWithoutPrioritiesInput[]
    connectOrCreate?: tasksCreateOrConnectWithoutPrioritiesInput | tasksCreateOrConnectWithoutPrioritiesInput[]
    createMany?: tasksCreateManyPrioritiesInputEnvelope
    connect?: tasksWhereUniqueInput | tasksWhereUniqueInput[]
  }

  export type tasksUncheckedCreateNestedManyWithoutPrioritiesInput = {
    create?: XOR<tasksCreateWithoutPrioritiesInput, tasksUncheckedCreateWithoutPrioritiesInput> | tasksCreateWithoutPrioritiesInput[] | tasksUncheckedCreateWithoutPrioritiesInput[]
    connectOrCreate?: tasksCreateOrConnectWithoutPrioritiesInput | tasksCreateOrConnectWithoutPrioritiesInput[]
    createMany?: tasksCreateManyPrioritiesInputEnvelope
    connect?: tasksWhereUniqueInput | tasksWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type tasksUpdateManyWithoutPrioritiesNestedInput = {
    create?: XOR<tasksCreateWithoutPrioritiesInput, tasksUncheckedCreateWithoutPrioritiesInput> | tasksCreateWithoutPrioritiesInput[] | tasksUncheckedCreateWithoutPrioritiesInput[]
    connectOrCreate?: tasksCreateOrConnectWithoutPrioritiesInput | tasksCreateOrConnectWithoutPrioritiesInput[]
    upsert?: tasksUpsertWithWhereUniqueWithoutPrioritiesInput | tasksUpsertWithWhereUniqueWithoutPrioritiesInput[]
    createMany?: tasksCreateManyPrioritiesInputEnvelope
    set?: tasksWhereUniqueInput | tasksWhereUniqueInput[]
    disconnect?: tasksWhereUniqueInput | tasksWhereUniqueInput[]
    delete?: tasksWhereUniqueInput | tasksWhereUniqueInput[]
    connect?: tasksWhereUniqueInput | tasksWhereUniqueInput[]
    update?: tasksUpdateWithWhereUniqueWithoutPrioritiesInput | tasksUpdateWithWhereUniqueWithoutPrioritiesInput[]
    updateMany?: tasksUpdateManyWithWhereWithoutPrioritiesInput | tasksUpdateManyWithWhereWithoutPrioritiesInput[]
    deleteMany?: tasksScalarWhereInput | tasksScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type tasksUncheckedUpdateManyWithoutPrioritiesNestedInput = {
    create?: XOR<tasksCreateWithoutPrioritiesInput, tasksUncheckedCreateWithoutPrioritiesInput> | tasksCreateWithoutPrioritiesInput[] | tasksUncheckedCreateWithoutPrioritiesInput[]
    connectOrCreate?: tasksCreateOrConnectWithoutPrioritiesInput | tasksCreateOrConnectWithoutPrioritiesInput[]
    upsert?: tasksUpsertWithWhereUniqueWithoutPrioritiesInput | tasksUpsertWithWhereUniqueWithoutPrioritiesInput[]
    createMany?: tasksCreateManyPrioritiesInputEnvelope
    set?: tasksWhereUniqueInput | tasksWhereUniqueInput[]
    disconnect?: tasksWhereUniqueInput | tasksWhereUniqueInput[]
    delete?: tasksWhereUniqueInput | tasksWhereUniqueInput[]
    connect?: tasksWhereUniqueInput | tasksWhereUniqueInput[]
    update?: tasksUpdateWithWhereUniqueWithoutPrioritiesInput | tasksUpdateWithWhereUniqueWithoutPrioritiesInput[]
    updateMany?: tasksUpdateManyWithWhereWithoutPrioritiesInput | tasksUpdateManyWithWhereWithoutPrioritiesInput[]
    deleteMany?: tasksScalarWhereInput | tasksScalarWhereInput[]
  }

  export type scheduling_runsCreateNestedOneWithoutProcessesInput = {
    create?: XOR<scheduling_runsCreateWithoutProcessesInput, scheduling_runsUncheckedCreateWithoutProcessesInput>
    connectOrCreate?: scheduling_runsCreateOrConnectWithoutProcessesInput
    connect?: scheduling_runsWhereUniqueInput
  }

  export type tasksCreateNestedOneWithoutProcessesInput = {
    create?: XOR<tasksCreateWithoutProcessesInput, tasksUncheckedCreateWithoutProcessesInput>
    connectOrCreate?: tasksCreateOrConnectWithoutProcessesInput
    connect?: tasksWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type scheduling_runsUpdateOneRequiredWithoutProcessesNestedInput = {
    create?: XOR<scheduling_runsCreateWithoutProcessesInput, scheduling_runsUncheckedCreateWithoutProcessesInput>
    connectOrCreate?: scheduling_runsCreateOrConnectWithoutProcessesInput
    upsert?: scheduling_runsUpsertWithoutProcessesInput
    connect?: scheduling_runsWhereUniqueInput
    update?: XOR<XOR<scheduling_runsUpdateToOneWithWhereWithoutProcessesInput, scheduling_runsUpdateWithoutProcessesInput>, scheduling_runsUncheckedUpdateWithoutProcessesInput>
  }

  export type tasksUpdateOneRequiredWithoutProcessesNestedInput = {
    create?: XOR<tasksCreateWithoutProcessesInput, tasksUncheckedCreateWithoutProcessesInput>
    connectOrCreate?: tasksCreateOrConnectWithoutProcessesInput
    upsert?: tasksUpsertWithoutProcessesInput
    connect?: tasksWhereUniqueInput
    update?: XOR<XOR<tasksUpdateToOneWithWhereWithoutProcessesInput, tasksUpdateWithoutProcessesInput>, tasksUncheckedUpdateWithoutProcessesInput>
  }

  export type processesCreateNestedManyWithoutScheduling_runsInput = {
    create?: XOR<processesCreateWithoutScheduling_runsInput, processesUncheckedCreateWithoutScheduling_runsInput> | processesCreateWithoutScheduling_runsInput[] | processesUncheckedCreateWithoutScheduling_runsInput[]
    connectOrCreate?: processesCreateOrConnectWithoutScheduling_runsInput | processesCreateOrConnectWithoutScheduling_runsInput[]
    createMany?: processesCreateManyScheduling_runsInputEnvelope
    connect?: processesWhereUniqueInput | processesWhereUniqueInput[]
  }

  export type processesUncheckedCreateNestedManyWithoutScheduling_runsInput = {
    create?: XOR<processesCreateWithoutScheduling_runsInput, processesUncheckedCreateWithoutScheduling_runsInput> | processesCreateWithoutScheduling_runsInput[] | processesUncheckedCreateWithoutScheduling_runsInput[]
    connectOrCreate?: processesCreateOrConnectWithoutScheduling_runsInput | processesCreateOrConnectWithoutScheduling_runsInput[]
    createMany?: processesCreateManyScheduling_runsInputEnvelope
    connect?: processesWhereUniqueInput | processesWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type processesUpdateManyWithoutScheduling_runsNestedInput = {
    create?: XOR<processesCreateWithoutScheduling_runsInput, processesUncheckedCreateWithoutScheduling_runsInput> | processesCreateWithoutScheduling_runsInput[] | processesUncheckedCreateWithoutScheduling_runsInput[]
    connectOrCreate?: processesCreateOrConnectWithoutScheduling_runsInput | processesCreateOrConnectWithoutScheduling_runsInput[]
    upsert?: processesUpsertWithWhereUniqueWithoutScheduling_runsInput | processesUpsertWithWhereUniqueWithoutScheduling_runsInput[]
    createMany?: processesCreateManyScheduling_runsInputEnvelope
    set?: processesWhereUniqueInput | processesWhereUniqueInput[]
    disconnect?: processesWhereUniqueInput | processesWhereUniqueInput[]
    delete?: processesWhereUniqueInput | processesWhereUniqueInput[]
    connect?: processesWhereUniqueInput | processesWhereUniqueInput[]
    update?: processesUpdateWithWhereUniqueWithoutScheduling_runsInput | processesUpdateWithWhereUniqueWithoutScheduling_runsInput[]
    updateMany?: processesUpdateManyWithWhereWithoutScheduling_runsInput | processesUpdateManyWithWhereWithoutScheduling_runsInput[]
    deleteMany?: processesScalarWhereInput | processesScalarWhereInput[]
  }

  export type processesUncheckedUpdateManyWithoutScheduling_runsNestedInput = {
    create?: XOR<processesCreateWithoutScheduling_runsInput, processesUncheckedCreateWithoutScheduling_runsInput> | processesCreateWithoutScheduling_runsInput[] | processesUncheckedCreateWithoutScheduling_runsInput[]
    connectOrCreate?: processesCreateOrConnectWithoutScheduling_runsInput | processesCreateOrConnectWithoutScheduling_runsInput[]
    upsert?: processesUpsertWithWhereUniqueWithoutScheduling_runsInput | processesUpsertWithWhereUniqueWithoutScheduling_runsInput[]
    createMany?: processesCreateManyScheduling_runsInputEnvelope
    set?: processesWhereUniqueInput | processesWhereUniqueInput[]
    disconnect?: processesWhereUniqueInput | processesWhereUniqueInput[]
    delete?: processesWhereUniqueInput | processesWhereUniqueInput[]
    connect?: processesWhereUniqueInput | processesWhereUniqueInput[]
    update?: processesUpdateWithWhereUniqueWithoutScheduling_runsInput | processesUpdateWithWhereUniqueWithoutScheduling_runsInput[]
    updateMany?: processesUpdateManyWithWhereWithoutScheduling_runsInput | processesUpdateManyWithWhereWithoutScheduling_runsInput[]
    deleteMany?: processesScalarWhereInput | processesScalarWhereInput[]
  }

  export type tasksCreateNestedOneWithoutTask_status_historyInput = {
    create?: XOR<tasksCreateWithoutTask_status_historyInput, tasksUncheckedCreateWithoutTask_status_historyInput>
    connectOrCreate?: tasksCreateOrConnectWithoutTask_status_historyInput
    connect?: tasksWhereUniqueInput
  }

  export type Enumtask_statusFieldUpdateOperationsInput = {
    set?: $Enums.task_status
  }

  export type tasksUpdateOneRequiredWithoutTask_status_historyNestedInput = {
    create?: XOR<tasksCreateWithoutTask_status_historyInput, tasksUncheckedCreateWithoutTask_status_historyInput>
    connectOrCreate?: tasksCreateOrConnectWithoutTask_status_historyInput
    upsert?: tasksUpsertWithoutTask_status_historyInput
    connect?: tasksWhereUniqueInput
    update?: XOR<XOR<tasksUpdateToOneWithWhereWithoutTask_status_historyInput, tasksUpdateWithoutTask_status_historyInput>, tasksUncheckedUpdateWithoutTask_status_historyInput>
  }

  export type processesCreateNestedManyWithoutTasksInput = {
    create?: XOR<processesCreateWithoutTasksInput, processesUncheckedCreateWithoutTasksInput> | processesCreateWithoutTasksInput[] | processesUncheckedCreateWithoutTasksInput[]
    connectOrCreate?: processesCreateOrConnectWithoutTasksInput | processesCreateOrConnectWithoutTasksInput[]
    createMany?: processesCreateManyTasksInputEnvelope
    connect?: processesWhereUniqueInput | processesWhereUniqueInput[]
  }

  export type task_status_historyCreateNestedManyWithoutTasksInput = {
    create?: XOR<task_status_historyCreateWithoutTasksInput, task_status_historyUncheckedCreateWithoutTasksInput> | task_status_historyCreateWithoutTasksInput[] | task_status_historyUncheckedCreateWithoutTasksInput[]
    connectOrCreate?: task_status_historyCreateOrConnectWithoutTasksInput | task_status_historyCreateOrConnectWithoutTasksInput[]
    createMany?: task_status_historyCreateManyTasksInputEnvelope
    connect?: task_status_historyWhereUniqueInput | task_status_historyWhereUniqueInput[]
  }

  export type prioritiesCreateNestedOneWithoutTasksInput = {
    create?: XOR<prioritiesCreateWithoutTasksInput, prioritiesUncheckedCreateWithoutTasksInput>
    connectOrCreate?: prioritiesCreateOrConnectWithoutTasksInput
    connect?: prioritiesWhereUniqueInput
  }

  export type processesUncheckedCreateNestedManyWithoutTasksInput = {
    create?: XOR<processesCreateWithoutTasksInput, processesUncheckedCreateWithoutTasksInput> | processesCreateWithoutTasksInput[] | processesUncheckedCreateWithoutTasksInput[]
    connectOrCreate?: processesCreateOrConnectWithoutTasksInput | processesCreateOrConnectWithoutTasksInput[]
    createMany?: processesCreateManyTasksInputEnvelope
    connect?: processesWhereUniqueInput | processesWhereUniqueInput[]
  }

  export type task_status_historyUncheckedCreateNestedManyWithoutTasksInput = {
    create?: XOR<task_status_historyCreateWithoutTasksInput, task_status_historyUncheckedCreateWithoutTasksInput> | task_status_historyCreateWithoutTasksInput[] | task_status_historyUncheckedCreateWithoutTasksInput[]
    connectOrCreate?: task_status_historyCreateOrConnectWithoutTasksInput | task_status_historyCreateOrConnectWithoutTasksInput[]
    createMany?: task_status_historyCreateManyTasksInputEnvelope
    connect?: task_status_historyWhereUniqueInput | task_status_historyWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type processesUpdateManyWithoutTasksNestedInput = {
    create?: XOR<processesCreateWithoutTasksInput, processesUncheckedCreateWithoutTasksInput> | processesCreateWithoutTasksInput[] | processesUncheckedCreateWithoutTasksInput[]
    connectOrCreate?: processesCreateOrConnectWithoutTasksInput | processesCreateOrConnectWithoutTasksInput[]
    upsert?: processesUpsertWithWhereUniqueWithoutTasksInput | processesUpsertWithWhereUniqueWithoutTasksInput[]
    createMany?: processesCreateManyTasksInputEnvelope
    set?: processesWhereUniqueInput | processesWhereUniqueInput[]
    disconnect?: processesWhereUniqueInput | processesWhereUniqueInput[]
    delete?: processesWhereUniqueInput | processesWhereUniqueInput[]
    connect?: processesWhereUniqueInput | processesWhereUniqueInput[]
    update?: processesUpdateWithWhereUniqueWithoutTasksInput | processesUpdateWithWhereUniqueWithoutTasksInput[]
    updateMany?: processesUpdateManyWithWhereWithoutTasksInput | processesUpdateManyWithWhereWithoutTasksInput[]
    deleteMany?: processesScalarWhereInput | processesScalarWhereInput[]
  }

  export type task_status_historyUpdateManyWithoutTasksNestedInput = {
    create?: XOR<task_status_historyCreateWithoutTasksInput, task_status_historyUncheckedCreateWithoutTasksInput> | task_status_historyCreateWithoutTasksInput[] | task_status_historyUncheckedCreateWithoutTasksInput[]
    connectOrCreate?: task_status_historyCreateOrConnectWithoutTasksInput | task_status_historyCreateOrConnectWithoutTasksInput[]
    upsert?: task_status_historyUpsertWithWhereUniqueWithoutTasksInput | task_status_historyUpsertWithWhereUniqueWithoutTasksInput[]
    createMany?: task_status_historyCreateManyTasksInputEnvelope
    set?: task_status_historyWhereUniqueInput | task_status_historyWhereUniqueInput[]
    disconnect?: task_status_historyWhereUniqueInput | task_status_historyWhereUniqueInput[]
    delete?: task_status_historyWhereUniqueInput | task_status_historyWhereUniqueInput[]
    connect?: task_status_historyWhereUniqueInput | task_status_historyWhereUniqueInput[]
    update?: task_status_historyUpdateWithWhereUniqueWithoutTasksInput | task_status_historyUpdateWithWhereUniqueWithoutTasksInput[]
    updateMany?: task_status_historyUpdateManyWithWhereWithoutTasksInput | task_status_historyUpdateManyWithWhereWithoutTasksInput[]
    deleteMany?: task_status_historyScalarWhereInput | task_status_historyScalarWhereInput[]
  }

  export type prioritiesUpdateOneWithoutTasksNestedInput = {
    create?: XOR<prioritiesCreateWithoutTasksInput, prioritiesUncheckedCreateWithoutTasksInput>
    connectOrCreate?: prioritiesCreateOrConnectWithoutTasksInput
    upsert?: prioritiesUpsertWithoutTasksInput
    disconnect?: prioritiesWhereInput | boolean
    delete?: prioritiesWhereInput | boolean
    connect?: prioritiesWhereUniqueInput
    update?: XOR<XOR<prioritiesUpdateToOneWithWhereWithoutTasksInput, prioritiesUpdateWithoutTasksInput>, prioritiesUncheckedUpdateWithoutTasksInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type processesUncheckedUpdateManyWithoutTasksNestedInput = {
    create?: XOR<processesCreateWithoutTasksInput, processesUncheckedCreateWithoutTasksInput> | processesCreateWithoutTasksInput[] | processesUncheckedCreateWithoutTasksInput[]
    connectOrCreate?: processesCreateOrConnectWithoutTasksInput | processesCreateOrConnectWithoutTasksInput[]
    upsert?: processesUpsertWithWhereUniqueWithoutTasksInput | processesUpsertWithWhereUniqueWithoutTasksInput[]
    createMany?: processesCreateManyTasksInputEnvelope
    set?: processesWhereUniqueInput | processesWhereUniqueInput[]
    disconnect?: processesWhereUniqueInput | processesWhereUniqueInput[]
    delete?: processesWhereUniqueInput | processesWhereUniqueInput[]
    connect?: processesWhereUniqueInput | processesWhereUniqueInput[]
    update?: processesUpdateWithWhereUniqueWithoutTasksInput | processesUpdateWithWhereUniqueWithoutTasksInput[]
    updateMany?: processesUpdateManyWithWhereWithoutTasksInput | processesUpdateManyWithWhereWithoutTasksInput[]
    deleteMany?: processesScalarWhereInput | processesScalarWhereInput[]
  }

  export type task_status_historyUncheckedUpdateManyWithoutTasksNestedInput = {
    create?: XOR<task_status_historyCreateWithoutTasksInput, task_status_historyUncheckedCreateWithoutTasksInput> | task_status_historyCreateWithoutTasksInput[] | task_status_historyUncheckedCreateWithoutTasksInput[]
    connectOrCreate?: task_status_historyCreateOrConnectWithoutTasksInput | task_status_historyCreateOrConnectWithoutTasksInput[]
    upsert?: task_status_historyUpsertWithWhereUniqueWithoutTasksInput | task_status_historyUpsertWithWhereUniqueWithoutTasksInput[]
    createMany?: task_status_historyCreateManyTasksInputEnvelope
    set?: task_status_historyWhereUniqueInput | task_status_historyWhereUniqueInput[]
    disconnect?: task_status_historyWhereUniqueInput | task_status_historyWhereUniqueInput[]
    delete?: task_status_historyWhereUniqueInput | task_status_historyWhereUniqueInput[]
    connect?: task_status_historyWhereUniqueInput | task_status_historyWhereUniqueInput[]
    update?: task_status_historyUpdateWithWhereUniqueWithoutTasksInput | task_status_historyUpdateWithWhereUniqueWithoutTasksInput[]
    updateMany?: task_status_historyUpdateManyWithWhereWithoutTasksInput | task_status_historyUpdateManyWithWhereWithoutTasksInput[]
    deleteMany?: task_status_historyScalarWhereInput | task_status_historyScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedEnumtask_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.task_status | Enumtask_statusFieldRefInput<$PrismaModel>
    in?: $Enums.task_status[] | ListEnumtask_statusFieldRefInput<$PrismaModel>
    notIn?: $Enums.task_status[] | ListEnumtask_statusFieldRefInput<$PrismaModel>
    not?: NestedEnumtask_statusFilter<$PrismaModel> | $Enums.task_status
  }

  export type NestedEnumtask_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.task_status | Enumtask_statusFieldRefInput<$PrismaModel>
    in?: $Enums.task_status[] | ListEnumtask_statusFieldRefInput<$PrismaModel>
    notIn?: $Enums.task_status[] | ListEnumtask_statusFieldRefInput<$PrismaModel>
    not?: NestedEnumtask_statusWithAggregatesFilter<$PrismaModel> | $Enums.task_status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumtask_statusFilter<$PrismaModel>
    _max?: NestedEnumtask_statusFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type tasksCreateWithoutPrioritiesInput = {
    name: string
    arrival_time: Date | string
    duration: number
    status?: $Enums.task_status
    created_at?: Date | string | null
    updated_at?: Date | string | null
    processes?: processesCreateNestedManyWithoutTasksInput
    task_status_history?: task_status_historyCreateNestedManyWithoutTasksInput
  }

  export type tasksUncheckedCreateWithoutPrioritiesInput = {
    id?: number
    name: string
    arrival_time: Date | string
    duration: number
    status?: $Enums.task_status
    created_at?: Date | string | null
    updated_at?: Date | string | null
    processes?: processesUncheckedCreateNestedManyWithoutTasksInput
    task_status_history?: task_status_historyUncheckedCreateNestedManyWithoutTasksInput
  }

  export type tasksCreateOrConnectWithoutPrioritiesInput = {
    where: tasksWhereUniqueInput
    create: XOR<tasksCreateWithoutPrioritiesInput, tasksUncheckedCreateWithoutPrioritiesInput>
  }

  export type tasksCreateManyPrioritiesInputEnvelope = {
    data: tasksCreateManyPrioritiesInput | tasksCreateManyPrioritiesInput[]
    skipDuplicates?: boolean
  }

  export type tasksUpsertWithWhereUniqueWithoutPrioritiesInput = {
    where: tasksWhereUniqueInput
    update: XOR<tasksUpdateWithoutPrioritiesInput, tasksUncheckedUpdateWithoutPrioritiesInput>
    create: XOR<tasksCreateWithoutPrioritiesInput, tasksUncheckedCreateWithoutPrioritiesInput>
  }

  export type tasksUpdateWithWhereUniqueWithoutPrioritiesInput = {
    where: tasksWhereUniqueInput
    data: XOR<tasksUpdateWithoutPrioritiesInput, tasksUncheckedUpdateWithoutPrioritiesInput>
  }

  export type tasksUpdateManyWithWhereWithoutPrioritiesInput = {
    where: tasksScalarWhereInput
    data: XOR<tasksUpdateManyMutationInput, tasksUncheckedUpdateManyWithoutPrioritiesInput>
  }

  export type tasksScalarWhereInput = {
    AND?: tasksScalarWhereInput | tasksScalarWhereInput[]
    OR?: tasksScalarWhereInput[]
    NOT?: tasksScalarWhereInput | tasksScalarWhereInput[]
    id?: IntFilter<"tasks"> | number
    name?: StringFilter<"tasks"> | string
    arrival_time?: DateTimeFilter<"tasks"> | Date | string
    duration?: IntFilter<"tasks"> | number
    status?: Enumtask_statusFilter<"tasks"> | $Enums.task_status
    priority_id?: IntNullableFilter<"tasks"> | number | null
    created_at?: DateTimeNullableFilter<"tasks"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"tasks"> | Date | string | null
  }

  export type scheduling_runsCreateWithoutProcessesInput = {
    run_at?: Date | string | null
    description?: string | null
  }

  export type scheduling_runsUncheckedCreateWithoutProcessesInput = {
    id?: number
    run_at?: Date | string | null
    description?: string | null
  }

  export type scheduling_runsCreateOrConnectWithoutProcessesInput = {
    where: scheduling_runsWhereUniqueInput
    create: XOR<scheduling_runsCreateWithoutProcessesInput, scheduling_runsUncheckedCreateWithoutProcessesInput>
  }

  export type tasksCreateWithoutProcessesInput = {
    name: string
    arrival_time: Date | string
    duration: number
    status?: $Enums.task_status
    created_at?: Date | string | null
    updated_at?: Date | string | null
    task_status_history?: task_status_historyCreateNestedManyWithoutTasksInput
    priorities?: prioritiesCreateNestedOneWithoutTasksInput
  }

  export type tasksUncheckedCreateWithoutProcessesInput = {
    id?: number
    name: string
    arrival_time: Date | string
    duration: number
    status?: $Enums.task_status
    priority_id?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    task_status_history?: task_status_historyUncheckedCreateNestedManyWithoutTasksInput
  }

  export type tasksCreateOrConnectWithoutProcessesInput = {
    where: tasksWhereUniqueInput
    create: XOR<tasksCreateWithoutProcessesInput, tasksUncheckedCreateWithoutProcessesInput>
  }

  export type scheduling_runsUpsertWithoutProcessesInput = {
    update: XOR<scheduling_runsUpdateWithoutProcessesInput, scheduling_runsUncheckedUpdateWithoutProcessesInput>
    create: XOR<scheduling_runsCreateWithoutProcessesInput, scheduling_runsUncheckedCreateWithoutProcessesInput>
    where?: scheduling_runsWhereInput
  }

  export type scheduling_runsUpdateToOneWithWhereWithoutProcessesInput = {
    where?: scheduling_runsWhereInput
    data: XOR<scheduling_runsUpdateWithoutProcessesInput, scheduling_runsUncheckedUpdateWithoutProcessesInput>
  }

  export type scheduling_runsUpdateWithoutProcessesInput = {
    run_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type scheduling_runsUncheckedUpdateWithoutProcessesInput = {
    id?: IntFieldUpdateOperationsInput | number
    run_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tasksUpsertWithoutProcessesInput = {
    update: XOR<tasksUpdateWithoutProcessesInput, tasksUncheckedUpdateWithoutProcessesInput>
    create: XOR<tasksCreateWithoutProcessesInput, tasksUncheckedCreateWithoutProcessesInput>
    where?: tasksWhereInput
  }

  export type tasksUpdateToOneWithWhereWithoutProcessesInput = {
    where?: tasksWhereInput
    data: XOR<tasksUpdateWithoutProcessesInput, tasksUncheckedUpdateWithoutProcessesInput>
  }

  export type tasksUpdateWithoutProcessesInput = {
    name?: StringFieldUpdateOperationsInput | string
    arrival_time?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: IntFieldUpdateOperationsInput | number
    status?: Enumtask_statusFieldUpdateOperationsInput | $Enums.task_status
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    task_status_history?: task_status_historyUpdateManyWithoutTasksNestedInput
    priorities?: prioritiesUpdateOneWithoutTasksNestedInput
  }

  export type tasksUncheckedUpdateWithoutProcessesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    arrival_time?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: IntFieldUpdateOperationsInput | number
    status?: Enumtask_statusFieldUpdateOperationsInput | $Enums.task_status
    priority_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    task_status_history?: task_status_historyUncheckedUpdateManyWithoutTasksNestedInput
  }

  export type processesCreateWithoutScheduling_runsInput = {
    started_at?: Date | string | null
    ended_at?: Date | string | null
    execution_order: number
    tasks: tasksCreateNestedOneWithoutProcessesInput
  }

  export type processesUncheckedCreateWithoutScheduling_runsInput = {
    id?: number
    task_id: number
    started_at?: Date | string | null
    ended_at?: Date | string | null
    execution_order: number
  }

  export type processesCreateOrConnectWithoutScheduling_runsInput = {
    where: processesWhereUniqueInput
    create: XOR<processesCreateWithoutScheduling_runsInput, processesUncheckedCreateWithoutScheduling_runsInput>
  }

  export type processesCreateManyScheduling_runsInputEnvelope = {
    data: processesCreateManyScheduling_runsInput | processesCreateManyScheduling_runsInput[]
    skipDuplicates?: boolean
  }

  export type processesUpsertWithWhereUniqueWithoutScheduling_runsInput = {
    where: processesWhereUniqueInput
    update: XOR<processesUpdateWithoutScheduling_runsInput, processesUncheckedUpdateWithoutScheduling_runsInput>
    create: XOR<processesCreateWithoutScheduling_runsInput, processesUncheckedCreateWithoutScheduling_runsInput>
  }

  export type processesUpdateWithWhereUniqueWithoutScheduling_runsInput = {
    where: processesWhereUniqueInput
    data: XOR<processesUpdateWithoutScheduling_runsInput, processesUncheckedUpdateWithoutScheduling_runsInput>
  }

  export type processesUpdateManyWithWhereWithoutScheduling_runsInput = {
    where: processesScalarWhereInput
    data: XOR<processesUpdateManyMutationInput, processesUncheckedUpdateManyWithoutScheduling_runsInput>
  }

  export type processesScalarWhereInput = {
    AND?: processesScalarWhereInput | processesScalarWhereInput[]
    OR?: processesScalarWhereInput[]
    NOT?: processesScalarWhereInput | processesScalarWhereInput[]
    id?: IntFilter<"processes"> | number
    scheduling_run_id?: IntFilter<"processes"> | number
    task_id?: IntFilter<"processes"> | number
    started_at?: DateTimeNullableFilter<"processes"> | Date | string | null
    ended_at?: DateTimeNullableFilter<"processes"> | Date | string | null
    execution_order?: IntFilter<"processes"> | number
  }

  export type tasksCreateWithoutTask_status_historyInput = {
    name: string
    arrival_time: Date | string
    duration: number
    status?: $Enums.task_status
    created_at?: Date | string | null
    updated_at?: Date | string | null
    processes?: processesCreateNestedManyWithoutTasksInput
    priorities?: prioritiesCreateNestedOneWithoutTasksInput
  }

  export type tasksUncheckedCreateWithoutTask_status_historyInput = {
    id?: number
    name: string
    arrival_time: Date | string
    duration: number
    status?: $Enums.task_status
    priority_id?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    processes?: processesUncheckedCreateNestedManyWithoutTasksInput
  }

  export type tasksCreateOrConnectWithoutTask_status_historyInput = {
    where: tasksWhereUniqueInput
    create: XOR<tasksCreateWithoutTask_status_historyInput, tasksUncheckedCreateWithoutTask_status_historyInput>
  }

  export type tasksUpsertWithoutTask_status_historyInput = {
    update: XOR<tasksUpdateWithoutTask_status_historyInput, tasksUncheckedUpdateWithoutTask_status_historyInput>
    create: XOR<tasksCreateWithoutTask_status_historyInput, tasksUncheckedCreateWithoutTask_status_historyInput>
    where?: tasksWhereInput
  }

  export type tasksUpdateToOneWithWhereWithoutTask_status_historyInput = {
    where?: tasksWhereInput
    data: XOR<tasksUpdateWithoutTask_status_historyInput, tasksUncheckedUpdateWithoutTask_status_historyInput>
  }

  export type tasksUpdateWithoutTask_status_historyInput = {
    name?: StringFieldUpdateOperationsInput | string
    arrival_time?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: IntFieldUpdateOperationsInput | number
    status?: Enumtask_statusFieldUpdateOperationsInput | $Enums.task_status
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    processes?: processesUpdateManyWithoutTasksNestedInput
    priorities?: prioritiesUpdateOneWithoutTasksNestedInput
  }

  export type tasksUncheckedUpdateWithoutTask_status_historyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    arrival_time?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: IntFieldUpdateOperationsInput | number
    status?: Enumtask_statusFieldUpdateOperationsInput | $Enums.task_status
    priority_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    processes?: processesUncheckedUpdateManyWithoutTasksNestedInput
  }

  export type processesCreateWithoutTasksInput = {
    started_at?: Date | string | null
    ended_at?: Date | string | null
    execution_order: number
    scheduling_runs: scheduling_runsCreateNestedOneWithoutProcessesInput
  }

  export type processesUncheckedCreateWithoutTasksInput = {
    id?: number
    scheduling_run_id: number
    started_at?: Date | string | null
    ended_at?: Date | string | null
    execution_order: number
  }

  export type processesCreateOrConnectWithoutTasksInput = {
    where: processesWhereUniqueInput
    create: XOR<processesCreateWithoutTasksInput, processesUncheckedCreateWithoutTasksInput>
  }

  export type processesCreateManyTasksInputEnvelope = {
    data: processesCreateManyTasksInput | processesCreateManyTasksInput[]
    skipDuplicates?: boolean
  }

  export type task_status_historyCreateWithoutTasksInput = {
    status: $Enums.task_status
    changed_at?: Date | string | null
  }

  export type task_status_historyUncheckedCreateWithoutTasksInput = {
    id?: number
    status: $Enums.task_status
    changed_at?: Date | string | null
  }

  export type task_status_historyCreateOrConnectWithoutTasksInput = {
    where: task_status_historyWhereUniqueInput
    create: XOR<task_status_historyCreateWithoutTasksInput, task_status_historyUncheckedCreateWithoutTasksInput>
  }

  export type task_status_historyCreateManyTasksInputEnvelope = {
    data: task_status_historyCreateManyTasksInput | task_status_historyCreateManyTasksInput[]
    skipDuplicates?: boolean
  }

  export type prioritiesCreateWithoutTasksInput = {
    description: string
  }

  export type prioritiesUncheckedCreateWithoutTasksInput = {
    id?: number
    description: string
  }

  export type prioritiesCreateOrConnectWithoutTasksInput = {
    where: prioritiesWhereUniqueInput
    create: XOR<prioritiesCreateWithoutTasksInput, prioritiesUncheckedCreateWithoutTasksInput>
  }

  export type processesUpsertWithWhereUniqueWithoutTasksInput = {
    where: processesWhereUniqueInput
    update: XOR<processesUpdateWithoutTasksInput, processesUncheckedUpdateWithoutTasksInput>
    create: XOR<processesCreateWithoutTasksInput, processesUncheckedCreateWithoutTasksInput>
  }

  export type processesUpdateWithWhereUniqueWithoutTasksInput = {
    where: processesWhereUniqueInput
    data: XOR<processesUpdateWithoutTasksInput, processesUncheckedUpdateWithoutTasksInput>
  }

  export type processesUpdateManyWithWhereWithoutTasksInput = {
    where: processesScalarWhereInput
    data: XOR<processesUpdateManyMutationInput, processesUncheckedUpdateManyWithoutTasksInput>
  }

  export type task_status_historyUpsertWithWhereUniqueWithoutTasksInput = {
    where: task_status_historyWhereUniqueInput
    update: XOR<task_status_historyUpdateWithoutTasksInput, task_status_historyUncheckedUpdateWithoutTasksInput>
    create: XOR<task_status_historyCreateWithoutTasksInput, task_status_historyUncheckedCreateWithoutTasksInput>
  }

  export type task_status_historyUpdateWithWhereUniqueWithoutTasksInput = {
    where: task_status_historyWhereUniqueInput
    data: XOR<task_status_historyUpdateWithoutTasksInput, task_status_historyUncheckedUpdateWithoutTasksInput>
  }

  export type task_status_historyUpdateManyWithWhereWithoutTasksInput = {
    where: task_status_historyScalarWhereInput
    data: XOR<task_status_historyUpdateManyMutationInput, task_status_historyUncheckedUpdateManyWithoutTasksInput>
  }

  export type task_status_historyScalarWhereInput = {
    AND?: task_status_historyScalarWhereInput | task_status_historyScalarWhereInput[]
    OR?: task_status_historyScalarWhereInput[]
    NOT?: task_status_historyScalarWhereInput | task_status_historyScalarWhereInput[]
    id?: IntFilter<"task_status_history"> | number
    task_id?: IntFilter<"task_status_history"> | number
    status?: Enumtask_statusFilter<"task_status_history"> | $Enums.task_status
    changed_at?: DateTimeNullableFilter<"task_status_history"> | Date | string | null
  }

  export type prioritiesUpsertWithoutTasksInput = {
    update: XOR<prioritiesUpdateWithoutTasksInput, prioritiesUncheckedUpdateWithoutTasksInput>
    create: XOR<prioritiesCreateWithoutTasksInput, prioritiesUncheckedCreateWithoutTasksInput>
    where?: prioritiesWhereInput
  }

  export type prioritiesUpdateToOneWithWhereWithoutTasksInput = {
    where?: prioritiesWhereInput
    data: XOR<prioritiesUpdateWithoutTasksInput, prioritiesUncheckedUpdateWithoutTasksInput>
  }

  export type prioritiesUpdateWithoutTasksInput = {
    description?: StringFieldUpdateOperationsInput | string
  }

  export type prioritiesUncheckedUpdateWithoutTasksInput = {
    id?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
  }

  export type tasksCreateManyPrioritiesInput = {
    id?: number
    name: string
    arrival_time: Date | string
    duration: number
    status?: $Enums.task_status
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type tasksUpdateWithoutPrioritiesInput = {
    name?: StringFieldUpdateOperationsInput | string
    arrival_time?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: IntFieldUpdateOperationsInput | number
    status?: Enumtask_statusFieldUpdateOperationsInput | $Enums.task_status
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    processes?: processesUpdateManyWithoutTasksNestedInput
    task_status_history?: task_status_historyUpdateManyWithoutTasksNestedInput
  }

  export type tasksUncheckedUpdateWithoutPrioritiesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    arrival_time?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: IntFieldUpdateOperationsInput | number
    status?: Enumtask_statusFieldUpdateOperationsInput | $Enums.task_status
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    processes?: processesUncheckedUpdateManyWithoutTasksNestedInput
    task_status_history?: task_status_historyUncheckedUpdateManyWithoutTasksNestedInput
  }

  export type tasksUncheckedUpdateManyWithoutPrioritiesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    arrival_time?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: IntFieldUpdateOperationsInput | number
    status?: Enumtask_statusFieldUpdateOperationsInput | $Enums.task_status
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type processesCreateManyScheduling_runsInput = {
    id?: number
    task_id: number
    started_at?: Date | string | null
    ended_at?: Date | string | null
    execution_order: number
  }

  export type processesUpdateWithoutScheduling_runsInput = {
    started_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ended_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    execution_order?: IntFieldUpdateOperationsInput | number
    tasks?: tasksUpdateOneRequiredWithoutProcessesNestedInput
  }

  export type processesUncheckedUpdateWithoutScheduling_runsInput = {
    id?: IntFieldUpdateOperationsInput | number
    task_id?: IntFieldUpdateOperationsInput | number
    started_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ended_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    execution_order?: IntFieldUpdateOperationsInput | number
  }

  export type processesUncheckedUpdateManyWithoutScheduling_runsInput = {
    id?: IntFieldUpdateOperationsInput | number
    task_id?: IntFieldUpdateOperationsInput | number
    started_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ended_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    execution_order?: IntFieldUpdateOperationsInput | number
  }

  export type processesCreateManyTasksInput = {
    id?: number
    scheduling_run_id: number
    started_at?: Date | string | null
    ended_at?: Date | string | null
    execution_order: number
  }

  export type task_status_historyCreateManyTasksInput = {
    id?: number
    status: $Enums.task_status
    changed_at?: Date | string | null
  }

  export type processesUpdateWithoutTasksInput = {
    started_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ended_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    execution_order?: IntFieldUpdateOperationsInput | number
    scheduling_runs?: scheduling_runsUpdateOneRequiredWithoutProcessesNestedInput
  }

  export type processesUncheckedUpdateWithoutTasksInput = {
    id?: IntFieldUpdateOperationsInput | number
    scheduling_run_id?: IntFieldUpdateOperationsInput | number
    started_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ended_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    execution_order?: IntFieldUpdateOperationsInput | number
  }

  export type processesUncheckedUpdateManyWithoutTasksInput = {
    id?: IntFieldUpdateOperationsInput | number
    scheduling_run_id?: IntFieldUpdateOperationsInput | number
    started_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ended_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    execution_order?: IntFieldUpdateOperationsInput | number
  }

  export type task_status_historyUpdateWithoutTasksInput = {
    status?: Enumtask_statusFieldUpdateOperationsInput | $Enums.task_status
    changed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type task_status_historyUncheckedUpdateWithoutTasksInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: Enumtask_statusFieldUpdateOperationsInput | $Enums.task_status
    changed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type task_status_historyUncheckedUpdateManyWithoutTasksInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: Enumtask_statusFieldUpdateOperationsInput | $Enums.task_status
    changed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}