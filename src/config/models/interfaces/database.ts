export default interface IDataBase {
  name: string
  type: 'mssql' | 'postgres'
  host?: string
  port?: number
  username?: string
  password?: string
  database?: string
  options?: {
    trustServerCertificate: boolean
    useUTC: boolean
  }
  pool?: {
    max: number
  }
  migrations?: Array<string>
  cli?:{
    migrationsDir: string
  }
  url?: string
  useNewUrlParser: boolean
  synchronize: boolean
  logging: boolean
  autoLoadEntities: boolean
  entities: string[]
  useUnifiedTopology: boolean
  connectionTimeout?: number
}
