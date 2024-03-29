import { ConfigService } from "@nestjs/config";
import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { Periodization } from "src/models/periodization/periodization.entity";
import { Train } from "src/models/train/train.entity";
import { User } from "src/models/user/user.entity";

export async function DatabaseConfig(config: ConfigService): Promise<TypeOrmModuleOptions> {
    
    const options: TypeOrmModuleOptions = {
        type: 'mysql',
        host: config.get<string>('DB_HOST'),
        port: parseInt(config.get<string>('DB_PORT')),
        username: config.get<string>('DB_USER'),
        password: config.get<string>('DB_PASS'),
        database: config.get<string>('DB_NAME'),
        entities: [User, Train, Periodization],
        synchronize: true,
        logging: false,
        autoLoadEntities: true
      }
     return options
}