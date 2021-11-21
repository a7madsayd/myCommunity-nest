import { Controller, Get, ParseIntPipe, Query, UsePipes } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';


@Controller('user')
export class UserController {
  // private readonly logger: LoggerService = new LoggerService(UserController.name);
  constructor() {}

  /**
   * @deprecated
   * @see analytics
   */
  @ApiOperation({ summary: 'List Users', description: 'List All Users', deprecated: true })
  @ApiResponse({ status: 200, description: 'the list of the users', type: Array<any>() })
  @UsePipes(new ParseIntPipe())
  @Get('find/all')
  public async findAll(@Query('limit') limit: number, @Query('page') page: number): Promise<any[]> {
    return [{ page, limit } as any];
  }
}
