import express from 'express';
import cors from 'cors';
import path from 'path';
import routes from './routes';
import { errors } from 'celebrate';

const app = express();


app.use(cors());
app.use(express.json());
app.use(routes);

//Rota: Endereço completo da requisição
//Recurso: Qual entidade estamos acessando do sistema

//GET: Buscar uma ou mais informações do back-end
//POST: Criar uma nova informação no back-end
//PUT: Atualiza uma informação exixtente no back-end 
//DELETE: Remover uma informação do back-end

//Request param: Parâmetro que vem na própria rota que identificam um recurso
//Query param: Parâmetro que vem na própria rota geralmente opcionais para filtros,paginação
//Request Body: Parâmetros para criação/atualização de informações
app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));
app.use(errors());
app.listen(3333);