import { redirect } from 'next/navigation';
 
export async function GET(request: Request) {
  redirect('https://jornadasciberseguridad.ual.es/');
}
