import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from 'src/models/user/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>
  ){}
  
  async save(user: User) {
    try {
      return await this.userRepository.save(user)
    }catch(error){
      if (error.errno == 1062) return { errorMsg: 'This username is already taken'}
      return {errorMsg: error}
    }
  }

  findAll() {
    return `This action returns all user`;
  }

  async findOne(id: number) {
    const res = await this.userRepository.find({
      where: {id: id}
    }) ;
    return res[0]
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
