import { adminAdminApiInstance } from "./admin.base";
import { AuthResponse } from "./admin.result";

export const login = async (data: {
  phone: string;
  password: string;
}): Promise<AuthResponse> => {
  const rs = await adminAdminApiInstance.post<AuthResponse>("login", data);
  return rs.data;
};
