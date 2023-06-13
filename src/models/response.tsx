export class ApiResponse<T> {
    public success: boolean;
    public message: string;
    public data: T | null;
  
    constructor(success: boolean = false, message: string = '', data: T | null = null) {
      this.success = success;
      this.message = message;
      this.data = data;
    }
  }
  